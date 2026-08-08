"use client";

import React from "react";
import Link from "next/link";

export default function SundayLocationCTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#f36801] text-white px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="text-xs font-sans font-semibold uppercase tracking-widest text-white/80">
          Join Us In Person
        </span>
        <h2 className="font-serif font-medium text-4xl md:text-5xl text-white tracking-tight">
          We Worship Every Sunday in Mogappair
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-base font-sans">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">location_on</span>
            <span className="text-left leading-relaxed">
              20AB (2nd Floor), Kanishk Complex,
              <br />
              Paneer Nagar Main Rd, Mogappair,
              <br />
              Chennai, Tamil Nadu 600037
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">schedule</span>
            <span className="text-left leading-relaxed font-semibold">
              8:00 AM (Tamil Service)
              <br />
              10:30 AM (English Service)
            </span>
          </div>
        </div>
        <div className="pt-4">
          <Link
            href="/visit#plan-visit"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-white text-[#f36801] text-base font-sans font-semibold rounded-full hover:bg-[#fbf9f8] active:scale-95 transition-all shadow-md"
          >
            Plan Your Visit Now
          </Link>
        </div>
      </div>
    </section>
  );
}


