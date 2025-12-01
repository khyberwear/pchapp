import { a as createComponent, d as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_p7NdcJfY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `Admin Dashboard | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="flex flex-col"> <div class="-m-1.5 overflow-x-auto"> <div class="p-1.5 min-w-full inline-block align-middle"> <div class="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700"> <div class="py-3 px-4"> <div class="relative max-w-xs"> <label for="hs-table-search" class="sr-only">Search</label> <input type="text" name="hs-table-search" id="hs-table-search" class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search orders"> <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"> <svg class="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> </div> </div> </div> <div class="overflow-hidden"> <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"> <thead class="bg-gray-50 dark:bg-neutral-700"> <tr> <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Order ID</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Customer</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Date</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Total</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Status</th> <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Action</th> </tr> </thead> <tbody id="orders-table-body" class="divide-y divide-gray-200 dark:divide-neutral-700"> <!-- Orders injected here --> </tbody> </table> </div> </div> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/pages/admin/index.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
