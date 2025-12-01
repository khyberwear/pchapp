import { a as createComponent, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLiYjd8-.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CpB-AcgO.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Thank You | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="rounded-xl border bg-white p-4 shadow-sm sm:p-7 dark:border-neutral-700 dark:bg-neutral-900 text-center"> <div class="mb-8"> <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-5"> <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 6 9 17l-5-5"></path> </svg> </div> <h2 class="text-3xl font-bold text-gray-800 dark:text-neutral-200 mb-2">
Thank You for Your Order!
</h2> <p class="text-gray-600 dark:text-neutral-400">
We have received your order and sent a confirmation email.
</p> </div> <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 dark:bg-neutral-800 dark:border-neutral-700"> <p class="text-sm text-gray-500 dark:text-neutral-400 mb-1">Order Number</p> <p id="order-number-display" class="text-xl font-mono font-bold text-gray-800 dark:text-neutral-200">
Loading...
</p> </div> <div class="flex justify-center gap-3"> <a href="/" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
Continue Shopping
</a> </div> </div> </section> ` })} ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/thank-you.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/pages/thank-you.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
