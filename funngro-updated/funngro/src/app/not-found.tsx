import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Page not found — Funngro",
  description: "The page you're looking for doesn't exist on Funngro.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Reveal as="section" delay={100}>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <p className="font-mono text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 font-sans text-3xl font-extrabold text-foreground sm:text-4xl">
          Lost your way?
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist. It may have moved or was never
          created.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary">
            Back home
          </Button>
          <Button href="/team" variant="secondary">
            Our team
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
