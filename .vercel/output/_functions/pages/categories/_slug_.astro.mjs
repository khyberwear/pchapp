import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout } from '../../chunks/MainLayout_C1ONpxrI.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CRCyDS9T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://peshawarichappal.store");
async function getStaticPaths() {
  const categories = [
    {
      slug: "peshawari-chappal",
      title: "Peshawari Chappal",
      description: "The timeless classic. Hand-stitched leather sandals known for their elegance and comfort."
    },
    {
      slug: "norozi",
      title: "Norozi Chappal",
      description: "Rugged and robust with a thick tire sole. Built for durability and tough terrain."
    },
    {
      slug: "charsadda",
      title: "Charsadda Chappal",
      description: "Simple, lightweight, and stylish. A perfect blend of tradition and casual wear."
    },
    {
      slug: "panjedar",
      title: "Panjedar Chappal",
      description: "Distinctive open-toe design with intricate stitching. A unique style statement."
    }
  ];
  return categories.map((category) => ({
    params: { slug: category.slug },
    props: { category }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { category } = Astro2.props;
  const allProducts = await getCollection("products", ({ id }) => id.startsWith("en/"));
  let products = [];
  if (category.slug === "peshawari-chappal") {
    products = allProducts.filter((product) => product.data.title.toLowerCase().includes("zalmi"));
  } else if (category.slug === "norozi") {
    products = allProducts.filter((product) => product.data.title.toLowerCase().includes("norozi"));
  } else if (category.slug === "charsadda") {
    products = allProducts.filter((product) => product.data.title.toLowerCase().includes("charsadda"));
  } else if (category.slug === "panjedar") {
    products = allProducts.filter((product) => product.data.title.toLowerCase().includes("panjedar"));
  }
  const pageTitle = `${category.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": category.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${category.title} </h1> <p class="hidden max-w-xl text-pretty text-neutral-600 md:block dark:text-neutral-400"> ${category.description} </p> </div> </div> ${products.length > 0 ? renderTemplate`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> ${products.map((product) => renderTemplate`<a${addAttribute(`/products/${product.id.replace(/^en\//, "")}`, "href")} class="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"> <div class="aspect-square overflow-hidden"> <img${addAttribute(typeof product.data.main.imgCard === "string" ? product.data.main.imgCard : product.data.main.imgCard.src, "src")}${addAttribute(product.data.main.imgAlt, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> </div> <div class="p-5"> <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors"> ${product.data.title} </h3> <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">${product.data.description}</p> <div class="mt-4 flex items-center justify-between"> <div class="flex flex-col"> <span class="text-lg font-bold text-neutral-900 dark:text-white">₨ ${(product.data.main.price || 5500).toLocaleString()}</span> ${product.data.main.originalPrice && renderTemplate`<span class="text-xs text-neutral-500 line-through">₨ ${product.data.main.originalPrice.toLocaleString()}</span>`} </div> <span class="text-yellow-600 dark:text-yellow-500 font-bold text-sm">View Details</span> </div> </div> </a>`)} </div>` : renderTemplate`<div class="py-20 text-center"> <div class="mb-4 rounded-full bg-neutral-100 p-4 inline-flex dark:bg-neutral-800"> <svg class="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
No products found
</h3> <p class="mt-2 text-neutral-600 dark:text-neutral-400">
We couldn't find any products in this collection.
</p> <a href="/products" class="mt-6 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none">
View all products
</a> </div>`} </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/categories/[slug].astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/categories/[slug].astro";
const $$url = "/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
