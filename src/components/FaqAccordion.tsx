"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-cream-dark border border-cream-dark rounded-xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-cream transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-charcoal">{item.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-teal transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 bg-white text-charcoal-light leading-relaxed text-sm">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
