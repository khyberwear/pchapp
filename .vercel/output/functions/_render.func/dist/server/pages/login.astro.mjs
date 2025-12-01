import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, q as renderSlot, d as renderComponent, F as Fragment, u as unescapeHTML, e as renderScript } from '../chunks/astro/server_DLiYjd8-.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_CpB-AcgO.mjs';
import 'clsx';
import { $ as $$AuthBtn } from '../chunks/AuthBtn_Byv4S58r.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://peshawarichappal.store");
const $$EmailInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EmailInput;
  const { label = "Email address", id, errorId } = Astro2.props;
  return renderTemplate`<!-- Container for the label, input, and validation message -->${maybeRenderHead()}<div> <!-- Label for the email input field --> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> <!-- Label for the email input field --> <div class="relative"> <!-- Email input field --> <input type="email"${addAttribute(id, "id")} name="email" autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(id, "aria-describedby")}> <!-- Hidden error icon --> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <!-- Validation message which is hidden by default --> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}>
Please include a valid email address so we can get back to you
</p> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/forms/input/EmailInput.astro", void 0);

const $$Astro$2 = createAstro("https://peshawarichappal.store");
const $$PasswordInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PasswordInput;
  const {
    label = "Password",
    forgot,
    id,
    errorId,
    content
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex items-center justify-between"> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> ${forgot ? renderTemplate`<button class="rounded-lg text-sm font-medium text-orange-400 decoration-2 outline-hidden ring-zinc-500 hover:underline focus-visible:ring-3 dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-hidden dark:focus:ring-1" data-hs-overlay="#hs-toggle-between-modals-recover-modal">
Forgot password?
</button>` : ""} </div> <div class="relative"> <input type="password"${addAttribute(id, "id")} name="password" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(errorId, "aria-describedby")}> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}> ${content} </p> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/forms/input/PasswordInput.astro", void 0);

const $$Astro$1 = createAstro("https://peshawarichappal.store");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { label = "Remember me", id } = Astro2.props;
  return renderTemplate`<!-- Container for the checkbox and its label -->${maybeRenderHead()}<div class="flex items-center"> <!-- Checkbox input --> <div class="flex"> <input${addAttribute(id, "id")} name="remember-me" type="checkbox" class="pointer-events-none mt-0.5 shrink-0 rounded-sm border-neutral-200 text-neutral-600 focus:ring-yellow-400 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-yellow-400 dark:checked:bg-yellow-400 dark:focus:ring-offset-neutral-800"> </div> <!-- Label for the checkbox --> <div class="ms-3"> <label${addAttribute(id, "for")} class="text-sm text-neutral-800 dark:text-neutral-200">${label} ${renderSlot($$result, $$slots["default"])} </label> </div> </div>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/forms/input/Checkbox.astro", void 0);

