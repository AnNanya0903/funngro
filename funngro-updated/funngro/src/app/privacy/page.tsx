import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Funngro",
  description:
    "Funngro privacy policy. How we collect, use and protect your data as a teen or company using our freelance platform.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Reveal as="section" delay={100} className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Privacy policy" centered />
        <div className="mt-8 prose prose-invert max-w-none">
          <p>
            This Privacy Policy explains how <strong>Funngro</strong> (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, discloses, and protects your
            information when you use funngro.com (the &ldquo;Site&rdquo;) and the services offered
            through it. Please read this policy carefully before using the Site.
          </p>
          <p>
            By accessing or using the Site, you agree to the terms of this Privacy Policy. If you do
            not agree, please do not use the Site.
          </p>

          <h3>1. Information we collect</h3>
          <p>We collect several categories of information:</p>
          <ul>
            <li>
              <strong>Personal information you provide:</strong> When you contact us or sign up, we
              may collect your name, email address, and any other information you choose to share
              with us.
            </li>
            <li>
              <strong>Company information:</strong> When a company posts a project or communicates
              with us, we may collect your company name, role, website, and project details.
            </li>
            <li>
              <strong>Usage information:</strong> We automatically collect information about your
              interactions with the Site, such as your IP address, browser type, device type, pages
              visited, and time spent on each page.
            </li>
            <li>
              <strong>Cookies and tracking:</strong> We may use cookies and similar tracking
              technologies to enhance your experience. See our Cookie Policy for details.
            </li>
          </ul>

          <h3>2. How we use your information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate, maintain, and improve the Site and services;</li>
            <li>Respond to your inquiries and customer support requests;</li>
            <li>Connect teenagers with companies for project-based work;</li>
            <li>
              Send you updates, newsletters, and marketing communications (you may opt out at any
              time);
            </li>
            <li>Analyze how the Site is used and diagnose technical issues;</li>
            <li>Prevent fraud, abuse, and unauthorized access.</li>
          </ul>

          <h3>3. Legal basis for processing</h3>
          <p>We process your information based on the following legal grounds:</p>
          <ul>
            <li>Your consent (where explicitly obtained);</li>
            <li>Performance of a contract with you (or in preparation for a contract);</li>
            <li>Compliance with a legal obligation; and</li>
            <li>Our legitimate interests, including operating and improving the Site.</li>
          </ul>

          <h3>4. How we share your information</h3>
          <p>We do not sell your personal information. We may share it with:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Third parties who help us operate the Site (e.g.,
              hosting providers, email delivery services, analytics).
            </li>
            <li>
              <strong>When required by law:</strong> To comply with applicable laws, regulations, or
              legal processes.
            </li>
            <li>
              <strong>To protect rights and safety:</strong> To protect our rights, property, or
              safety, or that of our users or others.
            </li>
          </ul>

          <h3>5. Your choices and rights</h3>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you;</li>
            <li>Request correction of inaccurate information;</li>
            <li>Request deletion of your information;</li>
            <li>Opt out of marketing communications;</li>
            <li>Object to or restrict certain processing.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:hello@funngro.com">hello@funngro.com</a>. We may need to verify your
            identity before fulfilling your request.
          </p>

          <h3>6. Data retention</h3>
          <p>
            We retain your information for as long as necessary to provide the Site and services,
            comply with legal obligations, resolve disputes, and enforce agreements. When we no
            longer need the information, we securely delete it.
          </p>

          <h3>7. Data security</h3>
          <p>
            We implement reasonable technical and organizational measures to protect your personal
            information. However, no method of transmission over the internet is completely secure,
            and we cannot guarantee absolute security.
          </p>

          <h3>8. Children&apos;s privacy</h3>
          <p>
            Funngro is designed for young Indians aged 14-25. We do not knowingly collect personal
            information from children under 14. If we discover we have collected such information,
            we will promptly delete it. If you believe we have collected information from a child
            under 14, please contact us.
          </p>
          <p>
            For teenage users aged 14-17, we take additional precautions and recommend involving a
            parent or guardian when sharing personal information.
          </p>

          <h3>9. International transfers</h3>
          <p>
            Your information may be transferred to and processed in countries outside your home
            country. By using the Site, you consent to such transfers and acknowledge that
            applicable laws in those countries may differ.
          </p>

          <h3>10. Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. If we do, we will post the updated
            policy on this page and update the &ldquo;Last updated&rdquo; date. We encourage you to
            review this page periodically for any changes.
          </p>

          <h3>11. Contact us</h3>
          <p>If you have questions about this Privacy Policy or your information, contact us at:</p>
          <ul>
            <li>
              Email: <a href="mailto:hello@funngro.com">hello@funngro.com</a>
            </li>
            <li>Address: Funngro, India</li>
          </ul>

          <p className="mt-8 text-sm text-muted">Last updated: October 2026</p>
        </div>
      </div>
    </Reveal>
  );
}
