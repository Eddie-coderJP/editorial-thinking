import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const SITE_URL = "https://editorialthinking.com";
const SITE_NAME = "Editorial Thinking Collective";
const SITE_DESCRIPTION =
  "編集思考を学び、実践し、仲間と磨き合う場。あなたの中にある編集思考を解き放つ。";
const OGP_IMAGE = `${SITE_URL}/images/ogp_default.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "編集思考",
    "Editorial Thinking",
    "文章術",
    "ブランディング",
    "SNS戦略",
    "生成AI",
    "コミュニティ",
    "じぶんを編集する学校",
  ],
  authors: [{ name: "UENO Ikue (Eddie)", url: SITE_URL }],
  creator: "UENO Ikue (Eddie)",
  publisher: "株式会社エディットブレイン",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: OGP_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OGP_IMAGE],
    creator: "@editbrain",
  },
  icons: {
    icon: "/images/logo_red_trimmed.png",
    apple: "/images/logo_red_trimmed.png",
  },
  verification: {
    // google: "your-google-site-verification-code", // Google Search Console設定後に追加
  },
};

// JSON-LD 構造化データ（Organization）
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo_red_bright.png`,
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "UENO Ikue",
    jobTitle: "エディトリアル・コンサルタント",
  },
  sameAs: [
    // SNSアカウントのURLをここに追加
  ],
};

// JSON-LD 構造化データ（WebSite + Sitelinks Searchbox）
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
