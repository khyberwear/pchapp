import { a as createComponent, s as spreadAttributes, u as unescapeHTML, d as renderTemplate, c as createAstro, b as addAttribute, r as renderComponent, F as Fragment, m as maybeRenderHead, e as renderScript, q as renderSlot, t as renderHead } from './astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { c as getImage } from './_astro_assets_UvPZzydF.mjs';
import 'clsx';
import { i as icon } from './icon_ay15Mr-D.mjs';
/* empty css                         */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/social.png";
							}
							
							return target[name];
						}
					});

const SITE = {
  title: "Peshawari Chappal",
  description: "Experience the tradition and elegance of authentic Peshawari Chappals. Handcrafted with premium leather for comfort and style.",
  url: "https://peshawarichappal.store",
  author: "Khyber Wear"
};
const SEO = {
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};
const OG = {
  title: `Peshawari Chappal - Authentic Handcrafted Footwear`,
  description: "Step into tradition with our premium collection of Peshawari Chappals. Handcrafted for comfort and durability. Shop now for the perfect blend of style and heritage.",
  image: ogImageSrc
};

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const faviconSvgSrc = createSvgComponent({"meta":{"src":"/_astro/icon.B7KHh505.svg","width":512,"height":512,"format":"svg"},"attributes":{"width":"512","height":"512","viewBox":"0 0 512 512","fill":"none"},"children":"\n<rect x=\"-0.00585938\" y=\"-0.000488281\" width=\"512\" height=\"512\" rx=\"100\" fill=\"#262626\" />\n<rect x=\"20.9297\" y=\"109.01\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 20.9297 109.01)\" fill=\"#FACC15\" />\n<rect x=\"100.982\" y=\"183.969\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 100.982 183.969)\" fill=\"#FACC15\" />\n<rect x=\"181.491\" y=\"259.354\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 181.491 259.354)\" fill=\"#FACC15\" />\n<rect x=\"261.998\" y=\"334.739\" width=\"62.4311\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 261.998 334.739)\" fill=\"#FACC15\" />\n<path d=\"M442.513 435.922C445.843 442.651 438.906 449.847 432.059 446.766L355.339 412.235C350.291 409.962 349.021 403.373 352.863 399.387L392.264 358.515C396.106 354.53 402.737 355.557 405.193 360.519L442.513 435.922Z\" fill=\"#FACC15\" />\n"});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://peshawarichappal.store");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData,
    customDescription: null,
    customOgTitle: null
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData,
    customDescription = defaultProps.customDescription,
    customOgTitle = defaultProps.customOgTitle
  } = Astro2.props;
  const description = customDescription || meta;
  const ogTitle = customOgTitle || OG.title;
  const ogDescription = customDescription || OG.description;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const cleanPath = path.replace(/^\/(fr|en)\//, "/");
    const basePath2 = prefix ? `/${prefix}${cleanPath}` : cleanPath;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const cleanPath = fullPath.replace(/^\/(fr|en)\//, "/");
    const href = createHref(lang, prefix, cleanPath);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`${structuredData && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<meta charset="utf-8"><meta${addAttribute(description, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><link rel="manifest" href="/manifest.json"><link rel="sitemap" href="/sitemap-index.xml"><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><meta name="theme-color" content="#facc15">`;
}, "/Users/atifjan/PC/pchapp/src/components/Meta.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-hidden" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-hidden" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "/Users/atifjan/PC/pchapp/src/components/ThemeIcon.astro", void 0);

const $$Astro$2 = createAstro("https://peshawarichappal.store");
const $$LoginBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LoginBtn;
  const { title = "Log in" } = Astro2.props;
  const baseClasses = "flex items-center gap-x-2 text-base md:text-sm font-medium text-neutral-600 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden";
  const hoverClasses = "hover:text-orange-400 dark:hover:text-orange-300";
  const darkClasses = "dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:focus:outline-hidden";
  const mdClasses = "md:my-6 md:border-s md:border-neutral-300 md:ps-6";
  const txtSizeClasses = "2xl:text-base";
  const userSVG = `<svg
      class="h-4 w-4 shrink-0"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>`;
  return renderTemplate`${maybeRenderHead()}<a href="/login"${addAttribute(`${baseClasses} ${hoverClasses} ${darkClasses} ${mdClasses} ${txtSizeClasses}`, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(userSVG)}` })} ${title} </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/LoginBtn.astro", void 0);

