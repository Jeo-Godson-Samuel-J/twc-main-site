"use client";

import React from "react";
import Link from "next/link";

const pastorLines = ["LEAD", "PASTORS"];

export default function AboutPastors() {
  return (
    <section className="relative w-full bg-[#fbf9f8] text-[#0D0B0B] py-20 sm:py-28 lg:py-36 border-b border-[#d8dada]/40 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f36801]/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
        {/* Left Side: Founding Pastors Portrait + Split Solid/Outlined Text + Circular Stamp */}
        <div className="w-full flex justify-start">
          <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-12 sm:pl-20 md:pl-24 lg:pl-28 pr-4">
            {/* Layer 1 (Behind Photo, z-0): Solid Espresso Typography — visible outside the photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[2.75rem] sm:text-[4rem] md:text-[4.75rem] xl:text-[5.25rem] leading-[0.92] tracking-tight uppercase text-[#0D0B0B]"
            >
              {pastorLines.map((line) => (
                <div key={`about-pastor-solid-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Layer 2 (Middle, z-10): Pastors Portrait Photo */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#0D0B0B]">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIV8jnX0zFx9zfWYAERPu713uTUidG89OYkUJ3Y10VPXXWvZKS_U_B1oW_oFSbr1mUMbQJJfrY_kadraZc_01ZT0yC3JxlK_Znrxx_ZmQoNFC6_arRzfjL3GS-e47jlpatcWIada_ejiIFmfIq4IyINd65HHhQSLDnlhdqC2vATvJJXyhFflu-Uvke62abrPlWQOEb1Oj8uPexxNNnfcCLR4oCZj856L08fau95CsTebfMS2NlLdch"
                alt="Founding Pastors Praveen & Pratima David"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>

            {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography — hollow stroke over the photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[2.75rem] sm:text-[4rem] md:text-[4.75rem] xl:text-[5.25rem] leading-[0.92] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]"
            >
              {pastorLines.map((line) => (
                <div key={`about-pastor-stroke-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Bottom-Right Circular Badge */}
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
                    id="about-pastors-circle"
                    d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  />
                </defs>
                <text
                  fill="#ffffff"
                  className="font-sans font-extrabold text-[13px] uppercase tracking-[0.2em]"
                >
                  <textPath href="#about-pastors-circle" startOffset="0%">
                    FOUNDING PASTORS • CHENNAI &#10022;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Founding Pastors Story & CTA */}
        <div className="w-full flex flex-col justify-center items-start space-y-6 sm:space-y-8 lg:pl-6 xl:pl-12">
          <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
            Pastoral Leadership
          </p>

          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0D0B0B] tracking-tight leading-[1.06]">
            Praveen &amp;
            <br />
            <span className="text-[#f36801]">Pratima David.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#4a4b4b] leading-relaxed max-w-xl">
            Both born and raised in Chennai, Praveen and Pratima have been
            married since 1996. Their deep love for Chennai shapes Trinity
            Worship Center&apos;s heart for local community transformation.
          </p>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#4a4b4b] leading-relaxed max-w-xl">
            They believe the local church is God&apos;s instrument of hope —
            meant to reach beyond its walls into the neighborhood, bringing
            restoration, empowerment, and practical Christ-like care.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#0D0B0B] hover:bg-[#f36801] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-md active:scale-95 transition-all duration-200"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
