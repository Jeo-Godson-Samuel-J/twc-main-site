"use client";

import React from "react";

export default function ServiceTimes() {
  return (
    <section className="py-20 bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Timings Card */}
          <div className="md:col-span-8 bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden group border border-[#e1c0b1]/50 shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-[#f36801]">
                schedule
              </span>
            </div>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1b1c1c] mb-8 relative z-10">
              Sunday Worship Schedule
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="bg-[#f5f3f3] rounded-xl p-6 border border-[#e1c0b1]/40">
                <div className="text-[#f36801] font-serif font-bold text-3xl mb-1">
                  8:00 AM
                </div>
                <div className="text-[#594236] font-sans font-medium text-xs uppercase tracking-wider mb-3">
                  First Morning Worship
                </div>
                <div className="inline-block px-3 py-1 bg-white text-[#1b1c1c] rounded-full font-sans font-semibold text-xs border border-[#e1c0b1]/50">
                  Tamil Service
                </div>
              </div>
              <div className="bg-[#f5f3f3] rounded-xl p-6 border border-[#e1c0b1]/40">
                <div className="text-[#f36801] font-serif font-bold text-3xl mb-1">
                  10:30 AM
                </div>
                <div className="text-[#594236] font-sans font-medium text-xs uppercase tracking-wider mb-3">
                  Mid-Morning Worship
                </div>
                <div className="inline-block px-3 py-1 bg-white text-[#1b1c1c] rounded-full font-sans font-semibold text-xs border border-[#e1c0b1]/50">
                  English Service
                </div>
              </div>
            </div>
          </div>

          {/* Kids Card */}
          <div className="md:col-span-4 bg-[#1b1c1c] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-sm">
            <div className="absolute -bottom-10 -right-10 opacity-20">
              <span
                className="material-symbols-outlined text-9xl text-[#f36801]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="font-serif font-medium text-3xl mb-3 text-white">Spark Kids</h3>
              <p className="font-sans text-[#cfc4c5] text-base leading-relaxed mb-6">
                Our dedicated children&apos;s ministry runs alongside both Sunday services with age-appropriate worship and lessons.
              </p>
              <span className="inline-flex items-center text-xs font-sans font-semibold uppercase tracking-wider text-[#f36801]">
                Safe &amp; Joyful Environment{" "}
                <span className="material-symbols-outlined ml-2 text-base">
                  verified
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


