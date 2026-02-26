import Link from "next/link";

export const metadata = {
  title: "Community | Editorial Thinking Collective",
  description: "じぶんを編集する学校。強みを武器にして、稼ぐ力をつける。",
};

export default function CommunityPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative",
        background: "#FAF8F5",
        color: "#1A1A1A",
        padding: "100px 40px 80px",
        overflow: "hidden",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <img
          src="/images/hero_community_v5.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.35,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "20px" }}>
            Community
          </p>
          <h1 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: "28px",
            color: "#1A1A1A",
          }}>
            じぶんを<span style={{ color: "var(--accent)" }}>編集する</span>学校
          </h1>
          <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: 1.9, marginBottom: "40px", color: "#3A3A3A" }}>
            強みを武器にして、稼ぐ力をつける。<br />
            エディトリアル・コンサルタント UENO IKue（Eddie）が主宰する<br />
            学びと実践のオンラインコミュニティ。
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
        </div>
      </section>

      {/* ABOUT COMMUNITY */}
      <section style={{ background: "var(--white)", padding: "80px 40px" }}>
        {/* スマホで縦積み */}
        <div className="community-about-grid">
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "16px" }}>About</p>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, marginBottom: "24px", lineHeight: 1.4 }}>「じぶんを編集する学校」とは</h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "16px" }}>
              「編集思考」を軸に、あなたの強みを言語化し、Kindle出版・ブランディング・SNS戦略を通じて社会に届ける力を育む学びのコミュニティです。
            </p>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.9 }}>
              月2回のライブ配信、動画コンテンツ、仲間との対話を通じて、「自分の強みが社会を生きる上での武器になる瞬間」を一緒につくります。
            </p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "16px" }}>こんな方に</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "自分の強みや独自性を言語化したい",
                "Kindle出版でセルフブランディングを始めたい",
                "副業・独立に向けてスキルを武器にしたい",
                "同じ志を持つ仲間とつながりたい",
                "編集思考を実践的に学びたい",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ background: "var(--bg)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, textAlign: "center", marginBottom: "12px" }}>Journey</p>
          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "28px", fontWeight: 700, textAlign: "center", marginBottom: "12px" }}>4つのステップ</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", textAlign: "center", marginBottom: "48px" }}>入学から卒業まで、段階的に強みを育てます。</p>
          {/* スマホで縦積み（2カラム） */}
          <div className="steps-grid">
            {[
              { num: "01", step: "STEP 1", title: "入学", desc: "自分の「編集」がわかりはじめる。強みの棚卸しワークでスタート。" },
              { num: "02", step: "STEP 2", title: "実践", desc: "強みを「武器」として使い始める。講座・Kindle・情報発信などで試す。" },
              { num: "03", step: "STEP 3", title: "収益化", desc: "楽しみながら稼げる状態になる。月1万円でも「武器になった」と実感。" },
              { num: "04", step: "STEP 4", title: "卒業", desc: "自分の力で行動できる証拠を証明。卒業レポート提出＋卒業（ライブ配信）。" },
            ].map((s) => (
              <div key={s.num} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px 24px", textAlign: "center" }}>
                <span style={{ fontSize: "48px", fontWeight: 900, color: "rgba(193,64,61,0.08)", display: "block", lineHeight: 1, marginBottom: "8px" }}>{s.num}</span>
                <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 700 }}>{s.step}</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0 12px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ background: "var(--white)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, textAlign: "center", marginBottom: "12px" }}>Contents</p>
          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "28px", fontWeight: 700, textAlign: "center", marginBottom: "12px" }}>コミュニティで得られること</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", textAlign: "center", marginBottom: "48px" }}>月2回のライブ配信を中心に、多彩なコンテンツをお届けします（予定）。</p>
          {/* スマホで縦積み（1カラム） */}
          <div className="contents-grid">
            {[
              { icon: "🎥", title: "ライブ配信（月2回）", desc: "強みの棚卸しワーク・フィードバック・コーチング。メンバー同士の内輪の対話も。" },
              { icon: "📹", title: "動画コンテンツ（月2回）", desc: "副業デザイン講座・Kindle出版講座など。講座修了後に「次回講座」を設定。" },
              { icon: "💬", title: "コミュニティ内交流", desc: "メンバー同士の近況・成果シェア。Eddieへの質問・相談。月1回「外の本」企画。" },
              { icon: "🎓", title: "卒業制度", desc: "「強みを武器に稼いだ実績」が卒業条件。卒業生コミュニティとして繋がり続けられる。" },
              { icon: "📚", title: "Kindle出版サポート", desc: "セルフブランディング×出版の実践。KDP設定から表紙・プロモーションまで伴走。" },
              { icon: "🔗", title: "10日間LINE無料講座", desc: "まずはLINEで「あなたの強みを見つける、編集思考10日間入門講座」を体験。" },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px 28px" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div style={{ background: "var(--footer)", color: "white", padding: "64px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: "20px" }}>まず10日間、無料で試す</h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.9, marginBottom: "32px" }}>
          LINEに登録するだけで、10日間のステップ配信が届きます。<br />
          「あなたの強みを見つける、編集思考10日間入門講座」を無料でお届けします。
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
      </div>

      {/* FAQ */}
      <section style={{ background: "var(--bg)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, textAlign: "center", marginBottom: "12px" }}>FAQ</p>
          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "28px", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>よくある質問</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { q: "コミュニティはどこで活動しますか？", a: "現在はNotionとFacebook Messengerを活用して運営しています。ライブ配信はオンライン（Zoom等）で実施します。" },
              { q: "月額料金はいくらですか？", a: "詳細は近日公開予定です。まずはLINEで無料の10日間講座をお試しください。" },
              { q: "動画講座だけ購入することはできますか？", a: "はい、Editorial Thinking Collectiveから単品購入（買い切り）も可能です。コミュニティ活動は含まれません。" },
              { q: "副業初心者でも参加できますか？", a: "もちろんです。強みの棚卸しから始めますので、何から手をつけていいかわからない方にこそ向いています。" },
              { q: "Kindle出版の経験がなくても大丈夫ですか？", a: "はい、KDP設定から表紙・プロモーションまで、実務を一緒に進めます。出版経験ゼロでも取り組めます。" },
            ].map((faq, i, arr) => (
              <div key={faq.q} style={{ borderTop: "1px solid var(--border)", borderBottom: i === arr.length - 1 ? "1px solid var(--border)" : "none", padding: "24px 0" }}>
                <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: "12px" }}>Q. {faq.q}</p>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8 }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* About: 2カラム → スマホで縦積み */
        .community-about-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        /* Steps: 4カラム → スマホで2カラム */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        /* Contents: 3カラム → スマホで1カラム */
        .contents-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .community-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .contents-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
}
