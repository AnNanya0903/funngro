"use client";

import { useState } from "react";
import type { FaqItem } from "@/types";
import { JsonLd } from "@/components/JsonLd";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("transition-transform duration-200", open ? "rotate-180" : "rotate-0")}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FaqAccordion({ items, title = "Frequently asked questions" }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="mx-auto w-full max-w-3xl space-y-3">
      <JsonLd data={faqSchema} />

      <h2
        id="faq-heading"
        className="font-sans text-2xl font-extrabold tracking-tight text-foreground"
      >
        {title}
      </h2>

      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-button-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div key={item.id} className="border border-border rounded-xl bg-panel overflow-hidden">
            <h3 className="font-sans text-lg font-semibold">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenId(isOpen ? null : item.id);
                  }
                }}
                className="flex w-full items-center gap-3 px-6 py-4 text-left text-foreground hover:bg-panel-hover hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand transition-colors duration-200"
              >
                <span className="flex-1">{item.question}</span>
                <ChevronIcon open={isOpen} />
              </button>
            </h3>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "overflow-hidden transition-[max-height] duration-200 ease-in-out",
                "motion-reduce:transition-none",
                isOpen ? "max-h-96" : "max-h-0",
              )}
            >
              <p className="px-6 py-4 text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
