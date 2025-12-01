import { a as createComponent, d as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CHNLwNGm.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DqtqoQYv.mjs';
export { renderers } from '../renderers.mjs';

const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `Checkout | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="rounded-xl border bg-white p-4 shadow-sm sm:p-7 dark:border-neutral-700 dark:bg-neutral-900"> <div class="text-center mb-8"> <h2 class="text-2xl font-bold text-gray-800 dark:text-neutral-200">
Checkout
</h2> <p class="text-sm text-gray-600 dark:text-neutral-400">
Complete your order
</p> </div> <form id="checkout-form"> <div class="grid gap-y-4"> <!-- Personal Info --> <div> <label for="full-name" class="block text-sm mb-2 dark:text-white">Full Name</label> <input type="text" id="full-name" name="full-name" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required> </div> <div> <label for="email" class="block text-sm mb-2 dark:text-white">Email Address</label> <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required> </div> <div> <label for="address" class="block text-sm mb-2 dark:text-white">Shipping Address</label> <textarea id="address" name="address" rows="3" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required></textarea> </div> <!-- Order Summary --> <div class="border-t border-gray-200 pt-4 dark:border-neutral-700"> <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-4">Order Summary</h3> <div id="order-items" class="space-y-2 mb-4"> <!-- Items injected here --> </div> <div class="flex justify-between font-bold text-gray-800 dark:text-neutral-200"> <span>Total</span> <span id="order-total">$0.00</span> </div> </div> <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
Place Order
</button> </div> </form> </div> </section> ` })} ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/checkout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/pages/checkout.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
