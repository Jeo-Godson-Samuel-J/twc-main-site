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

export default function FAQAccordion({ items, light = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const borderColor = light ? "border-zinc-700" : "border-zinc-200";
  const textColor = light ? "text-white" : "text-brand-black";
  const bodyColor = light ? "text-zinc-300" : "text-zinc-600";

  return (
    <div className="w-full space-y-0">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`border-b ${borderColor}`}>
            <button
              onClick={() => toggle(index)}
              className={`flex w-full items-center justify-between py-6 text-left transition-colors hover:text-brand-orange group`}
              aria-expanded={isOpen}
            >
              <span className={`text-subsection pr-8 ${textColor} group-hover:text-brand-orange transition-colors`}>
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-brand-orange text-white rotate-45"
                    : `${light ? "bg-zinc-800" : "bg-zinc-100"} ${textColor}`
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
                <p className={`text-body ${bodyColor} pb-6 pr-12`}>
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
