import type { Metadata } from "next";
import "./globals.css";
import { portfolioConfig } from "@/data/portfolioData";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.siteUrl),
  title: {
    default: `${portfolioConfig.personal.name} | Construction Software Engineer & CTO | SK PROJECTS`,
    template: `%s | ${portfolioConfig.personal.name}`,
  },
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  authors: [{ name: portfolioConfig.personal.name, url: portfolioConfig.siteUrl }],
  creator: portfolioConfig.personal.name,
  publisher: portfolioConfig.agency.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${portfolioConfig.personal.name} | Construction Software Engineer & CTO`,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.siteUrl,
    siteName: `${portfolioConfig.personal.name} Portfolio & SK PROJECTS`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.name} | Construction Software Engineer & CTO`,
    description: portfolioConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
