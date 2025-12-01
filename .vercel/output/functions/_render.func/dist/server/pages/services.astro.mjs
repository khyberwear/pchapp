import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_DLiYjd8-.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CpB-AcgO.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_BvRZKh1n.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_yRdkXsmR.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://peshawarichappal.store");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-(--breakpoint-md)"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/MainSection.astro", void 0);

const $$Astro$4 = createAstro("https://peshawarichappal.store");
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/LeftSection.astro", void 0);

const $$Astro$3 = createAstro("https://peshawarichappal.store");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg", "src": imgOne, "alt": imgOneAlt, "format": "avif" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "avif" })} <!-- Second image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "avif" })} </div>`} </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/RightSection.astro", void 0);

const $$Astro$2 = createAstro("https://peshawarichappal.store");
const $$StatsBig = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatsBig;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for the title and subtitle -->${maybeRenderHead()}<div class="lg:pe-6 xl:pe-12"> <p class="text-6xl font-bold leading-10 text-orange-400 dark:text-orange-300"> ${title} </p> <p class="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3">${subTitle}</p> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/StatsBig.astro", void 0);

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$StatsSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatsSmall;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for title and subtitle -->${maybeRenderHead()}<div> <p class="text-3xl font-bold text-orange-400 dark:text-orange-300">${title}</p> <p class="mt-1 text-neutral-600 dark:text-neutral-400">${subTitle}</p> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/blocks/StatsSmall.astro", void 0);

const $$Astro = createAstro("https://peshawarichappal.store");
const $$FeaturesStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesStats;
  const { title, subTitle, stats, mainStatTitle, mainStatSubTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-(--breakpoint-md)"> <!-- Main title --> <h2 class="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle --> ${subTitle && renderTemplate`<p class="mb-16 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p>`} </div> <!-- Grid container for statistics --> <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12"> <!-- First grid item, showing a big statistics --> <div class="lg:col-span-4"> ${renderComponent($$result, "StatsBig", $$StatsBig, { "title": mainStatTitle, "subTitle": mainStatSubTitle })} </div> <!-- Second grid item, showing multiple small statistics --> ${stats && renderTemplate`<div class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:dark:before:bg-neutral-700"> <div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3"> <!-- Iterate over the 'stats' array and create a 'StatsSmall' component for each object in the array --> ${stats.map((stat) => renderTemplate`${renderComponent($$result, "StatsSmall", $$StatsSmall, { "title": stat.stat, "subTitle": stat.description })}`)} </div> </div>`} </div> </section>`;
}, "/Users/atifjan/PC/pchapp/src/components/sections/features/FeaturesStats.astro", void 0);

const blueprints = new Proxy({"src":"/_astro/blueprints-image.DxAt2gto.avif","width":1333,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/blueprints-image.avif";
							}
							
							return target[name];
						}
					});

const personWorking = new Proxy({"src":"/_astro/person-working.aUGgRiE_.avif","width":1334,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/person-working.avif";
							}
							
							return target[name];
						}
					});

const beforeAfter = new Proxy({"src":"/_astro/before-after.BntBToq6.avif","width":2048,"height":1366,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

const constructionWorkers = new Proxy({"src":"/_astro/construction-workers.XhU7Ouf4.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/construction-workers.avif";
							}
							
							return target[name];
						}
					});

const aerialView = new Proxy({"src":"/_astro/aerial-view.CeV30CXX.avif","width":1920,"height":1282,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/aerial-view.avif";
							}
							
							return target[name];
						}
					});

const usingTools = new Proxy({"src":"/_astro/using-tools.BrEE8t5H.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/using-tools.avif";
							}
							
							return target[name];
						}
					});

const progressBuilding = new Proxy({"src":"/_astro/progress-building.Cjca0suI.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/progress-building.avif";
							}
							
							return target[name];
						}
					});

