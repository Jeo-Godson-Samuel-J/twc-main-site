"use client";

import React from "react";
import Link from "next/link";

const overlayLines = ["WE\u2019RE", "PEOPLE", "JUST LIKE", "YOU"];
const marqueeRepeats = [0, 1, 2, 3];

export default function WelcomeSection() {
  return (
    <section className="relative w-full bg-[#231815] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Subtle Warm Terracotta Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#9f4200]/15 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#f36801]/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"
      />

      {/* Part 1: Everyone Is Welcome */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
        {/* Left Side: Full-Scale Portrait Photo + Split Solid/Outlined Text + Circular Stamp */}
        <div className="w-full flex justify-start">
          <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-14 sm:pl-24 md:pl-28 lg:pl-32 pr-4">
            {/* Layer 1 (Behind Photo, z-0): Solid White Typography — visible outside the photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] xl:text-[5rem] leading-[0.93] tracking-tight uppercase text-white"
            >
              {overlayLines.map((line) => (
                <div key={`solid-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Layer 2 (Middle, z-10): Portrait Photo Card */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#1b1c1c]">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6"
                alt="Warm embrace and fellowship at Trinity Worship Center"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            </div>

            {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography — creates the hollow stroke where letters overlap the photo */}
            <div className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] xl:text-[5rem] leading-[0.93] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]">
              {overlayLines.map((line) => (
                <div key={`stroke-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Bottom-Right Circular "JOIN US ON SUNDAYS ✦" Stamp */}
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
                    id="sunday-badge-circle"
                    d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  />
                </defs>
                <text
                  fill="#ffffff"
                  className="font-sans font-extrabold text-[13.5px] uppercase tracking-[0.22em]"
                >
                  <textPath
                    href="#sunday-badge-circle"
                    startOffset="0%"
                  >
                    JOIN US ON SUNDAYS &#10022;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Expansive Editorial Copy & Outlined VISIT Pill Button */}
        <div className="w-full flex flex-col justify-center items-start space-y-7 sm:space-y-8 lg:pl-6 xl:pl-12">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06]">
            Everyone is
            <br />
            <span className="text-[#f36801]">welcome.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#fbf9f8]/85 leading-relaxed max-w-xl">
            Seriously. Every week at Trinity Worship Center, Christians and
            non-Christians, seekers and skeptics, the fired-up and the
            burned-out all come together to learn the ins and outs of
            Jesus&apos; great invitation into a new life.
          </p>

          <div className="pt-2">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center px-11 py-3.5 rounded-full border border-white/80 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] active:scale-95 transition-all duration-200"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Part 2: Continuous "Who We Are -" Outlined Marquee */}
      <div className="relative w-full my-20 sm:my-28 lg:my-36 overflow-hidden select-none pointer-events-none">
        <div className="marquee-always-track items-center">
          {/* First Set */}
          <div className="flex items-center shrink-0">
            {marqueeRepeats.map((item) => (
              <div
                key={`marquee-a-${item}`}
                className="flex items-center shrink-0"
              >
                <span className="font-sans font-extrabold text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                  Who We Are
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {marqueeRepeats.map((item) => (
              <div
                key={`marquee-b-${item}`}
                className="flex items-center shrink-0"
              >
                <span className="font-sans font-extrabold text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                  Who We Are
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 3: Looking for a life-changing performance? */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-28 items-center">
        {/* Left Column: Heading, Copy & Outlined WHO WE ARE Pill Button */}
        <div className="w-full flex flex-col justify-center items-start space-y-7 sm:space-y-8">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06]">
            Looking for a
            <br />
            <span className="text-[#f36801]">life-changing</span>
            <br />
            performance?
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#fbf9f8]/85 leading-relaxed max-w-xl">
            Neither are we. Instead of hosting a great event every Sunday, we
            desire to meet with Jesus. Every weekend is an opportunity to
            gather as his Church, to learn from his Word, and to welcome his
            Spirit among us. Because Jesus changes lives, not us.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-white/80 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] active:scale-95 transition-all duration-200"
            >
              Who We Are
            </Link>
          </div>
        </div>

        {/* Right Column: Landscape Worship Photo Card */}
        <div className="w-full flex justify-start lg:justify-end lg:mt-16">
          <div className="relative w-full max-w-[640px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-[#1b1c1c]">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src="/hero-worship.png"
              alt="Congregation worshipping Jesus with raised hands at Trinity Worship Center"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
