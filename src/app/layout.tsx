/**
 * Layout racine — structure HTML, metadata, fonts, providers.
 * @module app/layout
 */

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { config } from "@/config/app";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: config.seo.defaultTitle,
    template: config.seo.titleTemplate,
  },
  description: config.seo.defaultDescription,
  openGraph: {
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
    siteName: config.appName,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col bg-[var(--color-bg)] font-body text-[var(--color-text)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
