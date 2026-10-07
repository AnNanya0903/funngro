import type { HowItWorksConfig } from "@/types";
import { cn } from "@/lib/utils";

interface StepListProps {
  config: HowItWorksConfig;
  className?: string;
}

export function StepList({ config, className }: StepListProps) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {config.steps.map((step) => (
        <li
          key={step.id}
          className="group flex items-start gap-5 transition-all duration-300 hover:translate-x-1"
        >
          <span
            aria-hidden="true"
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-panel text-brand font-extrabold",
              "group-hover:scale-110 group-hover:border-brand-hover transition-all duration-300",
            )}
          >
            {step.number}
          </span>
          <div className="pt-0.5">
            <h3 className="font-sans text-xl font-semibold text-foreground group-hover:text-brand transition-colors">
              {step.title}
            </h3>
            <p className="mt-1 max-w-xl text-muted">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function HowItWorks({
  teens,
  companies,
  className,
}: {
  teens: HowItWorksConfig;
  companies: HowItWorksConfig;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-16", className)}>
      <div>
        <h3 className="font-sans text-lg font-semibold text-brand">{teens.title}</h3>
        <StepList config={teens} />
      </div>
      <div className="mt-12 md:mt-0">
        <h3 className="font-sans text-lg font-semibold text-brand">{companies.title}</h3>
        <StepList config={companies} />
      </div>
    </div>
  );
}
