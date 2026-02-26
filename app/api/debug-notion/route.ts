import { NextResponse } from "next/server";
import { getArticleBySlug } from "@/lib/notion";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "ED001";

  try {
    const article = await getArticleBySlug(slug);
    return NextResponse.json({ slug, article, found: article !== null });
  } catch (e: any) {
    return NextResponse.json({ slug, error: e.message, stack: e.stack }, { status: 500 });
  }
}
