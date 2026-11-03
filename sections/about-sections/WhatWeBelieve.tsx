"use client";

import React from "react";

const beliefs = [
  {
    number: "01",
    title: "Jesus Christ",
    description:
      "The Son of God, center of our faith, our Savior, and our ultimate example of divine love and redemption.",
    icon: "church",
    span: "lg:col-span-4",
    dark: true,
  },
  {
    number: "02",
    title: "Salvation",
    description:
      "A free gift of God’s grace received through faith in Christ alone, bringing forgiveness, reconciliation, and new life.",
    icon: "favorite",
    span: "lg:col-span-4",
    dark: false,
  },
  {
    number: "03",
    title: "The Holy Spirit",
    description:
      "Our comforter, counselor, and source of spiritual gifts, boldness, and transforming power for daily Christian living.",
    icon: "air",
    span: "lg:col-span-4",
    dark: true,
  },
  {
    number: "04",
    title: "The Local & Global Church",
    description:
      "The living body of Christ called together to worship in spirit and truth, disciple believers, and bring hope and salvation to Chennai and the nations.",
    icon: "groups",
    span: "lg:col-span-6",
    dark: false,
  },
  {
    number: "05",
    title: "Wholeness & Healing",
    description:
      "God’s desire for complete healing, restoration, and freedom across spirit, mind, and body through prayer and faith.",
    icon: "health_and_safety",
    span: "lg:col-span-6",
    dark: true,
  },
  {
    number: "06",
    title: "Eternity",
    description:
      "The resurrection of the dead and the assurance of eternal life in God’s presence for all who trust in Christ.",
    icon: "all_inclusive",
    span: "lg:col-span-6",
    dark: false,
  },
  {
    number: "07",
    title: "His Glorious Return",
    description:
      "The blessed hope of Jesus Christ’s personal return and the ultimate fulfillment of God’s eternal kingdom.",
    icon: "light_mode",
    span: "lg:col-span-6",
    accent: true,
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="relative w-full bg-[#231815] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 w-[700px] h-[700px] bg-[#f36801]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 space-y-14 sm:space-y-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
              Statement of Faith
            </p>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.03em] leading-[1.06] text-white">
              What We <span className="text-[#f36801]">Believe</span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#fbf9f8]/80 max-w-md leading-relaxed">
            The foundational truths of Scripture that anchor our worship,
            preaching, and everyday life as followers of Jesus.
          </p>
        </div>

        {/* Beliefs Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {beliefs.map((item) => {
            const isAccent = Boolean(item.accent);
            const isDark = Boolean(item.dark);

            return (
              <div
                key={item.number}
                className={`${item.span} rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-8 transition-transform duration-300 hover:-translate-y-1 ${
                  isAccent
                    ? "bg-[#f36801] text-white shadow-xl"
                    : isDark
                    ? "bg-[#1b1c1c] text-white border border-white/10 shadow-xl"
                    : "bg-[#f3efec] text-[#231815] border border-[#e1c0b1]/40 shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isAccent
                        ? "bg-white/20 text-white"
                        : isDark
                        ? "bg-[#f36801]/15 text-[#f36801]"
                        : "bg-[#f36801]/12 text-[#f36801]"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>

                  <span
                    className={`font-sans font-extrabold text-xs uppercase tracking-[0.22em] ${
                      isAccent
                        ? "text-white/80"
                        : isDark
                        ? "text-white/40"
                        : "text-[#9f4200]/70"
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3
                    className={`font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-tight ${
                      isAccent || isDark ? "text-white" : "text-[#231815]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-sans text-sm sm:text-base leading-relaxed ${
                      isAccent
                        ? "text-white/90"
                        : isDark
                        ? "text-[#fbf9f8]/80"
                        : "text-[#594236]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
