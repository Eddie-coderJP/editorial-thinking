import { getArticleBySlug, getPageBlocks, renderBlocks } from "@/lib/notion";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 0;

const SITE_URL = "https://editorialthinking.com";
const SITE_NAME = "Editorial Thinking Collective";
const DEFAULT_OGP = `${SITE_URL}/images/ogp_default.png`;

// 記事ごとの動的メタタグ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug).catch(() => null);
  if (!article) {
    return {
      title: "記事が見つかりません",
    };
  }

  const title = article.title;
  const description = article.excerpt || `${SITE_NAME}のコラム記事`;
  const ogImage = article.coverImage || DEFAULT_OGP;
  const canonicalUrl = `${SITE_URL}/column/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "article",
      publishedTime: article.publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    // Unlistedの記事は検索エンジンにインデックスさせない
    robots: article.unlisted
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug).catch(() => null);
  if (!article) notFound();

  const blocks = await getPageBlocks(article.id).catch(() => []);
  const bodyHtml = renderBlocks(blocks);

  // JSON-LD 構造化データ（Article）
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || "",
    image: article.coverImage || `${SITE_URL}/images/ogp_default.png`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: "UENO Ikue (Eddie)",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo_red_bright.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/column/${slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* HERO */}
      <section style={{
        background: "var(--footer)",
        color: "white",
        padding: "64px 80px",
        minHeight: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }} className="article-hero">
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

      <style>{`
        @media (max-width: 768px) {
          .article-hero { padding: 40px 24px !important; }
          .article-body p, .article-body li { font-size: 15px; line-height: 1.9; }
        }
      `}</style>
    </>
  );
}
