import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
/* empty css                                  */
import { $ as $$Card, a as $$CardGrid } from './Code_C2dWR6BV.mjs';
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
    "title": "Hub de Documentation",
    "tagline": "Votre centre central pour l'orientation simplifiée des outils, les documents de service détaillés et le soutien aux projets.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/fr/guides/getting-started/"
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
      title: "Guides de Démarrage Rapide",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Mettez-vous en route rapidement avec nos guides clairs et concis, adaptés aux nouveaux utilisateurs et aux experts chevronnés."
      })
    }), createVNode($$Card, {
      title: "Outils et Équipements",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de ScrewFast. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance."
      })
    }), createVNode($$Card, {
      title: "Services de Construction",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de ScrewFast. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance."
      })
    }), createVNode($$Card, {
      title: "Sujets Avancés",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de ScrewFast. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance."
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
const url = "src/content/docs/fr/welcome-to-docs.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/fr/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/fr/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
