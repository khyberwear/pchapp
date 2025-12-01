import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const site = "https://peshawarichappal.store";

export const GET: APIRoute = async () => {
  // Get all products
  const products = await getCollection("products", ({ id }) => id.startsWith("en/"));
  
  // Get all blog posts
  const blogPosts = await getCollection("blog", ({ id }) => id.startsWith("en/"));

  // Static pages with their priority and change frequency
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/products", priority: "0.9", changefreq: "daily" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/contact", priority: "0.7", changefreq: "monthly" },
    { url: "/sitemap", priority: "0.5", changefreq: "monthly" },
    { url: "/checkout", priority: "0.6", changefreq: "monthly" },
  ];

  // Generate current date in W3C format
  const today = new Date().toISOString().split('T')[0];

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
      (page) => `
  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}

  <!-- Product Pages -->
  ${products
    .map(
      (product) => `
  <url>
    <loc>${site}/products/${product.id.replace(/^en\//, "")}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${product.data.main?.imgMain ? `
    <image:image>
      <image:loc>${site}${product.data.main.imgMain}</image:loc>
      <image:title>${product.data.title} - Peshawari Chappal</image:title>
      <image:caption>${product.data.description || product.data.title}</image:caption>
    </image:image>` : ""}
  </url>`
    )
    .join("")}

  <!-- Blog Posts -->
  ${blogPosts
    .map(
      (post) => `
  <url>
    <loc>${site}/blog/${post.id.replace(/^en\//, "")}</loc>
    <lastmod>${post.data.pubDate ? new Date(post.data.pubDate).toISOString().split('T')[0] : today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")}

</urlset>`.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
