import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const site = "https://peshawarichappal.store";

export const GET: APIRoute = async () => {
  try {
    // Create Supabase client
    const supabase = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL || '',
      import.meta.env.PUBLIC_SUPABASE_ANON_KEY || ''
    );

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

    // Get all products from Supabase
    let allProducts: any[] = [];
    try {
      const { data: products, error } = await supabase
        .from('products')
        .select('slug, updated_at');
      if (!error && products) {
        allProducts = products;
      }
      console.log('Sitemap - Products fetched:', allProducts.length);
    } catch (e) {
      console.log('Error fetching products for sitemap', e);
    }

    // Get all categories from Supabase
    let allCategories: any[] = [];
    try {
      const { data: categories } = await supabase
        .from('categories')
        .select('slug');
      allCategories = categories || [];
    } catch (e) {
      console.log('Error fetching categories for sitemap');
    }

    // Get all published blog posts from Supabase
    let allBlogPosts: any[] = [];
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('slug, updated_at')
        .eq('published', true);
      if (!error && data) {
        allBlogPosts = data;
      }
    } catch (e) {
      console.log('Blogs table not found, skipping blog posts in sitemap');
    }

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
${allCategories
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
${allProducts
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
${allBlogPosts
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
  } catch (error) {
    console.error('Sitemap generation error:', error);
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
