import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../../chunks/MainLayout_DqtqoQYv.mjs';
import { $ as $$CardBlog, a as $$CardBlogRecent, b as $$CardInsight } from '../../chunks/CardInsight_DR2f-Qxf.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DFSLjkgb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const frenchBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("fr/");
  });
  const frenchInsightsEntries = await getCollection("insights", ({ id }) => {
    return id.startsWith("fr/");
  });
  const blogPosts = frenchBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = frenchInsightsEntries;
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Votre Passerelle vers l'Excellence en Construction";
  const subTitle = "Explorez les derni\xE8res actualit\xE9s, astuces et analyses de Peshawari Chappal pour am\xE9liorer vos projets de construction. Des mises en avant de produits aux strat\xE9gies de gestion de projet, notre blog est votre ressource incontournable pour tout ce qui concerne les outils et la construction.";
  const secondTitle = "Perspectives";
  const secondSubTitle = "Restez \xE0 jour avec les derni\xE8res tendances et \xE9volutions de l'industrie de la construction gr\xE2ce aux analyses de l'\xE9quipe d'experts de Peshawari Chappal.";
  const pageTitle = `Blog | ${SITE.title}`;
  const metaDescription = "Restez inform\xE9 des derni\xE8res tendances et \xE9volutions dans le secteur de la construction avec les analyses de l'\xE9quipe d'experts de Peshawari Chappal.";
  const ogTitle = "Blog de l'Industrie de la Construction | Peshawari Chappal";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr", "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://peshawarichappal.store/fr/blog",
    url: "https://peshawarichappal.store/fr/blog",
    name: "Blog | Peshawari Chappal",
    description: "Restez inform\xE9 des derni\xE8res tendances et \xE9volutions dans le secteur de la construction avec les analyses de l'\xE9quipe d'experts de Peshawari Chappal.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://peshawarichappal.store/fr",
      name: "Peshawari Chappal",
      description: "Peshawari Chappal propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-4xl font-bold tracking-tight text-balance text-neutral-800 md:text-5xl lg:text-6xl dark:text-neutral-200"> ${title} </h1> <p class="mt-4 text-lg text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry, "blogLocale": "fr" })}`)} </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost, "recentBlogLocale": "fr" })} </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-2xl font-bold text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${secondTitle} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${secondSubTitle} </p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry, "insightLocale": "fr" })}`)} </div> </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/fr/blog/index.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/fr/blog/index.astro";
const $$url = "/fr/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
