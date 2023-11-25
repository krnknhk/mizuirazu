import type { Metadata } from "next";
import React from "react";
import "./global.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "水いらず",
  description:
    "水いらずは2016年に結成された東京を拠点に活動する4人組インディ・ロック・バンド。アジアの民族音楽をもとに、スタンドアローン・コンプレックス(孤立した個人でありながらも、全体として集団的な行動を取る)なスタンスを心がけながら、独自の音楽を生み出す。メンバーは楽器よりもPCを愛用している。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
