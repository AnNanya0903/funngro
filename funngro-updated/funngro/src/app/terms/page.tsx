import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use — Funngro",
  description:
    "Terms of use for Funngro. How teens, parents, companies and schools agree to use our project-based freelance platform.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "1. About Funngro",
    text: "Funngro is a project-based freelance platform that connects teenagers in India with companies for real project work. We facilitate introductions but are not a party to agreements between teens and companies, and we do not guarantee that a project or match will occur.",
  },
  {
    heading: "2. Eligibility",
    text: "Funngro is for young Indians aged 14-25. If you are under 18, you must have the permission of a parent or guardian who agrees to be bound by these Terms. Companies must be duly organised and authorised to enter into contracts.",
  },
  {
    heading: "3. Account responsibilities",
    text: "You are responsible for keeping your account credentials confidential and for all activity under your account. Notify us immediately of any unauthorised use.",
  },
  {
    heading: "4. Use of the site",
    text: "You agree not to use the site to violate any law or the rights of others. You may not post false, misleading or fraudulent content, scrape or harvest data, or attempt to disrupt the site. All user-generated content must be respectful and lawful.",
  },
  {
    heading: "5. Projects and payments",
    text: "Companies are solely responsible for project scope, deliverables, deadlines and payment terms. Funngro is not a party to those agreements, not a payment processor, escrow service or employment agency. Teens are responsible for their own work and any tax on payments received. Projects are educational and skill-building in nature.",
  },
  {
    heading: "6. Intellectual property",
    text: "All content, trademarks, logos and intellectual property on the site belongs to Funngro or its licensors unless stated otherwise. Work submitted as part of a project remains the property of the submitting party unless a separate agreement says otherwise.",
  },
  {
    heading: "7. Disclaimers",
    text: "THE SITE IS PROVIDED AS IS WITHOUT WARRANTIES OF ANY KIND. We do not warrant that the site will be uninterrupted, secure or error-free, and we do not endorse or verify the accuracy of user content, including teen portfolios, company profiles or project listings.",
  },
  {
    heading: "8. Limitation of liability",
    text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, Funngro SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS OR BUSINESS, WHETHER FORESEEABLE OR NOT, ARISING OUT OF YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID (IF ANY) IN THE 12 MONTHS PRECEDING THE CLAIM.",
  },
  {
    heading: "9. Indemnification",
    text: "You agree to indemnify and hold harmless Funngro and its officers, directors, employees and agents from any claims, liabilities, damages, losses or expenses arising from your breach of these Terms or your use of the site.",
  },
  {
    heading: "10. Termination",
    text: "We may suspend or terminate your access to the site at any time, without notice, for any reason, including breach of these Terms. On termination all licences granted end.",
  },
  {
    heading: "11. Governing law and disputes",
    text: "These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of India. If you are a consumer, this does not affect your statutory rights.",
  },
  {
    heading: "12. Changes to these Terms",
    text: "We may update these Terms from time to time. The last updated date at the bottom reflects the most recent revision. Your continued use after any changes means you accept the revised Terms.",
  },
  {
    heading: "13. Contact us",
    text: "Questions about these Terms? Email hello@funngro.com.",
  },
];

export default function TermsPage() {
  return (
    <Reveal as="section" delay={100} className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Terms of use" centered />
        <div className="mt-8 space-y-8 text-muted">
          <p>
            These Terms of Use govern your access to and use of this site operated by{" "}
            <strong className="text-foreground">Funngro</strong>. By accessing or using the site you agree
            to be bound by these Terms. If you do not agree, do not use the site. These Terms apply to
            all users: teenagers, parents or guardians, companies, schools and other visitors.
          </p>
          {sections.map((s) => (
            <div key={s.heading}>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.heading}</h3>
              <p>{s.text}</p>
            </div>
          ))}
          <p className="mt-8 text-sm text-muted">Last updated: October 2026</p>
        </div>
      </div>
    </Reveal>
  );
}