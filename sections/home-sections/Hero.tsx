"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#faf9f8] text-[#1a1918] py-16 lg:py-24 px-6 overflow-hidden flex items-center border-b border-[#e0dedc]">
      {/* Ambient background blur lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#f36801]/10 rounded-full blur-3xl pointer-events-none anim-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#acc300]/15 rounded-full blur-3xl pointer-events-none anim-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#e0dedc] shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#acc300] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#acc300]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4d4c4b]">
              Welcome Home
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1a1918] leading-[1.02]">
              You&apos;re home.
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f36801] via-orange-500 to-[#acc300] leading-[1.02]">
              Welcome!
            </h1>
          </div>

          {/* Paragraph Copy */}
          <p className="text-xl md:text-2xl text-[#4d4c4b] max-w-xl font-normal leading-relaxed">
            We’re a community of people who love God and people. There’s always a place for you here.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/visit#plan-visit"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#f36801] text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base gap-3"
            >
              <span>Plan a Visit</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/watch"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1918] border border-[#e0dedc] font-semibold rounded-full hover:bg-[#f0eeec] transition-all duration-300 shadow-sm hover:shadow text-base gap-2"
            >
              <span>Watch Latest Message</span>
              <span
                className="material-symbols-outlined text-2xl text-[#f36801] group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
            </Link>
          </div>

          {/* Quick Info Chips */}
          <div className="pt-6 border-t border-[#e0dedc]/80 flex flex-wrap items-center gap-6 text-sm text-[#4d4c4b] font-medium">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f36801] text-xl">
                schedule
              </span>
              <span>8:00 AM (Tamil) &amp; 10:30 AM (English)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#acc300] text-xl">
                location_on
              </span>
              <span>Mogappair, Chennai</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Interactive Showcase */}
        <div className="lg:col-span-5 relative">
          {/* Main Hero Photo Container with subtle angle and hover lift */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group hover-lift transition-all duration-500">
            <div className="aspect-[4/5] sm:aspect-square relative overflow-hidden">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Y37DWLBcwjrr1DKkyvzrWQnp4Bp_PHYmo_u5msK5WemwJYZsZNWfI6YCK84j1WEZOmp-qNpQ4eQ-pcQ2IOAkUhR9V-9ABO6d4q9rkxpWRb589IK2a5Xyg69SeFgyGUg06Zn7bv1fivgPXJy0FhYi8e6bIj6XaMlF9oLx36o0POOM0PXpLCdzm9OKBwNvjeFV9Bj_RKqxqUZJ31ScP9Fk09X8xLa9et__j1JpH3KKv7QDM7P91_H9"
                alt="Trinity Worship Center Gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#acc300] font-bold">
                  Trinity Worship Center
                </p>
                <p className="text-lg font-bold">A Family of Families</p>
              </div>
            </div>
          </div>

          {/* Floating Glass Card 1 (Top Right) */}
          <div className="absolute -top-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#e0dedc] flex items-center gap-3.5 z-20 anim-float hidden sm:flex">
            <div className="w-10 h-10 rounded-xl bg-[#fce1cc] text-[#f36801] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-xl">church</span>
            </div>
            <div>
              <p className="text-xs text-[#4d4c4b] font-medium">Sunday Services</p>
              <p className="text-sm font-bold text-[#1a1918]">8:00 AM &amp; 10:30 AM</p>
            </div>
          </div>

          {/* Floating Glass Card 2 (Bottom Left) */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#e0dedc] flex items-center gap-3.5 z-20 anim-float-delayed hidden sm:flex">
            <div className="w-10 h-10 rounded-xl bg-[#acc300]/20 text-[#586400] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-xl">pin_drop</span>
            </div>
            <div>
              <p className="text-xs text-[#4d4c4b] font-medium">Location</p>
              <p className="text-sm font-bold text-[#1a1918]">Mogappair, Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
