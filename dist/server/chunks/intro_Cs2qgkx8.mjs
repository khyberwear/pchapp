import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CHNLwNGm.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_DBfT0kDc.mjs';
import 'clsx';

const frontmatter = {
  "title": "はじめに",
  "description": "ScrewFastの包括的なドキュメントを探索して、プレミアムツールと建設サービスを詳しく見てください。",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "サービスの概要",
    "text": "サービスの概要"
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
      children: "私たちの建設およびハードウェアニーズに対するエンドツーエンドのソリューションを提供することへの取り組みの一環として、ScrewFastは、プロフェッショナルなサービスの包括的なスイートを提供することを誇りに思っています。初回の相談から最終検査まで、私たちの多面的なサービスは、あなたのプロジェクト全体を包括し、品質の結果と顧客満足を保証します。このドキュメントのこのセクションでは、私たちの専門知識を最大限に活用するために知っておく必要があるすべてのことを案内します。"
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "サービスの概要",
        children: "サービスの概要"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#サービスの概要",
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
          children: "Section titled “サービスの概要”"
        })]
      })]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "カスタマイズされたソリューション",
        children: createVNode(_components.p, {
          children: "各建設プロジェクトには独自の課題と要求があります。ScrewFastでは、サービスをカスタマイズして、プロジェクトのスケールや複雑さに関係なく、チームが正確かつプロフェッショナルに対応できるようにします。"
        })
      }), createVNode($$TabItem, {
        label: "専門チーム",
        children: createVNode(_components.p, {
          children: "私たちの知識豊富なスタッフ、建築家からエンジニアまで、各々が専門知識を活かし、あなたのビジョンを実現します。"
        })
      }), createVNode($$TabItem, {
        label: "品質へのコミットメント",
        children: createVNode(_components.p, {
          children: "品質は私たちのすべての活動の中心にあります。私たちは厳格な品質管理策を採用して、提供する作業が業界基準を満たし、それを上回ることを保証します。"
        })
      }), createVNode($$TabItem, {
        label: "継続的なサポート",
        children: createVNode(_components.p, {
          children: "プロジェクトが完了したら、私たちとの関係は終わりません。問題を解決し、あなたの投資に対する持続的な満足を保証するために、継続的なサポートを提供します。"
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

const url = "src/content/docs/ja/guides/intro.mdx";
const file = "/Users/atifjan/PC/pchapp/src/content/docs/ja/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/atifjan/PC/pchapp/src/content/docs/ja/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
