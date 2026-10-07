"use client";

import { useState } from "react";
import { InputField, TextareaField } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { validateContact } from "@/lib/validations";
import type { ContactInput } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  topics?: string[];
  className?: string;
}

const defaultData: ContactInput = {
  name: "",
  email: "",
  topic: "",
  message: "",
  hp_field: "",
};

export function ContactForm({
  topics = [
    "Teen who wants to work",
    "Company with a project",
    "Parent or school",
    "Something else",
  ],
  className,
}: ContactFormProps) {
  const [data, setData] = useState<ContactInput>(defaultData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  function update(field: keyof ContactInput, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = validateContact(data);
    if (!result.success) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setServerError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.value),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Server error (${res.status})`);
      }

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setData(defaultData);
      }, 5000);
    } catch (err: unknown) {
      const message =
        (err instanceof Error && err.message) || "Something went wrong. Please try again later.";
      setServerError(message);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "w-full max-w-lg space-y-5 rounded-xl border border-border bg-panel p-6 sm:p-8",
        className,
      )}
      aria-label="Contact form"
    >
      {status === "success" ? (
        <div
          role="status"
          className="flex flex-col items-center justify-center gap-3 py-10 text-center"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-brand"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11l-4 4" />
          </svg>
          <p className="text-foreground">
            Thanks for your message. We&apos;ll be in touch within one business day.
          </p>
        </div>
      ) : (
        <>
          <div className="hidden">
            <label htmlFor="hp_field">
              If you can see this, leave it blank
              <input
                id="hp_field"
                name="hp_field"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                value={data.hp_field ?? ""}
                onChange={(e) => update("hp_field", e.target.value)}
              />
            </label>
          </div>

          {status === "error" && serverError && (
            <div
              role="alert"
              className="rounded-base border border-red-400/50 bg-red-400/10 px-4 py-3 text-sm text-red-300"
            >
              {serverError}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField
              id="name"
              label="Your name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              error={errors.name}
              required
            />
            <InputField
              id="email"
              label="Email address"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              error={errors.email}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="topic" className="text-sm font-medium text-foreground">
              I am a
            </label>
            <select
              id="topic"
              name="topic"
              value={data.topic}
              onChange={(e) => update("topic", e.target.value)}
              className={cn(
                "w-full appearance-none rounded-base border border-border bg-panel px-4 py-2.5 text-sm text-foreground placeholder:text-muted",
                "focus:border-brand focus:ring-2 focus:ring-brand focus:outline-none",
                errors.topic && "border-red-400 focus:border-red-400 focus:ring-red-400",
              )}
              aria-invalid={errors.topic ? "true" : undefined}
              aria-describedby={errors.topic ? "topic-error" : undefined}
              required
            >
              <option value="" disabled>
                Choose one
              </option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.topic && (
              <p id="topic-error" className="text-xs text-red-400">
                {errors.topic}
              </p>
            )}
          </div>

          <TextareaField
            id="message"
            label="Message"
            name="message"
            placeholder="How can we help?"
            rows={5}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            error={errors.message}
            required
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" && (
              <svg
                className="-ml-1 mr-2 h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            <span aria-live="polite">{status === "loading" ? "Sending…" : "Send message"}</span>
          </Button>
        </>
      )}
    </form>
  );
}
