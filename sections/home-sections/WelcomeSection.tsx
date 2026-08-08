"use client";

import React from "react";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#fbf9f8] px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f36801]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="order-2 lg:order-1 space-y-6 relative">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#9f4200]">
            Our Church Family
          </span>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#1b1c1c] tracking-tight leading-tight">
            Welcome to Trinity Worship Center!
          </h2>
          <div className="w-16 h-1 bg-[#f36801] rounded-full" />
          <p className="font-sans text-lg text-[#594236] leading-relaxed">
            Wherever you&apos;re coming from, there&apos;s room for you here... We&apos;re a family. We pray together, we grow together, and we have room for more.
          </p>
          <p className="font-sans text-lg text-[#594236] leading-relaxed">
            Our community is diverse, passionate, and deeply committed to seeing lives transformed by the love of Jesus in Mogappair and beyond.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center text-[#f36801] font-sans font-semibold text-base group hover:text-[#9f4200] transition-colors"
            >
              Learn More About TWC
              <span className="material-symbols-outlined ml-1.5 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column (Image with Offset Accent) */}
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-[#f36801]/15 rounded-2xl translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6"
            alt="Trinity Worship Center community gathering in lobby"
            className="w-full h-auto aspect-square md:aspect-[4/3] object-cover rounded-2xl shadow-sm border border-[#e1c0b1]/50 bg-white"
          />
        </div>
      </div>
    </section>
  );
}


