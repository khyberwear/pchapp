import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from './astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate, $ as $$AvatarBlogLarge } from './utils_CKNR7GrX.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_xjF4ANY0.mjs';
import { $ as $$Icon } from './MainLayout_DqtqoQYv.mjs';

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$AvatarBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AvatarBlog;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-[46px] rounded-full border-2 border-neutral-50"${addAttribute(typeof blogEntry.data.authorImage === "string" ? blogEntry.data.authorImage : blogEntry.data.authorImage.src, "src")}${addAttribute(blogEntry.data.authorImageAlt, "alt")}${addAttribute(false, "draggable")}> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/avatars/AvatarBlog.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$CardBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardBlog;
  const { blogEntry, blogLocale = "" } = Astro2.props;
  return renderTemplate`<!-- The following anchor tag is the main container for the card.
     It's a link to the blog post detailed page.
     The data-astro-prefetch is an Astro specific Dynamic HTML feature,
     which automatically prefetches the linked page to speed up navigation. -->${maybeRenderHead()}<a class="group relative block rounded-xl outline-hidden ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(blogLocale && blogLocale !== "en" ? `/${blogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch> <!-- The container for the blog post's cover image. Uses astro:assets' Image for image source --> <div class="relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-neutral-900/[.7]"> <img class="absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110"${addAttribute(typeof blogEntry.data.cardImage === "string" ? blogEntry.data.cardImage : blogEntry.data.cardImage.src, "src")}${addAttribute(blogEntry.data.cardImageAlt, "alt")}${addAttribute(false, "draggable")} loading="eager"> </div> <!-- The container for the blog author's avatar and associated metadata (author name and publication date) --> <div class="absolute inset-x-0 top-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <div class="flex items-center"> ${renderComponent($$result, "AvatarBlog", $$AvatarBlog, { "blogEntry": blogEntry })} <div class="ms-2.5 sm:ms-4"> <h4 class="font-bold text-neutral-50"> ${blogEntry.data.author} </h4> <p class="text-xs text-neutral-50/[.8]"> ${formatDate(blogEntry.data.pubDate)} </p> </div> </div> </div> </div> <!-- The container for the blog post's title and description --> <div class="absolute inset-x-0 bottom-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <h3 class="text-balance text-lg font-bold text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl"> ${blogEntry.data.title} </h3> <p class="mt-2 text-pretty text-neutral-50/[.8]"> ${blogEntry.data.description} </p> </div> </div> </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardBlog.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$CardBlogRecent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardBlogRecent;
  const { blogEntry, recentBlogLocale = "" } = Astro2.props;
  return renderTemplate`<!-- Root container, which is divided into 2 grid column layout for larger screens -->${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 sm:items-center"> <!-- Container for the blog post's cover image --> <div class="sm:order-2"> <div class="relative rounded-lg pt-[50%] sm:pt-[100%]"> <img class="absolute start-0 top-0 size-full rounded-xl object-cover"${addAttribute(typeof blogEntry.data.cardImage === "string" ? blogEntry.data.cardImage : blogEntry.data.cardImage.src, "src")}${addAttribute(blogEntry.data.cardImageAlt, "alt")}${addAttribute(false, "draggable")} loading="eager"> </div> </div> <!-- Container for the blog post's heading, author avatar, author's role, and read more button --> <div class="sm:order-1"> <!-- Blog title which is also a hyperlink to the blog detail page  --> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight"> <a class="outline-hidden ring-zinc-500 transition duration-300 hover:text-orange-400 focus-visible:ring-3 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-50 dark:focus:outline-hidden"${addAttribute(recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "href")}> ${blogEntry.data.description} </a> </h2> <!-- Container for the author's avatar and metadata --> <div class="mt-6 flex items-center sm:mt-10"> ${renderComponent($$result, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": blogEntry })} <div class="ms-3 sm:ms-4"> <p class="font-bold text-neutral-800 dark:text-neutral-200 sm:mb-1"> ${blogEntry.data.author} </p> <p class="text-xs text-neutral-500"> ${blogEntry.data.role} </p> </div> </div> <!-- Read More button which is a link to the blog post detailed page --> <div class="mt-5"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "url": recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "title": "Read More", "data-astro-prefetch": true })} </div> </div> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardBlogRecent.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$CardInsight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInsight;
  const {
    insightEntry,
    insightLocale,
    label = Astro2.currentLocale === "fr" ? "Lire plus" : "Read more"
  } = Astro2.props;
  return renderTemplate`<!-- The anchor tag is the root container for the "Insight" card. It links to the insight detail page. -->${maybeRenderHead()}<a class="group rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(insightLocale && insightLocale !== "en" ? `/${insightLocale}/insights/${insightEntry.id.replace(/^fr\//, "")}/` : `/insights/${insightEntry.id.replace(/^en\//, "")}/`, "href")}> <!-- This is the container for the insight's cover image. --> <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]"> <img class="absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105"${addAttribute(typeof insightEntry.data.cardImage === "string" ? insightEntry.data.cardImage : insightEntry.data.cardImage.src, "src")}${addAttribute(insightEntry.data.cardImageAlt, "alt")}${addAttribute(false, "draggable")}> </div> <!-- This is the container for the insight's title and description. --> <div class="mt-7"> <!-- The title of the insight --> <h3 class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"> ${insightEntry.data.title} </h3> <!-- The description of the insight --> <p class="mt-3 text-neutral-600 dark:text-neutral-400"> ${insightEntry.data.description} </p> <!-- The "Read More" hyperlink going to the full insight. With an arrow icon --> <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-orange-400 decoration-2 group-hover:underline dark:text-orange-300"> ${label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRightStatic" })} </p> </div> </a>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/cards/CardInsight.astro", void 0);

export { $$CardBlog as $, $$CardBlogRecent as a, $$CardInsight as b };
