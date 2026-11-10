"use client";

import React from "react";
import Link from "next/link";
import { useWebsiteImages } from "@/lib/sanity";

const storyOverlayLines = ["OUR", "STORY", "SO FAR"];
const marqueeRepeats = [0, 1, 2, 3];

export default function OurStory() {
  const { aboutOurStoryPortraitImage, aboutOurStoryWorshipImage } =
    useWebsiteImages();
  return (
    <section className="relative w-full bg-[#0D0B0B] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Part 1: Our Story So Far */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
        {/* Left Side: Portrait Photo + Split Solid/Outlined Text + Circular Stamp */}
        <div className="w-full flex justify-start">
          <div className="relative w-full max-w-[560px] lg:max-w-[620px] pl-14 sm:pl-24 md:pl-28 lg:pl-32 pr-4">
            {/* Layer 1 (Behind Photo, z-0): Solid White Typography */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-0 font-sans font-black text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] xl:text-[5rem] leading-[0.93] tracking-tight uppercase text-white"
            >
              {storyOverlayLines.map((line) => (
                <div key={`story-solid-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Layer 2 (Middle, z-10): Congregation Portrait Photo */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#262828]">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src={
                  aboutOurStoryPortraitImage ||
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdxTRB2UdtDbAs5WwjBT7wkJuWeJ149Rt4bdbUXgiXY9MdHQBtomHgrUP6M3UfwaFp2X7eq-UNGih9EveBezXbZgePwmDmg6kt1oKiJE9Y0rT-J9CjpnyDwcWJryCGoTgIW_UdR3jPrn5gclyVijz2D4Lpgi0Q4S3ckbqK0QIQIxLeCo0ixqzknMIJw_QHyv73DVb6bTcB7MdHq4XWkKHe3PlnV5zhdfMDq7aQiNLWHKLM44PkVza"
                }
                alt="Trinity Worship Center congregation gathering"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            </div>

            {/* Layer 3 (On Top of Photo, z-20): Outlined White Typography */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 z-20 font-sans font-black text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] xl:text-[5rem] leading-[0.93] tracking-tight uppercase text-transparent [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff]"
            >
              {storyOverlayLines.map((line) => (
                <div key={`story-stroke-${line}`} className="whitespace-nowrap">
                  {line}
                </div>
              ))}
            </div>

            {/* Bottom-Right Circular "APRIL 13, 2003 • MOGAPPAIR ✦" Stamp */}
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
                    id="story-badge-circle"
                    d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  />
                </defs>
                <text
                  fill="#ffffff"
                  className="font-sans font-extrabold text-[13px] uppercase tracking-[0.22em]"
                >
                  <textPath href="#story-badge-circle" startOffset="0%">
                    EST. APRIL 2003 &#10022; MOGAPPAIR &#10022;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Expansive Editorial Story Copy */}
        <div className="w-full flex flex-col justify-center items-start space-y-6 sm:space-y-8 lg:pl-6 xl:pl-12">
          <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
            Our Journey &amp; Legacy
          </p>

          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06]">
            A deep conviction
            <br />
            <span className="text-[#f36801]">before a building.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
            Trinity Worship Center began as a vision God placed in the hearts
            of Pastors Praveen and Pratima David on April 13, 2003. What
            started with five people in a small rented space in Mogappair has
            flourished into a thriving spiritual home.
          </p>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
            Over two decades later, Trinity remains a multi-generational family
            of families committed to evangelism, spiritual empowerment, and
            active community outreach across Chennai.
          </p>

          <div className="pt-2">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-white/80 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] active:scale-95 transition-all duration-200"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Part 2: Continuous "Our Mission -" Outlined Marquee */}
      <div className="relative w-full my-20 sm:my-28 lg:my-36 overflow-hidden select-none pointer-events-none">
        <div className="marquee-always-track items-center">
          {/* First Set */}
          <div className="flex items-center shrink-0">
            {marqueeRepeats.map((item) => (
              <div
                key={`mission-marquee-a-${item}`}
                className="flex items-center shrink-0"
              >
                <span className="font-sans font-extrabold text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                  Evangelize • Empower • Educate
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate Set */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {marqueeRepeats.map((item) => (
              <div
                key={`mission-marquee-b-${item}`}
                className="flex items-center shrink-0"
              >
                <span className="font-sans font-extrabold text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] whitespace-nowrap">
                  Evangelize • Empower • Educate
                </span>
                <span className="mx-6 sm:mx-10 md:mx-12 w-8 sm:w-12 md:w-16 h-[4px] sm:h-[6px] bg-white inline-block shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 3: Transforming Lives Through the Gospel */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-28 items-center">
        <div className="w-full flex flex-col justify-center items-start space-y-7 sm:space-y-8">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06]">
            Called to love
            <br />
            <span className="text-[#f36801]">Mogappair</span> &amp;
            <br />
            beyond.
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
            We exist to share the good news of Jesus through the truth of
            God&apos;s Word and the testimony of transformed lives — empowering
            believers to walk in their calling and educating the next
            generation in faith, integrity, and love.
          </p>

          <div className="pt-2">
            <Link
              href="/connect"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-white/80 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] active:scale-95 transition-all duration-200"
            >
              Explore Ministries
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-start lg:justify-end lg:mt-16">
          <div className="relative w-full max-w-[640px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-[#262828]">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src={aboutOurStoryWorshipImage || "/hero-worship.png"}
              alt="Worship and community life at Trinity Worship Center"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
