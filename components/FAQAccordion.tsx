"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items?: Array<{ q: string; a: string }>;
  limit?: number;
}

export default function FAQAccordion({ items = FAQS, limit }: FAQAccordionProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // first item open by default

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
      {displayItems.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.q} className="py-5">
            <button
              type="button"
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-2 focus:ring-[#0838A1] rounded-md p-1 group"
            >
              <span className="text-base sm:text-lg font-bold text-[#092B72] group-hover:text-[#0838A1] transition-colors leading-snug">
                {item.q}
              </span>
              <span
                className={`p-1 rounded-full bg-[#EEF3FF] text-[#0838A1] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#FFC120] text-[#092B72]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="mt-3 pr-8 text-sm sm:text-base text-[#475569] leading-relaxed animate-in fade-in-50 duration-150"
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
