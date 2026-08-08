"use client";

import React from "react";
import Link from "next/link";

export default function MeetOurPastors() {
  return (
    <section className="py-32 bg-[#faf9f8] px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYXNd2WFGNGK6U4Jo8z0e0IFegevRqVDN_aXiraGJYyYAAxxYMh5_gEuJ3juohSI5OMoox235LDGdxlQ7RnpNmEgEAJQYnOTxlOGFO_ecukmbIz-ZL6T7nZBoIdrgJKL9Rh6gPKcgZwEQXJ2DURYykzJ3Y-QFYdlz5RNlP7EXpyzQXdL9Bo29gHRNdzRxivm5F0oVWOmOqRHuv935vHy4lhERCXHWCnhwT33rM8T3RCJOIB8alXOXj"
            alt="Praveen & Pratima David, founding pastors of Trinity Worship Center"
            className="w-full h-auto aspect-[4/5] md:aspect-square object-cover rounded-[2rem] shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-xs font-bold text-[#f36801] uppercase tracking-[0.2em]">
            Our Leadership
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1a1918] tracking-tight">
            Praveen &amp; Pratima David
          </h3>
          <p className="text-xl text-[#4d4c4b] leading-relaxed">
            Pastors Praveen and Pratima David have been faithfully leading Trinity Worship Center since its humble beginnings in 2003. What started with five people in a rented hall has grown into a vibrant, multi-generational church family.
          </p>
          <div className="pt-2">
            <Link
              href="/about#leadership"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1a1918] font-semibold rounded-full hover:bg-[#f0eeec] transition-colors duration-300 border border-[#e0dedc] shadow-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

