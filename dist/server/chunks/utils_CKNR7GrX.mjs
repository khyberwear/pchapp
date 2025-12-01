import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://screwfast.uk");
const $$AvatarBlogLarge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AvatarBlogLarge;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-10 rounded-full sm:h-14 sm:w-14"${addAttribute(typeof blogEntry.data.authorImage === "string" ? blogEntry.data.authorImage : blogEntry.data.authorImage.src, "src")}${addAttribute(blogEntry.data.authorImageAlt, "alt")}${addAttribute(false, "draggable")}> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/avatars/AvatarBlogLarge.astro", void 0);

function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { $$AvatarBlogLarge as $, capitalize as c, formatDate as f };
