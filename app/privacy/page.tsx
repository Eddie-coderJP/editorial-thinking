export default function PrivacyPage() {
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
            PRIVACY POLICY
          </p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1.4 }}>
            プライバシーポリシー
          </h1>
          <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>最終更新日：2026年2月27日</p>
        </div>
      </section>

      {/* CONTENT */}
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 24px 80px" }} className="policy-body">

        <p>株式会社エディットブレイン（以下「当社」）は、Editorial Thinking Collective（以下「本サービス」）の運営において、ご利用者（以下「ユーザー」）の個人情報を適切に取り扱うことを重要な責務と考えています。本プライバシーポリシーは、当社が収集する情報の種類、利用目的、管理方法について定めるものです。</p>

        <h2>第1条（収集する情報）</h2>
        <p>当社は、本サービスの提供にあたり、以下の情報を収集することがあります。</p>
        <ul>
          <li>氏名・メールアドレス等の連絡先情報（お問い合わせ・コミュニティ登録時）</li>
          <li>コミュニティへの投稿内容・コメント・プロフィール情報</li>
          <li>アクセスログ・IPアドレス・ブラウザ情報（自動収集）</li>
          <li>Cookie等の技術的情報（サービス改善・分析目的）</li>
        </ul>

        <h2>第2条（利用目的）</h2>
        <p>収集した個人情報は、以下の目的に限り利用します。</p>
        <ul>
          <li>本サービス（コラム配信・コミュニティ運営）の提供および改善</li>
          <li>ユーザーへのお知らせ・メールマガジン等の配信（同意を得た場合）</li>
          <li>お問い合わせへの対応</li>
          <li>不正利用の防止およびセキュリティの確保</li>
          <li>利用状況の分析・統計処理（個人を特定しない形での利用）</li>
        </ul>

        <h2>第3条（第三者提供）</h2>
        <p>当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
        <ul>
          <li>ユーザー本人の同意がある場合</li>
          <li>法令に基づく開示が必要な場合</li>
          <li>人の生命・身体・財産の保護のために必要な場合</li>
        </ul>

        <h2>第4条（コミュニティ投稿コンテンツの取り扱い）</h2>
        <p>本サービスでは、将来的にユーザーがコラム記事・コメント等を投稿できる機能の提供を予定しています。投稿されたコンテンツは、本サービス上で公開・表示されることをご了承ください。投稿内容の著作権はユーザーに帰属しますが、当社は本サービスの運営・改善・プロモーション目的において、投稿コンテンツを無償で利用できるものとします。</p>

        <h2>第5条（Cookieの利用）</h2>
        <p>本サービスでは、ユーザー体験の向上およびアクセス解析のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることができますが、一部機能が利用できなくなる場合があります。</p>

        <h2>第6条（Google Analyticsの利用）</h2>
        <p>当社は、サービス改善のためGoogle Analyticsを利用しています。Google Analyticsはデータ収集のためにCookieを使用しており、収集されたデータはGoogleのプライバシーポリシーに従って管理されます。</p>

        <h2>第7条（個人情報の管理・保護）</h2>
        <p>当社は、個人情報への不正アクセス・紛失・破損・改ざん・漏洩を防止するため、適切なセキュリティ対策を講じます。個人情報の取り扱いを委託する場合は、委託先に対して適切な監督を行います。</p>

        <h2>第8条（開示・訂正・削除の請求）</h2>
        <p>ユーザーは、当社が保有する自己の個人情報について、開示・訂正・削除・利用停止を請求することができます。請求は下記お問い合わせ先までご連絡ください。本人確認のうえ、合理的な期間内に対応します。</p>

        <h2>第9条（プライバシーポリシーの変更）</h2>
        <p>当社は、法令の改正やサービス内容の変更に伴い、本ポリシーを改定することがあります。重要な変更がある場合は、本サービス上でお知らせします。改定後も本サービスを継続してご利用いただいた場合、改定後のポリシーに同意したものとみなします。</p>

        <h2>第10条（お問い合わせ）</h2>
        <p>個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
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
