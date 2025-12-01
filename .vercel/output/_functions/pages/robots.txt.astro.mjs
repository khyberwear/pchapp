export { renderers } from '../renderers.mjs';

const site = "https://peshawarichappal.store";
const robotsTxt = `
# Peshawari Chappal Store - robots.txt
# https://peshawarichappal.store

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Yandex
Allow: /
Crawl-delay: 2

User-agent: facebot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: *
Allow: /
Crawl-delay: 2

# Disallow admin and API routes
Disallow: /admin/
Disallow: /api/
Disallow: /settings
Disallow: /checkout

# Sitemap location
Sitemap: ${site}/sitemap.xml
`.trim();
const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
