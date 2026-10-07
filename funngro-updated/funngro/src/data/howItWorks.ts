import { HowItWorksStep, HowItWorksConfig } from "@/types";

export const howItWorksTitle = "How Funngro works";
export const howItWorksIntro = "It takes three steps, for both teens and companies.";

const teenSteps: HowItWorksStep[] = [
  {
    id: "pick-a-project",
    number: 1,
    title: "Pick a project",
    description:
      "Browse briefs from companies and choose one that fits your skills and your schedule.",
    audience: "teens",
  },
  {
    id: "do-the-work",
    number: 2,
    title: "Do the work",
    description: "Follow the steps in the brief, then submit your completed work from your phone.",
    audience: "teens",
  },
  {
    id: "get-rewarded",
    number: 3,
    title: "Get rewarded and noticed",
    description:
      "Earn rewards for good work. Companies award bigger projects to teens who show talent.",
    audience: "teens",
  },
];

const companySteps: HowItWorksStep[] = [
  {
    id: "post-project",
    number: 1,
    title: "Post a project",
    description: "Describe what you need in a short, clear brief with a real budget and deadline.",
    audience: "companies",
  },
  {
    id: "review-submissions",
    number: 2,
    title: "Review submissions",
    description:
      "See how young talent thinks and solves your problem, then pick the work you like.",
    audience: "companies",
  },
  {
    id: "build-relationship",
    number: 3,
    title: "Build a relationship",
    description: "Award the project and connect with creators who might join your team early.",
    audience: "companies",
  },
];

export const HowItWorksTeens: HowItWorksConfig = {
  title: "For teens",
  intro: "Take project-based work, earn rewards and build a portfolio.",
  steps: teenSteps,
};

export const HowItWorksCompanies: HowItWorksConfig = {
  title: "For companies",
  intro: "Post a brief, see how young talent thinks and find creative people.",
  steps: companySteps,
};
