import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_COLUMN_DB_ID!;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });

    const results = response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        Name: props.Name?.title?.map((t: any) => t.plain_text).join("") ?? "",
        Slug: props.Slug?.rich_text?.map((t: any) => t.plain_text).join("") ?? "(empty)",
        Published: props.Published?.checkbox ?? false,
        Unlisted: props.Unlisted?.checkbox ?? false,
      };
    });

    return NextResponse.json({ count: results.length, results });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
