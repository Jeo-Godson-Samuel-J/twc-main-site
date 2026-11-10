"use client";

import React from "react";
import Link from "next/link";
import { useWebsiteImages } from "@/lib/sanity";

const overlayLines = ["EVERYONE", "IS", "WELCOME", "HERE"];
const marqueeRepeats = [0, 1, 2, 3];

export default function WelcomeSection() {
  const { homePlanVisitImage } = useWebsiteImages();
  return (
    <>
      {/* Plan Your Visit Section on Light (#fbf9f8) Background */}
      <section className="relative w-full bg-[#fbf9f8] text-[#0D0B0B] py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          {/* Left Side: Full-Scale Portrait Photo + Split Solid/Outlined Text ("EVERYONE IS WELCOME HERE") + Circular Stamp */}
          <div className="w-full flex justify-start">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-14 sm:pl-24 md:pl-28 lg:pl-32 pr-4">
              {/* Layer 1 (Behind Photo, z-0): Solid #0D0B0B Typography — visible outside the photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] xl:text-[4.75rem] leading-[0.93] tracking-tight uppercase text-[#0D0B0B]"
              >
                {overlayLines.map((line) => (
                  <div key={`solid-${line}`} className="whitespace-nowrap">
                    {line}
                  </div>
                ))}
              </div>

              {/* Layer 2 (Middle, z-10): Portrait Photo Card */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#0D0B0B]">
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src={
                    homePlanVisitImage ||
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6"
                  }
                  alt="Warm embrace and fellowship at Trinity Worship Center"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>

              {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography — creates the hollow stroke where letters overlap the photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] xl:text-[4.75rem] leading-[0.93] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]"
              >
                {overlayLines.map((line) => (
                  <div key={`stroke-${line}`} className="whitespace-nowrap">
                    {line}
                  </div>
                ))}
              </div>

              {/* Bottom-Right Circular "JOIN US ON SUNDAYS ✦" Stamp */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -bottom-10 -right-2 sm:-bottom-12 sm:-right-4 z-30 w-28 h-28 sm:w-32 sm:h-32 bg-[#f36801] rounded-full p-2 shadow-xl"
              >
                <svg
                  viewBox="0 0 140 140"
                  className="w-full h-full overflow-visible animate-[spin_24s_linear_infinite]"
                >
                  <defs>
                    <path
                      id="sunday-badge-circle"
                      d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    />
                  </defs>
                  <text
                    fill="#ffffff"
                    className="font-sans font-extrabold text-[13.5px] uppercase tracking-[0.22em]"
                  >
                    <textPath href="#sunday-badge-circle" startOffset="0%">
                      JOIN US ON SUNDAYS &#10022;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: "Plan your Visit." Editorial Copy & Outlined VISIT Pill Button */}
          <div className="w-full flex flex-col justify-center items-start space-y-6 sm:space-y-8 lg:pl-6 xl:pl-12">
            <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
              Sundays • 8:00 AM Tamil &amp; 10:30 AM English
            </p>

            <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0D0B0B] tracking-tight leading-[1.06]">
              Plan your
              <br />
              <span className="text-[#f36801]">Visit.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#4a4b4b] leading-relaxed max-w-xl">
              Seriously — everyone is welcome here. Every week at Trinity
              Worship Center in Mogappair, seekers and believers, families and
              students all come together to experience authentic worship,
              practical Scripture, and Jesus&apos; great invitation into a new
              life.
            </p>

            <div className="pt-2">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-11 py-3.5 rounded-full border border-[#0D0B0B]/80 text-[#0D0B0B] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] hover:text-white active:scale-95 transition-all duration-200"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Charcoal (#0D0B0B) Marquee Strip Between Plan Your Visit and Sparkz Kids */}
      <section className="relative w-full bg-[#0D0B0B] text-white py-14 sm:py-20 overflow-hidden select-none pointer-events-none">
        <div className="marquee-always-track items-center">
          {/* First Set */}
          <div className="flex items-center shrink-0">
            {marqueeRepeats.map((item) => (
              <div
                key={`mid-marquee-a-${item}`}
                className="flex items-center shrink-0"
              >
                <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                  Welcome Home
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-[#f36801] inline-block shrink-0" />
                <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-[#f36801] whitespace-nowrap">
                  Join Us This Sunday
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {marqueeRepeats.map((item) => (
              <div
                key={`mid-marquee-b-${item}`}
                className="flex items-center shrink-0"
              >
                <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                  Welcome Home
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-[#f36801] inline-block shrink-0" />
                <span className="font-sans font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-none tracking-tight text-[#f36801] whitespace-nowrap">
                  Join Us This Sunday
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