const $$Astro = createAstro("https://peshawarichappal.store");
const $$GoogleBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GoogleBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm dark:text-neutral-400 font-medium text-neutral-600 shadow-xs transition duration-300 focus-visible:ring-3 outline-hidden";
  const borderClasses = "border border-neutral-200 dark:border-neutral-700";
  const bgColorClasses = "bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  const googleSVG = `<svg
    class="h-auto w-4"
    width="46"
    height="47"
    viewBox="0 0 46 47"
    fill="none"
  >
    <path
      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
      fill="#4285F4"></path>
    <path
      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
      fill="#34A853"></path>
    <path
      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
      fill="#FBBC05"></path>
    <path
      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
      fill="#EB4335"></path>
  </svg>`;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${ringClasses}`, "class")}> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(googleSVG)}` })} ${title} </button>`;
}, "/Users/atifjan/PC/pchapp/src/components/ui/buttons/GoogleBtn.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" data-astro-cid-sgpqyurt> <div class="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8" data-astro-cid-sgpqyurt> <div class="w-full max-w-md" data-astro-cid-sgpqyurt> <!-- Back to Home Link --> <a href="/" class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-orange-500 dark:text-neutral-400 dark:hover:text-orange-400" data-astro-cid-sgpqyurt> <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" data-astro-cid-sgpqyurt> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" data-astro-cid-sgpqyurt></path> </svg>
Back to Home
</a> <!-- Login Card --> <div class="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-xl shadow-orange-100/50 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-900/50" data-astro-cid-sgpqyurt> <!-- Header --> <div class="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-8 text-center" data-astro-cid-sgpqyurt> <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm" data-astro-cid-sgpqyurt> <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" data-astro-cid-sgpqyurt> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" data-astro-cid-sgpqyurt></path> </svg> </div> <h1 class="text-2xl font-bold text-white" data-astro-cid-sgpqyurt>Welcome Back</h1> <p class="mt-2 text-orange-100" data-astro-cid-sgpqyurt>Sign in to your account</p> </div> <!-- Form Content --> <div class="p-6 sm:p-8" data-astro-cid-sgpqyurt> <!-- Tab Navigation --> <div class="mb-6 flex rounded-xl bg-neutral-100 p-1 dark:bg-neutral-700" id="auth-tabs" data-astro-cid-sgpqyurt> <button type="button" class="auth-tab active flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all" data-tab="login" data-astro-cid-sgpqyurt>
Sign In
</button> <button type="button" class="auth-tab flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all" data-tab="register" data-astro-cid-sgpqyurt>
Sign Up
</button> </div> <!-- Login Form --> <div id="login-form-container" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "GoogleBtn", $$GoogleBtn, { "title": "Sign in with Google", "data-astro-cid-sgpqyurt": true })} <div class="my-6 flex items-center text-xs uppercase text-neutral-400 before:me-4 before:flex-1 before:border-t before:border-neutral-200 after:ms-4 after:flex-1 after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600" data-astro-cid-sgpqyurt>
Or continue with email
</div> <form id="login-form" class="space-y-4" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "EmailInput", $$EmailInput, { "id": "login-email", "errorId": "login-email-error", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "PasswordInput", $$PasswordInput, { "forgot": true, "id": "login-password", "errorId": "login-password-error", "content": "8+ characters required", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "Checkbox", $$Checkbox, { "id": "remember-me", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "AuthBtn", $$AuthBtn, { "title": "Sign in", "data-astro-cid-sgpqyurt": true })} </form> </div> <!-- Register Form --> <div id="register-form-container" class="hidden" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "GoogleBtn", $$GoogleBtn, { "title": "Sign up with Google", "data-astro-cid-sgpqyurt": true })} <div class="my-6 flex items-center text-xs uppercase text-neutral-400 before:me-4 before:flex-1 before:border-t before:border-neutral-200 after:ms-4 after:flex-1 after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600" data-astro-cid-sgpqyurt>
Or continue with email
</div> <form id="register-form" class="space-y-4" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "EmailInput", $$EmailInput, { "id": "register-email", "errorId": "register-email-error", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "PasswordInput", $$PasswordInput, { "id": "create-password", "errorId": "register-password-error", "content": "8+ characters required", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "PasswordInput", $$PasswordInput, { "label": "Confirm Password", "id": "confirm-password", "errorId": "confirm-password-error", "content": "Password does not match", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "Checkbox", $$Checkbox, { "label": "I accept the ", "id": "terms-agree", "data-astro-cid-sgpqyurt": true }, { "default": ($$result3) => renderTemplate` <a class="font-medium text-orange-500 hover:underline dark:text-orange-400" href="#" data-astro-cid-sgpqyurt>Terms and Conditions</a> ` })} ${renderComponent($$result2, "AuthBtn", $$AuthBtn, { "title": "Create Account", "data-astro-cid-sgpqyurt": true })} </form> </div> <!-- Forgot Password Form --> <div id="recover-form-container" class="hidden" data-astro-cid-sgpqyurt> <div class="mb-6 text-center" data-astro-cid-sgpqyurt> <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30" data-astro-cid-sgpqyurt> <svg class="h-6 w-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" data-astro-cid-sgpqyurt> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-astro-cid-sgpqyurt></path> </svg> </div> <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200" data-astro-cid-sgpqyurt>Forgot Password?</h3> <p class="mt-1 text-sm text-neutral-500 dark:text-neutral-400" data-astro-cid-sgpqyurt>Enter your email to reset your password</p> </div> <form id="recover-form" class="space-y-4" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "EmailInput", $$EmailInput, { "id": "recover-email", "errorId": "recover-email-error", "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result2, "AuthBtn", $$AuthBtn, { "title": "Send Reset Link", "data-astro-cid-sgpqyurt": true })} </form> <button type="button" id="back-to-login" class="mt-4 w-full text-center text-sm font-medium text-orange-500 hover:underline dark:text-orange-400" data-astro-cid-sgpqyurt>
Back to Sign In
</button> </div> </div> </div> <!-- Footer Text --> <p class="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400" data-astro-cid-sgpqyurt>
By signing in, you agree to our
<a href="#" class="text-orange-500 hover:underline" data-astro-cid-sgpqyurt>Privacy Policy</a>
and
<a href="#" class="text-orange-500 hover:underline" data-astro-cid-sgpqyurt>Terms of Service</a> </p> </div> </div> </section> ` })}  ${renderScript($$result, "/Users/atifjan/PC/pchapp/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/atifjan/PC/pchapp/src/pages/login.astro", void 0);

const $$file = "/Users/atifjan/PC/pchapp/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
