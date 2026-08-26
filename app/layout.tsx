import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ray's Tree Removal | Arborist & Tree Removal in Southeast Michigan",
  description:
    "Professional tree removal, trimming, storm cleanup, and arborist services for homeowners across Southeast Michigan. Contact Ray for a free estimate.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ray's Tree Removal | Southeast Michigan Arborist",
    description:
      "Safe, reliable residential tree removal, trimming, and storm cleanup across Southeast Michigan.",
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ray's Tree Removal | Southeast Michigan Arborist",
    description:
      "Safe, reliable residential tree removal, trimming, and storm cleanup across Southeast Michigan.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
