import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { BackToTop } from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Teenage freelance in India`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "funngro",
    "freelance projects for teens",
    "teen internships india",
    "earn as a teenager",
    "teenage freelance",
    "student portfolio",
    "project-based learning",
    "freelance platform india",
  ],
  openGraph: {
    type: "website",
    locale: "en-IN",
    siteName: siteConfig.name,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@funngro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="relative min-h-screen bg-navy text-foreground font-sans antialiased">
        <SkipLink />
        <Header />
        <main id="main" className="relative isolate">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Analytics />
      </body>
    </html>
  );
}
