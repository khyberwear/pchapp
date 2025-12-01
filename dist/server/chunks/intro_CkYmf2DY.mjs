import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_CCXbePkK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction aux Services ScrewFast",
  "description": "Explorez la documentation complète de ScrewFast pour un examen approfondi de nos outils haut de gamme et services de construction.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "aperçu-des-services",
    "text": "Aperçu des Services"
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
      children: "Dans le cadre de notre engagement à fournir une solution de bout en bout pour tous vos besoins en construction et matériel, nous, chez ScrewFast, sommes fiers de proposer une suite complète de services professionnels. Des consultations initiales aux inspections finales, nos services polyvalents englobent l’intégralité de votre projet, garantissant des résultats de qualité et la satisfaction du client. Cette section de la documentation vous guidera à travers tout ce que vous devez savoir pour exploiter pleinement notre expertise."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "aperçu-des-services",
        children: "Aperçu des Services"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#aperçu-des-services",
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
          children: "Section intitulée « Aperçu des Services »"
        })]
      })]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Solutions sur Mesure",
        children: createVNode(_components.p, {
          children: "Chaque projet de construction comporte ses propres défis et exigences. Chez ScrewFast, nous personnalisons nos services pour correspondre à vos besoins spécifiques, garantissant que, quelle que soit l’échelle ou la complexité de votre projet, notre équipe est équipée pour le gérer avec précision et professionnalisme."
        })
      }), createVNode($$TabItem, {
        label: "Équipe d'Experts",
        children: createVNode(_components.p, {
          children: "Tire parti des compétences de notre personnel qualifié, des architectes et ingénieurs aux ouvriers qualifiés, chacun contribuant à apporter leur expertise pour donner vie à votre vision."
        })
      }), createVNode($$TabItem, {
        label: "Engagement envers la Qualité",
        children: createVNode(_components.p, {
          children: "La qualité est au cœur de tout ce que nous faisons. Nous mettons en œuvre des mesures rigoureuses de contrôle de qualité pour garantir que le travail que nous livrons répond et dépasse les normes de l’industrie."
        })
      }), createVNode($$TabItem, {
        label: "Support Continu",
        children: createVNode(_components.p, {
          children: "Notre relation avec nos clients ne se termine pas une fois le projet terminé. Nous fournissons un support continu pour résoudre tout problème et garantir une satisfaction durable avec votre investissement."
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

const url = "src/content/docs/fr/guides/intro.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/fr/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/fr/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
