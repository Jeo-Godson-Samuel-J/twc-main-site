"use client";

import React from "react";
import Link from "next/link";

export default function MeetOurPastors() {
  return (
    <section className="py-20 lg:py-28 bg-[#fbf9f8] px-6 relative border-b border-[#e1c0b1]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYXNd2WFGNGK6U4Jo8z0e0IFegevRqVDN_aXiraGJYyYAAxxYMh5_gEuJ3juohSI5OMoox235LDGdxlQ7RnpNmEgEAJQYnOTxlOGFO_ecukmbIz-ZL6T7nZBoIdrgJKL9Rh6gPKcgZwEQXJ2DURYykzJ3Y-QFYdlz5RNlP7EXpyzQXdL9Bo29gHRNdzRxivm5F0oVWOmOqRHuv935vHy4lhERCXHWCnhwT33rM8T3RCJOIB8alXOXj"
            alt="Praveen & Pratima David, founding pastors of Trinity Worship Center"
            className="w-full h-auto aspect-[4/5] md:aspect-square object-cover rounded-2xl border border-[#e1c0b1]/50 shadow-sm bg-white"
          />
        </div>
        <div className="space-y-6">
          <span className="text-xs font-sans font-semibold text-[#9f4200] uppercase tracking-widest">
            Our Pastoral Leadership
          </span>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#1b1c1c] tracking-tight leading-tight">
            Praveen &amp; Pratima David
          </h2>
          <div className="w-16 h-1 bg-[#f36801] rounded-full" />
          <p className="font-sans text-lg text-[#594236] leading-relaxed">
            Pastors Praveen and Pratima David have been faithfully leading Trinity Worship Center since its humble beginnings. What started with five people in a rented hall in Mogappair has grown into a vibrant, multi-generational church family praising God in spirit and truth.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#f36801] text-white font-sans font-semibold rounded-full hover:bg-[#9f4200] active:scale-95 transition-all shadow-sm text-sm"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


