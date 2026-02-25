import Link from "next/link";
import { getArticles } from "@/lib/notion";

export const revalidate = 3600;

export const metadata = {
  title: "Column | Editorial Thinking Collective",
  description: "編集思考・文章術・Kindle出版・ブランディング・生成AIをテーマに連載。",
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
      {/* HERO */}
      <section style={{
        background: "var(--footer)",
        color: "white",
        padding: "80px",
        textAlign: "center",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>Column</p>
        <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
          コラム
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", maxWidth: "560px", lineHeight: 1.8 }}>
          編集思考・文章術・Kindle出版・ブランディング・生成AIをテーマに、実践的な知見をお届けします。
        </p>
      </section>

      {/* ARTICLES */}
      <section style={{ background: "var(--bg)", padding: "80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {articles.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {articles.map((article) => (
                <Link key={article.id} href={`/column/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "box-shadow 0.2s",
                  }}>
                    <div style={{ height: "200px", background: "#EDE9E3", overflow: "hidden" }}>
                      {article.coverImage ? (
                        <img src={article.coverImage} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "var(--muted)" }}>
                          {article.category || "Column"}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "24px" }}>
                      {article.category && (
                        <p style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                          {article.category}
                        </p>
                      )}
                      <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.5, marginBottom: "12px" }}>{article.title}</p>
                      {article.excerpt && (
                        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "12px" }}>
                          {article.excerpt.length > 80 ? article.excerpt.slice(0, 80) + "…" : article.excerpt}
                        </p>
                      )}
                      <p style={{ fontSize: "12px", color: "var(--muted)" }}>{article.publishedAt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "8px" }}>コラムは準備中です。</p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>もうしばらくお待ちください。</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
