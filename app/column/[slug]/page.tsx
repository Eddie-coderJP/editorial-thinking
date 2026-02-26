import { getArticleBySlug, getPageBlocks, renderBlocks } from "@/lib/notion";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug).catch(() => null);
  if (!article) notFound();

  const blocks = await getPageBlocks(article.id).catch(() => []);
  const bodyHtml = renderBlocks(blocks);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: "var(--footer)",
        color: "white",
        padding: "64px 80px",
        minHeight: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
          {article.unlisted && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(193,64,61,0.85)", color: "white", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", padding: "5px 12px", borderRadius: "4px", marginBottom: "16px", textTransform: "uppercase" }}>
              <span>🔒</span> URLを知っている方限定の記事です
            </div>
          )}
          {article.category && (
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: article.unlisted ? "8px" : "16px" }}>
              {article.category}
            </p>
          )}
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1.4, marginBottom: "16px" }}>
            {article.title}
          </h1>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{article.publishedAt}</p>
        </div>
      </section>

      {/* COVER IMAGE */}
      {article.coverImage && (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src={article.coverImage}
            alt={article.title}
            style={{ width: "100%", borderRadius: "8px", marginTop: "-32px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          />
        </div>
      )}

      {/* ARTICLE BODY */}
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
          <Link href="/column" style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>
            ← コラム一覧に戻る
          </Link>
        </div>
      </article>
    </>
  );
}
