"use client";

import React from "react";
import Link from "next/link";

export default function SundayLocationCTA() {
  return (
    <section className="py-24 bg-[#f36801] text-white px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Meet Every Sunday
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-lg">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">location_on</span>
            <span className="text-left leading-snug">
              20AB (2nd Floor), Kanishk Complex,
              <br />
              Paneer Nagar Main Rd, VGP Nagar,
              <br />
              Mogappair, Chennai
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">schedule</span>
            <span className="text-left leading-snug">
              8:00 AM (Tamil)
              <br />
              10:30 AM (English)
            </span>
          </div>
        </div>
        <div className="pt-4">
          <Link
            href="/visit#plan-visit"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#f36801] text-lg font-bold rounded-full hover:bg-[#faf9f8] transition-colors duration-300 shadow-lg"
          >
            Plan a Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