const underConstruction = new Proxy({"src":"/_astro/under-construction.DfISh1yq.avif","width":1920,"height":2876,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atifjan/PC/pchapp/src/images/under-construction.avif";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      isRightSection: true,
      title: "Custom Chappal Design",
      subTitle: "Looking for something unique? Our master craftsmen can create custom Peshawari Chappals tailored to your preferences. Choose your leather type, color, strap style, and sole thickness. Whether it's a special occasion or a personal statement, we bring your vision to life.",
      single: false,
      imgOne: blueprints,
      imgOneAlt: "Custom chappal design sketches and leather samples",
      imgTwo: personWorking,
      imgTwoAlt: "Artisan working on custom chappal order"
    },
    {
      isRightSection: false,
      title: "Bulk & Corporate Orders",
      subTitle: "Planning a wedding, corporate event, or looking to stock your retail store? We offer special pricing on bulk orders of authentic Peshawari Chappals. Our team ensures consistent quality across all pairs while meeting your deadline and budget requirements.",
      img: beforeAfter,
      imgAlt: "Bulk order of Peshawari Chappals for events",
      btnExists: true,
      btnTitle: "Request Quote",
      btnURL: "/contact"
    },
    {
      isRightSection: true,
      title: "Chappal Restoration & Repair",
      subTitle: "Give your beloved Peshawari Chappals a new lease on life. Our skilled artisans can restore worn soles, repair straps, recondition leather, and bring back the original charm of your favorite pair. We believe quality footwear deserves quality care.",
      single: false,
      imgOne: constructionWorkers,
      imgOneAlt: "Artisan repairing leather straps",
      imgTwo: aerialView,
      imgTwoAlt: "Before and after chappal restoration"
    },
    {
      isRightSection: false,
      title: "Leather Care Products",
      subTitle: "Extend the life of your Peshawari Chappals with our premium leather care products. From conditioning creams to protective sprays, we offer everything you need to keep your leather footwear looking pristine and feeling comfortable for years.",
      img: usingTools,
      imgAlt: "Premium leather care products for chappal maintenance"
    },
    {
      isRightSection: true,
      title: "Wholesale Partnership Program",
      subTitle: "Join our network of retailers and distributors bringing authentic Peshawari Chappals to customers worldwide. We offer competitive wholesale pricing, reliable supply, and marketing support to help grow your business with our traditional footwear.",
      single: false,
      imgOne: progressBuilding,
      imgOneAlt: "Wholesale chappal inventory",
      imgTwo: underConstruction,
      imgTwoAlt: "Global shipping of Peshawari Chappals",
      btnExists: true,
      btnTitle: "Partner With Us",
      btnURL: "/contact"
    }
  ];
  const pageTitle = `Services | ${SITE.title}`;
  const metaDescription = "Custom Peshawari Chappal design, bulk orders, leather restoration, and wholesale partnerships. Expert services for authentic Pakistani footwear.";
  const ogTitle = "Chappal Services | Peshawari Chappal";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://peshawarichappal.store/services",
    url: "https://peshawarichappal.store/services",
    name: "Chappal Services | Peshawari Chappal",
    description: "Custom Peshawari Chappal design, bulk orders, leather restoration, and wholesale partnerships. Expert services for authentic Pakistani footwear.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://peshawarichappal.store",
      name: "Peshawari Chappal",
      description: "Authentic handcrafted Peshawari Chappals made with premium leather. Traditional Pakistani footwear crafted for comfort and style."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Craftsmanship Beyond Footwear", "subTitle": "At Peshawari Chappal, we offer more than just traditional sandals. From custom designs and bulk orders to restoration services and wholesale partnerships, our expert artisans are dedicated to preserving the art of authentic Peshawari footwear while meeting your unique needs.", "btnExists": true, "btnTitle": "Get in Touch", "btnURL": "/contact" })} ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })}${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "By the Numbers", "subTitle": "Our commitment to quality and tradition is evident in every pair of chappals we craft. At Peshawari Chappal, we're dedicated to delivering exceptional handcrafted footwear that honors our heritage.", "mainStatTitle": "50k+", "mainStatSubTitle": "happy customers wearing our authentic Peshawari Chappals worldwide", "stats": [
    {
      stat: "100%",
      description: "genuine leather in every pair"
    },
    {
      stat: "15+",
      description: "years of craftsmanship expertise"
    },
    {
      stat: "4.9\u2605",
      description: "average customer rating"
    }
  ] })} ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/services.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
