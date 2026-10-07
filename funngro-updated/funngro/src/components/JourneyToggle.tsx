"use client";
import { useState } from "react";

const journeys = {
  "For Teens": [
    ["Discover", "Browse campaigns and projects that match your interests."],
    ["Apply", "Pick an opportunity and follow its brief."],
    ["Complete", "Finish the task within the stated time."],
    ["Verify", "Your submission is reviewed against the brief."],
    ["Earn", "Approved work is rewarded, paid via UPI."],
  ],
  "For Companies": [
    ["Plan", "Set your objective, audience and campaign type."],
    ["Launch", "Publish a clear brief for young Indians."],
    ["Engage", "Participants take action on your campaign."],
    ["Track", "Follow participation as it happens."],
    ["Measure", "Review outcomes against your objective."],
  ],
} as const;
type J = keyof typeof journeys;

export function JourneyToggle({ initial = "For Teens" }: { initial?: J }) {
  const [j, setJ] = useState<J>(initial);
  return (
    <div>
      <div role="group" aria-label="Choose a journey" className="mx-auto flex w-fit gap-1 rounded-full border border-border bg-panel p-1">
        {(Object.keys(journeys) as J[]).map((k) => (
          <button key={k} type="button" aria-pressed={j === k} onClick={() => setJ(k)}
            className={`rounded-full px-5 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand ${j === k ? "bg-brand text-navy" : "text-muted hover:text-foreground"}`}>
            {k}
          </button>
        ))}
      </div>
      <ol className="relative mx-auto mt-10 max-w-2xl space-y-6 border-l-2 border-brand/40 pl-8">
        {journeys[j].map(([t, d], i) => (
          <li key={t} className="relative">
            <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-navy">{i + 1}</span>
            <h3 className="text-lg font-bold text-foreground">{t}</h3>
            <p className="text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
