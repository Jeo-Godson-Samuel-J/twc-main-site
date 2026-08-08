"use client";

import React from "react";

export default function ConnectHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 overflow-hidden bg-[#faf9f8]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#fce1cc] text-[#4a1e00] text-sm font-semibold mb-6 tracking-wide uppercase">
          Community
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a1918] tracking-tight mb-8 leading-tight">
          A family of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36801] to-[#acc300]">families.</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#4d4c4b] leading-relaxed max-w-3xl mx-auto">
          Sunday morning is where we gather. The rest of the week is where we actually get to know each other. Here&apos;s where to start.
        </p>
      </div>
    </section>
  );
}

