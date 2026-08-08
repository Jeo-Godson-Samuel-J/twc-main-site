"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  alignment = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const alignClass = alignment === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = light ? "text-white" : "text-brand-black";
  const subtitleColor = light ? "text-zinc-300" : "text-zinc-600";
  const labelColor = light ? "text-brand-orange" : "text-brand-orange";

  return (
    <div ref={ref} className={`flex flex-col ${alignClass} ${className}`}>
      {label && (
        <span
          className={`text-label ${labelColor} anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-section ${textColor} mt-3 anim-fade-up ${visible ? "anim-visible" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-1 w-16 bg-brand-orange rounded-full anim-width-grow ${visible ? "anim-visible" : ""}`}
        style={{ transitionDelay: "350ms", transformOrigin: alignment === "center" ? "center" : "left" }}
      />
      {subtitle && (
        <p
          className={`text-body ${subtitleColor} mt-6 max-w-2xl anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
