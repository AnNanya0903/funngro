import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/data/site";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
  images?: Array<{ url: string; width?: number; height?: number }>;
  noindex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
  images,
  noindex,
}: PageMeta): Metadata {
  const canonical = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images:
        images ??
        (image
          ? [{ url: image, width: 1200, height: 628 }]
          : [{ url: "/og-image.png", width: 1200, height: 628 }]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images ?? (image ? [{ url: image }] : [{ url: "/og-image.png" }]),
    },
    ...(noindex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description:
      "Funngro is a freelance platform in India that connects teenagers with companies for project-based work.",
    url: siteConfig.url,
    foundingDate: `${siteConfig.foundingYear}-01-01`,
    areaServed: "IN",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.png`,
    },
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hello@funngro.com",
        contactType: "customer service",
        areaServed: "IN",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}
