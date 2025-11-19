import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNEXT.ONE — юридический партнёр для роста бизнеса",
  description: "Юридическая поддержка для стартапов, инвесторов, корпораций и Web3-команд: от SAFE до M&A — быстро, понятно и без воды.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
