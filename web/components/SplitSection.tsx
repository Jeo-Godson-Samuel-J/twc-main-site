"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SplitSectionProps {
  imagePosition?: "left" | "right";
  imageSrc: string;
  imageAlt?: string;
  background?: "white" | "light" | "dark";
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SplitSection({
  imagePosition = "left",
  imageSrc,
  imageAlt = "",
  background = "white",
  children,
  className = "",
  id,
}: SplitSectionProps) {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const bgClasses: Record<string, string> = {
    white: "bg-white",
    light: "bg-zinc-50",
    dark: "bg-brand-dark text-white",
  };

  const imageAnimClass =
    imagePosition === "left" ? "anim-fade-left" : "anim-fade-right";
  const contentAnimClass =
    imagePosition === "left" ? "anim-fade-right" : "anim-fade-left";

  return (
    <section
      ref={ref}
      id={id}
      className={`relative flex w-full items-center justify-center py-24 lg:py-32 overflow-hidden ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-2xl ${imagePosition === "right" ? "lg:order-2" : ""} ${imageAnimClass} ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="hover-zoom aspect-[4/3] relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center ${imagePosition === "right" ? "lg:order-1" : ""} ${contentAnimClass} ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
