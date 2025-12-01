import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_6smnUOu1.mjs';

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: [{ codes: ["en"], path: "en" }, { codes: ["de"], path: "de" }, { codes: ["es"], path: "es" }, { codes: ["fa"], path: "fa" }, { codes: ["fr"], path: "fr" }, { codes: ["ja"], path: "ja" }, { codes: ["zh-CN"], path: "zh-cn" }], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

export { getRelativeLocaleUrl as g };
