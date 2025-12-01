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
    "title": "ドキュメンテーションハブ",
    "tagline": "効率的なツールのガイド、詳細なサービス文書、およびプロジェクトのサポートのための中心的なハブ。",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/ja/guides/getting-started/"
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
      title: "クイックスタートガイド",
      icon: "document",
      children: createVNode(_components.p, {
        children: "当社のわかりやすく簡潔なガイドで迅速に立ち上がり、新規ユーザーと熟練した専門家の両方に適したものを利用してください。"
      })
    }), createVNode($$Card, {
      title: "ツール＆装備",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "ScrewFastの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。"
      })
    }), createVNode($$Card, {
      title: "建設サービス",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "ScrewFastの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。"
      })
    }), createVNode($$Card, {
      title: "高度なトピック",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "ScrewFastの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。"
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
const url = "src/content/docs/ja/welcome-to-docs.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/ja/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/ja/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
