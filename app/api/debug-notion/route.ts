import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_COLUMN_DB_ID!;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "ED001";

  try {
    // Slugで検索
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Published", checkbox: { equals: true } },
        ],
      },
    });

    return NextResponse.json({
      slug_searched: slug,
      count: response.results.length,
      results: response.results.map((page: any) => ({
        id: page.id,
        Name: page.properties?.Name?.title?.map((t: any) => t.plain_text).join("") ?? "",
        Slug_raw: JSON.stringify(page.properties?.Slug),
        Published: page.properties?.Published?.checkbox,
      })),
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, stack: e.stack }, { status: 500 });
  }
}