const $$Authentication = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="auth-container" class="hidden md:flex items-center"> <!-- Login Button (Default) --> <div id="login-btn-container"> ${renderComponent($$result, "LoginBtn", $$LoginBtn, {})} </div> <!-- User Menu (Hidden by default) --> <div id="user-menu-container" class="hidden relative inline-flex"> <button id="user-menu-btn" type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"> <span id="user-name" class="font-medium">User</span> <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg> </button> <div id="user-dropdown" class="hidden absolute right-0 top-full mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 z-[9999]"> <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="/settings">
Settings
</a> <a id="admin-link" class="hidden flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="/admin">
Admin Dashboard
</a> <button id="logout-btn" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-red-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
Logout
</button> </div> </div> </div> ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/components/sections/misc/Authentication.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/misc/Authentication.astro", void 0);

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" }
];
const enStrings = {
  navBarLinks};

const $$CartDrawer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cart-drawer" class="hs-overlay fixed end-0 top-0 z-[60] hidden h-full w-full max-w-md translate-x-full transform border-s bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-neutral-700 dark:bg-neutral-800" tabindex="-1"> <div class="flex h-full flex-col"> <div class="flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700"> <h3 class="font-bold text-gray-800 dark:text-white">Shopping Cart</h3> <button type="button" class="flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#cart-drawer"> <span class="sr-only">Close modal</span> <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <div class="h-full overflow-y-auto p-4"> <div id="cart-items" class="space-y-4"> <!-- Cart items will be injected here --> <p class="text-center text-gray-500 dark:text-gray-400">Your cart is empty.</p> </div> </div> <div class="border-t p-4 dark:border-neutral-700"> <div class="mb-4 flex justify-between text-lg font-bold text-gray-800 dark:text-white"> <span>Total</span> <span id="cart-total">$0.00</span> </div> <a href="/checkout" class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-orange-500 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
Checkout
</a> </div> </div> </div> ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/components/cart/CartDrawer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/components/cart/CartDrawer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const strings = enStrings;
  const homeUrl = "/";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component - Redesigned -->", '<header class="sticky inset-x-0 top-0 z-50 w-full"> <!-- Top accent bar --> <div class="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div> <!-- Navigation container --> <nav class="mx-auto w-full border-b border-orange-100/50 bg-white/95 px-4 py-4 shadow-lg shadow-orange-100/20 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/95 dark:shadow-neutral-900/50 md:px-6 lg:px-8" aria-label="Global"> <div class="mx-auto flex max-w-7xl items-center justify-between"> <!-- Brand logo --> <a class="flex items-center gap-3 rounded-xl text-xl font-bold outline-hidden ring-orange-500 transition-transform duration-300 hover:scale-105 focus-visible:ring-3 dark:ring-orange-400"', ' aria-label="Brand"> <div class="relative"> <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-sm"></div> <img src="/logokw.png" class="relative h-auto w-28" alt="Logo"> </div> </a> <!-- Desktop Navigation --> <div class="hidden items-center gap-1 md:flex"> ', ' </div> <!-- Right side actions --> <div class="flex items-center gap-2"> <!-- Cart Button --> <button type="button" class="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-orange-50/50 text-orange-600 transition-all duration-300 hover:border-orange-200 hover:bg-orange-100 hover:shadow-md hover:shadow-orange-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-orange-400 dark:hover:border-orange-600/50 dark:hover:bg-neutral-700" data-hs-overlay="#cart-drawer"> <svg class="h-5 w-5 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> <span id="cart-count" class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-xs font-bold text-white shadow-sm">0</span> </button> <!-- Desktop Authentication --> ', ' <!-- Theme Toggle --> <span class="hidden md:inline-block"> ', ' </span> <!-- Mobile menu button --> <button type="button" class="hs-collapse-toggle flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-600 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-100 md:hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-5 w-5 shrink-0 hs-collapse-open:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-5 w-5 shrink-0 hs-collapse-open:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> <!-- Mobile Theme Toggle --> <span class="inline-block md:hidden"> ', ' </span> </div> </div> <!-- Mobile Navigation --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 md:hidden"> <div class="mt-4 flex flex-col gap-1 border-t border-neutral-100 pt-4 dark:border-neutral-800"> ', " </div> </div> </nav> </header> ", " ", ' <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script>'], ["<!-- Main header component - Redesigned -->", '<header class="sticky inset-x-0 top-0 z-50 w-full"> <!-- Top accent bar --> <div class="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div> <!-- Navigation container --> <nav class="mx-auto w-full border-b border-orange-100/50 bg-white/95 px-4 py-4 shadow-lg shadow-orange-100/20 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/95 dark:shadow-neutral-900/50 md:px-6 lg:px-8" aria-label="Global"> <div class="mx-auto flex max-w-7xl items-center justify-between"> <!-- Brand logo --> <a class="flex items-center gap-3 rounded-xl text-xl font-bold outline-hidden ring-orange-500 transition-transform duration-300 hover:scale-105 focus-visible:ring-3 dark:ring-orange-400"', ' aria-label="Brand"> <div class="relative"> <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-sm"></div> <img src="/logokw.png" class="relative h-auto w-28" alt="Logo"> </div> </a> <!-- Desktop Navigation --> <div class="hidden items-center gap-1 md:flex"> ', ' </div> <!-- Right side actions --> <div class="flex items-center gap-2"> <!-- Cart Button --> <button type="button" class="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-orange-50/50 text-orange-600 transition-all duration-300 hover:border-orange-200 hover:bg-orange-100 hover:shadow-md hover:shadow-orange-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-orange-400 dark:hover:border-orange-600/50 dark:hover:bg-neutral-700" data-hs-overlay="#cart-drawer"> <svg class="h-5 w-5 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> <span id="cart-count" class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-xs font-bold text-white shadow-sm">0</span> </button> <!-- Desktop Authentication --> ', ' <!-- Theme Toggle --> <span class="hidden md:inline-block"> ', ' </span> <!-- Mobile menu button --> <button type="button" class="hs-collapse-toggle flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-600 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-100 md:hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-5 w-5 shrink-0 hs-collapse-open:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-5 w-5 shrink-0 hs-collapse-open:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> <!-- Mobile Theme Toggle --> <span class="inline-block md:hidden"> ', ' </span> </div> </div> <!-- Mobile Navigation --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 md:hidden"> <div class="mt-4 flex flex-col gap-1 border-t border-neutral-100 pt-4 dark:border-neutral-800"> ', " </div> </div> </nav> </header> ", " ", ' <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(homeUrl, "href"), strings.navBarLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="group relative px-4 py-2 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:text-orange-600 dark:text-neutral-300 dark:hover:text-orange-400"> <span class="relative z-10">${link.name}</span> <span class="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-3/4"></span> </a>`), renderComponent($$result, "Authentication", $$Authentication, {}), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), strings.navBarLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:bg-orange-50 hover:text-orange-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-orange-400"> ${link.name} </a>`), renderComponent($$result, "CartDrawer", $$CartDrawer, {}), renderScript($$result, "/Users/atifjan/PC/pchapp/src/components/sections/navbar&footer/Navbar.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/atifjan/PC/pchapp/src/components/sections/navbar&footer/Navbar.astro", void 0);

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-orange-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 shrink-0 text-orange-400 dark:text-orange-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 dark:group-hover:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    ],
    class: "ms-2 size-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/icons/Icon.astro", void 0);

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
  ];
  const supportLinks = [
    { name: "Size Guide", url: "/products" },
    { name: "Shipping Info", url: "/contact" },
    { name: "Returns & Exchanges", url: "/contact" },
    { name: "FAQ", url: "/#faq" }
  ];
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/923001234567"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950"> <!-- Top Wave Decoration --> <div class="w-full overflow-hidden"> <svg class="w-full h-12 text-neutral-200 dark:text-neutral-800 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path> </svg> </div> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 2xl:max-w-(--breakpoint-2xl)"> <!-- Main Footer Content --> <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"> <!-- Brand Section --> <div class="lg:col-span-1"> <a href="/" class="inline-block mb-4"> <img src="/logokw.png" class="h-16 w-auto" alt="Peshawari Chappal Logo"> </a> <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
Authentic handcrafted Peshawari Chappals made with premium leather. Traditional Pakistani footwear crafted for comfort and style.
</p> <!-- Social Links --> <div class="flex items-center gap-3"> <a${addAttribute(socialLinks.facebook, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebookFooter" })} </a> <a${addAttribute(socialLinks.instagram, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </a> <a${addAttribute(socialLinks.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> </a> </div> </div> <!-- Quick Links --> <div> <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4 text-lg">
Quick Links
</h3> <ul class="space-y-3"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-neutral-600 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors duration-300 flex items-center gap-2"> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> ${link.name} </a> </li>`)} </ul> </div> <!-- Support --> <div> <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4 text-lg">
Support
</h3> <ul class="space-y-3"> ${supportLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-neutral-600 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors duration-300 flex items-center gap-2"> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> ${link.name} </a> </li>`)} </ul> </div> <!-- Contact Info --> <div> <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4 text-lg">
Contact Us
</h3> <ul class="space-y-4"> <li class="flex items-start gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center"> <svg class="w-4 h-4 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <span class="text-neutral-600 dark:text-neutral-400 text-sm">
Qissa Khwani Bazaar,<br>Peshawar, Pakistan
</span> </li> <li class="flex items-center gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center"> <svg class="w-4 h-4 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <a href="mailto:info@peshawarichappal.store" class="text-neutral-600 dark:text-neutral-400 text-sm hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
info@peshawarichappal.store
</a> </li> <li class="flex items-center gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center"> <svg class="w-4 h-4 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <a href="tel:+923001234567" class="text-neutral-600 dark:text-neutral-400 text-sm hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
+92 300 123 4567
</a> </li> </ul> </div> </div> <!-- Divider --> <div class="my-8 border-t border-neutral-300 dark:border-neutral-700"></div> <!-- Bottom Bar --> <div class="flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title}. All rights reserved.
</p> <div class="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400"> <a href="/sitemap" class="hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">Sitemap</a> <span class="text-neutral-400">|</span> <span>Made with ❤️ in Pakistan</span> </div> </div> ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/navbar&footer/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://peshawarichappal.store");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE.title,
    meta,
    structuredData,
    lang = "en",
    customDescription = null,
    customOgTitle = null
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16" data-astro-cid-ouamjn2i> <head>', "<title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', `<script type="text/javascript">
      window.smartlook||(function(d) {
        var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
        var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
        c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', '3ee57d0e9b6075a23f45c59382fff400fe142c3c', { region: 'eu' });
    <\/script>`, '</head> <body class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800" data-astro-cid-ouamjn2i>  <div class="mx-auto max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8" data-astro-cid-ouamjn2i> ', " <main data-astro-cid-ouamjn2i> ", " </main> </div> ", " ", "  </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "customDescription": customDescription, "customOgTitle": customOgTitle, "data-astro-cid-ouamjn2i": true }), title, renderScript($$result, "/Users/atifjan/PC/pchapp/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "data-astro-cid-ouamjn2i": true }), renderScript($$result, "/Users/atifjan/PC/pchapp/src/layouts/MainLayout.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/atifjan/PC/pchapp/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, SITE as S, $$MainLayout as a };
