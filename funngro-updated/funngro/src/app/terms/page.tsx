import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use — Funngro",
  description:
    "Terms of use for Funngro. How teens and companies agree to use our project-based freelance platform.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <Reveal as="section" delay={100} className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Terms of use" centered />
        <div className="mt-8 prose prose-invert max-w-none">
          <p>
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of
            <strong> funngro.com</strong> and related services (the &ldquo;Site&rdquo; or
            &ldquo;Services&rdquo;) operated by <strong>Funngro</strong> (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the Site, you agree to be
            bound by these Terms. If you do not agree, do not use the Site.
          </p>
          <p>
            These Terms apply to all users — teenagers, parents or guardians, companies, schools,
            and any other visitors.
          </p>

          <h3>1. About Funngro</h3>
          <p>
            Funngro is a project-based freelance platform that connects teenagers in India with
            companies for real project work. We facilitate introductions but are not a party to
            agreements between teens and companies. We do not guarantee that a project or match will
            occur.
          </p>

          <h3>2. Eligibility</h3>
          <p>
            Funngro is for young Indians aged 14-25. If you are under 18, you must have the
            permission of a parent or guardian who agrees to be bound by these Terms. Companies
            must be duly organized and authorized to enter into contracts.
          </p>

          <h3>3. Account responsibilities</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and
            for all activities that occur under your account. You agree to notify us immediately of
            any unauthorized use of your account.
          </p>

          <h3>4. Use of the Site</h3>
          <ul>
            <li>You agree not to use the Site to violate any law or the rights of others.</li>
            <li>You may not post false, misleading, or fraudulent content.</li>
            <li>You may not scrape, harvest, or automatically collect data from the Site.</li>
            <li>You may not attempt to interfere with or disrupt the Site&apos;s functionality.</li>
            <li>Any user-generated content must be respectful and lawful.</li>
          </ul>

          <h3>5. Projects and payments</h3>
          <p>
            Companies are solely responsible for project scope, deliverables, deadlines, and payment
            terms. Funngro is not a party to these agreements. We may facilitate payment processing
            through third-party providers, but we are not a payment processor, escrow service, or
            employment agency.
          </p>
          <p>
            Teens are responsible for their own work and any tax obligations arising from payments
            received. Projects are educational and skill-building in nature.
          </p>

          <h3>6. Intellectual property</h3>
          <p>
            All content, trademarks, logos, and intellectual property on the Site are the property
            of Funngro or its licensors, unless otherwise stated. You may not use, copy, or modify
            any content without express permission.
          </p>
          <p>
            Work submitted as part of a project remains the property of the submitting party unless
            a separate agreement states otherwise.
          </p>

          <h3>7. Disclaimers</h3>
          <p>
            <strong>
              THE SITE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND.
            </strong>{" "}
            We do not warrant that the Site will be uninterrupted, secure, or error-free. We do not
            endorse or verify the accuracy of any user content, including teen portfolios, company
            profiles, or project listings.
          </p>

          <h3>8. Limitation of liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, Funngro SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS,
            OR BUSINESS, WHETHER FORESEEABLE OR NOT, ARISING OUT OF YOUR USE OF THE SITE. OUR TOTAL
            LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID (IF ANY) IN THE 12 MONTHS
            PRECEDING THE CLAIM.
          </p>

          <h3>9. Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless Funngro, its officers, directors, employees,
            and agents from and against any claims, liabilities, damages, losses, or expenses
            arising from your breach of these Terms or your use of the Site.
          </p>

          <h3>10. Termination</h3>
          <p>
            We may suspend or terminate your access to the Site at any time, without notice, for any
            reason, including breach of these Terms. Upon termination, all licenses granted herein
            shall cease.
          </p>

          <h3>11. Governing law and disputes</h3>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be resolved in the
            courts of [jurisdiction], India. If you are a consumer, this does not affect your
            statutory rights.
          </p>

          <h3>12. Changes to these Terms</h3>
          <p>
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the
            bottom reflects the most recent revision. Your continued use of the Site after any
            changes constitutes acceptance of the revised Terms.
          </p>

          <h3>13. Contact us</h3>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:hello@funngro.com">hello@funngro.com</a>.
          </p>

          <p className="mt-8 text-sm text-muted">Last updated: October 2026</p>
        </div>
      </div>
    </Reveal>
  );
}
