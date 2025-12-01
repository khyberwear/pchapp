import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CIEM343X.mjs';
import { manifest } from './manifest_BhQa0nmD.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/admin/orders.astro.mjs');
const _page4 = () => import('./pages/api/init-db.astro.mjs');
const _page5 = () => import('./pages/api/orders.astro.mjs');
const _page6 = () => import('./pages/blog/_id_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/checkout.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/favicon.ico.astro.mjs');
const _page11 = () => import('./pages/fr/blog/_id_.astro.mjs');
const _page12 = () => import('./pages/fr/blog.astro.mjs');
const _page13 = () => import('./pages/fr/contact.astro.mjs');
const _page14 = () => import('./pages/fr/insights/_id_.astro.mjs');
const _page15 = () => import('./pages/fr/products/_id_.astro.mjs');
const _page16 = () => import('./pages/fr/products.astro.mjs');
const _page17 = () => import('./pages/fr/services.astro.mjs');
const _page18 = () => import('./pages/fr.astro.mjs');
const _page19 = () => import('./pages/insights/_id_.astro.mjs');
const _page20 = () => import('./pages/manifest.json.astro.mjs');
const _page21 = () => import('./pages/products/_id_.astro.mjs');
const _page22 = () => import('./pages/products.astro.mjs');
const _page23 = () => import('./pages/robots.txt.astro.mjs');
const _page24 = () => import('./pages/services.astro.mjs');
const _page25 = () => import('./pages/settings.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const _page27 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/admin/orders.ts", _page3],
    ["src/pages/api/init-db.ts", _page4],
    ["src/pages/api/orders.ts", _page5],
    ["src/pages/blog/[id].astro", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/checkout.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/favicon.ico.ts", _page10],
    ["src/pages/fr/blog/[id].astro", _page11],
    ["src/pages/fr/blog/index.astro", _page12],
    ["src/pages/fr/contact.astro", _page13],
    ["src/pages/fr/insights/[id].astro", _page14],
    ["src/pages/fr/products/[id].astro", _page15],
    ["src/pages/fr/products/index.astro", _page16],
    ["src/pages/fr/services.astro", _page17],
    ["src/pages/fr/index.astro", _page18],
    ["src/pages/insights/[id].astro", _page19],
    ["src/pages/manifest.json.ts", _page20],
    ["src/pages/products/[id].astro", _page21],
    ["src/pages/products/index.astro", _page22],
    ["src/pages/robots.txt.ts", _page23],
    ["src/pages/services.astro", _page24],
    ["src/pages/settings.astro", _page25],
    ["src/pages/index.astro", _page26],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "5472086b-8487-4c79-ad9e-a0996e1a328c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
