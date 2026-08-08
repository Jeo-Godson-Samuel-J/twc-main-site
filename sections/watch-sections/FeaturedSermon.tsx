"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SermonCard from "@/components/SermonCard";

export default function FeaturedSermon() {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <span
            className={`text-label text-brand-orange anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Latest Message
          </span>
        </div>

        <div
          className={`anim-scale-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <SermonCard
            featured
            thumbnail="/hero_worship.png"
            title="Walking in Purpose: Finding God's Plan for Your Life"
            date="July 27, 2026"
            series="Purpose Series"
            speaker="Pastor Praveen David"
            duration="42:15"
            watchUrl="https://youtube.com"
          />
        </div>
      </div>
    </section>
  );
}
