import { cn } from "@/lib/utils";

export function SkipLink({ className }: { className?: string }) {
  return (
    <a
      href="#main"
      className={cn(
        "sr-only focus:not-sr-absolute fixed top-4 left-1/2 -translate-x-1/2 z-[100] rounded-base bg-brand px-4 py-2 text-sm font-medium text-navy outline-none",
        "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        className,
      )}
    >
      Skip to content
    </a>
  );
}
