import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DqtqoQYv.mjs';
import { $ as $$CardBlog, a as $$CardBlogRecent, b as $$CardInsight } from '../chunks/CardInsight_DR2f-Qxf.mjs';
import { g as getCollection } from '../chunks/_astro_content_DFSLjkgb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const englishBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("en/");
  });
  const englishInsightsEntries = await getCollection("insights", ({ id }) => {
    return id.startsWith("en/");
  });
  const blogPosts = englishBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = englishInsightsEntries;
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Your Gateway to Construction Excellence";
  const subTitle = "Explore the latest news, tips, and insights from Peshawari Chappal to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things hardware and construction.";
  const secondTitle = "Insights";
  const secondSubTitle = "Stay up-to-date with the latest trends and developments in the construction industry with insights from Peshawari Chappal's team of industry experts. ";
  const pageTitle = `Blog | ${SITE.title}`;
  const metaDescription = "Stay up-to-date with the latest trends and developments in the construction industry with insights from Peshawari Chappal's team of industry experts.";
  const ogTitle = "Construction Industry Blog | Peshawari Chappal";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://peshawarichappal.store/blog",
    url: "https://peshawarichappal.store/blog",
    name: "Blog | Peshawari Chappal",
    description: "Stay up-to-date with the latest trends and developments in the construction industry with insights from Peshawari Chappal's team of industry experts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://peshawarichappal.store",
      name: "Peshawari Chappal",
      description: "Peshawari Chappal offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full">  <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-4xl font-bold tracking-tight text-balance text-neutral-800 md:text-5xl lg:text-6xl dark:text-neutral-200"> ${title} </h1> <p class="mt-4 text-lg text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry })}`)} </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost })} </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-2xl font-bold text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${secondTitle} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${secondSubTitle} </p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry })}`)} </div> </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/blog/index.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
