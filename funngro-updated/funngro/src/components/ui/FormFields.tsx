import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

export function InputField({ label, error, id, className, ...props }: InputProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-base border border-border bg-panel px-4 py-2.5 text-sm text-foreground placeholder:text-muted",
          "transition-all duration-200",
          "focus:border-brand focus:ring-2 focus:ring-brand focus:outline-none focus:ring-brand/30",
          "disabled:cursor-not-allowed disabled:opacity-60",
          error && "border-red-400 focus:border-red-400 focus:ring-red-400",
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  id: string;
}

export function TextareaField({ label, error, id, className, ...props }: TextareaProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-base border border-border bg-panel px-4 py-2.5 text-sm text-foreground placeholder:text-muted resize-y",
          "transition-all duration-200",
          "focus:border-brand focus:ring-2 focus:ring-brand focus:outline-none focus:ring-brand/30",
          error && "border-red-400 focus:border-red-400 focus:ring-red-400",
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
