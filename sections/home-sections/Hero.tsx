"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fbf9f8] text-[#1b1c1c] pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[460px] md:min-h-[500px] lg:aspect-[16/9] lg:max-h-[540px] flex items-end">
          {/* Background Worship Image */}
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="/hero-worship.png"
            alt="Trinity Worship Center worship gathering"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Overlay Vignette for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          {/* Content Overlay - Bottom Left */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-14 max-w-3xl space-y-3 sm:space-y-4 md:space-y-5">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08]">
              You&apos;re home. Welcome!
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl">
              We&apos;re a community of people who love God and people. There&apos;s always a place for you here.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/visit"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 bg-[#f36801] text-white font-sans font-semibold rounded-full hover:bg-[#9f4200] active:scale-95 transition-all shadow-md text-xs sm:text-sm md:text-base gap-2"
              >
                <span>Plan Your Visit</span>
                <span className="material-symbols-outlined text-lg sm:text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              <Link
                href="/watch"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 bg-white/20 backdrop-blur-md text-white border border-white/30 font-sans font-semibold rounded-full hover:bg-white/30 active:scale-95 transition-all shadow-md text-xs sm:text-sm md:text-base gap-2"
              >
                <span>Watch Online</span>
                <span
                  className="material-symbols-outlined text-lg sm:text-xl text-white group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

