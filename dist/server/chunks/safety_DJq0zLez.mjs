import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { $ as $$Card, c as $$LinkCard, a as $$CardGrid } from './Code_CCXbePkK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Safety Protocols and Procedures",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Safety Protocols",
    "order": 3
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Safety is at the core of everything we do at ScrewFast. Our comprehensive safety protocols and procedures are designed to protect our team, clients, and the integrity of your project."
    }), "\n", createVNode($$Card, {
      title: "Key features of our safety commitment include:"
    }), "\n", createVNode($$LinkCard, {
      title: "Rigorous safety training for all personnel",
      href: "/guides/getting-started"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Regular safety audits and compliance checks",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Emergency response plans and drills",
        href: "/guides/getting-started"
      })]
    }), "\n", createVNode(_components.p, {
      children: "By integrating safety into our daily operations, we create a secure working environment without compromising on quality and productivity."
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

const url = "src/content/docs/construction/safety.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/construction/safety.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/construction/safety.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
