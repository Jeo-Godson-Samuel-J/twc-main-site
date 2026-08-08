"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactHero() {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative flex w-full items-center justify-center bg-brand-dark pt-40 pb-24 lg:pb-32 overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <span
          className={`text-label text-brand-orange anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Get In Touch
        </span>
        <h1
          className={`text-hero text-white mt-4 anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          Say <span className="text-brand-orange">Hello</span>
        </h1>
        <p
          className={`text-body text-zinc-300 mt-6 anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          No question is too small. Send it over and someone will get back to you.
        </p>
      </div>
    </section>
  );
}
