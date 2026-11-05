"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
}

export default function FAQAccordion({
  items,
  dark = false,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full space-y-0 border-t ${
        dark ? "border-white/15" : "border-[#d8dada]/50"
      }`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border-b ${
              dark ? "border-white/15" : "border-[#d8dada]/50"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-6 text-left transition-colors group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span
                className={`font-sans font-bold text-lg sm:text-xl md:text-2xl transition-colors pr-6 ${
                  dark
                    ? "text-white group-hover:text-[#f36801]"
                    : "text-[#0D0B0B] group-hover:text-[#f36801]"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-[#f36801] text-white rotate-45"
                    : dark
                    ? "bg-white/10 text-white group-hover:bg-[#f36801] group-hover:text-white"
                    : "bg-[#f5f3f3] text-[#0D0B0B] group-hover:bg-[#f36801]/10 group-hover:text-[#f36801]"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <div className="accordion-inner">
                <p
                  className={`font-sans text-base pb-6 pr-8 leading-relaxed ${
                    dark ? "text-white/75" : "text-[#4a4b4b]"
                  }`}
                >
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
