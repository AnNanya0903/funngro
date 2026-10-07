export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="mx-auto max-w-4xl space-y-4 px-4 py-24">
      <div className="h-10 w-2/3 animate-pulse rounded-lg bg-panel" />
      <div className="h-4 w-full animate-pulse rounded bg-panel" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-panel" />
      <div className="h-40 animate-pulse rounded-2xl bg-panel" />
    </div>
  );
}
