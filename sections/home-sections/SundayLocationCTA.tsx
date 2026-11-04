"use client";

import React from "react";

const marqueeRepeats = [0, 1, 2, 3];

export default function SundayLocationCTA() {
  return (
    <section className="relative w-full bg-[#0D0B0B] text-white py-14 sm:py-20 overflow-hidden select-none pointer-events-none">
      <div className="marquee-always-track items-center">
        {/* First Set */}
        <div className="flex items-center shrink-0">
          {marqueeRepeats.map((item) => (
            <div
              key={`bottom-marquee-a-${item}`}
              className="flex items-center shrink-0"
            >
              <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                Welcome Home
              </span>
              <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-[#f36801] inline-block shrink-0" />
              <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-[#f36801] whitespace-nowrap">
                Join Us This Sunday
              </span>
              <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
            </div>
          ))}
        </div>

        {/* Duplicate Set for Seamless Loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {marqueeRepeats.map((item) => (
            <div
              key={`bottom-marquee-b-${item}`}
              className="flex items-center shrink-0"
            >
              <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                Welcome Home
              </span>
              <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-[#f36801] inline-block shrink-0" />
              <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-[#f36801] whitespace-nowrap">
                Join Us This Sunday
              </span>
              <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
