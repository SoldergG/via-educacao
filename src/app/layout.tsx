import type { Metadata } from "next";
import { Sora, Geist } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Via Educação — Gestão Educativa para Autarquias e Colégios",
  description:
    "Portal e@educa® e serviços de gestão educativa para autarquias e colégios em Portugal, desde 1999. Marca do grupo Espalha Ideias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${sora.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
