import { g as getCollection } from '../chunks/_astro_content_CFw5y03i.mjs';
export { renderers } from '../renderers.mjs';

const site = "https://peshawarichappal.store";
const GET = async () => {
  const products = await getCollection("products", ({ id }) => id.startsWith("en/"));
  const blogPosts = await getCollection("blog", ({ id }) => id.startsWith("en/"));
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/products", priority: "0.9", changefreq: "daily" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/contact", priority: "0.7", changefreq: "monthly" },
    { url: "/sitemap", priority: "0.5", changefreq: "monthly" }
  ];
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Static Pages -->
${staticPages.map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n")}

  <!-- Product Pages -->
${products.map(
    (product) => `  <url>
    <loc>${site}/products/${product.id.replace(/^en\//, "")}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join("\n")}

  <!-- Blog Posts -->
${blogPosts.map(
    (post) => `  <url>
    <loc>${site}/blog/${post.id.replace(/^en\//, "")}</loc>
    <lastmod>${post.data.pubDate ? new Date(post.data.pubDate).toISOString().split("T")[0] : today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join("\n")}

</urlset>`.trim();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
