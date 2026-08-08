"use client";

import React from "react";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-24 bg-[#faf9f8] px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#acc300]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="order-2 lg:order-1 space-y-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] tracking-tight">
            Welcome to TWC!
          </h2>
          <div className="w-20 h-1.5 bg-[#acc300] rounded-full" />
          <p className="text-lg text-[#4d4c4b] leading-relaxed">
            Wherever you&apos;re coming from, there&apos;s room for you here... We&apos;re a family. We pray together, we grow together, and we have room for more.
          </p>
          <p className="text-lg text-[#4d4c4b] leading-relaxed">
            Our community is diverse, passionate, and deeply committed to seeing lives transformed by the love of Jesus.
          </p>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center text-[#f36801] font-semibold text-lg group"
            >
              About TWC
              <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column (Image with Offset Accent) */}
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-[#f36801]/20 rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6"
            alt="Trinity Worship Center community gathering in lobby"
            className="w-full h-auto aspect-square md:aspect-[4/3] object-cover rounded-3xl shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}

