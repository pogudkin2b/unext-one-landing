import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://unext.one'),
  title: "UNEXT.ONE — юридический партнёр для роста бизнеса",
  description: "Юридическая поддержка для стартапов, инвесторов, корпораций и Web3-команд: от Term Sheet до M&A — быстро, понятно и без воды.",
  keywords: [
    "юридические услуги",
    "юрист для стартапа",
    "юрист для бизнеса",
    "Term Sheet",
    "M&A сделки",
    "Web3 юрист",
    "корпоративный юрист",
    "инвестиционные сделки",
    "юридическое сопровождение",
    "UNEXT.ONE"
  ],
  authors: [{ name: "UNEXT.ONE" }],
  creator: "UNEXT.ONE",
  publisher: "UNEXT.ONE",
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://unext.one',
    title: "UNEXT.ONE — юридический партнёр для роста бизнеса",
    description: "Юридическая поддержка для стартапов, инвесторов, корпораций и Web3-команд: от Term Sheet до M&A — быстро, понятно и без воды.",
    siteName: "UNEXT.ONE",
  },
  twitter: {
    card: 'summary_large_image',
    title: "UNEXT.ONE — юридический партнёр для роста бизнеса",
    description: "Юридическая поддержка для стартапов, инвесторов, корпораций и Web3-команд: от Term Sheet до M&A — быстро, понятно и без воды.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://unext.one',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
