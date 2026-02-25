import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Editorial Thinking Collective",
  description: "編集思考を学び、実践し、仲間と磨き合う場。あなたの中にある編集思考を解き放つ。",
  openGraph: {
    title: "Editorial Thinking Collective",
    description: "編集思考を学び、実践し、仲間と磨き合う場。あなたの中にある編集思考を解き放つ。",
    url: "https://editorialthinking.com",
    siteName: "Editorial Thinking Collective",
    locale: "ja_JP",
    type: "website",
  },
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
