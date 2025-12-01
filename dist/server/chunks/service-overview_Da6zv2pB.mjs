import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { a as $$CardGrid, $ as $$Card } from './Code_C2dWR6BV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Comprehensive Service Overview",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Service Overview",
    "order": 1
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
      children: "Welcome to ScrewFast Construction Services – your trusted partner in bringing complex construction visions to life. Our dedicated team is equipped with state-of-the-art tools and extensive industry knowledge to ensure your projects are completed with precision and efficiency."
    }), "\n", createVNode(_components.p, {
      children: "At ScrewFast, we specialize in providing a range of services tailored to meet your unique construction needs. From the initial concept to the final touches, our services encompass:"
    }), "\n", createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Pre-construction Consultations",
        icon: "star",
        children: createVNode(_components.p, {
          children: "A thorough assessment to understand your project requirements, site conditions, and to provide a clear roadmap for your project."
        })
      }), createVNode($$Card, {
        title: "Design and Engineering",
        icon: "star",
        children: createVNode(_components.p, {
          children: "Leveraging innovative software and expertise to craft bespoke solutions that bring your structural vision to life with accuracy and innovation."
        })
      }), createVNode($$Card, {
        title: "Project Management",
        icon: "star",
        children: createVNode(_components.p, {
          children: "Dedicated on-site leadership to ensure that your project runs smoothly, on time, and within budget."
        })
      }), createVNode($$Card, {
        title: "Construction and Installation",
        icon: "star",
        children: createVNode(_components.p, {
          children: "Employing the latest tools and technologies along with skilled craftsmanship to execute your project to the highest standard."
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

const url = "src/content/docs/construction/service-overview.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/construction/service-overview.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/construction/service-overview.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
