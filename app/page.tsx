import Link from "next/link";
import { getArticles } from "@/lib/notion";

export const revalidate = 0;

export default async function HomePage() {
  let articles: any[] = [];
  try {
    articles = await getArticles();
  } catch (e) {
    articles = [];
  }
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: "var(--bg)",
        minHeight: "520px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "64px 80px",
        gap: "48px",
      }} className="hero-section">
        <div>
          <h1 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: 1.4,
            color: "var(--text)",
            marginBottom: "20px",
            fontWeight: 700,
          }}>
            あなたの中にある<br />編集思考を解き放つ。
          </h1>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "15px",
            color: "var(--muted)",
            fontStyle: "italic",
            marginBottom: "36px",
            lineHeight: 1.7,
          }}>
            Editorial Thinking Collective is a community<br />
            for those who think, edit, and create.
          </p>
          <Link href="/community" style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "white",
            padding: "15px 36px",
            borderRadius: "4px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}>
            コミュニティに参加する
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="hero-image">
          <img
            src="/images/hero_illustration.png"
            alt="編集思考イラスト"
            style={{ width: "100%", maxWidth: "460px", height: "auto", objectFit: "contain" }}
          />
        </div>
      </section>

      {/* 3 COLUMNS */}
      <section style={{ background: "var(--white)", padding: "80px" }} className="section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", maxWidth: "1100px", margin: "0 auto" }} className="grid-3col">
          {[
            {
              label: "Editorial Thinking",
              title: "編集思考とは",
              desc: "「まとめる・みがく・つなげる」という3つの編集力で、あなたの強みを武器に変える。普遍的な思考法です。",
              link: "/about",
              linkText: "詳しく見る →",
            },
            {
              label: "Column",
              title: "コラム",
              desc: "編集思考・文章術・Kindle出版・ブランディング・生成AIをテーマに連載。実践的な知見を届けます。",
              link: "/column",
              linkText: "コラムを読む →",
            },
            {
              label: "Community",
              title: "じぶんを編集する学校",
              desc: "強みを武器にして稼ぐ力をつける。月2回のライブ配信・動画講座・仲間との対話が揃うコミュニティ。",
              link: "/community",
              linkText: "学校に参加する →",
            },
          ].map((card) => (
            <div key={card.title} style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "40px 32px",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "12px", color: "var(--accent)", letterSpacing: "0.1em", marginBottom: "8px" }}>
                {card.label}
              </p>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "14px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px" }}>{card.desc}</p>
              <Link href={card.link} style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 700, textDecoration: "none", borderBottom: "1.5px solid var(--accent)", paddingBottom: "2px" }}>
                {card.linkText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST COLUMNS */}
      <section style={{ background: "var(--bg)", padding: "80px" }} className="section-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }} className="latest-header">
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "6px" }}>Latest</p>
              <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "28px", fontWeight: 700 }}>最新コラム</h2>
            </div>
            <Link href="/column" style={{ display: "inline-block", border: "1.5px solid var(--accent)", color: "var(--accent)", padding: "9px 20px", borderRadius: "4px", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
              More コラム一覧 →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="grid-3col">
            {latestArticles.length > 0 ? latestArticles.map((article) => (
              <Link key={article.id} href={`/column/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ height: "180px", background: "#EDE9E3", overflow: "hidden" }}>
                    {article.coverImage ? (
                      <img src={article.coverImage} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "var(--muted)" }}>
                        {article.category}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "20px" }}>
                    <p style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>{article.category}</p>
                    <p style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.5, marginBottom: "10px" }}>{article.title}</p>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>{article.publishedAt}</p>
                  </div>
                </div>
              </Link>
            )) : [1,2,3].map((i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ height: "180px", background: "#EDE9E3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "var(--muted)" }}>
                  サムネイル画像
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>編集思考</p>
                  <p style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.5, marginBottom: "10px" }}>コラムタイトルがここに入ります</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)" }}>2026.02.20</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "var(--white)", padding: "80px" }} className="section-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "48px" }}>About</p>
          <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "56px", marginBottom: "56px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", marginBottom: "8px" }}>Editorial Thinking</h2>
            <p style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "4px 0 12px" }}>About this site</p>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.9, maxWidth: "720px" }}>
              「編集思考」を軸に、書く・伝える・届けるを実践するコミュニティです。編集者の視点から生まれたフレームワークを使い、個人が自分の強みを武器に変え、世界に届ける力を育てます。オンラインコース、ライブ配信、そしてメンバー同士の対話を通じて、「じぶんを編集する」旅をともに歩みます。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "48px", alignItems: "start" }} className="profile-grid">
            <div style={{ width: "160px", height: "160px", borderRadius: "50%", background: "#F2EDE4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                <div style={{ width: "56px", height: "7px", background: "#C1403D", borderRadius: "1px" }}></div>
                <div style={{ width: "48px", height: "7px", background: "#C1403D", borderRadius: "1px" }}></div>
                <div style={{ width: "36px", height: "7px", background: "#C1403D", borderRadius: "1px" }}></div>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", marginBottom: "4px" }}>UENO IKue（Eddie）</h2>
              <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                Editorial Consultant / SNS Strategy Advisor
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px", maxWidth: "600px" }}>
                エディトリアル・コンサルタント。「人や会社を編集する」を掲げ、独自性や強みを引き出す支援を行う。編集者としての知見を体系化した「編集思考」を提唱。ブランディング支援・イノベーション創出など、編集スキルの可能性を社会に広げている。
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {["編集者歴 25年", "著書2冊", "慶應義塾大学大学院 修士", "NPO法人 副代表", "日本ブランド経営学会 理事"].map((tag) => (
                  <span key={tag} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "20px", padding: "5px 14px", fontSize: "12px", color: "var(--muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/about" style={{ display: "inline-block", border: "1.5px solid var(--accent)", color: "var(--accent)", padding: "9px 20px", borderRadius: "4px", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
                About 詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--footer)", color: "white", padding: "80px 40px", textAlign: "center" }} className="cta-section">
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>Community</p>
        <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.5 }} className="cta-heading">
          「じぶんを編集する学校」へようこそ
        </h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.9, marginBottom: "36px" }}>
          まず10日間、無料のLINEステップ配信でお試しください。<br />
          「あなたの強みを見つける、編集思考10日間入門講座」をお届けします。
        </p>
        <a href="https://lin.ee/XXXXXXX" style={{
          display: "inline-block",
          background: "#06C755",
          color: "white",
          padding: "16px 48px",
          borderRadius: "4px",
          fontSize: "16px",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}>
          LINEで無料登録する
        </a>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
            min-height: auto !important;
          }
          .hero-image { display: none !important; }
          .section-pad { padding: 48px 24px !important; }
          .grid-3col { grid-template-columns: 1fr !important; gap: 16px !important; }
          .latest-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .profile-grid { grid-template-columns: 1fr !important; }
          .cta-section { padding: 48px 24px !important; }
          .cta-heading { font-size: 22px !important; }
        }
      `}</style>
    </>
  );
}
