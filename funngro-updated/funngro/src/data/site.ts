import { SiteConfig } from "@/types";

export const siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL || "https://funngro.com";

export const siteConfig: SiteConfig = {
  name: "Funngro",
  shortName: "Funngro",
  description:
    "Funngro is a freelance platform that connects teenagers in India with companies for real, project-based work. Teens earn rewards, build skills and create a portfolio. Companies find fresh creative talent for projects and early hiring.",
  url: siteUrl,
  locale: "en-IN",
  foundingYear: 2021,
};
