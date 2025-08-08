import type { Metadata } from "next";
import React from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "水いらず",
  description:
    "2016年に結成された、東京を拠点に活動する4人組インディロック・バンド。“思想や概念から作曲を始める”、“アジアの民族音楽の再解釈”、“スタンドアローン・コンプレックス”、といったスタンスを意識しながら、独自の音楽を生み出している。",
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
