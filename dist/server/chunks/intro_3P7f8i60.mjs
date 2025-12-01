import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_DBfT0kDc.mjs';
import 'clsx';

const frontmatter = {
  "title": "Einführung in die ScrewFast-Dienstleistungen",
  "description": "Entdecken Sie die umfassende Dokumentation von ScrewFast für einen eingehenden Einblick in unsere erstklassigen Werkzeuge und Bauleistungen.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "übersicht-über-die-dienstleistungen",
    "text": "Übersicht über die Dienstleistungen"
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
      children: "Als Teil unseres Engagements, eine Komplettlösung für alle Ihre Bau- und Hardware-Bedürfnisse bereitzustellen, sind wir bei ScrewFast stolz darauf, eine umfassende Palette professioneller Dienstleistungen anzubieten. Von den ersten Beratungsgesprächen bis hin zu abschließenden Inspektionen umfassen unsere vielseitigen Dienstleistungen die gesamte Projektarbeit und gewährleisten qualitativ hochwertige Ergebnisse und Kundenzufriedenheit. Dieser Abschnitt der Dokumentation wird Sie durch alles führen, was Sie wissen müssen, um unser Fachwissen optimal zu nutzen."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "übersicht-über-die-dienstleistungen",
        children: "Übersicht über die Dienstleistungen"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#übersicht-über-die-dienstleistungen",
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
          children: "Abschnitt betitelt „Übersicht über die Dienstleistungen“"
        })]
      })]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Maßgeschneiderte Lösungen",
        children: createVNode(_components.p, {
          children: "Jedes Bauprojekt birgt seine eigenen Herausforderungen und Anforderungen. Bei ScrewFast passen wir unsere Dienstleistungen an Ihre spezifischen Bedürfnisse an, um sicherzustellen, dass unser Team unabhängig von der Größe oder Komplexität Ihres Projekts damit präzise und professionell umgehen kann."
        })
      }), createVNode($$TabItem, {
        label: "Experten-Team",
        children: createVNode(_components.p, {
          children: "Nutzen Sie das Know-how unseres kompetenten Personals, von Architekten und Ingenieuren bis hin zu qualifizierten Arbeitern, die jeweils ihr Fachwissen einbringen, um Ihre Vision zum Leben zu erwecken."
        })
      }), createVNode($$TabItem, {
        label: "Qualitätsverpflichtung",
        children: createVNode(_components.p, {
          children: "Qualität steht im Mittelpunkt unseres Handelns. Wir setzen strenge Qualitätskontrollmaßnahmen ein, um sicherzustellen, dass die von uns gelieferte Arbeit den Branchenstandards entspricht und diese sogar übertrifft."
        })
      }), createVNode($$TabItem, {
        label: "Laufende Unterstützung",
        children: createVNode(_components.p, {
          children: "Unsere Beziehung zu unseren Kunden endet nicht, sobald das Projekt abgeschlossen ist. Wir bieten kontinuierliche Unterstützung, um Probleme zu lösen und eine dauerhafte Zufriedenheit mit Ihrer Investition sicherzustellen."
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

const url = "src/content/docs/de/guides/intro.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/de/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/de/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
