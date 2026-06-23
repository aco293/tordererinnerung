import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TorDerErinnerung – Ein Raum für Bewusstsein und innere Klarheit",
  description:
    "TorDerErinnerung ist ein digitaler Raum für Menschen, die tiefer fühlen, bewusster sehen und sich wieder mit ihrer inneren Wahrheit verbinden möchten.",
  keywords: [
    "Bewusstsein",
    "Spiritualität",
    "innere Klarheit",
    "Erinnerung",
    "Frequenz",
    "Aureon Thal'Emar",
  ],
  openGraph: {
    title: "TorDerErinnerung",
    description:
      "Ein Raum für Bewusstsein, innere Klarheit und die Rückkehr zu dem, was in dir nie verloren ging.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
