import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "soft";
  className?: string;
}

const variants = {
  default: "border border-border bg-panel text-foreground",
  outline: "border border-border text-foreground",
  soft: "bg-panel-soft text-brand-dark",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 rounded-base px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
