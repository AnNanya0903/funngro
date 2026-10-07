import { Team, TeamConfig } from "@/types";

export const teamIntroTitle = "The people behind Funngro";
export const teamIntroLead =
  "Four teams work together so teens find good projects and companies find good talent.";

export const teams: Team[] = [
  {
    id: "product-engineering",
    name: "Product and engineering",
    headcount: 0,
    description:
      "Builds the app and website, keeps submissions simple and makes sure the platform works on any phone.",
  },
  {
    id: "community-support",
    name: "Community and support",
    headcount: 0,
    description:
      "Answers teens' questions, reviews submissions and keeps the community friendly and safe.",
  },
  {
    id: "partnerships",
    name: "Partnerships",
    headcount: 0,
    description:
      "Works with companies to turn their needs into clear, achievable projects for teens.",
  },
  {
    id: "content-marketing",
    name: "Content and marketing",
    headcount: 0,
    description:
      "Tells the stories of teens and companies and shares new contests and opportunities.",
  },
];

export const howWeWork = [
  { title: "Teens first", description: "Every decision starts with what helps young people grow." },
  { title: "Keep it simple", description: "Short briefs, clear steps and honest rewards." },
  { title: "Stay curious", description: "We test ideas, listen to feedback and improve often." },
];

export const teamConfig: TeamConfig = {
  intro: {
    title: teamIntroTitle,
    lead: teamIntroLead,
  },
  teams,
};
