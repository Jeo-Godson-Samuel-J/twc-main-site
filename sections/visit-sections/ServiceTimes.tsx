"use client";

import React from "react";

export default function ServiceTimes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Timings Card */}
          <div className="md:col-span-8 bg-[#f1f5f9] rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-[#1a365d]">
                schedule
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-8 relative z-10">
              Sunday Service Timings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-[#c2410c] font-bold text-2xl mb-1">
                  8:00 AM
                </div>
                <div className="text-slate-500 font-medium text-sm uppercase tracking-wider mb-2">
                  Morning Service
                </div>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium text-sm">
                  Tamil
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-[#c2410c] font-bold text-2xl mb-1">
                  10:30 AM
                </div>
                <div className="text-slate-500 font-medium text-sm uppercase tracking-wider mb-2">
                  Mid-Morning Service
                </div>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium text-sm">
                  English
                </div>
              </div>
            </div>
          </div>

          {/* Kids Card */}
          <div className="md:col-span-4 bg-[#1a365d] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden hover:shadow-lg transition-shadow">
            <div className="absolute -bottom-10 -right-10 opacity-20">
              <span
                className="material-symbols-outlined text-9xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Spark Kids</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Our dedicated children&apos;s program runs alongside both Sunday services.
              </p>
              <span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-[#fed7aa]">
                Safe &amp; Fun Environment{" "}
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

