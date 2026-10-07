"use client";

import { nav } from "@/data/nav";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors duration-150",
        isActive ? "text-brand" : "text-muted hover:text-foreground focus-visible:text-foreground",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      const previously = document.activeElement as HTMLElement | null;
      const timer = window.setTimeout(() => {
        menuRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        previously?.focus?.();
      };
    }
  }, [open]);

  useEffect(
    function trapFocus() {
      if (!open) return;
      const menu = menuRef.current;
      if (!menu) return;

      function onKeydown(e: KeyboardEvent) {
        if (e.key !== "Tab") return;
        const menu = menuRef.current;
        if (!menu) return;
        const focusable = menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }

      function onEsc() {
        setOpen(false);
        buttonRef.current?.focus();
      }
      menu.addEventListener("keydown", onKeydown);
      buttonRef.current?.addEventListener("keydown", (e) => {
        if (e.key === "Escape") onEsc();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") onEsc();
      });
      return () => {
        menu.removeEventListener("keydown", onKeydown);
      };
    },
    [open],
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-navy/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo showWordmark />
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-base p-2 text-foreground hover:bg-panel focus-visible:ring-2 focus-visible:ring-brand outline-none"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className={cn(
              "block h-0.5 w-6 rounded bg-foreground transition-all duration-200",
              open && "translate-y-1.5 rotate-45",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "my-1 block h-0.5 w-6 rounded bg-foreground transition-all duration-200",
              open && "opacity-0",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "block h-0.5 w-6 rounded bg-foreground transition-all duration-200",
              open && "-translate-y-1.5 -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        tabIndex={-1}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
        className={cn(
          "md:hidden border-t border-border bg-navy/95 backdrop-blur transition-[max-height] duration-200 ease-out",
          open ? "max-h-screen" : "max-h-0 overflow-hidden",
        )}
      >
        <nav aria-label="Mobile main" className="flex flex-col gap-2 px-4 py-4">
          {nav.links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <NavLink href={nav.cta.href} className="mt-2">
            {nav.cta.label}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
