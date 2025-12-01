import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_DBfT0kDc.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast 服务介绍",
  "description": "探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "服务概述",
    "text": "服务概述"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h2: "h2",
    p: "p",
    path: "path",
    span: "span",
    svg: "svg",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "作为我们致力于为您的所有建筑和硬件需求提供端到端解决方案的一部分，我们在 ScrewFast 自豪地提供一套全面的专业服务。从最初的咨询到最终的验收，我们多方位的服务涵盖了您项目的全部，确保质量的结果和客户满意度。本文档的本节将指导您了解如何充分利用我们的专业知识。"
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "服务概述",
        children: "服务概述"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#服务概述",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          children: "Section titled “服务概述”"
        })]
      })]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "定制解决方案",
        children: createVNode(_components.p, {
          children: "每个建筑项目都带来了独特的挑战和需求。在 ScrewFast，我们定制我们的服务以满足您的特定需求，确保无论您的项目规模或复杂程度如何，我们的团队都能以精确和专业的方式处理。"
        })
      }), createVNode($$TabItem, {
        label: "专业团队",
        children: createVNode(_components.p, {
          children: "利用我们熟练员工的技能，从建筑师和工程师到熟练的劳动者，每个人都为将您的愿景变为现实做出了贡献。"
        })
      }), createVNode($$TabItem, {
        label: "质量承诺",
        children: createVNode(_components.p, {
          children: "质量是我们做的一切的核心。我们采用严格的质量控制措施，确保我们交付的工作符合甚至超出行业标准。"
        })
      }), createVNode($$TabItem, {
        label: "持续支持",
        children: createVNode(_components.p, {
          children: "我们与客户的关系在项目完成后并不结束。我们提供持续支持，以解决任何问题，并确保您对投资的持久满意度。"
        })
      })]
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

const url = "src/content/docs/zh-cn/guides/intro.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/zh-cn/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/zh-cn/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
