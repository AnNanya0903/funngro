import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  href?: string;
  clickable?: boolean;
}

export function Logo({ className, showWordmark = true, clickable = true }: LogoProps) {
  const svg = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      role="img"
      aria-label={showWordmark ? undefined : "Funngro"}
      className={cn("h-7 w-7 flex-none text-brand", className)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="7" fill="var(--color-navy)" />
      <text
        x="14"
        y="20"
        fontSize="16"
        fontWeight="800"
        textAnchor="middle"
        fill="var(--color-brand)"
        fontFamily="ui-sans-serif, Inter, sans-serif"
      >
        F
      </text>
    </svg>
  );

  const wordmark = showWordmark && (
    <span className="font-sans font-extrabold tracking-tight text-foreground">
      F<span className="text-brand">gro</span>
    </span>
  );

  if (!clickable)
    return (
      <span className={cn("flex items-center gap-2", className)}>
        {svg}
        {wordmark}
      </span>
    );

  return (
    <Link href="/" aria-label="Funngro home" className={cn("flex items-center gap-2", className)}>
      {svg}
      {wordmark}
    </Link>
  );
}
