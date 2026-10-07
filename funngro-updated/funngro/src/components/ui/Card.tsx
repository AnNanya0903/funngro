import { cn } from "@/lib/utils";

export interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, icon, children, className }: CardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col gap-4 rounded-xl border border-border bg-panel p-6",
        "hover:border-brand/40 hover:bg-panel-hover hover:shadow-lg hover:shadow-brand/10",
        "focus-within:ring-2 focus-within:ring-brand",
        "transition-all duration-300",
        className,
      )}
    >
      {icon && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-brand group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
      )}
      {title && <h3 className="font-sans text-lg font-semibold text-foreground">{title}</h3>}
      {description && <p className="mt-1 text-sm text-muted">{description}</p>}
      {children}
    </div>
  );
}

// Feature list variant — avoids a "uniform card grid" look.
export function ValueList({ items }: { items: { title: string; description: string }[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"
          />
          <div>
            <h3 className="font-sans text-lg font-semibold text-foreground group-hover:text-brand transition-colors">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
