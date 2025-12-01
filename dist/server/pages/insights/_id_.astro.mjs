import { c as createAstro, a as createComponent, d as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout } from '../../chunks/MainLayout_DqtqoQYv.mjs';
import '../../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Dr7eqbL5.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_47ejiC3q.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const prerender = true;
async function getStaticPaths() {
  const insightPosts = await getCollection(
    "insights",
    ({ id }) => id.startsWith("en/")
  );
  return insightPosts.map((post) => {
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
  const { Content } = await renderEntry(post);
  const pageTitle = `${post.data.title} | ${SITE.title}`;
  const metaDescription = post.data.description;
  const ogTitle = `${post.data.title} | Insights | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    description: metaDescription,
    image: post.data.cardImage.src,
    author: {
      "@type": "Organization",
      name: SITE.title
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
      "@id": `https://peshawarichappal.store/insights/${post.id.replace(/^en\//, "")}`
    }
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 sm:py-8 lg:py-12"> <div class="mx-auto max-w-(--breakpoint-xl) px-4 md:px-8"> <div class="grid gap-8 md:grid-cols-2 lg:gap-12"> <div> <div class="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full object-cover object-center", "src": post.data.cardImage, "alt": post.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div> <div id="progress-mobile" class="fixed top-0 left-0 h-2 w-full bg-linear-to-r from-orange-400/30 to-orange-400 md:hidden"></div> <div id="pin" class="mt-10 hidden space-y-4 md:block"> <div class="h-px w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700"> <div id="progress" class="h-px w-full bg-linear-to-r from-orange-400/30 to-orange-400"></div> </div> <p class="text-sm text-pretty text-neutral-500">
Table of Contents:
</p> <div id="toc" class=""> <ul class="space-y-2 text-base text-pretty text-neutral-700 transition duration-300 dark:text-neutral-400"></ul> </div> </div> </div> <div class="md:pt-8"> <h1 class="mb-4 text-center text-2xl font-bold text-balance text-neutral-800 sm:text-3xl md:mb-6 md:text-left dark:text-neutral-200"> ${post.data.title} </h1> <article class="text-lg text-pretty text-neutral-700 dark:text-neutral-300"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </div> </div> </section> ` })}  ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/insights/[id].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/insights/[id].astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/pages/insights/[id].astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/insights/[id].astro";
const $$url = "/insights/[id]";

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
