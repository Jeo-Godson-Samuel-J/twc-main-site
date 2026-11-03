"use client";

import React from "react";
import Link from "next/link";

const pastorOverlayLines = ["MEET", "OUR", "PASTORS"];

export default function MeetOurPastors() {
  return (
    <section className="relative w-full bg-[#231815] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Subtle Warm Terracotta Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#9f4200]/15 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
        {/* Left Side: Pastors Portrait + Split Solid/Outlined Typography + Circular Stamp */}
        <div className="w-full flex justify-start">
          <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-14 sm:pl-24 md:pl-28 lg:pl-32 pr-4">
            {/* Layer 1 (Behind Photo, z-0): Solid White Typography — visible outside the photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] xl:text-[5rem] leading-[0.93] tracking-tight uppercase text-white"
            >
              {pastorOverlayLines.map((line) => (
                <div key={`pastor-solid-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Layer 2 (Middle, z-10): Pastors Portrait Photo Card */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#1b1c1c]">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYXNd2WFGNGK6U4Jo8z0e0IFegevRqVDN_aXiraGJYyYAAxxYMh5_gEuJ3juohSI5OMoox235LDGdxlQ7RnpNmEgEAJQYnOTxlOGFO_ecukmbIz-ZL6T7nZBoIdrgJKL9Rh6gPKcgZwEQXJ2DURYykzJ3Y-QFYdlz5RNlP7EXpyzQXdL9Bo29gHRNdzRxivm5F0oVWOmOqRHuv935vHy4lhERCXHWCnhwT33rM8T3RCJOIB8alXOXj"
                alt="Praveen & Pratima David, founding pastors of Trinity Worship Center"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>

            {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography — hollow stroke where letters overlap the photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] xl:text-[5rem] leading-[0.93] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]"
            >
              {pastorOverlayLines.map((line) => (
                <div key={`pastor-stroke-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Bottom-Right Circular "FOUNDED 2003 • MOGAPPAIR ✦" Stamp */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-11 -right-2 sm:-bottom-14 sm:-right-5 z-30 w-28 h-28 sm:w-36 sm:h-36"
            >
              <svg
                viewBox="0 0 140 140"
                className="w-full h-full overflow-visible animate-[spin_24s_linear_infinite]"
              >
                <defs>
                  <path
                    id="pastors-badge-circle"
                    d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  />
                </defs>
                <text
                  fill="#ffffff"
                  className="font-sans font-extrabold text-[13px] uppercase tracking-[0.22em]"
                >
                  <textPath href="#pastors-badge-circle" startOffset="0%">
                    SERVING SINCE 2003 &#10022; TWC &#10022;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Pastoral Bio & Outlined Pill Button */}
        <div className="w-full flex flex-col justify-center items-start space-y-6 sm:space-y-8 lg:pl-6 xl:pl-12">
          <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
            Our Pastoral Leadership
          </p>

          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06]">
            Praveen &amp;
            <br />
            <span className="text-[#f36801]">Pratima David.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#fbf9f8]/85 leading-relaxed max-w-xl">
            Pastors Praveen and Pratima David have been faithfully leading
            Trinity Worship Center since its humble beginnings. What started
            with five people in a rented hall in Mogappair has grown into a
            vibrant, multi-generational church family praising God in spirit
            and truth.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-white/80 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] active:scale-95 transition-all duration-200"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
