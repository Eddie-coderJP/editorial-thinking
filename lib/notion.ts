import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_COLUMN_DB_ID!;

export type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  unlisted: boolean;
};

function getRichTextContent(richText: RichTextItemResponse[]): string {
  return richText.map((t) => t.plain_text).join("");
}

export async function getArticles(): Promise<Article[]> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "Published", checkbox: { equals: true } },
        { property: "Unlisted", checkbox: { equals: false } },
      ],
    },
    sorts: [{ property: "PublishedAt", direction: "descending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const props = page.properties as Record<string, any>;
      const title =
        props.Name?.title?.length > 0
          ? getRichTextContent(props.Name.title)
          : "Untitled";
      const slug =
        props.Slug?.rich_text?.length > 0
          ? getRichTextContent(props.Slug.rich_text)
          : page.id;
      const category =
        props.Category?.select?.name ?? "";
      const publishedAt =
        props.PublishedAt?.date?.start ?? "";
      const excerpt =
        props.Excerpt?.rich_text?.length > 0
          ? getRichTextContent(props.Excerpt.rich_text)
          : "";
      const coverImage =
        props.CoverImage?.url ?? "";

      const unlisted = props.Unlisted?.checkbox ?? false;
      return { id: page.id, title, slug, category, publishedAt, excerpt, coverImage, unlisted };
    });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Published", checkbox: { equals: true } },
        // Unlisted記事もURLを知っていればアクセス可能（フィルターしない）
      ],
    },
  });

  const page = response.results.find(
    (p): p is PageObjectResponse => "properties" in p
  );
  if (!page) return null;

  const props = page.properties as Record<string, any>;
  const title =
    props.Name?.title?.length > 0
      ? getRichTextContent(props.Name.title)
      : "Untitled";
  const category = props.Category?.select?.name ?? "";
  const publishedAt = props.PublishedAt?.date?.start ?? "";
  const excerpt =
    props.Excerpt?.rich_text?.length > 0
      ? getRichTextContent(props.Excerpt.rich_text)
      : "";
  const coverImage = props.CoverImage?.url ?? "";
  const unlisted = props.Unlisted?.checkbox ?? false;

  return { id: page.id, title, slug, category, publishedAt, excerpt, coverImage, unlisted };
}

export async function getPageBlocks(pageId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = [];
  let cursor: string | undefined;

  while (true) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    blocks.push(
      ...response.results.filter(
        (b): b is BlockObjectResponse => "type" in b
      )
    );

    if (!response.has_more) break;
    cursor = response.next_cursor ?? undefined;
  }

  return blocks;
}

export function renderBlocks(blocks: BlockObjectResponse[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph": {
          const text = getRichTextContent(
            (block as any).paragraph.rich_text
          );
          return `<p>${text}</p>`;
        }
        case "heading_1": {
          const text = getRichTextContent(
            (block as any).heading_1.rich_text
          );
          return `<h1>${text}</h1>`;
        }
        case "heading_2": {
          const text = getRichTextContent(
            (block as any).heading_2.rich_text
          );
          return `<h2>${text}</h2>`;
        }
        case "heading_3": {
          const text = getRichTextContent(
            (block as any).heading_3.rich_text
          );
          return `<h3>${text}</h3>`;
        }
        case "bulleted_list_item": {
          const text = getRichTextContent(
            (block as any).bulleted_list_item.rich_text
          );
          return `<li>${text}</li>`;
        }
        case "numbered_list_item": {
          const text = getRichTextContent(
            (block as any).numbered_list_item.rich_text
          );
          return `<li>${text}</li>`;
        }
        case "quote": {
          const text = getRichTextContent(
            (block as any).quote.rich_text
          );
          return `<blockquote>${text}</blockquote>`;
        }
        case "image": {
          const img = (block as any).image;
          const url =
            img.type === "external" ? img.external.url : img.file.url;
          return `<img src="${url}" alt="" style="max-width:100%;border-radius:8px;margin:24px 0;" />`;
        }
        case "divider":
          return `<hr />`;
        default:
          return "";
      }
    })
    .join("\n");
}
