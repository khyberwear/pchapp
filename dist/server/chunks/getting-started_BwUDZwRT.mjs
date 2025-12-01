import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { a as $$CardGrid, $ as $$Card, c as $$LinkCard, b as $$Steps, d as $$Aside } from './Code_C2dWR6BV.mjs';
import 'clsx';

const frontmatter = {
  "title": "入门指南",
  "description": "探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "工具概述",
    "text": "工具概述"
  }, {
    "depth": 2,
    "slug": "设置说明",
    "text": "设置说明"
  }, {
    "depth": 2,
    "slug": "清洁和维护",
    "text": "清洁和维护"
  }, {
    "depth": 2,
    "slug": "额外资源",
    "text": "额外资源"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    path: "path",
    span: "span",
    svg: "svg",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "欢迎来到 ScrewFast 文档！我们很高兴能帮助您开始使用我们的优质工具。本指南旨在介绍我们的工具范围，帮助您了解基础知识，并为您的第一个项目做好准备。让我们立即进入高质量、可靠的工艺世界，与 ScrewFast 一起。"
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "工具概述",
        children: "工具概述"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#工具概述",
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
          children: "Section titled “工具概述”"
        })]
      })]
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "螺丝刀套装",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "多功能且符合人体工程学设计，适用于各种螺丝类型。"
        }), createVNode($$LinkCard, {
          title: "了解更多 ",
          href: "zh-cn/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "电钻锤",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "强大的钻孔和冲击驱动性能。"
        }), createVNode($$LinkCard, {
          title: "了解更多 ",
          href: "zh-cn/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "电动锯",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "可调节设置，精准切割各种材料。"
        }), createVNode($$LinkCard, {
          title: "了解更多 ",
          href: "zh-cn/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "设置说明",
        children: "设置说明"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#设置说明",
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
          children: "Section titled “设置说明”"
        })]
      })]
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "解包图标 打开 ScrewFast 工具包\n小心打开包装，并确认所有零件齐全。熟悉工具及任何附件。"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "安全检查图标 初始设置和安全检查\n在处理工具之前阅读安全手册。检查工具是否有运输损坏，并确保安全保护装置已安装到位。"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "校准图标 校准和准备首次使用\n按照制造商的说明校准您的工具。确保电池已充电或电气连接安全可靠。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "清洁和维护",
        children: "清洁和维护"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#清洁和维护",
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
          children: "Section titled “清洁和维护”"
        })]
      })]
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "清洁前务必拔掉工具插头。使用软、干的布擦拭外部，并存放在干燥的地方。"
      })
    }), "\n", createVNode(_components.p, {
      children: "定期维护可确保工具的长期使用和安全性。每次使用后清洁工具，检查磨损，并按照工具手册中规定的方式润滑移动部件。"
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "额外资源",
        children: "额外资源"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#额外资源",
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
          children: "Section titled “额外资源”"
        })]
      })]
    }), "\n", createVNode($$LinkCard, {
      title: "深入教程",
      description: "深入了解如何使用我们的工具，由专家提供教程。",
      href: "zh-cn/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "视频演示",
      description: "视觉指南，帮助您充分利用我们的工具。",
      href: "zh-cn/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "保修信息",
      description: "了解您的保修范围，以及如何提出索赔。",
      href: "zh-cn/guides/getting-started"
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

const url = "src/content/docs/zh-cn/guides/getting-started.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/zh-cn/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/zh-cn/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
