import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_twjl8UOv.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_UvPZzydF.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_DRgAihSl.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_Bs25cIIi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://peshawarichappal.store");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-xs outline-hidden ring-zinc-500 focus-visible:ring-3 transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-hidden";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$4 = createAstro("https://peshawarichappal.store");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800", "src": src, "alt": alt, "inferSize": true, "loading": "eager" })}`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/avatars/Avatar.astro", void 0);

const $$FullStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path> </svg>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/stars/FullStar.astro", void 0);

const $$HalfStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path> <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path> </svg>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/stars/HalfStar.astro", void 0);

const $$Astro$3 = createAstro("https://peshawarichappal.store");
const $$ReviewComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ReviewComponent;
  const { avatars, starCount = 0, rating, reviews } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 lg:mt-10"> <div class="py-5"> <div class="text-center sm:flex sm:items-center sm:text-start"> <div class="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5"> <!-- Avatar Group --> <div class="flex justify-center -space-x-3"> ${avatars?.map((src) => renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "src": src, "alt": "Avatar Description" })}`)} <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"> <span class="text-xs font-medium uppercase leading-none text-white">7k+</span> </span> </div> </div> <div class="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div> <!-- Review Ratings --> <div class="flex flex-col items-center sm:items-start"> <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0"> <div class="flex space-x-1"> <!-- Your star ratings --> ${Array(starCount).fill(0).map((_, i) => renderTemplate`${renderComponent($$result, "FullStar", $$FullStar, { "key": i })}`)} <!-- Adding additional half-star --> ${renderComponent($$result, "HalfStar", $$HalfStar, {})} </div> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(rating)}` })} </p> </div> <div class="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5"> <p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(reviews)}` })} </p> </div> </div> </div> </div> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/ReviewComponent.astro", void 0);

