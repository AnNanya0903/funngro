import { FaqItem, FaqConfig } from "@/types";

export const faqTitle = "Frequently asked questions";

export const faqItems: FaqItem[] = [
  {
    id: "who-can-join",
    question: "Who can join Funngro?",
    answer:
      "Funngro is for young Indians aged 14-25. Teens under 18 sign up with a parent or guardian. We also work with schools and companies that want to post projects.",
  },
  {
    id: "how-teens-earn",
    question: "How do teens get paid?",
    answer:
      "Teens earn rewards for completed projects. Rewards can be sent via the payment method available in your region and are reviewed by the posting company.",
  },
  {
    id: "project-types",
    question: "What kind of projects are available?",
    answer:
      "Real, short-term projects from companies in design, marketing, writing, research and more. Every brief states the skills needed, time required and reward.",
  },
  {
    id: "for-companies",
    question: "How do companies work with Funngro?",
    answer:
      "Post a clear brief, receive submissions from motivated teens, review the work and award the project. Companies can also use Funngro for early hiring signal.",
  },
  {
    id: "safety",
    question: "How does Funngro keep teens safe?",
    answer:
      "Our community team reviews every brief and submission, moderated communication keeps personal details private, and all projects are age-appropriate.",
  },
  {
    id: "founded",
    question: "When was Funngro founded?",
    answer:
      "Funngro was founded in 2021 in India, connecting teenagers with real project-based work.",
  },
];

export const faqConfig: FaqConfig = {
  title: faqTitle,
  items: faqItems,
};
