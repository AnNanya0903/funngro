import { Button } from "@/components/ui/Button";

export function CtaBand({ title, text, primary, secondary }: { title: string; text: string; primary: [string, string]; secondary: [string, string] }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/15 to-panel p-8 text-center sm:p-14">
        <h2 className="text-balance text-2xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={primary[1]}>{primary[0]}</Button>
          <Button href={secondary[1]} variant="ghost">{secondary[0]}</Button>
        </div>
      </div>
    </section>
  );
}
