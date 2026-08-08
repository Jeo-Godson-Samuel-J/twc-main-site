"use client";

import React from "react";

export default function WhatWeBelieve() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-4">
            What We Believe
          </h2>
          <p className="text-lg text-[#4d4c4b] max-w-2xl mx-auto">
            The core foundations of our faith that guide our teaching and our lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Jesus */}
          <div className="bg-[#ffffff] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              crossword
            </span>
            <h4 className="text-xl font-bold text-[#1a1918] mb-2">Jesus</h4>
            <p className="text-sm text-[#4d4c4b] leading-relaxed">
              The center of our faith, our savior, and the ultimate example of love.
            </p>
          </div>

          {/* Salvation */}
          <div className="bg-[#ffffff] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              favorite
            </span>
            <h4 className="text-xl font-bold text-[#1a1918] mb-2">Salvation</h4>
            <p className="text-sm text-[#4d4c4b] leading-relaxed">
              A free gift of grace, bringing redemption and new life to all who believe.
            </p>
          </div>

          {/* The Spirit */}
          <div className="bg-[#ffffff] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              air
            </span>
            <h4 className="text-xl font-bold text-[#1a1918] mb-2">The Spirit</h4>
            <p className="text-sm text-[#4d4c4b] leading-relaxed">
              Our guide, comforter, and the source of power for daily living.
            </p>
          </div>

          {/* Wholeness */}
          <div className="bg-[#ffffff] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              health_and_safety
            </span>
            <h4 className="text-xl font-bold text-[#1a1918] mb-2">Wholeness</h4>
            <p className="text-sm text-[#4d4c4b] leading-relaxed">
              God&apos;s desire for healing and restoration in spirit, mind, and body.
            </p>
          </div>

          {/* The Church */}
          <div className="bg-[#ffffff] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-shadow lg:col-span-2">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              groups
            </span>
            <h4 className="text-xl font-bold text-[#1a1918] mb-2">The Church</h4>
            <p className="text-sm text-[#4d4c4b] leading-relaxed">
              The global community of believers, called to serve, love, and bring hope to the world together.
            </p>
          </div>

          {/* Eternity */}
          <div className="bg-[#ffffff] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              all_inclusive
            </span>
            <h4 className="text-xl font-bold text-[#1a1918] mb-2">Eternity</h4>
            <p className="text-sm text-[#4d4c4b] leading-relaxed">
              The promise of everlasting life and hope beyond our current reality.
            </p>
          </div>

          {/* His Return */}
          <div className="bg-[#fce1cc] rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-center">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              light_mode
            </span>
            <h4 className="text-xl font-bold text-[#4a1e00] mb-2">
              His Return
            </h4>
            <p className="text-sm text-[#4a1e00]/90 leading-relaxed">
              Our blessed hope and the ultimate fulfillment of God&apos;s redemptive plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

