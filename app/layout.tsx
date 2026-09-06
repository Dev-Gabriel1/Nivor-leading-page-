import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivor-cardapio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nivor Cardápio Digital | Cardápio online para vender pelo WhatsApp",
    template: "%s | Nivor",
  },
  description:
    "Crie um cardápio digital profissional para seu restaurante, hamburgueria, pizzaria ou delivery. Receba pedidos, gerencie produtos e acompanhe sua operação em um painel simples.",
  keywords: [
    "cardápio digital",
    "cardápio online",
    "cardápio para WhatsApp",
    "cardápio digital para restaurante",
    "sistema para delivery",
    "menu digital",
    "cardápio para hamburgueria",
    "cardápio para pizzaria",
    "pedidos pelo WhatsApp",
    "Nivor",
  ],
  authors: [{ name: "Nivor Soluções Digitais" }],
  creator: "Nivor Soluções Digitais",
  publisher: "Nivor Soluções Digitais",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Nivor Cardápio Digital",
    title: "Seu cardápio profissional. Seus pedidos. Sua marca.",
    description:
      "Cardápio digital completo com painel de gestão e pedidos. Por R$ 79,90/mês, sem taxa de implantação e cancele quando quiser.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nivor Cardápio Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivor Cardápio Digital",
    description: "Transforme o WhatsApp do seu negócio em um canal de pedidos mais profissional.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070A12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
