import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
}

interface HeroProps {
  title: string;
  subhead: string;
  ctas?: HeroCta[];
  className?: string;
  visual?: React.ReactNode;
}

function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className={cn("h-auto w-full max-w-md opacity-80 animate-float", className)}
    >
      <rect x="20" y="60" width="480" height="320" rx="24" fill="var(--color-panel)" />
      <path d="M60 140h260" stroke="var(--color-brand)" strokeWidth="10" strokeLinecap="round" />
      <path d="M60 180h260" stroke="var(--color-muted)" strokeWidth="6" strokeLinecap="round" />
      <path d="M60 220h180" stroke="var(--color-muted)" strokeWidth="6" strokeLinecap="round" />
      <circle
        cx="420"
        cy="140"
        r="36"
        fill="var(--color-brand)"
        fillOpacity="0.15"
        className="animate-pulse-soft"
      />
      <circle
        cx="420"
        cy="220"
        r="36"
        fill="var(--color-brand)"
        fillOpacity="0.15"
        className="animate-pulse-soft delay-100"
      />
      <path
        d="M395 200a28 28 0 1 0 0-56 28 28 0 0 0 0 56z"
        fill="var(--color-brand)"
        fillOpacity="0.25"
      />
    </svg>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
      <span className="text-xs text-muted">Scroll down</span>
      <div className="relative h-10 w-5.5 rounded-full border-2 border-border">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand animate-scroll-indicator" />
      </div>
    </div>
  );
}

export function Hero({ title, subhead, ctas, className, visual }: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-20 sm:py-28 md:py-36",
        "scroll-mt-16 md:scroll-mt-20",
        className,
      )}
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand/5 to-transparent blur-3xl" />
        <ul className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-3 opacity-40">
          <li className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-soft" />
          <li className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-soft delay-50" />
          <li className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-soft delay-100" />
        </ul>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 xl:px-8">
        <div className="animate-fade-in-up">
          <Badge variant="soft" className="mb-4">
            Est. 2021 · India
          </Badge>
          <h1 className="font-sans text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{subhead}</p>
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Button key={cta.href} href={cta.href} variant={cta.variant ?? "primary"}>
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </div>
        {visual ?? <HeroIllustration />}
      </div>

      <ScrollIndicator />
    </section>
  );
}
