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
  height = "100vh",
  overlay = true,
  overlayOpacity = 0.55,
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
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ minHeight: height }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover anim-ken-burns"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Dark Overlay */}
      {overlay && backgroundImage && (
        <div
          className="absolute inset-0 z-[1] bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Minimal gradient bg when no image */}
      {!backgroundImage && !minimal && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-50 to-white" />
      )}

      {/* Content Layout */}
      {alignment === "split" ? (
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Header */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div
                className={`anim-fade-up ${visible ? "anim-visible" : ""}`}
                style={{ transitionDelay: "200ms" }}
              >
                <h1
                  className={`text-hero ${backgroundImage ? "text-white" : "text-brand-black"}`}
                >
                  {title}
                </h1>
              </div>
            </div>

            {/* Right Column: Subtitle & CTAs in a Translucent Glass Card */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div
                className={`w-full rounded-3xl border border-white/15 bg-black/35 p-8 sm:p-10 shadow-2xl backdrop-blur-md anim-fade-right ${visible ? "anim-visible" : ""}`}
                style={{ transitionDelay: "300ms" }}
              >
                {subtitle && (
                  <p
                    className={`text-body ${backgroundImage ? "text-zinc-200" : "text-zinc-600"} anim-fade-up ${visible ? "anim-visible" : ""}`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    {subtitle}
                  </p>
                )}

                {children}

                {(primaryCTA || secondaryCTA) && (
                  <div
                    className={`mt-8 flex flex-col sm:flex-row gap-4 anim-fade-up ${visible ? "anim-visible" : ""}`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    {primaryCTA && (
                      <Button
                        href={primaryCTA.href}
                        variant={backgroundImage ? "primary" : "dark"}
                        size="lg"
                      >
                        {primaryCTA.label}
                      </Button>
                    )}
                    {secondaryCTA && (
                      <Button
                        href={secondaryCTA.href}
                        variant={backgroundImage ? "outline" : "secondary"}
                        size="lg"
                      >
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
          className={`relative z-10 mx-auto flex max-w-5xl flex-col ${alignClass} px-6 sm:px-8 py-32`}
        >
          <div
            className={`anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1
              className={`text-hero ${backgroundImage ? "text-white" : "text-brand-black"}`}
            >
              {title}
            </h1>
          </div>

          {subtitle && (
            <p
              className={`text-body mt-6 max-w-2xl ${backgroundImage ? "text-zinc-200" : "text-zinc-600"} anim-fade-up ${visible ? "anim-visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              {subtitle}
            </p>
          )}

          {children}

          {(primaryCTA || secondaryCTA) && (
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 ${alignment === "center" ? "justify-center" : ""} anim-fade-up ${visible ? "anim-visible" : ""}`}
              style={{ transitionDelay: "600ms" }}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  variant={backgroundImage ? "primary" : "dark"}
                  size="lg"
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant={backgroundImage ? "outline" : "secondary"}
                  size="lg"
                >
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
