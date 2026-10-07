import type { Team } from "@/types";
import { cn } from "@/lib/utils";

const accentColors = ["bg-brand", "bg-sky-400", "bg-amber-400", "bg-violet-400"];
const accentText = ["text-brand", "text-sky-400", "text-amber-400", "text-violet-400"];

export function TeamGrid({ teams }: { teams: Team[] }) {
  return (
    <ul className="space-y-10">
      {teams.map((team, i) => {
        const color = i % accentColors.length;
        const reversed = i % 2 === 1;
        return (
          <li
            key={team.id}
            className={cn(
              "group flex flex-col items-start gap-6 md:gap-10 md:flex-row",
              reversed && "md:flex-row-reverse",
            )}
          >
            <div className="flex shrink-0 items-center justify-center">
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-current bg-panel text-xl font-extrabold",
                  "transition-all duration-300 hover:scale-110 hover:shadow-lg",
                  accentText[color],
                )}
              >
                {team.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-2.5 w-2.5 shrink-0 rounded-full",
                    "transition-all duration-300 group-hover:scale-125",
                    accentColors[color],
                  )}
                  aria-hidden="true"
                />
                <h3 className="font-sans text-xl font-semibold text-foreground">{team.name}</h3>
              </div>
              <p className="mt-2 max-w-2xl text-muted">{team.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
