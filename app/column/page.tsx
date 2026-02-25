import Link from "next/link";
import { getArticles } from "@/lib/notion";

export const revalidate = 3600;

export const metadata = {
  title: "Column | Editorial Thinking Collective",
  description: "編集思考・文章術・Kindle出版・ブランディング・生成AIをテーマに、実践的な知見をお届けします。",
};

export default async function ColumnPage() {
  let articles: any[] = [];
  try {
    articles = await getArticles();
  } catch (e) {
    articles = [];
  }

  return (
    <>
      {/* PAGE HERO — white background, same style as ABOUT */}
      <section style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E0DDD8",
        padding: "80px 40px 64px",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#C1403D",
          fontWeight: 700,
          marginBottom: "16px",
        }}>
          Column
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 4vw, 52px)",
          letterSpacing: "-0.02em",
          marginBottom: "20px",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}>
          コラム
        </h1>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(16px, 2vw, 22px)",
          color: "#6B6B6B",
          marginBottom: "24px",
        }}>
          — Thinking Through Writing —
        </p>
        <p style={{
          fontSize: "16px",
          color: "#6B6B6B",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.85,
        }}>
          編集思考・文章術・Kindle出版・ブランディング・生成AIをテーマに、実践的な知見をお届けします。
        </p>
      </section>

      {/* ARTICLES */}
      <section style={{ background: "var(--bg)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {articles.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
              {articles.map((article) => (
                <Link key={article.id} href={`/column/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <article style={{
                    background: "#FFFFFF",
                    border: "1px solid #E0DDD8",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "box-shadow 0.2s",
                  }}>
                    <div style={{ height: "200px", background: "#EDE9E3", overflow: "hidden" }}>
                      {article.coverImage ? (
                        <img src={article.coverImage} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#6B6B6B" }}>
                          {article.category || "Column"}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "24px" }}>
                      {article.category && (
                        <p style={{ fontSize: "11px", color: "#C1403D", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                          {article.category}
                        </p>
                      )}
                      <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.5, marginBottom: "12px", color: "#1A1A1A" }}>
                        {article.title}
                      </p>
                      {article.excerpt && (
                        <p style={{ fontSize: "13px", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "12px" }}>
                          {article.excerpt.length > 80 ? article.excerpt.slice(0, 80) + "…" : article.excerpt}
                        </p>
                      )}
                      <p style={{ fontSize: "12px", color: "#6B6B6B" }}>{article.publishedAt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "15px", color: "#6B6B6B", marginBottom: "8px" }}>コラムは準備中です。</p>
              <p style={{ fontSize: "13px", color: "#6B6B6B" }}>もうしばらくお待ちください。</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
