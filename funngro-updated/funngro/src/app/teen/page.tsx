import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OpportunityFinder } from "@/components/OpportunityFinder";
import { JourneyToggle } from "@/components/JourneyToggle";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqItems } from "@/data/faq";
import { impactStats } from "@/data/about";
import { PhoneMock } from "@/components/PhoneMock";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Online Earning Opportunities for Young Indians | Funngro",
  description: "Discover brand campaigns, complete flexible projects, build skills and get paid through Funngro. Earning opportunities for young Indians and students.",
  path: "/teen",
});

const demo = [
  { tag: "Content Campaign · Example", title: "Create a 30-second Reel", text: "Demo: ₹750 · 2 days · Beginner friendly" },
  { tag: "Brand Promotion · Example", title: "Promote a new product", text: "Demo: ₹1,000 · 3 days · Flexible" },
  { tag: "Research · Example", title: "Complete a short survey", text: "Demo: ₹150 · 1 day · Beginner friendly" },
];
const cats = ["Content Creation", "Brand Promotion", "Referrals", "Sampling", "Surveys", "Influencer Campaigns", "App Testing", "Micro Tasks"].map((t) => ({
  title: t, text: `Opportunities in ${t.toLowerCase()} from brands working with Funngro.`,
}));
const why = ["Real Brand Opportunities", "Flexible Work", "Skill Development", "Portfolio Experience", "Community", "Professional Exposure"].map((t) => ({
  title: t, text: "Build experience through real work while you study.",
}));

export default function TeenPage() {
  return (
    <>
      <Breadcrumbs current="For Teens" href="/teen" />
      <Hero
        visual={<PhoneMock />}
        title="Turn your time into real opportunities."
        subhead="Discover brand campaigns, complete flexible projects, build skills and get paid through Funngro."
        ctas={[{ label: "Explore Opportunities", href: "/team#contact" }, { label: "How It Works", href: "/how-it-works", variant: "ghost" }]}
      />
      <Section title="Trusted by young Indians">
        <dl className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {impactStats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-panel p-6 text-center">
              <dd className="text-3xl font-extrabold text-brand">{s.value}</dd>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Section>
      <Section title="Find your opportunity" subtitle="Tell us what you enjoy and see which kinds of work may suit you."><OpportunityFinder /></Section>
      <Section title="Example opportunities" subtitle="Demo cards that show how a campaign looks. These are not live Funngro opportunities."><CardGrid items={demo} /></Section>
      <Section title="How it works"><JourneyToggle /></Section>
      <Section title="Work categories"><CardGrid items={cats} /></Section>
      <Section title="Start, grow, build" subtitle="Earnings vary by opportunity, participation and completion.">
        <CardGrid items={[
          { tag: "Start", title: "Take a first project", text: "Pick a beginner-friendly brief and finish your first task." },
          { tag: "Grow", title: "Try more categories", text: "Explore different kinds of work and learn what you enjoy." },
          { tag: "Build", title: "Create a track record", text: "Collect experience you can talk about in school and beyond." },
        ]} />
      </Section>
      <Section title="More than earning. Build your future." subtitle="Earnings vary by opportunity, participation and completion."><CardGrid items={why} /></Section>
      <section className="py-14"><div className="mx-auto max-w-4xl px-4"><FaqAccordion items={faqItems} title="Frequently asked questions" /></div></section>
      <CtaBand title="Your next opportunity is closer than you think." text="Discover projects, build experience and take your first step toward earning." primary={["Explore Opportunities", "/team#contact"]} secondary={["How It Works", "/how-it-works"]} />
    </>
  );
}
