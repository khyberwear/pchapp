import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

// This endpoint refreshes the sitemap cache
// Call it after updating products, categories, or blogs

interface SitemapCache {
  products: Array<{ slug: string; updated_at: string | null }>;
  categories: Array<{ slug: string }>;
  blogs: Array<{ slug: string; updated_at: string | null }>;
  generatedAt: number;
}

// Global cache - NO LONGER USED, we use DB
// let sitemapCache: SitemapCache | null = null;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Simple auth check - verify the request has auth header
    const authHeader = request.headers.get('Authorization');
    const secretKey = import.meta.env.CACHE_REFRESH_SECRET || 'your-secret-key';

    if (!authHeader || authHeader !== `Bearer ${secretKey}`) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('=== Refreshing Sitemap Cache (DB) ===');

    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || '';
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || '';

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch products
    let products: Array<{ slug: string; updated_at: string | null }> = [];
    try {
      const { data, error } = await supabase
        .from('products')
        .select('slug, updated_at');
      if (!error && data) {
        products = data;
        console.log('✓ Products refreshed:', products.length);
      }
    } catch (e: any) {
      console.log('✗ Products error:', e.message);
    }

    // Fetch categories
    let categories: Array<{ slug: string }> = [];
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('slug');
      if (!error && data) {
        categories = data;
        console.log('✓ Categories refreshed:', categories.length);
      }
    } catch (e: any) {
      console.log('✗ Categories error:', e.message);
    }

    // Fetch blogs
    let blogs: Array<{ slug: string; updated_at: string | null }> = [];
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('slug, updated_at')
        .eq('published', true);
      if (!error && data) {
        blogs = data;
        console.log('✓ Blogs refreshed:', blogs.length);
      }
    } catch (e: any) {
      console.log('✗ Blogs error:', e.message);
    }

    const newCacheData = {
      products,
      categories,
      blogs,
      generatedAt: Date.now(),
    };

    // Save to DB
    const { error: insertError } = await supabase
      .from('sitemap_cache')
      .insert([
        {
          data: newCacheData,
          created_at: new Date().toISOString()
        }
      ]);

    if (insertError) {
      throw new Error(insertError.message);
    }

    console.log('=== Cache Refreshed Successfully in DB ===');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Sitemap cache refreshed in DB',
        stats: {
          products: products.length,
          categories: categories.length,
          blogs: blogs.length,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Cache refresh error:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Failed to refresh cache' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: 'POST to /api/cache/refresh-sitemap with Authorization header to refresh cache',
      example: 'curl -X POST https://peshawarichappal.store/api/cache/refresh-sitemap -H "Authorization: Bearer your-secret-key"',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
