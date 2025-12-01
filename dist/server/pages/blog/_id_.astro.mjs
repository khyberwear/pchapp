import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, r as renderComponent, e as renderScript, F as Fragment } from '../../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { $ as $$Icon, S as SITE, a as $$MainLayout } from '../../chunks/MainLayout_twjl8UOv.mjs';
import 'clsx';
import { f as formatDate, c as capitalize } from '../../chunks/utils_875MjSoU.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Bs25cIIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$4 = createAstro("https://peshawarichappal.store");
const $$AvatarBlogLarge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AvatarBlogLarge;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-10 rounded-full sm:h-14 sm:w-14"${addAttribute(typeof blogEntry.data.authorImage === "string" ? blogEntry.data.authorImage : blogEntry.data.authorImage.src, "src")}${addAttribute(blogEntry.data.authorImageAlt, "alt")}${addAttribute(false, "draggable")}> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/avatars/AvatarBlogLarge.astro", void 0);

const $$Astro$3 = createAstro("https://peshawarichappal.store");
const $$CardRelated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardRelated;
  const { blogEntry, recentBlogLocale = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group block rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch> <div> <img class="aspect-video rounded-xl"${addAttribute(typeof blogEntry.data.cardImage === "string" ? blogEntry.data.cardImage : blogEntry.data.cardImage.src, "src")}${addAttribute(blogEntry.data.cardImageAlt, "alt")}${addAttribute(false, "draggable")}> <!-- The title of the blog post --> <h3 class="mt-2 text-balance text-lg font-medium text-neutral-800 group-hover:text-orange-400 dark:text-neutral-300 dark:group-hover:text-neutral-50"> ${blogEntry.data.title} </h3> <!-- The formatted publication date of the blog post --> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${formatDate(blogEntry.data.pubDate)} </p> </div></a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardRelated.astro", void 0);

const $$Bookmark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="button" class="focus-visible:ring-secondary group inline-flex items-center rounded-lg p-2.5 text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-1 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700" data-bookmark-button="bookmark-button"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bookmark" })} </button> ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/Bookmark.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/Bookmark.astro", void 0);

const $$Astro$2 = createAstro("https://peshawarichappal.store");
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const {
    pageTitle,
    title = "Share"
  } = Astro2.props;
  const encoded_url = encodeURIComponent(Astro2.url.href);
  const socialPlatforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encoded_url}`,
      svg: "facebook"
    },
    {
      name: "X",
      url: `https://twitter.com/intent/tweet?url=${encoded_url}&text=${pageTitle}`,
      svg: "x"
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded_url}&title=${pageTitle}`,
      svg: "linkedIn"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:top-left]"> <button id="hs-dropup" type="button" class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-100 hover:text-neutral-700 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:outline-hidden"> ${renderComponent($$result, "Icon", $$Icon, { "name": "share" })} ${title} </button> <div class="hs-dropdown-menu duration z-10 hidden w-72 divide-y divide-neutral-200 rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800" aria-labelledby="hs-dropup"> <div class="py-2 first:pt-0 last:pb-0"> ${socialPlatforms.map((platform) => renderTemplate`<a class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100  focus:outline-hidden dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 "${addAttribute(platform.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Share on ${platform.name}`, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": platform.svg })}
