"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const opts = {
  objective: ["Brand Awareness", "Product Sampling", "Lead Generation", "Market Research"],
  audience: ["13–17", "18–24", "25–30"],
  type: ["Content Creation", "Brand Promotion", "Sampling", "Surveys & Research", "Referrals", "Influencer Campaigns"],
  location: ["India", "Metro cities", "Tier 2 and 3 cities"],
};
const labels = { objective: "Campaign objective", audience: "Target audience", type: "Campaign type", location: "Location" };
type Key = keyof typeof opts;

export function CampaignBuilder() {
  const [v, setV] = useState<Record<Key, string>>({
    objective: opts.objective[0], audience: opts.audience[1], type: opts.type[0], location: opts.location[0],
  });
  const [preview, setPreview] = useState(false);
  return (
    <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-border bg-panel p-6 sm:p-8 lg:grid-cols-2">
      <form onSubmit={(e) => { e.preventDefault(); setPreview(true); }} className="space-y-4">
        {(Object.keys(opts) as Key[]).map((k) => (
          <div key={k}>
            <label htmlFor={`cb-${k}`} className="mb-1 block text-sm font-medium text-foreground">{labels[k]}</label>
            <select
              id={`cb-${k}`}
              value={v[k]}
              onChange={(e) => { setV({ ...v, [k]: e.target.value }); setPreview(false); }}
              className="w-full rounded-base border border-border bg-navy px-4 py-2.5 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-brand"
            >
              {opts[k].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
        <Button type="submit">Preview Campaign</Button>
      </form>
      <div aria-live="polite" className="flex items-center">
        {preview ? (
          <div className="w-full rounded-xl border border-brand/40 bg-navy/60 p-5">
            <p className="text-xs font-semibold text-brand">Sample preview</p>
            <h3 className="mt-1 text-xl font-bold text-foreground">{v.type} campaign</h3>
            <dl className="mt-4 space-y-2 text-sm">
              {(Object.keys(opts) as Key[]).map((k) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted">{labels[k]}</dt><dd className="text-foreground">{v[k]}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted">Demo experience. No campaign is submitted.</p>
          </div>
        ) : (
          <p className="text-sm text-muted">Choose your options and select Preview Campaign. This is a demo and nothing is submitted.</p>
        )}
      </div>
    </div>
  );
}
