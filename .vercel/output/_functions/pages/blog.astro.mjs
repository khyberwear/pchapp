import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, r as renderComponent } from '../chunks/astro/server_3TkFQEGt.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CnSuKhx_.mjs';
import 'clsx';
import { f as formatDate } from '../chunks/utils_875MjSoU.mjs';
import { g as getCollection } from '../chunks/_astro_content_CNsLp3lL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$AvatarBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AvatarBlog;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-[46px] rounded-full border-2 border-neutral-50"${addAttribute(typeof blogEntry.data.authorImage === "string" ? blogEntry.data.authorImage : blogEntry.data.authorImage.src, "src")}${addAttribute(blogEntry.data.authorImageAlt, "alt")}${addAttribute(false, "draggable")}> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/avatars/AvatarBlog.astro", void 0);

const $$Astro = createAstro("https://peshawarichappal.store");
const $$CardBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardBlog;
  const { blogEntry, blogLocale = "" } = Astro2.props;
  return renderTemplate`<!-- The following anchor tag is the main container for the card.
     It's a link to the blog post detailed page.
     The data-astro-prefetch is an Astro specific Dynamic HTML feature,
     which automatically prefetches the linked page to speed up navigation. -->${maybeRenderHead()}<a class="group relative block rounded-xl outline-hidden ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(blogLocale && blogLocale !== "en" ? `/${blogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch> <!-- The container for the blog post's cover image. Uses astro:assets' Image for image source --> <div class="relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-neutral-900/[.7]"> <img class="absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110"${addAttribute(typeof blogEntry.data.cardImage === "string" ? blogEntry.data.cardImage : blogEntry.data.cardImage.src, "src")}${addAttribute(blogEntry.data.cardImageAlt, "alt")}${addAttribute(false, "draggable")} loading="eager"> </div> <!-- The container for the blog author's avatar and associated metadata (author name and publication date) --> <div class="absolute inset-x-0 top-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <div class="flex items-center"> ${renderComponent($$result, "AvatarBlog", $$AvatarBlog, { "blogEntry": blogEntry })} <div class="ms-2.5 sm:ms-4"> <h4 class="font-bold text-neutral-50"> ${blogEntry.data.author} </h4> <p class="text-xs text-neutral-50/[.8]"> ${formatDate(blogEntry.data.pubDate)} </p> </div> </div> </div> </div> <!-- The container for the blog post's title and description --> <div class="absolute inset-x-0 bottom-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <h3 class="text-balance text-lg font-bold text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl"> ${blogEntry.data.title} </h3> <p class="mt-2 text-pretty text-neutral-50/[.8]"> ${blogEntry.data.description} </p> </div> </div> </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardBlog.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const englishBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("en/");
  });
  const blogPosts = englishBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  blogPosts[0];
  blogPosts.slice(1);
  const title = "Peshawari Chappal Style Guide & Heritage";
  const subTitle = "Discover the rich heritage of Peshawari Chappals, styling tips, leather care guides, and the artistry behind Pakistan's most iconic footwear. Your go-to resource for all things related to traditional Pashtun sandals.";
  const pageTitle = `Blog | ${SITE.title}`;
  const metaDescription = "Discover Peshawari Chappal styling tips, care guides, and cultural heritage. Learn about traditional Pakistani footwear craftsmanship.";
  const ogTitle = "Peshawari Chappal Blog | Style & Heritage";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://peshawarichappal.store/blog",
    url: "https://peshawarichappal.store/blog",
    name: "Blog | Peshawari Chappal",
    description: "Discover Peshawari Chappal styling tips, care guides, and cultural heritage. Learn about traditional Pakistani footwear craftsmanship.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://peshawarichappal.store",
      name: "Peshawari Chappal",
      description: "Authentic handcrafted Peshawari Chappals made with premium leather. Traditional Pakistani footwear crafted for comfort and style."
    },
    inLanguage: "en-US"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full">  <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-4xl font-bold tracking-tight text-balance text-neutral-800 md:text-5xl lg:text-6xl dark:text-neutral-200"> ${title} </h1> <p class="mt-4 text-lg text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="grid gap-6 lg:grid-cols-2 lg:grid-cols-3"> ${blogPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry })}`)} </div> </section> ` })}`;
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
