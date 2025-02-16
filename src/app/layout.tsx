import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sensibilisation Cameroun - Alerte Manipulation",
  description: "Découvrez comment détecter et éviter les manipulations sur les réseaux sociaux au Cameroun. Ensemble, protégeons l'unité de notre pays contre les tentatives de division.",
  keywords: "Cameroun, manipulation, réseaux sociaux, unité, sensibilisation, fake news, division",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://camalert.vercel.app",
    siteName: "CamAlert",
    title: "Ne tombez pas dans le piège de la manipulation",
    description: "Les réseaux sociaux sont utilisés pour diviser le Cameroun. Apprenez à identifier et contrer les tentatives de manipulation.",
    images: [
      {
        url: "/site-v.jpg",
        width: 1200,
        height: 630,
        alt: "CamAlert - Sensibilisation contre la manipulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensibilisation contre la manipulation",
    description: "Protégeons l'unité du Cameroun contre les manipulations sur les réseaux sociaux",
    images: ["/site-v.jpg"],
    creator: "@CamAlert",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22c55e" },
    { media: "(prefers-color-scheme: dark)", color: "#22c55e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-slate-50 antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
} 