"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Button from "@/components/Button";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  buttonHref: string;
  children?: React.ReactNode;
}

export default function CTASection({
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  children,
}: CTASectionProps) {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative flex w-full items-center justify-center bg-brand-dark py-28 lg:py-36 overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <h2
          className={`text-section text-white anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          {heading}
        </h2>
        {subheading && (
          <p
            className={`text-body text-zinc-300 mt-6 anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "250ms" }}
          >
            {subheading}
          </p>
        )}
        {children}
        <div
          className={`mt-10 anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button href={buttonHref} variant="primary" size="lg">
            {buttonLabel}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
    </section>
  );
}
