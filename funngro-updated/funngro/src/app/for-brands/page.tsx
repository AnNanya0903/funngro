import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CampaignBuilder } from "@/components/CampaignBuilder";
import { JourneyToggle } from "@/components/JourneyToggle";
import { BrandDashboard } from "@/components/BrandDashboard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { brandFaq } from "@/data/brandFaq";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Youth Marketing Platform India: Reach Young Consumers | Funngro",
  description: "Work with a community of young Indians through campaigns for promotion, sampling, content, referrals and research. Start a youth marketing campaign with Funngro.",
  path: "/for-brands",
});

const journey = [
  ["Reach", "Put your campaign in front of young Indians."],
  ["Engage", "Give them a clear task to take part in."],
  ["Act", "Participants complete the action you asked for."],
  ["Measure", "Review participation against your objective."],
].map(([title, text]) => ({ title, text }));
const types = [
  ["Brand Promotion", "Spread the word about your product or launch."],
  ["Sampling", "Put products in the hands of young consumers."],
  ["Content Creation", "Collect fresh, youth-made creative content."],
  ["Surveys & Research", "Understand how young people think."],
  ["Referrals", "Grow through participants who invite others."],
  ["Influencer Campaigns", "Work with young creators on your message."],
].map(([title, text]) => ({ title, text }));

export default function ForBrandsPage() {
  return (
    <>
      <Breadcrumbs current="For Companies" href="/for-brands" />
      <Hero
        visual={<BrandDashboard />}
        title="Reach India's young consumers through real action."
        subhead="Work with a community of young Indians through campaigns designed for promotion, sampling, content, referrals and research."
        ctas={[{ label: "Start a Campaign", href: "/team#contact" }, { label: "Talk to Funngro", href: "/team#contact", variant: "ghost" }]}
      />
      <Section title="More than impressions. Drive action."><CardGrid items={journey} /></Section>
      <Section title="Campaign types"><CardGrid items={types} /></Section>
      <Section title="Build your campaign" subtitle="A demo of how a brief could take shape."><CampaignBuilder /></Section>
      <Section title="How it works for companies"><JourneyToggle initial="For Companies" /></Section>
      <section className="py-14"><div className="mx-auto max-w-4xl px-4"><FaqAccordion items={brandFaq} title="Questions from brands" /></div></section>
      <CtaBand title="Ready to reach young Indians?" text="Tell us your objective and we will help you plan a campaign." primary={["Start a Campaign", "/team#contact"]} secondary={["How It Works", "/how-it-works"]} />
    </>
  );
}
