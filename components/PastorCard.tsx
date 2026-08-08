"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Button from "@/components/Button";

interface PastorCardProps {
  imageSrc: string;
  heading?: string;
  names: string;
  biography: string;
  ctaLabel?: string;
  ctaHref?: string;
  imagePosition?: "left" | "right";
}

export default function PastorCard({
  imageSrc,
  heading = "Meet Our Pastors",
  names,
  biography,
  ctaLabel = "Our Story",
  ctaHref = "/about",
  imagePosition = "left",
}: PastorCardProps) {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const imageAnimClass = imagePosition === "left" ? "anim-fade-left" : "anim-fade-right";
  const contentAnimClass = imagePosition === "left" ? "anim-fade-right" : "anim-fade-left";

  return (
    <section
      ref={ref}
      className="relative flex w-full items-center justify-center bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Portrait */}
        <div
          className={`relative overflow-hidden rounded-2xl ${imagePosition === "right" ? "lg:order-2" : ""} ${imageAnimClass} ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="hover-zoom aspect-[3/4] relative">
            <Image
              src={imageSrc}
              alt={names}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content with decorative quotes */}
        <div
          className={`relative flex flex-col justify-center ${imagePosition === "right" ? "lg:order-1" : ""} ${contentAnimClass} ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Decorative quotation marks */}
          <div className="absolute -top-8 -left-4 text-[12rem] font-heading font-black text-zinc-100 leading-none select-none pointer-events-none z-0">
            &ldquo;
          </div>

          <div className="relative z-10">
            <span className="text-label text-brand-orange">{heading}</span>
            <h2 className="text-section text-brand-black mt-3">{names}</h2>
            <div className="mt-5 h-1 w-16 bg-brand-orange rounded-full" />
            <p className="text-body text-zinc-600 mt-6">{biography}</p>
            <div className="mt-8">
              <Button href={ctaHref} variant="dark" size="md">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
