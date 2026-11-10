"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWebsiteImages } from "@/lib/sanity";

const rotatingWords = ["TWC", "Family", "Community", "Your Home", "Jesus"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const slotRef = useRef<HTMLSpanElement | null>(null);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const { homeHeroPoster } = useWebsiteImages();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!wordRef.current) {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        return;
      }

      // Animate current word out upward, then swap word and animate in from below
      gsap.to(wordRef.current, {
        y: -28,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!wordRef.current || !slotRef.current) return;

    const targetWidth = wordRef.current.offsetWidth;

    gsap.to(slotRef.current, {
      width: targetWidth,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.fromTo(
      wordRef.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
    );
  }, [wordIndex]);

  return (
    <section className="relative w-full min-h-[82vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0D0B0B] text-white">
      {/* Placeholder Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={homeHeroPoster || "/hero-worship.png"}
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-people-clapping-and-dancing-at-a-concert-43903-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          type="video/mp4"
        />
      </video>

      {/* Semi-Transparent Black Overlay (Video Remains Clearly Visible Underneath) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/50 z-[1]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0D0B0B]/85 via-black/25 to-black/40 z-[1]"
      />

      {/* Centered Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 text-center space-y-6">
        {/* Main Headline: Centered on screen with smooth width transition */}
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.08] text-white flex flex-col sm:flex-row items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1">
          <span className="shrink-0 whitespace-nowrap">Welcome to</span>
          <span
            ref={slotRef}
            className="relative inline-flex items-center justify-center overflow-hidden py-1"
          >
            <span
              ref={wordRef}
              className="text-[#f36801] whitespace-nowrap will-change-transform"
            >
              {rotatingWords[wordIndex]}
            </span>
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          We&apos;re a church family that prays for one another, learns from the
          Scriptures, worships Jesus, and lives life in community.
        </p>
      </div>
    </section>
  );
}
