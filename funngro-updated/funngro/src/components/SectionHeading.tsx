import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-12", centered && "mx-auto max-w-3xl text-center", className)}>
      <h2
        id={id}
        className={cn(
          "relative font-sans text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl",
          centered ? "after:left-1/2 after:-translate-x-1/2" : "after:left-0",
          "after:absolute after:bottom-[-0.75rem] after:h-1 after:w-10 after:rounded-full after:bg-brand",
          "after:origin-left after:scale-x-0 after:transition-transform after:duration-700 after:ease-out",
          "after:delay-300 animate-fade-in-up",
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 max-w-3xl text-lg text-muted">{subtitle}</p>}
    </header>
  );
}