const $$Astro$2 = createAstro("https://peshawarichappal.store");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> ${withReview ? renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews })}` : ""} </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-75 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-hidden ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-hidden md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/AccordionItem.astro", void 0);

const $$Astro = createAstro("https://peshawarichappal.store");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate`<!-- Main container that holds all content. Customized for different viewport sizes. -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ${faqs.subTitle} </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ${faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  })} </div> </div> </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/misc/FAQ.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DnkJDK8s.avif","width":1080,"height":1080,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const subTitle = "Ask us anything about our Peshawari Chappals, sizing, materials, and care tips.";
const faqs = [{"question":"What makes Peshawari Chappals unique?","answer":"Peshawari Chappals are traditional handcrafted footwear from Peshawar, Pakistan. They feature distinctive crossed leather straps, open-toe design, and are made entirely by skilled artisans using premium leather. Each pair reflects centuries of Pashtun craftsmanship and cultural heritage."},{"question":"How do I choose the right size for my chappal?","answer":"Our Peshawari Chappals follow standard Pakistani sizing. We recommend measuring your foot length and referring to our size chart. For a comfortable fit, consider ordering half a size up if you're between sizes. Leather naturally stretches and molds to your foot shape over time."},{"question":"What types of leather are used in your chappals?","answer":"We use various premium leathers including soft buffalo leather for the straps, genuine cowhide for durability, and high-quality camel leather for traditional styles. Each leather type is carefully selected for its quality, comfort, and longevity."},{"question":"How should I care for my Peshawari Chappals?","answer":"Clean your chappals with a soft dry cloth to remove dust. Avoid water exposure as it can damage the leather. Apply leather conditioner occasionally to maintain suppleness. Store in a cool, dry place away from direct sunlight. With proper care, your chappals will last for years."},{"question":"Can I wear Peshawari Chappals with Western clothing?","answer":"Absolutely! While traditionally worn with Shalwar Kameez, Peshawari Chappals have become a versatile fashion statement. They pair wonderfully with jeans, casual trousers, and even shorts. Many fashion enthusiasts worldwide wear them for their unique style and comfort."},{"question":"Do you offer custom-made chappals or bulk orders?","answer":"Yes! We offer custom-made Peshawari Chappals in various colors, sizes, and leather types. For bulk orders (weddings, corporate gifts, or retail), contact us for special pricing and customization options. Our artisans can create bespoke designs to match your requirements."}];
const faqs$1 = {
  subTitle,
  faqs,
};

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const products = (await getCollection("products", ({ id }) => id.startsWith("en/"))).sort((a, b) => a.data.main.id - b.data.main.id).slice(0, 4);
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  const features = [
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`,
      title: "100% Genuine Leather",
      description: "Premium buffalo and camel leather sourced from trusted local suppliers."
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`,
      title: "Handcrafted Excellence",
      description: "Each pair is meticulously handmade by skilled Peshawar artisans."
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
      title: "All-Day Comfort",
      description: "Ergonomic design with cushioned soles for maximum comfort."
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>`,
      title: "Free Shipping",
      description: "Free delivery across Pakistan on all orders over Rs 3,000."
    }
  ];
  const testimonials = [
    {
      content: "Best quality Peshawari Chappals I've ever owned! The leather is so soft and they're incredibly comfortable. Highly recommended!",
      author: "Imran Ahmed",
      location: "Lahore",
      rating: 5
    },
    {
      content: "I ordered these for my wedding and received so many compliments. The craftsmanship is exceptional and they look even better in person.",
      author: "Farhan Khan",
      location: "Karachi",
      rating: 5
    },
    {
      content: "These chappals are worth every rupee! They've become my everyday footwear. Super comfortable and stylish.",
      author: "Ali Hassan",
      location: "Islamabad",
      rating: 5
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Best Peshawari <span
        class="text-yellow-500 dark:text-yellow-400">Chappal</span>`, "subTitle": "Premium leather Peshawari Chappals crafted for all-day comfort & classic appeal.", "primaryBtn": "Shop Now", "primaryBtnURL": "/products", "secondaryBtn": "Contact Us", "secondaryBtnURL": "/contact", "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "Handcrafted Peshawari Chappal collection" })}  ${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <span class="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
Why Choose Us
</span> <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl">
Authentic Peshawari Craftsmanship
</h2> <p class="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
Every pair tells a story of tradition, quality, and passion for authentic Pakistani footwear.
</p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> ${features.map((feature) => renderTemplate`<div class="group relative bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(feature.icon)}` })} </div> <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">${feature.title}</h3> <p class="text-neutral-600 dark:text-neutral-400 text-sm">${feature.description}</p> </div>`)} </div> </div> </section>  <section class="py-16"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"> <div> <span class="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
Our Collection
</span> <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl">
Featured Chappals
</h2> <p class="mt-2 text-neutral-600 dark:text-neutral-400">
Discover our most popular handcrafted styles
</p> </div> <a href="/products" class="mt-4 sm:mt-0 inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors">
View All Products
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> ${products.map((product) => renderTemplate`<a${addAttribute(`/products/${product.id.replace(/^en\//, "")}`, "href")} class="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"> <div class="aspect-square overflow-hidden"> <img${addAttribute(typeof product.data.main.imgCard === "string" ? product.data.main.imgCard : product.data.main.imgCard.src, "src")}${addAttribute(product.data.main.imgAlt, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> </div> <div class="p-5"> <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors"> ${product.data.title} </h3> <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-1">${product.data.description}</p> <div class="mt-4 flex items-center justify-between"> <span class="text-yellow-600 dark:text-yellow-500 font-bold">View Details</span> <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a>`)} </div> </div> </section>  <section class="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center"> <div> <div class="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div> <p class="text-yellow-100">Happy Customers</p> </div> <div> <div class="text-4xl md:text-5xl font-bold text-white mb-2">15+</div> <p class="text-yellow-100">Years Experience</p> </div> <div> <div class="text-4xl md:text-5xl font-bold text-white mb-2">100%</div> <p class="text-yellow-100">Genuine Leather</p> </div> <div> <div class="text-4xl md:text-5xl font-bold text-white mb-2">4.9★</div> <p class="text-yellow-100">Customer Rating</p> </div> </div> </div> </section>  <section class="py-16"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <span class="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
Testimonials
</span> <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl">
What Our Customers Say
</h2> <p class="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
Join thousands of satisfied customers who love their Peshawari Chappals
</p> </div> <div class="grid gap-6 md:grid-cols-3"> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg"> <div class="flex gap-1 mb-4"> ${[...Array(testimonial.rating)].map(() => renderTemplate`<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-neutral-600 dark:text-neutral-400 mb-4 italic">"${testimonial.content}"</p> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold"> ${testimonial.author.charAt(0)} </div> <div> <p class="font-bold text-neutral-800 dark:text-neutral-200">${testimonial.author}</p> <p class="text-sm text-neutral-500 dark:text-neutral-400">${testimonial.location}</p> </div> </div> </div>`)} </div> </div> </section>  <section class="py-16 bg-neutral-100 dark:bg-neutral-800"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"> <div class="absolute inset-0 opacity-10"> <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"> <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"> <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5"></path> </pattern> <rect width="100" height="100" fill="url(#grid)"></rect> </svg> </div> <div class="relative"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
Ready to Step into Tradition?
</h2> <p class="text-neutral-300 text-lg max-w-2xl mx-auto mb-8">
Experience the comfort and elegance of authentic Peshawari Chappals. Order now and get free shipping on orders over Rs 3,000.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/products" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold rounded-xl transition-colors">
Shop Now
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold rounded-xl transition-colors">
Contact Us
</a> </div> </div> </div> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently<br />asked questions", "faqs": faqs$1 })} ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/index.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
