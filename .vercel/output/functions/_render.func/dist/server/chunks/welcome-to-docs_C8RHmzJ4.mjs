import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
/* empty css                                  */
import { $ as $$Card, a as $$CardGrid } from './Code_C2dWR6BV.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "مرکز اسناد",
    "tagline": "مرکز مرکزی شما برای راهنمایی ساده‌سازی شده ابزار، اسناد خدمات تفصیلی و پشتیبانی پروژه.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/fa/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "variant": "minimal",
      "link": "https://github.com/mearashadowfax/ScrewFast"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "راهنمای شروع سریع",
      icon: "document",
      children: createVNode(_components.p, {
        children: "با راهنماهای مستقیم و مختصر ما، برای کاربران جدید و کارشناسان تجربه‌یافته، به سرعت به راه بیافتید."
      })
    }), createVNode($$Card, {
      title: "ابزارها و تجهیزات",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "تمامی ابزارها و تجهیزات با کیفیت برتر شرکت ScrewFast را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است."
      })
    }), createVNode($$Card, {
      title: "خدمات ساخت و ساز",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "تمامی ابزارها و تجهیزات با کیفیت برتر شرکت ScrewFast را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است."
      })
    }), createVNode($$Card, {
      title: "مباحث پیشرفته",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "تمامی ابزارها و تجهیزات با کیفیت برتر شرکت ScrewFast را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/docs/fa/welcome-to-docs.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/fa/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/fa/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
