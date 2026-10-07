import Link from "next/link";
import { nav } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const socialLinks: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://instagram.com/funngro" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-panel/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo showWordmark />
            <p className="max-w-xs text-sm text-muted">{siteConfig.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Site</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "For Teens", href: "/teen" },
                { label: "For Companies", href: "/for-brands" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "About", href: "/" },
                { label: "Team", href: "/team" },
                { label: nav.cta.label, href: nav.cta.href },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-muted transition-all duration-200 hover:text-brand hover:translate-x-1",
                      "focus-visible:text-brand focus-visible:outline-none",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className={cn(
                    "text-muted transition-all duration-200 hover:text-brand hover:translate-x-1",
                    "focus-visible:text-brand focus-visible:outline-none",
                  )}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={cn(
                    "text-muted transition-all duration-200 hover:text-brand hover:translate-x-1",
                    "focus-visible:text-brand focus-visible:outline-none",
                  )}
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className={cn(
                      "text-muted transition-all duration-200 hover:text-brand hover:translate-x-1",
                      "focus-visible:text-brand focus-visible:outline-none",
                    )}
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted">
          <p>
            Funngro is a freelance platform in India that connects teenagers with companies for
            project-based work.
          </p>
          <p>© {year} Funngro — Concept redesign for the Funngro Website Revamp project.</p>
        </div>
      </div>
    </footer>
  );
}
