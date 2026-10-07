"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  title: string;
  url: string;
  text?: string;
  className?: string;
}

export function ShareButtons({ title, url, text, className }: ShareButtonsProps) {
  const shareText = text ?? title;
  const [copied, setCopied] = useState(false);

  const nativeShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title, text: shareText, url }).catch(() => copyLink());
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <button
        type="button"
        onClick={nativeShare}
        className={cn(
          "inline-flex items-center gap-2 rounded-base border border-border bg-panel px-4 py-2 text-sm font-medium text-foreground",
          "hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand",
        )}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>Share</title>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 1-1-0 0" />
        </svg>
        Share
      </button>

      {["linkedin", "twitter"].map((network) => {
        const href =
          network === "twitter"
            ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + " " + url)}`
            : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        return (
          <a
            key={network}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${network}`}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-panel text-foreground",
              "hover:border-brand hover:text-brand hover:bg-panel-hover focus-visible:ring-2 focus-visible:ring-brand",
            )}
          >
            <span className="sr-only">Share on {network}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {network === "twitter" ? (
                <>
                  <path d="M22 4s-.7 2-2 3.9c0 0A4.6 4.6 0 0 1 14 10c0 .4 0 .7.1.9A9.1 9.1 0 0 1 3 6.5 5.4 5.4 0 0 1 5 14.1 4.1 4.1 0 0 1 2.7 13.7v.1A5.4 5.4 0 0 0 9 17c-1.1 0-2-.3-2.8-.9a5.4 5.4 0 0 0 5 3 5.5 5.5 0  0 0 1-3.3 1.1 9.3 9.3 0 0 0 5.6 2c6.3 0 9.7-5.2 9.7-9.8 0-.1 0-.3-.1-.4A7 7 0  0 0 22 4z" />
                </>
              ) : (
                <>
                  <path d="M4.98 11.5C4.5 11.5 4 10.95 4 10.33c0-.62.48-1.14 1.04-1.3.52-.15 1.05-.3 1.5-.31l.04 0 .1 0C4.62 8.1 3 6.6 3 4.75c0-.34.03-.67.08-1v-.03c.08-3 3.4-5.25 6.7-5.25 1.2 0 2.3.28 3.28.78s1.7 2 1.88 3.36 0 2.6-.44 3.65 1.37 2.7 1.84 2.8 1.2-.18 2.04-1.2v.02c.16-1.4.22-2.84.07-4.25C20.12 1.15 16.2-.5 12.25-.5 7.4-.5 3.5 3.1 3.5 7.9c0 1 .14 1.97.4 2.9z" />
                </>
              )}
            </svg>
          </a>
        );
      })}

      <button
        type="button"
        onClick={copyLink}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-base border border-border bg-panel px-3 py-2 text-xs text-muted hover:text-foreground",
        )}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 11h6v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2v6a2 2 0 0 0 2 2z" />
          <path d="M21 15a2 2 0 0 0-2-2h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4z" />
        </svg>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
