export function CardGrid({ items, cols = 3 }: { items: { title: string; text: string; tag?: string }[]; cols?: 2 | 3 }) {
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((i) => (
        <li key={i.title} className="rounded-2xl border border-border bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/50 motion-reduce:transform-none">
          {i.tag && <p className="mb-2 text-xs font-semibold text-brand">{i.tag}</p>}
          <h3 className="text-lg font-bold text-foreground">{i.title}</h3>
          <p className="mt-2 text-sm text-muted">{i.text}</p>
        </li>
      ))}
    </ul>
  );
}
