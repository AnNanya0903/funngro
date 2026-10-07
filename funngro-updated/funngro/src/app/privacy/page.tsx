import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Funngro",
  description:
    "How Funngro collects, uses and protects your data. Applies to teens, parents, companies and schools using our platform.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "1. What we collect",
    bullets: [
      "Personal details you share (name, email) when you contact us or sign up.",
      "Company details when a company posts a project or messages us.",
      "Usage data: IP address, browser, device, pages visited and time on page.",
      "Cookies and similar tracking to improve the site.",
    ],
  },
  {
    heading: "2. How we use it",
    bullets: [
      "Run, maintain and improve the site and services.",
      "Reply to inquiries and support requests.",
      "Connect teenagers with companies for project-based work.",
      "Send updates and marketing (you can opt out any time).",
      "Analyse usage, diagnose issues, and prevent fraud and abuse.",
    ],
  },
  {
    heading: "3. Legal basis",
    bullets: [
      "Your consent, where we ask for it explicitly.",
      "Performance of a contract with you (or preparing for one).",
      "Compliance with a legal obligation.",
      "Our legitimate interests, including running and improving the site.",
    ],
  },
  {
    heading: "4. How we share it",
    bullets: [
      "Service providers who help us run the site (hosting, email delivery, analytics).",
      "When required by law, regulation or legal process.",
      "To protect our rights, property or safety, or that of our users.",
    ],
  },
  {
    heading: "5. Your choices",
    bullets: [
      "Access the personal information we hold about you.",
      "Request correction or deletion of your information.",
      "Opt out of marketing communications.",
      "Object to or restrict certain processing.",
    ],
    note: "To exercise these rights, email hello@funngro.com. We may verify your identity first.",
  },
  {
    heading: "6. Data retention",
    bullets: [
      "We keep your information only as long as needed to run the site, meet legal duties, resolve disputes and enforce agreements. We delete it securely when we no longer need it.",
    ],
  },
  {
    heading: "7. Data security",
    bullets: [
      "We use reasonable technical and organisational measures to protect your data. No method of internet transmission is ever completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "8. Children",
    bullets: [
      "Funngro is designed for young Indians aged 14-25. We do not knowingly collect personal information from children under 14. If we find we have, we delete it promptly. Contact us if you believe we hold data from a child under 14.",
      "For users aged 14-17 we take extra precautions and recommend involving a parent or guardian when sharing personal information.",
    ],
  },
  {
    heading: "9. International transfers",
    bullets: [
      "Your information may be processed outside your home country. By using the site you consent to those transfers and accept that local laws may differ.",
    ],
  },
  {
    heading: "10. Changes",
    bullets: [
      "We may update this policy from time to time and will post the revised version here with an updated date. Continued use means you accept the changes.",
    ],
  },
  {
    heading: "11. Contact",
    bullets: [
      "Email: hello@funngro.com",
      "Address: Funngro, India",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Reveal as="section" delay={100} className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Privacy policy" centered />
        <div className="mt-8 space-y-8 text-muted">
          <p>
            This Privacy Policy explains how <strong className="text-foreground">Funngro</strong> collects, uses, discloses and protects your information when you use this site. Read it carefully before using the site; continued use means you accept it.
          </p>
          {sections.map((s) => (
            <div key={s.heading}>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.heading}</h3>
              <ul className="list-disc space-y-1 pl-5">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {s.note ? <p className="mt-2 text-sm">{s.note}</p> : null}
            </div>
          ))}
          <p className="mt-8 text-sm text-muted">Last updated: October 2026</p>
        </div>
      </div>
    </Reveal>
  );
}