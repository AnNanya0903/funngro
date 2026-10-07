"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ flip = false, className }: WaveDividerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      if (!el) return;
      const y = window.scrollY;
      const offset = y * 0.05;
      el.style.transform = `${flip ? "scaleY(-1) " : ""}translateY(${offset}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [flip]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-20 w-full motion-reduce:transform-none",
        flip && "rotate-180",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="none"
      >
        <path
          fill="var(--color-navy)"
          d="M0,64L48,69.3C96,75 192,85 288,101.3C384,117 480,140 576,154.7C672,169 768,176 864,176C960,176 1056,169 1152,154.7C1248,140 1344,117 1392,101.3L1440,85.3V320H0Z"
        />
      </svg>
    </div>
  );
}
