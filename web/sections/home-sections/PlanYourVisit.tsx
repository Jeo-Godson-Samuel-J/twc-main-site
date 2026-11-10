"use client";

import React from "react";
import Link from "next/link";
import { useWebsiteImages } from "@/lib/sanity";

const sparkOverlayLines = ["SPARKZ", "KIDS"];

export default function PlanYourVisit() {
  const { homeSparkzKidsImage } = useWebsiteImages();
  return (
    <section className="relative w-full bg-[#fbf9f8] text-[#0D0B0B] py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Sparkz Kids Full-Width Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          {/* Left Side: Sparkz Kids Portrait Photo + Split Solid/Outlined Text + Circular Stamp */}
          <div className="w-full flex justify-start">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-12 sm:pl-20 md:pl-24 lg:pl-28 pr-4">
              {/* Layer 1 (Behind Photo, z-0): Solid #0D0B0B Typography — visible outside the photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[3rem] sm:text-[4.25rem] md:text-[5rem] xl:text-[5.5rem] leading-[0.92] tracking-tight uppercase text-[#0D0B0B]"
              >
                {sparkOverlayLines.map((line) => (
                  <div
                    key={`spark-solid-${line}`}
                    className="whitespace-nowrap"
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Layer 2 (Middle, z-10): Sparkz Kids Photo Card */}
              <div className="relative z-10 w-full aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl bg-[#0D0B0B]">
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src={
                    homeSparkzKidsImage ||
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6"
                  }
                  alt="Sparkz Kids ministry at Trinity Worship Center"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              </div>

              {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography — hollow stroke over the photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[3rem] sm:text-[4.25rem] md:text-[5rem] xl:text-[5.5rem] leading-[0.92] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]"
              >
                {sparkOverlayLines.map((line) => (
                  <div
                    key={`spark-stroke-${line}`}
                    className="whitespace-nowrap"
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Bottom-Right Circular "SPARKZ KIDS • EVERY SUNDAY ✦" Stamp */}
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
                      id="spark-kids-circle"
                      d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    />
                  </defs>
                  <text
                    fill="#ffffff"
                    className="font-sans font-extrabold text-[13px] uppercase tracking-[0.2em]"
                  >
                    <textPath href="#spark-kids-circle" startOffset="0%">
                      SPARKZ KIDS • EVERY SUNDAY &#10022;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Sparkz Kids Editorial Content & Pill CTAs */}
          <div className="w-full flex flex-col justify-center items-start space-y-6 sm:space-y-7 lg:pl-6 xl:pl-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f36801]/12 text-[#f36801] font-sans font-bold text-xs uppercase tracking-[0.18em]">
              <span
                className="material-symbols-outlined text-base text-[#f36801]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
              Ages 3–12 • Both Services
            </span>

            <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0D0B0B] tracking-tight leading-[1.06]">
              Your kids are
              <br />
              <span className="text-[#f36801]">welcome too.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#4a4b4b] leading-relaxed max-w-xl">
              Sparkz Kids runs alongside both our 8:00 AM Tamil and 10:30 AM
              English services. Through interactive Bible stories, joyful
              worship, and safe age-appropriate groups, your children will love
              every Sunday at Trinity Worship Center.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#f36801] hover:bg-[#d85a00] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-md active:scale-95 transition-all duration-200"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/connect"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[#0D0B0B]/80 text-[#0D0B0B] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#0D0B0B] hover:text-white active:scale-95 transition-all duration-200"
              >
                Explore Ministries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
