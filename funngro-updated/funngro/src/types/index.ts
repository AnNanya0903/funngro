export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  locale: string;
  foundingYear: number;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavConfig {
  brand: { label: string; href: string };
  links: NavLink[];
  cta: NavLink;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  headcount?: number;
  color?: string;
}

export interface TeamConfig {
  intro: {
    title: string;
    lead: string;
  };
  teams: Team[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  id: string;
  number: number;
  title: string;
  description: string;
  audience: "teens" | "companies";
}

export interface HowItWorksConfig {
  title: string;
  intro: string;
  steps: HowItWorksStep[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqConfig {
  title: string;
  items: FaqItem[];
}
