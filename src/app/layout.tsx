import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keel Ridge — Bespoke Adventure",
    template: "%s | Keel Ridge",
  },
  description:
    "Bespoke adventures from the mountains to the sea — personally curated, locally guided, community driven.",
  metadataBase: new URL("https://keelridge.co"),
  openGraph: {
    title: "Keel Ridge — Bespoke Adventure",
    description:
      "Adventures designed by someone who's been there, built on guides who live there, rooted in communities that need us there.",
    url: "https://keelridge.co",
    siteName: "Keel Ridge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keel Ridge — Bespoke Adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keel Ridge — Bespoke Adventure",
    description:
      "Bespoke adventures from the mountains to the sea — personally curated, locally guided, community driven.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
