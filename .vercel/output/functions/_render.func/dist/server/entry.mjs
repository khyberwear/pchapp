import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D49Uibbr.mjs';
import { manifest } from './manifest_Be0WVOX4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/admin/orders.astro.mjs');
const _page4 = () => import('./pages/api/admin/update-order-status.astro.mjs');
const _page5 = () => import('./pages/api/init-db.astro.mjs');
const _page6 = () => import('./pages/api/orders.astro.mjs');
const _page7 = () => import('./pages/blog/_id_.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/checkout.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/favicon.ico.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/manifest.json.astro.mjs');
const _page14 = () => import('./pages/products/_id_.astro.mjs');
const _page15 = () => import('./pages/products.astro.mjs');
const _page16 = () => import('./pages/robots.txt.astro.mjs');
const _page17 = () => import('./pages/services.astro.mjs');
const _page18 = () => import('./pages/settings.astro.mjs');
const _page19 = () => import('./pages/sitemap.astro.mjs');
const _page20 = () => import('./pages/sitemap.xml.astro.mjs');
const _page21 = () => import('./pages/thank-you.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/admin/orders.ts", _page3],
    ["src/pages/api/admin/update-order-status.ts", _page4],
    ["src/pages/api/init-db.ts", _page5],
    ["src/pages/api/orders.ts", _page6],
    ["src/pages/blog/[id].astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/checkout.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/favicon.ico.ts", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/manifest.json.ts", _page13],
    ["src/pages/products/[id].astro", _page14],
    ["src/pages/products/index.astro", _page15],
    ["src/pages/robots.txt.ts", _page16],
    ["src/pages/services.astro", _page17],
    ["src/pages/settings.astro", _page18],
    ["src/pages/sitemap.astro", _page19],
    ["src/pages/sitemap.xml.ts", _page20],
    ["src/pages/thank-you.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d96aa1d5-44cd-4ed9-b6ae-988e987fab47",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
