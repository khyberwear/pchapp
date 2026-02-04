import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase config from environment
const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Error: PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Parse frontmatter from markdown
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;

    const frontmatter = match[1];
    const result = {};

    // Simple YAML parser for our use case
    let currentKey = null;
    let currentIndent = 0;
    let currentArray = null;
    let currentObject = null;

    const lines = frontmatter.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const indent = line.search(/\S/);

        if (indent === -1) continue; // Skip empty lines

        const trimmed = line.trim();

        // Handle array items
        if (trimmed.startsWith('- ')) {
            const value = trimmed.substring(2).trim();
            if (currentArray && Array.isArray(result[currentKey])) {
                // Check if it's a simple value or object start
                if (value.includes(':')) {
                    // Object in array
                    const obj = {};
                    const parts = value.split(':');
                    obj[parts[0].trim()] = parts.slice(1).join(':').trim().replace(/^["']|["']$/g, '');
                    result[currentKey].push(obj);
                } else {
                    result[currentKey].push(value.replace(/^["']|["']$/g, ''));
                }
            }
            continue;
        }

        // Handle key: value pairs
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex > 0) {
            const key = trimmed.substring(0, colonIndex).trim();
            let value = trimmed.substring(colonIndex + 1).trim();

            if (indent === 0) {
                // Top-level key
                currentKey = key;
                currentArray = null;

                if (value === '' || value === '|') {
                    // Object or array or multiline
                    result[key] = value === '|' ? '' : [];
                    if (value !== '|') currentArray = key;
                } else if (value.startsWith('[') && value.endsWith(']')) {
                    try {
                        result[key] = JSON.parse(value);
                    } catch (e) {
                        result[key] = value.replace(/^["']|["']$/g, '');
                    }
                } else if (value.startsWith('{') && value.endsWith('}')) {
                    try {
                        result[key] = JSON.parse(value);
                    } catch (e) {
                        result[key] = value.replace(/^["']|["']$/g, '');
                    }
                } else {
                    result[key] = value.replace(/^["']|["']$/g, '');
                }
            } else if (indent > 0 && currentKey) {
                // Nested property
                if (typeof result[currentKey] !== 'object' || Array.isArray(result[currentKey])) {
                    result[currentKey] = {};
                }
                result[currentKey][key] = value.replace(/^["']|["']$/g, '');
            }
        }
    }

    return result;
}

// Convert markdown product to Supabase format
function convertProduct(filename, frontmatter) {
    const slug = filename.replace('.md', '');

    // Extract images (remove @images/ prefix)
    const mainImage = frontmatter.main?.imgMain?.replace('@images/', '/images/') || null;
    const cardImage = frontmatter.main?.imgCard?.replace('@images/', '/images/') || null;

    // Gallery images from blueprints
    const galleryImages = [];
    if (frontmatter.blueprints?.first) {
        galleryImages.push(frontmatter.blueprints.first.replace('@images/', '/images/'));
    }
    if (frontmatter.blueprints?.second) {
        galleryImages.push(frontmatter.blueprints.second.replace('@images/', '/images/'));
    }

    // Colors
    const colors = frontmatter.colors || [];

    // Sizes
    const sizes = frontmatter.sizes || [];

    // Long description
    const longDescription = frontmatter.longDescription || null;

    // Features from descriptionList
    const features = frontmatter.descriptionList || [];

    // Specifications
    const specifications = {
        left: frontmatter.specificationsLeft || [],
        right: frontmatter.specificationsRight || [],
        tableData: frontmatter.tableData || []
    };

    return {
        title: frontmatter.title || 'Untitled',
        slug: slug,
        description: frontmatter.description || null,
        price: parseFloat(frontmatter.main?.price) || 0,
        original_price: frontmatter.main?.originalPrice ? parseFloat(frontmatter.main.originalPrice) : null,
        main_image: mainImage,
        card_image: cardImage,
        gallery_images: galleryImages,
        colors: colors,
        sizes: sizes,
        content: frontmatter.main?.content || null,
        long_description: longDescription,
        features: features,
        specifications: specifications,
        in_stock: true
    };
}

async function migrateProducts() {
    const productsDir = path.join(__dirname, 'src/content/products/en');

    console.log('Reading products from:', productsDir);

    const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.md'));

    console.log(`Found ${files.length} product files`);

    for (const file of files) {
        const filePath = path.join(productsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const frontmatter = parseFrontmatter(content);

        if (!frontmatter) {
            console.error(`Failed to parse: ${file}`);
            continue;
        }

        const product = convertProduct(file, frontmatter);

        console.log(`Inserting: ${product.title} (${product.slug})`);

        const { data, error } = await supabase
            .from('products')
            .upsert(product, { onConflict: 'slug' })
            .select();

        if (error) {
            console.error(`Error inserting ${file}:`, error.message);
        } else {
            console.log(`✓ Inserted: ${product.title}`);
        }
    }

    console.log('\nMigration complete!');
}

migrateProducts().catch(console.error);
