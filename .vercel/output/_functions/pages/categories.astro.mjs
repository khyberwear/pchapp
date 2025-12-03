import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_2j5aXtNi.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_eD6hw } from '../chunks/zalmi1_Cvv2kVuJ.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_cQcWq } from '../chunks/Norozi-Chappal-12-1-jpg_Cr0VbhoL.mjs';
import { g as getCollection } from '../chunks/_astro_content_CFw5y03i.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `Collections | ${SITE.title}`;
  const description = "Explore our wide range of authentic Peshawari Chappals by collection. From classic Charsadda to modern Zalmi styles.";
  const allProducts = await getCollection("products", ({ id }) => id.startsWith("en/"));
  const getCount = (slug) => {
    if (slug === "peshawari-chappal") return allProducts.filter((p) => p.data.title.toLowerCase().includes("zalmi")).length;
    if (slug === "norozi") return allProducts.filter((p) => p.data.title.toLowerCase().includes("norozi")).length;
    return 0;
  };
  const categories = [
    {
      title: "Peshawari Chappal",
      description: "The timeless classic. Hand-stitched leather sandals known for their elegance and comfort.",
      image: __ASTRO_IMAGE_IMPORT_eD6hw,
      slug: "peshawari-chappal",
      count: getCount("peshawari-chappal")
    },
    {
      title: "Norozi Chappal",
      description: "Rugged and robust with a thick tire sole. Built for durability and tough terrain.",
      image: __ASTRO_IMAGE_IMPORT_cQcWq,
      slug: "norozi",
      count: getCount("norozi")
    },
    {
      title: "Charsadda Chappal",
      description: "Simple, lightweight, and stylish. A perfect blend of tradition and casual wear.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
      slug: "charsadda",
      count: 0
    },
    {
      title: "Panjedar Chappal",
      description: "Distinctive open-toe design with intricate stitching. A unique style statement.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
      slug: "panjedar",
      count: 0
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900"> <div class="absolute inset-0 opacity-10 dark:opacity-20"> <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none"> <defs> <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse"> <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect> </svg> </div> <div class="relative mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 text-center"> <span class="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
Handcrafted Perfection
</span> <h1 class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl lg:text-6xl">
Our Collections
</h1> <p class="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
Discover the heritage of Peshawar through our distinct styles. Each collection represents a unique chapter of tradition, crafted for the modern gentleman.
</p> </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="grid gap-6 sm:grid-cols-2 lg:gap-8"> ${categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.slug}`, "href")} class="group relative block overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl aspect-[4/3]"> <!-- Image Container --> <div class="absolute inset-0 h-full w-full"> <img class="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"${addAttribute(typeof category.image === "string" ? category.image : category.image.src, "src")}${addAttribute(category.title, "alt")}> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div> </div> <!-- Content --> <div class="relative flex h-full flex-col justify-end p-6 md:p-8"> <div class="transform transition-transform duration-500 group-hover:-translate-y-1"> <h3 class="mb-2 text-2xl font-bold text-white md:text-3xl"> ${category.title} </h3> <p class="mb-6 max-w-lg text-base text-neutral-200 opacity-90 line-clamp-2"> ${category.description} </p> <div class="flex items-center gap-4"> <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900">
Explore
<svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </span> <span class="text-sm font-medium text-white/80">${category.count} Products</span> </div> </div> </div> </a>`)} </div> </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/categories/index.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
