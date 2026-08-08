"use client";

import React from "react";

export default function WatchHero() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      <div className="max-w-4xl mx-auto text-center space-y-2 sm:space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#f36801]/10 text-[#9f4200] text-[11px] font-sans font-semibold uppercase tracking-wider">
          Watch &amp; Listen Online
        </span>
        <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#1b1c1c] tracking-tight">
          Sermons &amp; Live Streams
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#594236] max-w-xl mx-auto leading-relaxed">
          Watch our latest Sunday messages, browse past sermon series, or join our live stream every Sunday at 8:00 AM &amp; 10:30 AM.
        </p>
      </div>
    </section>
  );
}



