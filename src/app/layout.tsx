import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sensibilisation Cameroun",
  description: "Alerte contre la manipulation sur les réseaux sociaux au Cameroun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen`}>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(0,255,0,0.1),rgba(255,255,255,0)_100%)]" />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
} 