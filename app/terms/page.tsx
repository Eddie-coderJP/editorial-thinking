import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Editorial Thinking Collectiveの利用規約。コミュニティ利用条件、投稿コンテンツの著作権、禁止事項などを定めています。",
  alternates: {
    canonical: "https://editorialthinking.com/terms",
  },
  openGraph: {
    title: "利用規約 | Editorial Thinking Collective",
    description: "Editorial Thinking Collectiveの利用規約。",
    url: "https://editorialthinking.com/terms",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: "var(--footer)",
        color: "white",
        padding: "64px 80px 48px",
      }} className="policy-hero">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>
            TERMS OF SERVICE
          </p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1.4 }}>
            利用規約
          </h1>
          <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>最終更新日：2026年2月27日</p>
        </div>
      </section>

      {/* CONTENT */}
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 24px 80px" }} className="policy-body">

        <p>本利用規約（以下「本規約」）は、株式会社エディットブレイン（以下「当社」）が運営するEditorial Thinking Collective（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただく前に、本規約をよくお読みください。本サービスをご利用いただいた場合、本規約に同意したものとみなします。</p>

        <h2>第1条（サービスの概要）</h2>
        <p>本サービスは、編集思考・文章術・ブランディング・生成AIをテーマとしたコラム配信、およびコミュニティ「じぶんを編集する学校」の運営を行うプラットフォームです。将来的には、コミュニティメンバーによる記事投稿機能の提供を予定しています。</p>

        <h2>第2条（利用登録）</h2>
        <p>コミュニティへの参加・投稿機能の利用には、当社が定める方法による登録が必要です。登録にあたっては、真実かつ正確な情報を提供してください。虚偽の情報による登録が判明した場合、当社は登録を取り消すことができます。</p>

        <h2>第3条（禁止事項）</h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>他のユーザーまたは第三者の権利・利益を侵害する行為（著作権侵害・名誉毀損・プライバシー侵害を含む）</li>
          <li>虚偽の情報を投稿・拡散する行為</li>
          <li>スパム・広告・勧誘目的の投稿</li>
          <li>本サービスの運営を妨害する行為</li>
          <li>他のユーザーへの嫌がらせ・差別的発言・攻撃的な表現</li>
          <li>当社の事前承諾なく、本サービスのコンテンツを商業目的で利用する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>

        <h2>第4条（投稿コンテンツ）</h2>
        <p>ユーザーが本サービスに投稿したコンテンツ（文章・画像・動画等）の著作権は、投稿したユーザーに帰属します。ただし、ユーザーは当社に対し、本サービスの運営・改善・プロモーション目的において、投稿コンテンツを無償かつ非独占的に利用する権利を許諾するものとします。</p>
        <p>投稿コンテンツが第三者の著作権・肖像権・プライバシー権等を侵害しないよう、ユーザー自身の責任において確認してください。第三者との間で紛争が生じた場合、ユーザーの責任と費用で解決するものとします。</p>

        <h2>第5条（コンテンツの削除・利用停止）</h2>
        <p>当社は、投稿コンテンツが本規約に違反すると判断した場合、事前通知なく当該コンテンツを削除し、または当該ユーザーの利用を停止することができます。これによりユーザーに損害が生じた場合でも、当社は責任を負いません。</p>

        <h2>第6条（当社コンテンツの著作権）</h2>
        <p>本サービス上で当社が提供するコラム記事・デザイン・ロゴ・テキスト等のコンテンツの著作権は、当社または正当な権利を有する第三者に帰属します。ユーザーは、当社の事前承諾なく、これらを複製・転載・改変・商業利用することはできません。</p>

        <h2>第7条（免責事項）</h2>
        <p>当社は、本サービスのコンテンツの正確性・完全性・有用性について保証しません。本サービスの利用によりユーザーに生じた損害について、当社の故意または重大な過失による場合を除き、当社は責任を負いません。</p>
        <p>本サービスは予告なく内容を変更・停止・終了することがあります。これによりユーザーに損害が生じた場合でも、当社は責任を負いません。</p>

        <h2>第8条（サービスの変更・終了）</h2>
        <p>当社は、事業上の都合により、本サービスの内容を変更し、または提供を終了することがあります。サービス終了の際は、可能な限り事前にお知らせします。</p>

        <h2>第9条（規約の変更）</h2>
        <p>当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サービス上に掲示した時点から効力を生じます。変更後も本サービスを継続してご利用いただいた場合、変更後の規約に同意したものとみなします。</p>

        <h2>第10条（準拠法・管轄裁判所）</h2>
        <p>本規約の解釈および適用は、日本法に準拠します。本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>

        <h2>第11条（お問い合わせ）</h2>
        <p>本規約に関するお問い合わせは、以下までご連絡ください。</p>
        <div style={{ background: "var(--bg-alt)", borderRadius: "8px", padding: "24px", marginTop: "16px" }}>
          <p style={{ margin: 0 }}>
            <strong>株式会社エディットブレイン</strong><br />
            Editorial Thinking Collective 運営事務局<br />
            Webサイト：<a href="https://editorialthinking.com/contact" style={{ color: "var(--accent)" }}>お問い合わせフォーム</a>
          </p>
        </div>
      </article>

      <style>{`
        .policy-hero { padding: 40px 24px 32px !important; }
        @media (min-width: 769px) {
          .policy-hero { padding: 64px 80px 48px !important; }
        }
        .policy-body h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: 18px;
          font-weight: 700;
          margin: 40px 0 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
          color: var(--footer);
        }
        .policy-body p {
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 16px;
          color: var(--text);
        }
        .policy-body ul {
          padding-left: 24px;
          margin-bottom: 16px;
        }
        .policy-body li {
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 8px;
          color: var(--text);
        }
      `}</style>
    </>
  );
}