Share on ${platform.name} </a>`)} </div> <div class="py-2 first:pt-0 last:pb-0"> <button type="button" class="js-clipboard hover:text-dark focus-visible:ring-secondary group inline-flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100 focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-1 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" data-clipboard-success-text="Copied"> <svg class="js-clipboard-default h-4 w-4 transition group-hover:rotate-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path> </svg> <svg class="js-clipboard-success hidden h-4 w-4 text-neutral-700 dark:text-neutral-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="js-clipboard-success-text">Copy link</span> </button> </div> </div> </div> <!--Import the necessary Clipboard plugin--> <!-- https://clipboardjs.com/ --> ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/SocialShare.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/SocialShare.astro", void 0);

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$PostFeedback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostFeedback;
  const { title, firstChoice, secondChoice } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-12 flex items-center justify-center gap-x-2"> <h3 class="text-neutral-700 dark:text-neutral-300">${title}</h3> <button type="button" class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 hover:border-yellow-500 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-500 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-yellow-500 dark:hover:text-neutral-700 dark:hover:border-yellow-500 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600"> <svg class="size-4 shrink-0 transition duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg> ${firstChoice} </button> <button type="button" class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-400/30 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-700/60 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600"> <svg class="size-4 shrink-0 transition duration-300 group-hover:translate-y-1 group-focus-visible:translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path></svg> ${secondChoice} </button> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/feedback/PostFeedback.astro", void 0);

const $$Astro = createAstro("https://peshawarichappal.store");
const prerender = true;
async function getStaticPaths() {
  const blogPosts = await getCollection(
    "blog",
    ({ id }) => id.startsWith("en/")
  );
  return blogPosts.map((post) => {
    const idWithoutLang = post.id.replace(/^en\//, "");
    return {
      params: { id: idWithoutLang },
      props: { post }
    };
  });
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const blogPosts = await getCollection(
    "blog",
    ({ id }) => id.startsWith("en/")
  );
  const relatedPosts = blogPosts.filter(
    (blogEntry) => blogEntry.id !== post.id
  );
  const pageTitle = `${post.data.title} | ${SITE.title}`;
  const metaDescription = post.data.contents[0] || `Read ${post.data.title} on Peshawari Chappal's blog`;
  const ogTitle = `${post.data.title} | Blog | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    image: post.data.cardImage.src,
    datePublished: post.data.pubDate.toISOString(),
    author: {
      "@type": "Person",
      name: post.data.author
    },
    publisher: {
      "@type": "Organization",
      name: SITE.title,
      logo: {
        "@type": "ImageObject",
        url: "https://peshawarichappal.store/favicon.ico"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://peshawarichappal.store/blog/${post.id.replace(/^en\//, "")}`
    }
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 pt-6 pb-12 sm:px-6 lg:px-8 lg:pt-10"> <div class="max-w-2xl"> <div class="mb-6 flex items-center justify-between"> <div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3"> ${renderComponent($$result2, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": post })} <div class="grow"> <div class="flex items-center justify-between gap-x-2"> <div>  <span class="font-bold text-neutral-700 dark:text-neutral-300"> ${post.data.author} </span> <ul class="text-xs text-neutral-500"> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${formatDate(post.data.pubDate)} </li> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${post.data.readTime} min read
</li> </ul> </div> </div> </div> </div> </div>  <h2 class="mb-3 text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-200"> ${post.data.title} </h2>  <div class="mb-5 space-y-5 md:mb-8 md:space-y-8"> ${post.data.contents.map(
    (content, index) => index === 1 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <p class="text-lg text-pretty text-neutral-700 dark:text-neutral-300"> ${content} </p> <img class="w-full rounded-xl object-cover"${addAttribute(typeof post.data.cardImage === "string" ? post.data.cardImage : post.data.cardImage.src, "src")}${addAttribute(post.data.cardImageAlt, "alt")}${addAttribute(false, "draggable")}> ` })}` : renderTemplate`<p class="text-lg text-pretty text-neutral-700 dark:text-neutral-300"> ${content} </p>`
  )} </div> <div class="mx-auto grid max-w-(--breakpoint-lg) gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-y-0">  <div class="flex flex-wrap gap-x-2 gap-y-1 sm:flex-nowrap sm:items-center sm:gap-y-0"> ${post.data.tags?.map((tag) => renderTemplate`<span class="inline-flex items-center gap-x-1.5 rounded-lg bg-neutral-400/30 px-3 py-1.5 text-xs font-medium text-neutral-700 outline-hidden focus:outline-hidden focus-visible:ring-3 focus-visible:outline-hidden dark:bg-neutral-700/60 dark:text-neutral-300"> ${capitalize(tag)} </span>`)} </div>  <div class="flex items-center justify-end gap-x-1.5"> ${renderComponent($$result2, "Bookmark", $$Bookmark, {})} <div class="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"></div> <div class="inline-flex"> ${renderComponent($$result2, "SocialShare", $$SocialShare, { "pageTitle": post.data.title })} </div> </div> </div> </div> ${renderComponent($$result2, "PostFeedback", $$PostFeedback, { "title": "Was this post helpful?", "firstChoice": "Yes", "secondChoice": "No" })} </section> <section class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mb-10 max-w-2xl"> <h2 class="text-2xl font-bold text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200">
Related articles
</h2> </div> <div class="grid grid-cols-2 gap-6"> ${relatedPosts.map((entry) => renderTemplate`${renderComponent($$result2, "CardRelated", $$CardRelated, { "blogEntry": entry })}`)} </div> </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
