import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
/* empty css                                  */
import { $ as $$Card, a as $$CardGrid } from './Code_DBfT0kDc.mjs';
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
    "title": "Dokumentationshub",
    "tagline": "Ihr zentraler Anlaufpunkt für vereinfachte Werkzeuganleitungen, detaillierte Service-Dokumentationen und Projektunterstützung.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/de/guides/getting-started/"
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
      title: "Schnellstartanleitungen",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Starten Sie schnell und einfach mit unseren klaren und prägnanten Anleitungen, die für neue Benutzer und erfahrene Experten gleichermaßen geeignet sind."
      })
    }), createVNode($$Card, {
      title: "Werkzeuge & Ausrüstung",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Entdecken Sie die vollständige Palette hochwertiger Werkzeuge und Ausrüstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps."
      })
    }), createVNode($$Card, {
      title: "Bauleistungen",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "Entdecken Sie die vollständige Palette hochwertiger Werkzeuge und Ausrüstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps."
      })
    }), createVNode($$Card, {
      title: "Erweiterte Themen",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Entdecken Sie die vollständige Palette hochwertiger Werkzeuge und Ausrüstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps."
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
const url = "src/content/docs/de/welcome-to-docs.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/de/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/de/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
