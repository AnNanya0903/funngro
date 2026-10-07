"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode, HTMLAttributes, ElementType } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
}

export function Reveal({ children, delay = 0, className, as, ...rest }: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-visible={visible}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:duration-0",
        "data-[visible=false]:translate-y-4 data-[visible=false]:opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
