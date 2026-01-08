
import "./globals.css"
import { Metadata } from "next";
import { ClientProviders } from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "KASHIN – Retail. Rewired.",
  description:
    "KASHIN is a retail strategy consulting firm helping retailers, founders, and design-driven brands turn bold ideas into scalable, profitable businesses.",
  authors: [{ name: "KASHIN" }],
  openGraph: {
    title: "KASHIN – Retail. Rewired.",
    description:
      "We help retail visionaries bring their bold ideas to life with strategy, systems, and scalable execution.",
    url: "https://kashin-beryl.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://kashin-beryl.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KASHIN – Retail. Rewired.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kashin_consulting",
    title: "KASHIN – Retail. Rewired.",
    description:
      "Strategy, systems, and execution for modern consumer brands.",
    images: ["https://kashin-beryl.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}