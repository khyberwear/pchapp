import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const site = "https://peshawarichappal.store";

// Cache interface
interface SitemapCache {
  products: Array<{ slug: string; updated_at: string | null }>;
  categories: Array<{ slug: string }>;
  blogs: Array<{ slug: string; updated_at: string | null }>;
  generatedAt: number;
}

// Global cache (in-memory)
let sitemapCache: SitemapCache | null = null;
const CACHE_DURATION = 1 * 60 * 60 * 1000; // 1 hour

async function generateSitemapCache(): Promise<SitemapCache> {
  console.log('=== Generating Sitemap Cache ===');
  
  const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL || '',
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY || ''
  );

  // Fetch products
  let products: Array<{ slug: string; updated_at: string | null }> = [];
  try {
    console.log('Fetching products...');
    const { data, error } = await supabase
      .from('products')
      .select('slug, updated_at');
    if (!error && data) {
      products = data;
      console.log('✓ Products cached:', products.length);
    } else {
      console.log('✗ Products error:', error?.message);
    }
  } catch (e: any) {
    console.log('✗ Products exception:', e.message);
  }

  // Fetch categories
  let categories: Array<{ slug: string }> = [];
  try {
    console.log('Fetching categories...');
    const { data, error } = await supabase
      .from('categories')
      .select('slug');
    if (!error && data) {
      categories = data;
      console.log('✓ Categories cached:', categories.length);
    } else {
      console.log('✗ Categories error:', error?.message);
    }
  } catch (e: any) {
    console.log('✗ Categories exception:', e.message);
  }

  // Fetch blogs
  let blogs: Array<{ slug: string; updated_at: string | null }> = [];
  try {
    console.log('Fetching blogs...');
    const { data, error } = await supabase
      .from('blogs')
      .select('slug, updated_at')
      .eq('published', true);
    if (!error && data) {
      blogs = data;
      console.log('✓ Blogs cached:', blogs.length);
    } else {
      console.log('✗ Blogs error:', error?.message);
    }
  } catch (e: any) {
    console.log('✗ Blogs exception (table may not exist yet):', e.message);
  }

  const cache: SitemapCache = {
    products,
    categories,
    blogs,
    generatedAt: Date.now(),
  };

  console.log('=== Cache Generated Successfully ===');
  return cache;
}

async function getSitemapCache(): Promise<SitemapCache> {
  const now = Date.now();
  
  // Return cache if valid
  if (sitemapCache && (now - sitemapCache.generatedAt) < CACHE_DURATION) {
    console.log('✓ Using cached sitemap data');
    return sitemapCache;
  }

  // Generate new cache
  sitemapCache = await generateSitemapCache();
  return sitemapCache;
}

export const GET: APIRoute = async () => {
  try {
    // Get data from cache
    const cache = await getSitemapCache();
    const { products, categories, blogs } = cache;

    // Static pages with their priority and change frequency
    const staticPages = [
      { url: "/", priority: "1.0", changefreq: "daily" },
      { url: "/products", priority: "0.9", changefreq: "daily" },
      { url: "/categories", priority: "0.9", changefreq: "daily" },
      { url: "/services", priority: "0.8", changefreq: "weekly" },
      { url: "/blog", priority: "0.8", changefreq: "weekly" },
      { url: "/contact", priority: "0.7", changefreq: "monthly" },
      { url: "/sitemap", priority: "0.5", changefreq: "monthly" },
    ];

    // Generate current date in W3C format
    const today = new Date().toISOString().split('T')[0];

    // Build XML sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Static Pages -->
${staticPages
      .map(
        (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join("\n")}

  <!-- Category Pages -->
${categories
      .map(
        (category: any) => `  <url>
    <loc>${site}/categories/${category.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join("\n")}

  <!-- Product Pages -->
${products
      .map(
        (product: any) => `  <url>
    <loc>${site}/products/${product.slug}</loc>
    <lastmod>${product.updated_at ? new Date(product.updated_at).toISOString().split('T')[0] : today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join("\n")}

  <!-- Blog Posts -->
${blogs
      .map(
        (post: any) => `  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <lastmod>${post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
      )
      .join("\n")}

</urlset>`.trim();

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error: any) {
    console.error('=== Sitemap generation error ===', error?.message || error);
    // Return a basic sitemap on error
    const today = new Date().toISOString().split('T')[0];
    const basicXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${site}/products</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${site}/contact</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>`;
    return new Response(basicXml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  }
};
