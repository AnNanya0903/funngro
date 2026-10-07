export function PhoneMock() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-64 motion-safe:animate-float">
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand/20 blur-3xl" />
      <div className="rounded-[2.2rem] border-4 border-border bg-navy p-3 shadow-2xl">
        <div className="space-y-3 rounded-[1.6rem] bg-panel p-4">
          <p className="text-xs text-muted">Example screen</p>
          <div className="rounded-xl bg-navy p-3">
            <p className="text-xs font-semibold text-brand">Content Campaign</p>
            <p className="mt-1 text-sm font-bold text-foreground">Create a 30-second Reel</p>
            <div className="mt-2 h-1.5 rounded-full bg-border"><div className="h-1.5 w-2/3 rounded-full bg-brand" /></div>
          </div>
          <div className="rounded-xl bg-navy p-3"><p className="text-xs text-muted">Demo earning</p><p className="text-xl font-extrabold text-brand">₹750</p></div>
          <div className="rounded-full bg-brand py-2 text-center text-xs font-bold text-navy">Submit completion</div>
        </div>
      </div>
    </div>
  );
}
