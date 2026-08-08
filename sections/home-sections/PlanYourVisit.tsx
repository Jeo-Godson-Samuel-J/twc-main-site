"use client";

import React from "react";
import Link from "next/link";

export default function PlanYourVisit() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#fbf9f8] px-4 sm:px-6 md:px-8 border-b border-[#e1c0b1]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-sans font-semibold text-[#9f4200] uppercase tracking-widest block">
            8:00 AM TAMIL • 10:30 AM ENGLISH
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#1b1c1c]">
            Your First Sunday
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#594236] max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to meet you... Come as you are: you&apos;ll find people in everything from traditional sarees to casual jeans.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[190px] sm:auto-rows-[210px] md:auto-rows-[220px]">
          {/* Main Photo Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-md transition-all duration-300 border border-[#e1c0b1]/50 bg-white min-h-[360px] md:min-h-[440px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/90 via-[#1b1c1c]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white z-10 max-w-lg">
              <h3 className="font-serif font-medium text-2xl sm:text-3xl mb-1.5 text-white">Join us this weekend</h3>
              <p className="font-sans text-white/85 text-xs sm:text-sm mb-5 leading-relaxed">
                Experience uplifting worship, an encouraging biblical message, and a warm community ready to welcome you.
              </p>
              <Link
                href="/visit#plan-visit"
                className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 bg-[#f36801] text-white font-sans font-semibold text-xs sm:text-sm rounded-full hover:bg-[#9f4200] active:scale-95 transition-all shadow-sm"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          {/* Spark Kids Card */}
          <div className="rounded-2xl bg-white p-6 border border-[#e1c0b1]/50 shadow-sm flex flex-col justify-between group hover-lift">
            <div className="w-10 h-10 bg-[#f36801]/10 rounded-xl flex items-center justify-center text-[#f36801]">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
            </div>
            <div>
              <h3 className="font-serif font-medium text-xl text-[#1b1c1c] mb-1">
                Spark Kids
              </h3>
              <p className="font-sans text-[#594236] text-xs sm:text-sm leading-relaxed">
                Your kids are welcome too! Spark Kids runs alongside both services with fun, age-appropriate teaching.
              </p>
            </div>
          </div>

          {/* Timings Card */}
          <div className="rounded-2xl bg-[#1b1c1c] text-white p-6 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-28 h-28 bg-[#f36801]/20 rounded-full blur-2xl" />
            <h3 className="font-serif font-medium text-xl mb-3 relative z-10 text-white">
              Service Times
            </h3>
            <ul className="space-y-3 relative z-10 font-sans">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#f36801] text-lg">
                  schedule
                </span>
                <div>
                  <p className="font-semibold text-sm text-white">8:00 AM</p>
                  <p className="text-[11px] text-[#cfc4c5] uppercase tracking-wider">
                    Tamil Service
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#f36801] text-lg">
                  schedule
                </span>
                <div>
                  <p className="font-semibold text-sm text-white">10:30 AM</p>
                  <p className="text-[11px] text-[#cfc4c5] uppercase tracking-wider">
                    English Service
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}




