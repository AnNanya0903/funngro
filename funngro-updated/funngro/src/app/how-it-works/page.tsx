import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JourneyToggle } from "@/components/JourneyToggle";
import { CtaBand } from "@/components/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How Funngro Works for Teens and Companies",
  description: "See how young Indians discover, complete and earn from projects, and how companies plan, launch and measure campaigns on Funngro.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs current="How It Works" href="/how-it-works" />
      <Section title="How Funngro works" subtitle="Switch between the teen and company journeys."><JourneyToggle /></Section>
      <CtaBand title="Ready to get started?" text="Whether you want to earn or run a campaign, we can help." primary={["For Teens", "/teen"]} secondary={["For Companies", "/for-brands"]} />
    </>
  );
}
