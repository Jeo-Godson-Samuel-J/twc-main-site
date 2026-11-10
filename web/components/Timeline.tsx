"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange via-zinc-300 to-brand-lime md:left-1/2 md:-translate-x-px" />

      <div className="space-y-16">
        {entries.map((entry, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex items-start gap-8 md:gap-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } anim-fade-up ${visible ? "anim-visible" : ""}`}
              style={{ transitionDelay: `${index * 150 + 100}ms` }}
            >
              {/* Year marker dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <div className="h-4 w-4 rounded-full border-4 border-brand-orange bg-white shadow-lg shadow-brand-orange/20" />
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  isEven ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                }`}
              >
                <span className="text-label text-brand-orange">{entry.year}</span>
                <h3 className="text-subsection text-brand-black mt-2">
                  {entry.title}
                </h3>
                <p className="text-body text-zinc-600 mt-2">{entry.description}</p>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
