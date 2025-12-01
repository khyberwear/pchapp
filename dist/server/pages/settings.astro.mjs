import { a as createComponent, r as renderComponent, e as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_twjl8UOv.mjs';
export { renderers } from '../renderers.mjs';

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Settings | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900"> <div class="mb-8"> <h2 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
Profile Settings
</h2> <p class="text-sm text-gray-600 dark:text-neutral-400">
Manage your name, password and account settings.
</p> </div> <form> <!-- Grid --> <div class="grid sm:grid-cols-12 gap-2 sm:gap-6"> <div class="sm:col-span-3"> <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
Profile photo
</label> </div> <!-- End Col --> <div class="sm:col-span-9"> <div class="flex items-center gap-5"> <img class="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"> <div class="flex gap-x-2"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
Upload photo
</button> </div> </div> </div> <!-- End Col --> <div class="sm:col-span-3"> <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
Full name
</label> </div> <!-- End Col --> <div class="sm:col-span-9"> <div class="sm:flex"> <input id="af-account-full-name" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Maria"> </div> </div> <!-- End Col --> <div class="sm:col-span-3"> <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
Email
</label> </div> <!-- End Col --> <div class="sm:col-span-9"> <input id="af-account-email" type="email" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="maria@site.com"> </div> <!-- End Col --> </div> <!-- End Grid --> <div class="mt-5 flex justify-end gap-x-2"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
Cancel
</button> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
Save changes
</button> </div> </form> </div> </section> ` })} ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/settings.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/pages/settings.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/settings.astro";
const $$url = "/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
