import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/MainLayout_-cIOTyUD.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_DR09Me4l.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_UvPZzydF.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_Bs25cIIi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://peshawarichappal.store");
const $$CardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardSmall;
  const { product, productLocale = "" } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- A clickable card that leads to the details of the product-->${maybeRenderHead()}<a${addAttribute(productLocale && productLocale !== "en" ? `/${productLocale}/products/${product.id.replace(/^fr\//, "")}/` : `/products/${product.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:h-80"> <!-- The product's main image --> <img${addAttribute(typeof product.data.main.imgCard === "string" ? product.data.main.imgCard : product.data.main.imgCard.src, "src")}${addAttribute(product.data.main.imgAlt, "alt")}${addAttribute(false, "draggable")}${addAttribute(imageClass, "class")}> <!-- An overlay gradient that sits on top of the product image--> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- The product's subtitle and the anchor SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })} </span> </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardSmall.astro", void 0);

const $$Astro$4 = createAstro("https://peshawarichappal.store");
const $$CardWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardWide;
  const { product, productLocale = "" } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- The anchor tag is the main container for the product card. When clicked, this leads to the details of the product. -->${maybeRenderHead()}<a${addAttribute(productLocale && productLocale !== "en" ? `/${productLocale}/products/${product.id.replace(/^fr\//, "")}/` : `/products/${product.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:col-span-2 md:h-80"> <!-- The product's main image --> <img${addAttribute(typeof product.data.main.imgCard === "string" ? product.data.main.imgCard : product.data.main.imgCard.src, "src")}${addAttribute(product.data.main.imgAlt, "alt")}${addAttribute(false, "draggable")}${addAttribute(imageClass, "class")}> <!-- This container includes a gradient overlay over the product's image --> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- This container includes product's subtitle and an SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })}</span> </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardWide.astro", void 0);

const product5 = new Proxy({"src":"/_astro/features-image.BEGIe8fA.avif","width":4375,"height":2369,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/features-image.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://peshawarichappal.store");
const $$FeaturesStatsAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturesStatsAlt;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-orange-400 dark:text-orange-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Grid --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": product5, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400"> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/features/FeaturesStatsAlt.astro", void 0);

const $$Astro$2 = createAstro("https://peshawarichappal.store");
const $$AvatarTestimonialSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AvatarTestimonialSection;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/avatars/AvatarTestimonialSection.astro", void 0);

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$TestimonialsSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700"> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> ${renderComponent($$result, "AvatarTestimonialSection", $$AvatarTestimonialSection, { "src": testimonial.avatarSrc, "alt": testimonial.avatarAlt })} <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$Astro = createAstro("https://peshawarichappal.store");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products", ({ id }) => {
    return id.startsWith("en/");
  })).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Our Collection";
  const subTitle = "Explore our handcrafted collection of authentic Peshawari Chappals. From classic Charsadda designs to modern Zalmi styles, each pair is crafted with premium leather by skilled artisans for comfort and durability.";
  const testimonials = [
    // First testimonial data
    {
      content: ` "I've been wearing Peshawari Chappals for years, and these are by far the most comfortable pair I've owned. The leather quality is exceptional, and they look even better with age. Perfect for both casual and traditional wear!" `,
      author: "Tariq Mehmood",
      role: "Regular Customer | Lahore",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Second testimonial data
    {
      content: ' "Ordered the Zalmi Chappal as a gift for my father, and he absolutely loves it! The craftsmanship is remarkable, and you can see the traditional Peshawari touch in every detail. Will definitely order more for the family." ',
      author: "Ayesha Siddiqui",
      role: "Gift Buyer | Karachi",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Third testimonial data
    {
      content: ` "As someone who appreciates traditional Pakistani footwear, I'm impressed by the authentic design and quality. The Imran Khan style chappal is my go-to for formal occasions. These chappals are true works of art." `,
      author: "Usman Ali",
      role: "Cultural Enthusiast | Peshawar",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    }
  ];
  const pageTitle = `Products | ${SITE.title}`;
  const metaDescription = "Shop authentic handcrafted Peshawari Chappals. Premium leather sandals in classic Charsadda, Zalmi, and Imran Khan styles. Traditional Pakistani footwear.";
  const ogTitle = "Peshawari Chappal Collection | Handcrafted Leather Sandals";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://peshawarichappal.store/products",
    url: "https://peshawarichappal.store/products",
    name: "Peshawari Chappal Collection | Handcrafted Leather Sandals",
    description: "Shop authentic handcrafted Peshawari Chappals. Premium leather sandals in classic Charsadda, Zalmi, and Imran Khan styles. Traditional Pakistani footwear.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://peshawarichappal.store",
      name: "Peshawari Chappal",
      description: "Authentic handcrafted Peshawari Chappals made with premium leather. Traditional Pakistani footwear crafted for comfort and style."
    },
    inLanguage: "en-US"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-(--breakpoint-sm) text-pretty text-neutral-600 md:block dark:text-neutral-400"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Customer Stories", "url": "#testimonials", "noArrow": true })} </div>  <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div> ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Why Choose Peshawari Chappal?", "subTitle": "Step into authentic tradition with our handcrafted Peshawari Chappals. Whether you prefer classic designs or modern styles, our artisans create each pair with meticulous attention to detail and premium materials.", "benefits": [
    "100% genuine leather handcrafted by skilled Pakistani artisans.",
    "Traditional designs honoring centuries of Pashtun heritage.",
    "Exceptional comfort with cushioned soles for all-day wear."
  ] })} ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "What Our Customers Say", "testimonials": testimonials })} ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/products/index.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
