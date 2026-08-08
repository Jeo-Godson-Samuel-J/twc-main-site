"use client";

import React from "react";

export default function MissionSection() {
  return (
    <section className="py-24 px-6 bg-[#f5f3f3] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f36801]/10 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-block mb-4 text-[#acc300]">
          <span
            className="material-symbols-outlined text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            explore
          </span>
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f36801] mb-4">
          Our Mission
        </h2>
        <p className="text-2xl font-semibold text-[#1a1918] mb-6">
          Evangelize. Empower. Educate.
        </p>
        <div className="h-px w-24 bg-[#e0dedc] mx-auto mb-6" />
        <p className="text-lg text-[#4d4c4b] leading-relaxed">
          We exist to bring the good news of Jesus to people who haven&apos;t heard it — through the Word of God and through the testimony of changed lives. We strive to empower our community to live purposefully and educate the next generation in faith and truth.
        </p>
      </div>
    </section>
  );
}

