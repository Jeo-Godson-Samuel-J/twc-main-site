"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Button from "@/components/Button";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  alignment?: "center" | "left" | "split";
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  minimal?: boolean;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  height = "auto",
  overlay = true,
  overlayOpacity = 0.45,
  alignment = "center",
  primaryCTA,
  secondaryCTA,
  minimal = false,
  children,
}: HeroSectionProps) {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const alignClass =
    alignment === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section
      ref={ref}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24"
      style={{ minHeight: height }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover anim-ken-burns opacity-90"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Warm Overlay */}
      {overlay && backgroundImage && (
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1b1c1c]/60 via-[#1b1c1c]/40 to-[#fbf9f8]"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Subtle ambient light gradient background when no image */}
      {!backgroundImage && !minimal && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#fbf9f8] via-[#f5f3f3] to-[#fbf9f8]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 bg-[radial-gradient(#f36801_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>
      )}

      {/* Content Layout */}
      {alignment === "split" ? (
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Header */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div
                className={`anim-fade-up ${visible ? "anim-visible" : ""}`}
                style={{ transitionDelay: "200ms" }}
              >
                <h1 className="font-serif font-medium text-[#1b1c1c] text-display-lg tracking-tight leading-[1.08]">
                  {title}
                </h1>
              </div>
            </div>

            {/* Right Column: Subtitle & CTAs in a Warm Card */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div
                className={`w-full rounded-2xl border border-[#e1c0b1]/50 bg-white/90 p-8 shadow-sm backdrop-blur-md anim-fade-right ${visible ? "anim-visible" : ""}`}
                style={{ transitionDelay: "300ms" }}
              >
                {subtitle && (
                  <p
                    className={`text-body text-[#594236] anim-fade-up ${visible ? "anim-visible" : ""}`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    {subtitle}
                  </p>
                )}

                {children}

                {(primaryCTA || secondaryCTA) && (
                  <div
                    className={`mt-6 flex flex-col sm:flex-row gap-3.5 anim-fade-up ${visible ? "anim-visible" : ""}`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    {primaryCTA && (
                      <Button href={primaryCTA.href} variant="primary" size="lg">
                        {primaryCTA.label}
                      </Button>
                    )}
                    {secondaryCTA && (
                      <Button href={secondaryCTA.href} variant="secondary" size="lg">
                        {secondaryCTA.label}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative z-10 mx-auto flex max-w-4xl flex-col ${alignClass} px-6 py-12`}
        >
          {/* Sunday Service Pill Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f36801]/10 border border-[#f36801]/30 text-[#9f4200] text-xs font-semibold uppercase tracking-wider mb-6 anim-fade-down ${
              visible ? "anim-visible" : ""
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f36801] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f36801]"></span>
            </span>
            <span>Sunday Services • 8:00 AM (Tamil) & 10:30 AM (English)</span>
          </div>

          <div
            className={`anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="font-serif font-medium text-[#1b1c1c] text-display-lg tracking-tight leading-[1.08]">
              {title}
            </h1>
          </div>

          {subtitle && (
            <p
              className={`text-body mt-6 max-w-2xl text-[#594236] text-center anim-fade-up ${
                visible ? "anim-visible" : ""
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              {subtitle}
            </p>
          )}

          {children}

          {(primaryCTA || secondaryCTA) && (
            <div
              className={`mt-9 flex flex-col sm:flex-row gap-4 ${
                alignment === "center" ? "justify-center" : ""
              } anim-fade-up ${visible ? "anim-visible" : ""}`}
              style={{ transitionDelay: "500ms" }}
            >
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="secondary" size="lg">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

