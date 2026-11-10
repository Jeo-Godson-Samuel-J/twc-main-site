"use client";

import React from "react";
import { useWebsiteImages } from "@/lib/sanity";

export default function VisitHero() {
  const { visitHeroBgImage } = useWebsiteImages();

  return (
    <section className="relative w-full min-h-[78vh] sm:min-h-[84vh] flex items-center justify-center overflow-hidden bg-[#0D0B0B] text-white">
      {/* Background Image */}
      {/* eslint-disable-next-html-element-suppression */}
      <img
        src={visitHeroBgImage || "/hero-worship.png"}
        alt="Congregation gathering for worship at Trinity Worship Center"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
      />

      {/* Semi-Transparent Dark Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/55 z-[1]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0D0B0B]/85 via-black/30 to-black/40 z-[1]"
      />

      {/* Centered Encouraging Heading */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 text-center space-y-6">
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.08] text-white">
          Connect with <span className="text-[#f36801]">Us.</span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          We&apos;ve saved a seat for you. Come as you are, worship Jesus with
          us, and experience a warm church family you can call home.
        </p>
      </div>
    </section>
  );
}
