import type { Metadata } from "next";
import React from "react";
import "./global.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "水いらず",
  description:
    "2016年に結成された東京を拠点に活動する4人組インディ・ロック・バンド。アジアの民族音楽をもとに、スタンドアローン・コンプレックス(孤立した個人でありながらも、全体として集団的な行動を取る)なスタンスを心がけながら、独自の音楽を生み出す。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <meta
        name="google-site-verification"
        content="ekZX9btqECJbPJKYMDQarqM-KxuTHg065JIXsnHSdxQ"
      />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
