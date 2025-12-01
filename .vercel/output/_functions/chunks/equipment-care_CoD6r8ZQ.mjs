import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { $ as $$Card, c as $$LinkCard, a as $$CardGrid, d as $$Aside } from './Code_C2dWR6BV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Equipment Care & Maintenance",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Equipment Care",
    "order": 2
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Card, {
      title: "Maintaining Your ScrewFast Tools",
      icon: "approve-check-circle",
      children: [createVNode($$LinkCard, {
        description: "Step-by-step guide for the routine care and maintenance of your ScrewFast tools to ensure long-lasting functionality.",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        description: "Cleaning, storage, and inspection practices to keep tools in optimal condition",
        href: "/guides/getting-started"
      })]
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Best Practices for Equipment Longevity",
        icon: "star",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Strategies for extending the life of your tools and equipment through proper use and handling"
          }), "\n", createVNode(_components.li, {
            children: "A preventative maintenance schedule that will help avoid common wear and tear"
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Troubleshooting Common Tool Issues",
        icon: "rocket",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Solutions for frequently encountered issues with ScrewFast equipment"
          }), "\n", createVNode(_components.li, {
            children: "Advice on when to seek professional repair services versus performing DIY fixes"
          }), "\n"]
        })
      })]
    }), "\n", createVNode($$Aside, {
      children: createVNode(_components.p, {
        children: "Remember that attentiveness to the condition and care of your tools and equipment is paramount to ensuring their longevity and reliability. Regular maintenance not only helps prevent downtime but can also ensure the safety of those who use them. For each guide and reference listed here, we offer additional support through our customer service channels should you require personalized assistance."
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

const url = "src/content/docs/tools/equipment-care.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/tools/equipment-care.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/tools/equipment-care.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
