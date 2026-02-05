import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const site = "https://peshawarichappal.store";

// Create Supabase client
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

export const GET: APIRoute = async () => {
  // Get all products from Supabase
  const { data: products } = await supabase
    .from('products')
    .select('slug, updated_at')
    .eq('in_stock', true);

  // Get all published blog posts from Supabase
  const { data: blogPosts } = await supabase
    .from('blogs')
    .select('slug, updated_at')
    .eq('published', true);

  // Get all categories from Supabase
  const { data: categories } = await supabase
    .from('categories')
    .select('slug');

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

  const allProducts = products || [];
  const allBlogPosts = blogPosts || [];
  const allCategories = categories || [];

  // Build XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
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
};
