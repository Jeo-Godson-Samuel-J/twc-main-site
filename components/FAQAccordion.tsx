"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  light?: boolean;
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-0 border-t border-[#e1c0b1]/50">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#e1c0b1]/50">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-6 text-left transition-colors group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-medium text-xl md:text-2xl text-[#1b1c1c] group-hover:text-[#f36801] transition-colors pr-6">
                {item.question}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-[#f36801] text-white rotate-45"
                    : "bg-[#f5f3f3] text-[#1b1c1c] group-hover:bg-[#f36801]/10 group-hover:text-[#f36801]"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <div className="accordion-inner">
                <p className="font-sans text-body text-[#594236] pb-6 pr-8 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

