import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { HowItWorks } from "@/components/StepList";
import { ValueList, Card } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { WaveDivider } from "@/components/WaveDivider";
import { Badge } from "@/components/Badge";
import { createMetadata } from "@/lib/seo";
import {
  aboutHero,
  aboutMission,
  builtForBoth,
  impactStats,
  HowItWorksTeens,
  HowItWorksCompanies,
} from "@/data/about";
import { faqItems } from "@/data/faq";
import { values, valuesTitle, valuesSubtitle } from "@/data/values";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export const generateMetadata = async (): Promise<Metadata> =>
  createMetadata({
    title: "Funngro — Freelance Projects for Teens in India",
    description:
      "Funngro connects teenagers in India with companies for project-based freelance work. Earn rewards, build a portfolio, and gain real skills while still in school.",
    path: "/",
  });

export default function AboutPage() {
  return (
    <>
      <Hero title={aboutHero.title} subhead={aboutHero.subhead} ctas={aboutHero.ctas} />

      <WaveDivider />

      <Reveal as="section" delay={100} className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={aboutMission.title} subtitle={aboutMission.body} centered />
          <p className="mt-4 text-sm text-muted">
            Founded in {aboutMission.founded} · {aboutMission.location}
          </p>
          <Badge variant="soft" className="mt-6">
            Project-based · Skill-building · Verified teens
          </Badge>
        </div>
      </Reveal>

      <WaveDivider flip />

      <Reveal as="section" delay={200} className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={HowItWorksTeens.title} subtitle={HowItWorksTeens.intro} />
          <HowItWorks teens={HowItWorksTeens} companies={HowItWorksCompanies} />
        </div>
      </Reveal>

      <WaveDivider />

      <Reveal as="section" delay={300} className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Built for both sides"
            subtitle="One platform for two very different goals."
            centered
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {builtForBoth.map((item) => (
              <Reveal key={item.id} delay={350} as="div">
                <Card title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <WaveDivider flip />

      <Reveal as="section" delay={400} className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={valuesTitle} subtitle={valuesSubtitle} />
          <ValueList items={values.map((v) => ({ title: v.title, description: v.description }))} />
        </div>
      </Reveal>

      <Reveal as="section" delay={500} className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our footprint"
            subtitle="Numbers we will share once verified."
            centered
          />
          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-panel p-6 text-center"
              >
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="mt-2 font-sans text-3xl font-extrabold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <WaveDivider />

      <Reveal as="section" delay={600} className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} title="Frequently asked questions" />
        </div>
      </Reveal>

      <Reveal as="section" delay={700} id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ready to begin?"
            subtitle="Teens, companies and schools are welcome to get in touch."
            centered
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </Reveal>

      <footer className="border-t border-border bg-panel py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Funngro. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
