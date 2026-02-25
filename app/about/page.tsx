import Link from "next/link";

export const metadata = {
  title: "About | Editorial Thinking Collective",
  description: "編集思考とは何か。UENO IKue（Eddie）が25年の編集者経験から体系化した思考フレームワーク。",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{
        background: "var(--white)",
        borderBottom: "1px solid var(--border)",
        padding: "80px 40px 64px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "16px" }}>About</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em", marginBottom: "20px", lineHeight: 1.2 }}>
          Editorial Thinking
        </h1>
        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(16px, 2vw, 22px)", color: "var(--muted)", marginBottom: "24px" }}>
          — The Art of Thinking Like an Editor —
        </p>
        <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.9 }}>
          「編集思考」とは、編集者の視点から生まれた思考フレームワークです。情報を整理し、本質を見抜き、伝わる形に変える——この力は、あらゆる人が身につけられるスキルです。
        </p>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>

        {/* SECTION 1: What is Editorial Thinking */}
        <section style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px" }}>
            <div style={{ width: "4px", height: "48px", background: "var(--accent)", flexShrink: 0, marginTop: "4px" }}></div>
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>What is Editorial Thinking</span>
              <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "28px", fontWeight: 700, marginTop: "8px" }}>編集思考とは何か</h2>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px", color: "var(--muted)", lineHeight: 1.9 }}>
            <p>「編集思考」は、UENO IKue（Eddie）が25年の編集者経験から体系化した思考フレームワークです。もともと出版・メディアの世界で使われてきた「編集」という行為を、個人のブランディングや情報発信、ビジネス戦略に応用できる形に再定義しました。</p>
            <p>整理し（まとめる）、見抜き（みがく）、読者に届く形に変換（つなぐ）します。この思考プロセスは、「自分の強みを見つけて発信したい」「伝えたいことがあるのに言語化できない」「差別化できるブランドをつくりたい」——そんな課題を抱えるすべての人に有効です。</p>
            <p>Editorial Thinking Collectiveは、この思考フレームワークを、より多くの人に届けるために生まれました。</p>
          </div>
        </section>

        {/* QUOTE */}
        <div style={{
          background: "var(--footer)",
          color: "white",
          padding: "56px 64px",
          margin: "0 -40px",
          textAlign: "center",
        }}>
          <blockquote style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, lineHeight: 1.6, marginBottom: "16px" }}>
            「人も、言葉も、編集されることで輝く。」
          </blockquote>
          <cite style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontStyle: "normal" }}>— UENO IKue（Eddie）</cite>
        </div>

        {/* SECTION 2: 3 Pillars */}
        <section style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px" }}>
            <div style={{ width: "4px", height: "48px", background: "var(--accent)", flexShrink: 0, marginTop: "4px" }}></div>
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>3 Core Skills</span>
              <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "28px", fontWeight: 700, marginTop: "8px" }}>編集思考の3つの柱</h2>
            </div>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "40px" }}>
            編集思考は、「まとめる・みがく・つなげる」という3つの編集力で構成されています。この3つを組み合わせることで、あなたの強みが武器に変わります。
          </p>
          {/* スマホで縦並び */}
          <div className="pillars-grid">
            {[
              {
                en: "Organize",
                ja: "まとめる",
                desc: "散らばった情報・経験・強みを整理する力。「何が大事か」を選び取る編集眼を育てます。",
                icon: "M4 6h16M4 10h16M4 14h10",
              },
              {
                en: "Refine",
                ja: "みがく",
                desc: "素材の価値を高め、相手に伝わる言葉・構成・表現に磨き上げる力。",
                icon: "M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z",
              },
              {
                en: "Connect",
                ja: "つなげる",
                desc: "人・情報・アイデアから得た新しい価値を「誰に届けるか」を見定め、「どう届けるか」を設計する技術。",
                icon: "M18 5a3 3 0 100-6 3 3 0 000 6zM6 12a3 3 0 100-6 3 3 0 000 6zM18 19a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49",
              },
            ].map((pillar) => (
              <div key={pillar.ja} style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "36px 28px",
                textAlign: "center",
              }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(193,64,61,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C1403D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={24} height={24}>
                    <path d={pillar.icon} />
                  </svg>
                </div>
                <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>{pillar.en}</span>
                <p style={{ fontSize: "20px", fontWeight: 700, margin: "8px 0 12px" }}>{pillar.ja}</p>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Framework */}
        <section style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px" }}>
            <div style={{ width: "4px", height: "48px", background: "var(--accent)", flexShrink: 0, marginTop: "4px" }}></div>
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>Framework</span>
              {/* スマホで2行になるのでフォントサイズ縮小・行間調整 */}
              <h2 className="framework-heading" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, marginTop: "8px" }}>
                編集思考の実践フレームワーク
              </h2>
            </div>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "32px" }}>
            編集思考は、以下の5つのステップで「強みを武器に変える」プロセスを設計します。
          </p>
          {/* スマホで横スクロール可能にする */}
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table style={{ width: "100%", minWidth: "480px", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "var(--footer)", color: "white" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", width: "60px", whiteSpace: "nowrap" }}>Step</th>
                  <th style={{ padding: "14px 20px", textAlign: "left", width: "140px", whiteSpace: "nowrap" }}>キーワード</th>
                  <th style={{ padding: "14px 20px", textAlign: "left" }}>内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { step: "01", kw: "発掘", en: "Discover", desc: "自分の経験・知識・価値観を棚卸しし、強みの原石を見つける" },
                  { step: "02", kw: "整理", en: "Organize", desc: "バラバラな素材を構造化し、「伝えたいこと」の骨格をつくる" },
                  { step: "03", kw: "言語化", en: "Articulate", desc: "強みを読者に届く言葉・コンセプト・ストーリーに変換する" },
                  { step: "04", kw: "発信", en: "Publish", desc: "コラム・SNS・Kindle・コミュニティなど最適な媒体で届ける" },
                  { step: "05", kw: "循環", en: "Iterate", desc: "反応を受け取り、磨き直し、より深い価値を生み出し続ける" },
                ].map((row, i) => (
                  <tr key={row.step} style={{ background: i % 2 === 0 ? "var(--white)" : "var(--bg)", borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--accent)", textAlign: "center", whiteSpace: "nowrap" }}>{row.step}</td>
                    <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                      <span style={{ fontWeight: 700, marginRight: "8px" }}>{row.kw}</span>
                      <span style={{ fontSize: "12px", color: "var(--muted)" }}>{row.en}</span>
                    </td>
                    <td style={{ padding: "16px 20px", color: "var(--muted)" }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4: About Eddie */}
        <section style={{ padding: "72px 0" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "40px" }}>
            <div style={{ width: "4px", height: "48px", background: "var(--accent)", flexShrink: 0, marginTop: "4px" }}></div>
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>About the Founder</span>
              {/* スマホで2行になるのでclampで縮小 */}
              <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginTop: "8px", lineHeight: 1.4 }}>
                UENO IKue（Eddie）について
              </h2>
            </div>
          </div>
          {/* スマホで縦並び */}
          <div className="profile-grid">
            <div style={{ width: "160px", height: "160px", borderRadius: "50%", background: "#F2EDE4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                <div style={{ width: "56px", height: "7px", background: "#C1403D", borderRadius: "1px" }}></div>
                <div style={{ width: "48px", height: "7px", background: "#C1403D", borderRadius: "1px" }}></div>
                <div style={{ width: "36px", height: "7px", background: "#C1403D", borderRadius: "1px" }}></div>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, marginBottom: "4px" }}>UENO IKue（Eddie）</p>
              <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
                Editorial Consultant / SNS Strategy Advisor
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "16px" }}>
                エディトリアル・コンサルタント。「人や会社を編集する」を掲げ、独自性や強みを引き出す支援を行う。編集者としての知見を体系化した「編集思考」を提唱。ブランディング支援・イノベーション創出など、編集スキルの可能性を社会に広げている。
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "24px" }}>
                SNS戦略アドバイザーとしても活動し、個人・法人のコンテンツ戦略・発信設計を支援。「じぶんを編集する学校」を主宰し、強みを武器にして稼ぐ力を育てるコミュニティを運営する。
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["編集者歴 25年", "著書2冊", "慶應義塾大学大学院 修士", "NPO法人 副代表", "日本ブランド経営学会 理事"].map((tag) => (
                  <span key={tag} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "20px", padding: "5px 14px", fontSize: "12px", color: "var(--muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* CTA */}
      <section style={{ background: "var(--footer)", color: "white", padding: "80px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>Community</p>
        <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.5 }}>
          「じぶんを編集する学校」へ<br />ようこそ
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
          whiteSpace: "nowrap",
        }}>
          LINEで無料登録する
        </a>
      </section>

      <style>{`
        /* 3カラム → スマホで縦並び */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        /* プロフィール 2カラム → スマホで縦並び */
        .profile-grid {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 40px;
          align-items: start;
        }
        /* フレームワーク見出し */
        .framework-heading {
          font-size: 28px;
          line-height: 1.3;
        }
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .profile-grid {
            grid-template-columns: 1fr;
            justify-items: center;
          }
          .framework-heading {
            font-size: 20px;
            line-height: 1.4;
          }
        }
      `}</style>
    </>
  );
}
