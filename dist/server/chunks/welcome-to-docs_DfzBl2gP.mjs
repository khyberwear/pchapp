import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
/* empty css                                  */
import { $ as $$Card, a as $$CardGrid } from './Code_CCXbePkK.mjs';
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
    "title": "文档中心",
    "tagline": "您的集中式工具指南、详细服务文档和项目支持中心。",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/zh-cn/guides/getting-started/"
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
      title: "快速入门指南",
      icon: "document",
      children: createVNode(_components.p, {
        children: "通过我们简明扼要的指南，快速掌握使用技巧，适用于新手和老手用户。"
      })
    }), createVNode($$Card, {
      title: "工具与设备",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。"
      })
    }), createVNode($$Card, {
      title: "施工服务",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。"
      })
    }), createVNode($$Card, {
      title: "高级主题",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。"
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
const url = "src/content/docs/zh-cn/welcome-to-docs.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/zh-cn/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/zh-cn/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
