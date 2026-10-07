import { SectionHeading } from "@/components/SectionHeading";

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} centered />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
