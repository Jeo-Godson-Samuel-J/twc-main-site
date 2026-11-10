"use client";

import React from "react";
import Link from "next/link";
import { useWebsiteImages } from "@/lib/sanity";

const sparkOverlayLines = ["SPARKZ", "KIDS"];
const marqueeRepeats = [0, 1, 2, 3];

const DEFAULT_VISIT_SPARKZ_KIDS_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6";

const services = [
  {
    time: "8:00 AM",
    language: "Tamil",
    label: "First Morning Worship",
    description:
      "Gather with us for vibrant Tamil worship, heartfelt intercessory prayer, and life-giving teaching from God’s Word.",
    day: "Every Sunday",
  },
  {
    time: "10:30 AM",
    language: "English",
    label: "Second Morning Worship",
    description:
      "Join our English worship gathering featuring spirit-led contemporary worship, practical Scripture teaching, and warm fellowship.",
    day: "Every Sunday",
  },
];

export default function ServiceTimes() {
  const { visitSparkzKidsImage } = useWebsiteImages();

  return (
    <>
      {/* SECTION 1: Tamil (8:00 AM) & English (10:30 AM) Service Timings on White (#fbf9f8) — Fitted to Screen Height */}
      <section className="relative w-full min-h-[calc(100vh-76px)] flex items-center bg-[#fbf9f8] text-[#0D0B0B] py-12 sm:py-16 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 space-y-8 sm:space-y-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2">
              <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
                Sunday Worship Schedule
              </p>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] uppercase tracking-[0.03em] leading-[1.06] text-[#0D0B0B]">
                Service <span className="text-[#f36801]">Timings</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#4a4b4b] max-w-md leading-relaxed">
              Join us every Sunday in Mogappair, Chennai. Come as you are —
              everyone is welcome at both of our morning services.
            </p>
          </div>

          {/* 8:00 AM Tamil & 10:30 AM English Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.language}
                className="group rounded-3xl bg-[#0D0B0B] text-white p-7 sm:p-9 lg:p-10 border border-[#0D0B0B]/10 shadow-2xl flex flex-col justify-between gap-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <p className="font-sans font-bold text-xs uppercase tracking-[0.22em] text-white/60">
                    {service.label}
                  </p>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#f36801] tracking-tight leading-none">
                      {service.time}
                    </span>
                    <span className="font-sans font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                      {service.language} Service.
                    </span>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Date & Time Row */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[#f36801] font-sans font-bold text-xs uppercase tracking-[0.18em]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">
                      calendar_today
                    </span>
                    <span>{service.day}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    <span>{service.time}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE IN BLACK (#0D0B0B) BETWEEN SERVICE TIMINGS AND SPARKZ KIDS */}
      <section className="relative w-full bg-[#0D0B0B] text-white py-14 sm:py-20 overflow-hidden select-none pointer-events-none">
        <div className="marquee-always-track items-center">
          {/* First Set */}
          <div className="flex items-center shrink-0">
            {marqueeRepeats.map((item) => (
              <div
                key={`visit-marquee-a-${item}`}
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
                key={`visit-marquee-b-${item}`}
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

      {/* SECTION 2: Sparkz Kids Section on White (#fbf9f8) */}
      <section className="relative w-full min-h-[calc(100vh-76px)] flex items-center bg-[#fbf9f8] text-[#0D0B0B] py-14 sm:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
            {/* Left Side: Sparkz Kids Portrait Photo + Split Solid/Outlined Text + Circular Stamp */}
            <div className="w-full flex justify-start">
              <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-12 sm:pl-20 md:pl-24 lg:pl-28 pr-4">
                {/* Layer 1 (Behind Photo, z-0): Solid #0D0B0B Typography */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[3rem] sm:text-[4.25rem] md:text-[5rem] xl:text-[5.5rem] leading-[0.92] tracking-tight uppercase text-[#0D0B0B]"
                >
                  {sparkOverlayLines.map((line) => (
                    <div
                      key={`visit-spark-solid-${line}`}
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
                    src={visitSparkzKidsImage || DEFAULT_VISIT_SPARKZ_KIDS_IMG}
                    alt="Sparkz Kids ministry at Trinity Worship Center"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                </div>

                {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[3rem] sm:text-[4.25rem] md:text-[5rem] xl:text-[5.5rem] leading-[0.92] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]"
                >
                  {sparkOverlayLines.map((line) => (
                    <div
                      key={`visit-spark-stroke-${line}`}
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
                        id="visit-spark-kids-circle"
                        d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                      />
                    </defs>
                    <text
                      fill="#ffffff"
                      className="font-sans font-extrabold text-[13px] uppercase tracking-[0.2em]"
                    >
                      <textPath
                        href="#visit-spark-kids-circle"
                        startOffset="0%"
                      >
                        SPARKZ KIDS • EVERY SUNDAY &#10022;
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side: Sparkz Kids Editorial Content & Pill CTA */}
            <div className="w-full flex flex-col justify-center items-start space-y-6 sm:space-y-7 lg:pl-6 xl:pl-12">
              <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
                Ages 3–12 • Both Services
              </p>

              <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0D0B0B] tracking-tight leading-[1.06]">
                Your kids are
                <br />
                <span className="text-[#f36801]">welcome too.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#4a4b4b] leading-relaxed max-w-xl">
                Sparkz Kids runs alongside both our 8:00 AM Tamil and 10:30 AM
                English services. Through interactive Bible stories, joyful
                worship, and safe age-appropriate groups, your children will
                love every Sunday at Trinity Worship Center.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-[#0D0B0B]/80 text-[#0D0B0B] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] hover:text-white active:scale-95 transition-all duration-200"
                >
                  Explore Ministries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
