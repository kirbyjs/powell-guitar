import {
  BLOCKS,
  MARKS,
  INLINES,
  Document,
  AssetHyperlink,
  Hyperlink,
} from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { Component, JSXChildren } from '@builder.io/qwik';
import { Asset, AssetLink } from '~/types/contentful';

function buildOptions(assetMap: Map<string, Asset>): Options {
  const renderAssetHyperlink = (node: AssetHyperlink) => {
    const [{ value }] = node.content;
    const link = assetMap.get(node.data.target.sys.id);

    return (
      <a
        class="text-amber-600 dark:text-amber-300"
        target="_blank"
        href={link?.url}
      >
        {value}
      </a>
    );
  };

  const renderHyperlink = (node: Hyperlink) => {
    const { uri } = node.data;
    const [{ value }] = node.content;
    return (
      <a class="text-amber-600 dark:text-amber-300" target="_blank" href={uri}>
        {value}
      </a>
    );
  };

  return {
    renderText: (text: string) => {
      if (text === '\n') {
        return <br />;
      }
      if (text.includes('\n')) {
        return text.split('\n').map((text, index, items) => {
          const isLast = index === items.length - 1;

          return (
            <>
              {text}
              {!isLast && <br />}
            </>
          );
        });
      }

      return text;
    },
    renderMark: {
      [MARKS.BOLD]: (text: string) => <span class="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text: string) => <span class="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node: any, children: JSXChildren) => (
        <h2 class="mt-[-2rem] mb-10 text-4xl font-extrabold">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: JSXChildren) => (
        <h3 class="mb-3 text-2xl font-extrabold">{children}</h3>
      ),
      [BLOCKS.LIST_ITEM]: (node: any) => {
        const UnTaggedChildren: JSXChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
            [INLINES.ASSET_HYPERLINK]: renderAssetHyperlink as any,
            [INLINES.HYPERLINK]: renderHyperlink as any,
          },
          renderMark: {
            [MARKS.BOLD]: (text: string) => (
              <span class="font-bold">{text}</span>
            ),
            [MARKS.ITALIC]: (text: string) => (
              <span class="italic">{text}</span>
            ),
          } as any,
        }) as JSXChildren;

        return <li>{UnTaggedChildren}</li>;
      },
      [BLOCKS.UL_LIST]: (node: any, children: JSXChildren) => (
        <ul class="space-y-1 pb-10 text-gray-500 dark:text-gray-400 list-disc list-inside dark:text-gray-40">
          {children}
        </ul>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: JSXChildren) => {
        return <div class="pb-7 last:pb-0">{children}</div>;
      },
      [INLINES.ASSET_HYPERLINK]: renderAssetHyperlink,
      [INLINES.HYPERLINK]: renderHyperlink as any,
    },
  } as any;
}

export type ContentfulRichTextProps = {
  json: Document;
  links?: AssetLink;
};
const ContentfulRichText = ({ json, links }: ContentfulRichTextProps) => {
  const assetMap = new Map<string, Asset>();

  for (const asset of links?.assets?.hyperlink ?? []) {
    assetMap.set(asset.sys.id, asset);
  }

  return documentToReactComponents(json, buildOptions(assetMap));
};
export default ContentfulRichText as unknown as Component<ContentfulRichTextProps>;