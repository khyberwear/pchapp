import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B5Ll6kUe.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_C6IBl8V9.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bs25cIIi.mjs';
export { renderers } from '../renderers.mjs';

const $$Sitemap = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `Sitemap | ${SITE.title}`;
  const pageDescription = "Complete sitemap of Peshawari Chappal Store. Find all pages, products, blog articles, and resources. Shop authentic handcrafted Peshawari Chappals from Charsadda, Pakistan.";
  const products = await getCollection("products", ({ id }) => id.startsWith("en/"));
  const blogPosts = await getCollection("blog", ({ id }) => id.startsWith("en/"));
  const mainPages = [
    { name: "Home", url: "/", icon: "home", description: "Welcome to Peshawari Chappal Store" },
    { name: "Products", url: "/products", icon: "products", description: "Browse our chappal collection" },
    { name: "Blog", url: "/blog", icon: "blog", description: "Styling tips & care guides" },
    { name: "Contact", url: "/contact", icon: "contact", description: "Get in touch with us" },
    { name: "Sitemap", url: "/sitemap", icon: "sitemap", description: "Website navigation" }
  ];
  const customerService = [
    { name: "My Account", url: "/settings" },
    { name: "Order Tracking", url: "/settings" },
    { name: "Shopping Cart", url: "/checkout" },
    { name: "Checkout", url: "/checkout" }
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": "https://peshawarichappal.store/sitemap",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": mainPages.map((page, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": page.name,
        "url": `https://peshawarichappal.store${page.url}`
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "Peshawari Chappal Store",
      "url": "https://peshawarichappal.store",
      "logo": "https://peshawarichappal.store/logokw.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-301-8768666",
        "contactType": "customer service",
        "email": "info@khyberwear.com",
        "areaServed": "PK",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Charsadda",
        "addressCountry": "Pakistan"
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": pageDescription, "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 py-16 overflow-hidden"> <!-- Decorative Elements --> <div class="absolute inset-0 overflow-hidden"> <div class="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200/30 dark:bg-yellow-500/10 rounded-full blur-3xl"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-3xl"></div> </div> <div class="relative mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="text-center"> <div class="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path> </svg>
Website Navigation
</div> <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
Sitemap
</h1> <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
Navigate through our complete collection of authentic Peshawari Chappals, blog articles, and helpful resources.
</p> </div> </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8"> <div class="grid gap-8 lg:grid-cols-3"> <!-- Left Column --> <div class="lg:col-span-2 space-y-8"> <!-- Main Pages Card --> <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700"> <div class="bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-4"> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> </div> <h2 class="text-xl font-bold text-white">Main Pages</h2> </div> </div> <div class="p-6"> <div class="grid sm:grid-cols-2 gap-4"> ${mainPages.map((page) => renderTemplate`<a${addAttribute(page.url, "href")} class="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 border border-transparent hover:border-yellow-200 dark:hover:border-yellow-800 transition-all group"> <div class="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40 transition-colors"> <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </div> <span class="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors"> ${page.name} </span> </a>`)} </div> </div> </div> <!-- Products Card --> <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700"> <div class="bg-gradient-to-r from-amber-600 to-orange-500 px-6 py-4"> <div class="flex items-center justify-between"> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg> </div> <h2 class="text-xl font-bold text-white">Our Products</h2> </div> <span class="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm text-white font-medium"> ${products.length} Items
</span> </div> </div> <div class="p-6"> <div class="grid sm:grid-cols-2 gap-3"> ${products.map((product) => renderTemplate`<a${addAttribute(`/products/${product.id.replace(/^en\//, "")}`, "href")} class="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors group"> <div class="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0"> <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </div> <div class="min-w-0"> <span class="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors block truncate"> ${product.data.title} </span> <span class="text-sm text-neutral-500 dark:text-neutral-400">
Handcrafted Chappal
</span> </div> </a>`)} </div> <div class="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700"> <a href="/products" class="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-400 font-medium transition-colors">
View All Products
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> <!-- Blog Posts Card --> <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700"> <div class="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4"> <div class="flex items-center justify-between"> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> </div> <h2 class="text-xl font-bold text-white">Blog & Articles</h2> </div> <span class="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm text-white font-medium"> ${blogPosts.length} Posts
</span> </div> </div> <div class="p-6"> <div class="space-y-3"> ${blogPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id.replace(/^en\//, "")}`, "href")} class="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors group"> <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5"> <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </div> <div class="min-w-0 flex-1"> <span class="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors block"> ${post.data.title} </span> ${post.data.description && renderTemplate`<p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2"> ${post.data.description} </p>`} </div> </a>`)} </div> <div class="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700"> <a href="/blog" class="inline-flex items-center gap-2 text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors">
Read All Articles
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </div> <!-- Right Column - Sidebar --> <div class="space-y-8"> <!-- Customer Service Card --> <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700"> <div class="bg-gradient-to-r from-neutral-700 to-neutral-800 dark:from-neutral-600 dark:to-neutral-700 px-6 py-4"> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <h2 class="text-xl font-bold text-white">Customer Service</h2> </div> </div> <div class="p-6"> <ul class="space-y-2"> ${customerService.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")} class="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors group"> <svg class="w-5 h-5 text-neutral-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-neutral-700 dark:text-neutral-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors"> ${item.name} </span> </a> </li>`)} </ul> </div> </div> <!-- Contact Info Card --> <div class="bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 rounded-2xl shadow-xl overflow-hidden"> <div class="p-6"> <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3"> <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div>
Contact Us
</h2> <div class="space-y-4"> <!-- Address --> <div class="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4"> <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <p class="text-white/70 text-sm font-medium">Address</p> <p class="text-white font-semibold">Charsadda, Pakistan</p> </div> </div> <!-- Email --> <a href="mailto:info@khyberwear.com" class="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/20 transition-colors"> <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <p class="text-white/70 text-sm font-medium">Email</p> <p class="text-white font-semibold">info@khyberwear.com</p> </div> </a> <!-- Phone --> <a href="tel:+923018768666" class="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/20 transition-colors"> <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <p class="text-white/70 text-sm font-medium">Phone</p> <p class="text-white font-semibold">+92 301 8768666</p> </div> </a> </div> <!-- WhatsApp Button --> <a href="https://wa.me/923018768666" target="_blank" class="mt-6 flex items-center justify-center gap-2 bg-white text-amber-600 font-bold py-3 px-6 rounded-xl hover:bg-yellow-50 transition-colors w-full"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Chat on WhatsApp
</a> </div> </div> <!-- Quick Help Card --> <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 p-6"> <div class="text-center"> <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-2">Need Help?</h3> <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
Can't find what you're looking for? Our team is here to assist you.
</p> <a href="/contact" class="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors">
Get in Touch
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </div> </section>  <section class="bg-neutral-100 dark:bg-neutral-900 py-12"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
Explore Authentic Peshawari Chappals
</h2> <p class="text-neutral-600 dark:text-neutral-400 mb-6">
Handcrafted with premium leather, delivered with care across Pakistan
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/products" class="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg>
Shop Now
</a> <a href="/contact" class="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold py-3 px-6 rounded-lg border border-neutral-300 dark:border-neutral-600 transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path> </svg>
Contact Us
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/atifjan/PC/pchapp/src/pages/sitemap.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/sitemap.astro";
const $$url = "/sitemap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sitemap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
