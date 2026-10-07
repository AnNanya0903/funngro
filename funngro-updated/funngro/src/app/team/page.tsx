import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamGrid";
import { Reveal } from "@/components/Reveal";
import { ValueList } from "@/components/ui/Card";
import { ContactForm } from "@/components/ContactForm";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";
import { teamConfig, howWeWork } from "@/data/team";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export const generateMetadata = async (): Promise<Metadata> =>
  createMetadata({
    title: "Our Team: The People Behind Funngro",
    description:
      "Meet the teams at Funngro — product and engineering, community and support, partnerships, and content and marketing — working to give teens real project opportunities.",
    path: "/team",
  });

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
];

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero title={teamConfig.intro.title} subhead={teamConfig.intro.lead} ctas={[]} />

      <Reveal as="section" delay={100} className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="flex items-center gap-2">
              {breadcrumbs.map((b) => (
                <li key={b.href} className="flex items-center gap-2">
                  <a
                    href={b.href}
                    className="text-muted hover:text-foreground focus-visible:text-foreground"
                  >
                    {b.name}
                  </a>
                  {b !== breadcrumbs[breadcrumbs.length - 1] && (
                    <span aria-hidden="true" className="text-border">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <SectionHeading title="Our teams" subtitle="Grouped by function" />

          <TeamGrid teams={teamConfig.teams} />
        </div>
      </Reveal>

      <Reveal as="section" delay={200} className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How we work" subtitle="Our guiding principles" centered />
          <ValueList items={howWeWork} />
        </div>
      </Reveal>

      <Reveal as="section" delay={300} id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact the Funngro team"
            subtitle="Tell us who you are and how we can help. We read every message."
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
