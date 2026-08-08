"use client";

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-24 bg-[#1a1918] text-white px-6 text-center relative overflow-hidden">
      <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#acc300]/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#f36801]/20 text-[#f36801] text-xs font-bold uppercase tracking-wider">
          Who We Are
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          A Statement About Us
        </h2>
        <div className="w-20 h-1.5 bg-[#acc300] mx-auto rounded-full" />
        <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto font-light">
          Wherever you&apos;re coming from, there&apos;s room for you here... We&apos;re a family. We pray together, we grow together, and we have room for more. Our community is diverse, passionate, and deeply committed to seeing lives transformed by the love of Jesus.
        </p>
        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1a1918] font-semibold rounded-full hover:bg-[#acc300] hover:text-[#1a1918] transition-all duration-200 shadow-md text-base"
          >
            About TWC
          </Link>
        </div>
      </div>
    </section>
  );
}


