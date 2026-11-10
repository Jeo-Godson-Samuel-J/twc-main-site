"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "3", label: "Churches Planted" },
  { value: "500+", label: "Families Served" },
  { value: "250+", label: "Weekly Attendance" },
];

export default function ImpactStats() {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-brand-dark py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <span
            className={`text-label text-brand-orange anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Your Generosity at Work
          </span>
          <h2
            className={`text-section text-white mt-3 anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            Impact That Matters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center anim-scale-up ${visible ? "anim-visible" : ""}`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <p className="text-[4rem] md:text-[5rem] font-heading font-bold text-brand-orange leading-none">
                {stat.value}
              </p>
              <p className="text-body text-zinc-300 mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
    </section>
  );
}
