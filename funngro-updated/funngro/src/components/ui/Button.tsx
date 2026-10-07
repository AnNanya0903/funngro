import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  /* anchor props (used when href is set) */
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  /* button props (used when href is not set) */
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
  disabled?: boolean;
  "aria-describedby"?: string;
}

export const buttonBase =
  "inline-flex items-center justify-center rounded-base px-5 py-2.5 text-sm font-medium outline-none transition-all duration-200";

const variants: Record<ButtonVariant, string> = {
  primary:
    "relative isolate overflow-hidden bg-gradient-to-b from-brand to-brand-hover text-navy shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,theme(colors.brand/40),transparent_60%)] before:opacity-0 before:blur-xl before:transition-opacity before:duration-300 hover:before:opacity-100",
  ghost:
    "border border-border text-foreground hover:bg-panel-hover hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
  secondary:
    "border border-border bg-panel text-foreground hover:border-brand hover:text-brand hover:bg-panel-hover focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
};

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href) || href.startsWith("//");
}

export function Button({
  variant = "primary",
  className,
  children,
  href,
  target,
  rel,
  download,
  type = "button",
  onClick,
  disabled,
  "aria-describedby": ariaDescribedBy,
}: ButtonProps) {
  const classes = cn(
    buttonBase,
    "hover:scale-[1.02] active:scale-[0.98] focus-visible:scale-[1.02]",
    variants[variant],
    className,
  );

  if (href && isExternal(href)) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        download={download}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </button>
  );
}
