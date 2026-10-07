export function BrandDashboard() {
  const rows = [["Campaign status", "Live"], ["Audience", "18–24"], ["Participants", "120"], ["Engagement", "64%"]];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md rounded-2xl border border-border bg-panel p-5 shadow-2xl">
      <div className="absolute -inset-6 -z-10 rounded-full bg-brand/15 blur-3xl" />
      <p className="text-xs text-muted">Illustrative sample values</p>
      <p className="mt-1 font-bold text-foreground">Content Creation campaign</p>
      <dl className="mt-4 grid grid-cols-2 gap-3">
        {rows.map(([k, v]) => (<div key={k} className="rounded-xl bg-navy p-3"><dt className="text-xs text-muted">{k}</dt><dd className="text-lg font-bold text-brand">{v}</dd></div>))}
      </dl>
      <div className="mt-4 h-2 rounded-full bg-border"><div className="h-2 w-3/5 rounded-full bg-brand" /></div>
    </div>
  );
}
