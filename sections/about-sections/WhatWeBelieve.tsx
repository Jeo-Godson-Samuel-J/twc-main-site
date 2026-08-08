"use client";

import React from "react";

export default function WhatWeBelieve() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#9f4200]">
            Statement of Faith
          </span>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#1b1c1c]">
            What We Believe
          </h2>
          <p className="font-sans text-lg text-[#594236]">
            The foundational truths of the Gospel that guide our worship, preaching, and ministry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Jesus */}
          <div className="bg-white border border-[#e1c0b1]/50 rounded-2xl p-6 shadow-sm hover-lift">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              church
            </span>
            <h4 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Jesus Christ</h4>
            <p className="font-sans text-sm text-[#594236] leading-relaxed">
              The Son of God, center of our faith, our savior, and our ultimate example of divine love.
            </p>
          </div>

          {/* Salvation */}
          <div className="bg-white border border-[#e1c0b1]/50 rounded-2xl p-6 shadow-sm hover-lift">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              favorite
            </span>
            <h4 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Salvation</h4>
            <p className="font-sans text-sm text-[#594236] leading-relaxed">
              A free gift of God&apos;s grace received through faith, bringing forgiveness and new life.
            </p>
          </div>

          {/* The Holy Spirit */}
          <div className="bg-white border border-[#e1c0b1]/50 rounded-2xl p-6 shadow-sm hover-lift">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              air
            </span>
            <h4 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Holy Spirit</h4>
            <p className="font-sans text-sm text-[#594236] leading-relaxed">
              Our comforter, guide, and source of spiritual gifts and power for daily living.
            </p>
          </div>

          {/* Wholeness & Healing */}
          <div className="bg-white border border-[#e1c0b1]/50 rounded-2xl p-6 shadow-sm hover-lift">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              health_and_safety
            </span>
            <h4 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Wholeness</h4>
            <p className="font-sans text-sm text-[#594236] leading-relaxed">
              God&apos;s desire for complete healing, restoration, and freedom in spirit, mind, and body.
            </p>
          </div>

          {/* The Church */}
          <div className="bg-white border border-[#e1c0b1]/50 rounded-2xl p-6 shadow-sm hover-lift lg:col-span-2">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              groups
            </span>
            <h4 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">The Local &amp; Global Church</h4>
            <p className="font-sans text-sm text-[#594236] leading-relaxed">
              The living body of Christ called together to worship, encourage one another, and bring hope and salvation to Chennai and the nations.
            </p>
          </div>

          {/* Eternity */}
          <div className="bg-white border border-[#e1c0b1]/50 rounded-2xl p-6 shadow-sm hover-lift">
            <span className="material-symbols-outlined text-[#f36801] text-3xl mb-4">
              all_inclusive
            </span>
            <h4 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Eternity</h4>
            <p className="font-sans text-sm text-[#594236] leading-relaxed">
              The assurance of eternal life with God and hope beyond our earthly reality.
            </p>
          </div>

          {/* His Return */}
          <div className="bg-[#f36801] text-white rounded-2xl p-6 shadow-sm hover-lift flex flex-col justify-center">
            <span className="material-symbols-outlined text-white text-3xl mb-4">
              light_mode
            </span>
            <h4 className="font-serif font-medium text-2xl text-white mb-2">
              His Return
            </h4>
            <p className="font-sans text-sm text-white/90 leading-relaxed">
              The blessed hope of Christ&apos;s return and the ultimate fulfillment of God&apos;s kingdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


