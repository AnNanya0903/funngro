import { HowItWorksCompanies, HowItWorksTeens } from "./howItWorks";

export const aboutHero = {
  title: "Real projects for teens. Fresh talent for companies.",
  subhead:
    "Funngro is a freelance platform where teenagers in India take on project-based work from companies, earn rewards and learn skills that school rarely teaches.",
  ctas: [
    { label: "Find a project", href: "https://www.funngro.com", variant: "primary" as const },
    { label: "Meet the team", href: "/team", variant: "ghost" as const },
  ],
};

export const aboutMission = {
  title: "The Funngro idea",
  body: `Funngro is a freelance platform in India that connects teenagers with companies for real, project-based work. Teens complete projects, earn rewards and build a portfolio. Companies get fresh perspectives and a pipeline of young talent.`,
  founded: 2021,
  location: "India",
};

export const builtForBoth = [
  {
    id: "teens",
    title: "For teens",
    description:
      "Build a portfolio with real briefs, earn while you learn, and show companies what you can do before you finish school.",
  },
  {
    id: "companies",
    title: "For companies",
    description:
      "Post a clear project, see how young talent thinks, and find creative people for tasks, campaigns and early hiring.",
  },
];

// Impact numbers are not publicly documented. Add real figures here when available.
export const impactStats: { label: string; value: string }[] = [
  { label: "Young Indians on Funngro, as stated on funngro.com", value: "70 Lakh+" },
  { label: "Founded", value: "2021" },
  { label: "Payouts", value: "Via UPI" },
];

// Re-export how-it-works configs so the page pulls everything from /data.
export { HowItWorksTeens, HowItWorksCompanies };
