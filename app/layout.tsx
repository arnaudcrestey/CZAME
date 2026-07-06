import type { Metadata } from "next";

import { LayoutShell } from "@/components/LayoutShell";

import "./globals.css";

export const metadata: Metadata = {
  title: "CZAME - Aide au dialogue",
  description:
    "Assistant IA prudent pour préparer une conversation difficile autour d'une conduite addictive.",
  metadataBase: new URL("https://czame.local"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}