import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { href: "/", priority: 1, changeFrequency: "monthly" as const },
    { href: "/teen", priority: 0.9, changeFrequency: "monthly" as const },
    { href: "/for-brands", priority: 0.9, changeFrequency: "monthly" as const },
    { href: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { href: "/team", priority: 0.9, changeFrequency: "monthly" as const },
    { href: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { href: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
