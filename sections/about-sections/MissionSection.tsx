"use client";

import React from "react";

export default function MissionSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-[#fbf9f8] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f36801]/10 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-4">
        <span className="inline-block mb-2 text-[#f36801]">
          <span
            className="material-symbols-outlined text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            explore
          </span>
        </span>
        <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#9f4200] block">
          Our Purpose
        </span>
        <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#1b1c1c]">
          Our Mission
        </h2>
        <p className="font-serif text-2xl md:text-3xl text-[#f36801] font-semibold pt-2">
          Evangelize • Empower • Educate
        </p>
        <div className="h-[2px] w-20 bg-[#f36801] mx-auto my-4 rounded-full" />
        <p className="font-sans text-lg text-[#594236] leading-relaxed">
          We exist to share the good news of Jesus through the truth of God&apos;s Word and the testimony of transformed lives. We strive to empower our community in Mogappair to live with divine purpose and educate the next generation in faith, integrity, and love.
        </p>
      </div>
    </section>
  );
}


