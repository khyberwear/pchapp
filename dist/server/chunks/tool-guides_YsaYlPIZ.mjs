import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tool Guides",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Tool Guides",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tool-guides",
    "text": "Tool Guides"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h3: "h3",
    li: "li",
    p: "p",
    path: "path",
    span: "span",
    strong: "strong",
    svg: "svg",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "ScrewFast prides itself on a comprehensive range of high-grade tools and equipment. These resources are not just about delivering the performance you expect but ensuring they stand the test of time. Below, you will find a curated selection of guides geared towards helping you get the most out of our products."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "tool-guides",
        children: "Tool Guides"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#tool-guides",
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
          children: "Section titled “Tool Guides”"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Machine Screws Manual"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Detailed specifications and applications for ScrewFast’s variety of machine screws"
      }), "\n", createVNode(_components.li, {
        children: "Visual guide for identifying screw types and choosing the right one for your project"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Assorted Screw Set Handbook"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Instructions on usage and selection from the assorted screw set"
      }), "\n", createVNode(_components.li, {
        children: "Tips on organizing and storing your screw set for easy access"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Tap Bolts and Nuts Catalog"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Exploring the diverse range of tap bolts and nuts suitable for various construction environments"
      }), "\n", createVNode(_components.li, {
        children: "Guidelines for selecting the correct bolt size and nut pairing for secure fastening"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Hex Bolts Instructions"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Comprehensive procedures on the use of hex bolts in your projects"
      }), "\n", createVNode(_components.li, {
        children: "Strength ratings, threading information, and torque recommendations"
      }), "\n"]
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

const url = "src/content/docs/tools/tool-guides.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/tools/tool-guides.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/tools/tool-guides.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
