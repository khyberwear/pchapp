import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const site = "https://peshawarichappal.store";

// Database cache interface
interface SitemapCache {
  products: Array<{ slug: string; updated_at: string | null }>;
  categories: Array<{ slug: string }>;
  blogs: Array<{ slug: string; updated_at: string | null }>;
  generatedAt: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours (increased for stability)

async function getSitemapCache(): Promise<SitemapCache> {
  const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL || '',
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY || ''
  );

  const now = Date.now();

  // 1. Try to fetch from Supabase DB
  try {
    const { data: cacheData, error } = await supabase
      .from('sitemap_cache')
      .select('data, created_at')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (cacheData && !error) {
      const cacheTime = new Date(cacheData.created_at).getTime();
      const age = now - cacheTime;

      if (age < CACHE_DURATION) {
        console.log(`✓ Using DB sitemap cache (Age: ${Math.round(age / 1000 / 60)} mins)`);
        // The data is stored as JSONB, so it comes back as an object
        return cacheData.data as SitemapCache;
      } else {
        console.log('Cache expired, regenerating...');
      }
    } else {
      console.log('No cache found in DB or error:', error?.message);
    }
  } catch (err) {
    console.error('Error fetching cache from DB:', err);
  }

  // 2. Generate new cache if missing or expired
  console.log('=== Generating New Sitemap Data ===');
  const newCache = await generateSitemapData(supabase);

  // 3. Save to Supabase DB (Background-ish, but awaited to ensure it saves)
  try {
    // Determine if we should save. If we are on the live server and this request
    // timed out previously, saving might be risky if we don't have write permissions.
    // However, we assume the setup SQL has been run.
    const { error: insertError } = await supabase
      .from('sitemap_cache')
      .insert([
        {
          data: newCache,
          created_at: new Date().toISOString()
        }
      ]);

    if (insertError) {
      console.error('Failed to save cache to DB:', insertError.message);
    } else {
      console.log('✓ New sitemap cache saved to DB');
    }
  } catch (err) {
    console.error('Exception saving cache to DB:', err);
  }

  return newCache;
}

async function generateSitemapData(supabase: any): Promise<SitemapCache> {
  // Fetch products
  let products: Array<{ slug: string; updated_at: string | null }> = [];
  try {
    console.log('Fetching products...');
    const { data, error } = await supabase
      .from('products')
      .select('slug, updated_at');
    if (!error && data) {
      products = data;
      console.log('✓ Products fetched:', products.length);
    } else {
      console.error('✗ Products error:', error?.message);
    }
  } catch (e: any) {
    console.error('✗ Products exception:', e.message);
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
      console.log('✓ Categories fetched:', categories.length);
    } else {
      console.error('✗ Categories error:', error?.message);
    }
  } catch (e: any) {
    console.error('✗ Categories exception:', e.message);
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
      console.log('✓ Blogs fetched:', blogs.length);
    } else {
      console.error('✗ Blogs error:', error?.message);
    }
  } catch (e: any) {
    console.error('✗ Blogs exception:', e.message);
  }

  return {
    products,
    categories,
    blogs,
    generatedAt: Date.now(),
  };
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
