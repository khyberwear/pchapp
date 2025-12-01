import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../../chunks/astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout } from '../../chunks/MainLayout_DqtqoQYv.mjs';
import { f as formatDate, $ as $$AvatarBlogLarge, c as capitalize } from '../../chunks/utils_CKNR7GrX.mjs';
import { $ as $$Bookmark, a as $$SocialShare, b as $$PostFeedback, c as $$CardRelated } from '../../chunks/PostFeedback_DzZvuDBg.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DFSLjkgb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
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
