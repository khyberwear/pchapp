import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_CCXbePkK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introducción a los Servicios de ScrewFast",
  "description": "Explora la documentación completa de ScrewFast para obtener una visión detallada de nuestras herramientas premium y servicios de construcción.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "visión-general-de-los-servicios",
    "text": "Visión general de los Servicios"
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
      children: "Como parte de nuestro compromiso de proporcionar una solución integral para todas sus necesidades de construcción y hardware, en ScrewFast nos enorgullecemos de ofrecer una amplia gama de servicios profesionales. Desde consultas iniciales hasta inspecciones finales, nuestros servicios multifacéticos abarcan la totalidad de su proyecto, garantizando resultados de calidad y satisfacción del cliente. Esta sección de la documentación le guiará a través de todo lo que necesita saber para aprovechar al máximo nuestra experiencia."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "visión-general-de-los-servicios",
        children: "Visión general de los Servicios"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#visión-general-de-los-servicios",
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
          children: "Sección titulada «Visión general de los Servicios»"
        })]
      })]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Soluciones Personalizadas",
        children: createVNode(_components.p, {
          children: "Cada proyecto de construcción conlleva sus desafíos y demandas únicas. En ScrewFast, personalizamos nuestros servicios para satisfacer sus necesidades específicas, asegurando que, independientemente de la escala o complejidad de su proyecto, nuestro equipo esté equipado para manejarlo con precisión y profesionalismo."
        })
      }), createVNode($$TabItem, {
        label: "Equipo Experto",
        children: createVNode(_components.p, {
          children: "Aproveche las habilidades de nuestro personal experimentado, desde arquitectos e ingenieros hasta obreros calificados, cada uno contribuyendo con su experiencia para dar vida a su visión."
        })
      }), createVNode($$TabItem, {
        label: "Compromiso con la Calidad",
        children: createVNode(_components.p, {
          children: "La calidad está en el corazón de todo lo que hacemos. Implementamos rigurosas medidas de control de calidad para asegurar que el trabajo que entregamos cumpla y supere los estándares de la industria."
        })
      }), createVNode($$TabItem, {
        label: "Soporte Continuo",
        children: createVNode(_components.p, {
          children: "Nuestra relación con nuestros clientes no termina una vez que se completa el proyecto. Brindamos apoyo continuo para abordar cualquier problema y garantizar una satisfacción duradera con su inversión."
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

const url = "src/content/docs/es/guides/intro.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/es/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/es/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
