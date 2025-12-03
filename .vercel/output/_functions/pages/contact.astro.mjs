import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_2j5aXtNi.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `Contact | ${SITE.title}`;
  const metaDescription = "Have questions about our Peshawari Chappals? Reach out for sizing help, custom orders, or bulk inquiries. We're here to help you find the perfect handcrafted leather sandals.";
  const ogTitle = "Contact Us | Peshawari Chappal";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://peshawarichappal.store/contact",
    url: "https://peshawarichappal.store/contact",
    name: "Contact Us | Peshawari Chappal",
    description: "Have questions about our Peshawari Chappals? Reach out for sizing help, custom orders, or bulk inquiries. We're here to help you find the perfect handcrafted leather sandals.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://peshawarichappal.store",
      name: "Peshawari Chappal",
      description: "Authentic handcrafted Peshawari Chappals made with premium leather. Traditional Pakistani footwear crafted for comfort and style."
    },
    inLanguage: "en-US"
  } }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"> <!-- Background Pattern --> <div class="absolute inset-0 opacity-5"> <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none"> <defs> <pattern id="contact-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> <circle cx="10" cy="10" r="1" fill="currentColor"></circle> </pattern> </defs> <rect width="100%" height="100%" fill="url(#contact-pattern)"></rect> </svg> </div> <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> <div class="text-center"> <h1 class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
Get in <span class="text-orange-600">Touch</span> </h1> <p class="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
Have questions about our Peshawari Chappals? Need help with sizing, custom orders, or care tips?
          We're here to help you find the perfect pair of traditional Pakistani footwear.
</p> </div> </div> </section>  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> <!-- Email Contact --> <div class="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"> <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-100 opacity-20 transition-all duration-300 group-hover:scale-110 dark:bg-orange-900/20"></div> <div class="relative"> <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30"> <svg class="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path> </svg> </div> <h3 class="mb-2 text-xl font-bold text-neutral-900 dark:text-white">Email Us</h3> <p class="mb-4 text-neutral-600 dark:text-neutral-300">
Prefer the written word? Drop us an email and we'll get back to you within 24 hours.
</p> <a href="mailto:info@khyberwear.com" class="inline-flex items-center gap-2 text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"> <span class="font-medium">info@khyberwear.com</span> <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path> </svg> </a> </div> </div> <!-- Phone Contact --> <div class="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"> <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-100 opacity-20 transition-all duration-300 group-hover:scale-110 dark:bg-blue-900/20"></div> <div class="relative"> <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path> </svg> </div> <h3 class="mb-2 text-xl font-bold text-neutral-900 dark:text-white">Call/WhatsApp Us</h3> <p class="mb-4 text-neutral-600 dark:text-neutral-300">
Need immediate assistance? Give us a call or WhatsApp during business hours for instant support.
</p> <a href="tel:+923018768666" class="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"> <span class="font-medium">+92 301 876 8666</span> <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path> </svg> </a> </div> </div> <!-- Visit Us --> <div class="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800 md:col-span-2 lg:col-span-1"> <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-100 opacity-20 transition-all duration-300 group-hover:scale-110 dark:bg-green-900/20"></div> <div class="relative"> <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30"> <svg class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.458-7.5 11.458s-7.5-4.316-7.5-11.458a7.5 7.5 0 1115 0z"></path> </svg> </div> <h3 class="mb-2 text-xl font-bold text-neutral-900 dark:text-white">Visit Our Store</h3> <p class="mb-4 text-neutral-600 dark:text-neutral-300">
Experience our collection in person at our  showroom. Traditional craftsmanship awaits.
</p> <div class="space-y-2"> <p class="text-sm font-medium text-neutral-900 dark:text-white">Khyberwear</p> <p class="text-sm text-neutral-600 dark:text-neutral-300">Charsadda, Pakistan</p> </div> </div> </div> </div> </section>  <section class="bg-neutral-50 dark:bg-neutral-800/50"> <div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> <div class="text-center"> <h2 class="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
Frequently Asked Questions
</h2> <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
Quick answers to common questions about our Peshawari Chappals
</p> </div> <div class="mt-12 space-y-6"> <div class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800"> <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">How do I find my correct size?</h3> <p class="mt-2 text-neutral-600 dark:text-neutral-300">
We recommend measuring your foot length and comparing it with our size chart. If you're between sizes, we suggest going up a size for comfort.
</p> </div> <div class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800"> <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">Do you offer custom orders?</h3> <p class="mt-2 text-neutral-600 dark:text-neutral-300">
Yes! We specialize in custom orders. Contact us with your specifications, and our artisans will create your perfect pair of Peshawari Chappals.
</p> </div> <div class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800"> <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">How should I care for my Chappals?</h3> <p class="mt-2 text-neutral-600 dark:text-neutral-300">
Clean with a soft brush and mild soap. Apply leather conditioner regularly. Store in a cool, dry place away from direct sunlight.
</p> </div> <div class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800"> <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">Do you ship internationally?</h3> <p class="mt-2 text-neutral-600 dark:text-neutral-300">
Yes, we ship worldwide! International shipping costs vary by location. Contact us for a shipping quote to your country.
</p> </div> </div> </div> </section>  <section class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> <div class="text-center"> <h2 class="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
Business Hours
</h2> <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
We're here to serve you during these hours
</p> </div> <div class="mt-12 grid gap-6 md:grid-cols-2"> <div class="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-lg dark:border-neutral-700 dark:bg-neutral-800"> <h3 class="text-xl font-bold text-neutral-900 dark:text-white">Store Hours</h3> <div class="mt-6 space-y-3"> <div class="flex justify-between"> <span class="text-neutral-600 dark:text-neutral-300">Monday - Friday</span> <span class="font-medium text-neutral-900 dark:text-white">9:00 AM - 6:00 PM</span> </div> <div class="flex justify-between"> <span class="text-neutral-600 dark:text-neutral-300">Saturday</span> <span class="font-medium text-neutral-900 dark:text-white">10:00 AM - 4:00 PM</span> </div> <div class="flex justify-between"> <span class="text-neutral-600 dark:text-neutral-300">Sunday</span> <span class="font-medium text-neutral-900 dark:text-white">Closed</span> </div> </div> </div> <div class="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-lg dark:border-neutral-700 dark:bg-neutral-800"> <h3 class="text-xl font-bold text-neutral-900 dark:text-white">Customer Support</h3> <div class="mt-6 space-y-3"> <div class="flex justify-between"> <span class="text-neutral-600 dark:text-neutral-300">Email Response</span> <span class="font-medium text-neutral-900 dark:text-white">Within 24 hours</span> </div> <div class="flex justify-between"> <span class="text-neutral-600 dark:text-neutral-300">Phone Support</span> <span class="font-medium text-neutral-900 dark:text-white">Mon-Fri 9AM-5PM</span> </div> <div class="flex justify-between"> <span class="text-neutral-600 dark:text-neutral-300">Live Chat</span> <span class="font-medium text-neutral-900 dark:text-white">Coming Soon</span> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/contact.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
