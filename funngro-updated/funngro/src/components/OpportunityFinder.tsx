"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const interests: Record<string, string[]> = {
  "Content Creation": ["Content Campaigns", "Social Media Projects", "Brand Promotion"],
  "Social Media": ["Social Media Projects", "Influencer Campaigns", "Referrals"],
  Marketing: ["Brand Promotion", "Sampling", "Referrals"],
  Design: ["Content Campaigns", "Brand Promotion", "Micro Tasks"],
  Technology: ["App Testing", "Tech Projects", "Research"],
  Research: ["Surveys", "Research", "Micro Tasks"],
};

export function OpportunityFinder() {
  const [picked, setPicked] = useState<string>("Content Creation");
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-panel p-6 sm:p-8">
      <h3 id="finder-q" className="text-xl font-bold text-foreground">What are you interested in?</h3>
      <div role="group" aria-labelledby="finder-q" className="mt-4 flex flex-wrap gap-2">
        {Object.keys(interests).map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={picked === name}
            onClick={() => setPicked(name)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand ${
              picked === name ? "border-brand bg-brand/15 text-brand" : "border-border text-muted hover:text-foreground"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="mt-6">
        <p className="text-sm text-muted">Suggested categories for {picked}:</p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {interests[picked].map((c) => (
            <li key={c} className="rounded-xl border border-border bg-navy/40 p-4 font-medium text-foreground">{c}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">Website prototype. These are example categories, not live Funngro jobs.</p>
      </div>
      <div className="mt-6"><Button href="/team#contact">Explore Opportunities</Button></div>
    </div>
  );
}
