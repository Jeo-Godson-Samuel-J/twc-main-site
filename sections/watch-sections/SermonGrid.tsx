"use client";

import React, { useState } from "react";
import SermonCard from "@/components/SermonCard";

const sermons = [
  {
    title: "Walking in Unshakable Hope",
    description:
      "In this week's message, Pastor Praveen David explores how to maintain spiritual equilibrium when the world around us feels unpredictable. Discover practical steps rooted in God's promises to anchor your daily life.",
    featured: true,
    speaker: "Pastor Praveen David",
    date: "August 2026",
    duration: "42 min",
    series: "Unshakable Faith",
    watchUrl: "https://youtube.com",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Y37DWLBcwjrr1DKkyvzrWQnp4Bp_PHYmo_u5msK5WemwJYZsZNWfI6YCK84j1WEZOmp-qNpQ4eQ-pcQ2IOAkUhR9V-9ABO6d4q9rkxpWRb589IK2a5Xyg69SeFgyGUg06Zn7bv1fivgPXJy0FhYi8e6bIj6XaMlF9oLx36o0POOM0PXpLCdzm9OKBwNvjeFV9Bj_RKqxqUZJ31ScP9Fk09X8xLa9et__j1JpH3KKv7QDM7P91_H9",
  },
  {
    title: "The Foundation of Hope: Building on Solid Ground",
    description:
      "Understanding what it means to build your life, career, and family on an unshakeable spiritual foundation.",
    featured: false,
    speaker: "Pastor Praveen David",
    date: "July 2026",
    duration: "38 min",
    series: "Kingdom Builders",
    watchUrl: "https://youtube.com",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6",
  },
  {
    title: "Community in Practice: Living Out Authentic Love",
    description:
      "Living out authentic Christian community beyond Sunday morning gatherings through active care and fellowship.",
    featured: false,
    speaker: "Pastor Pratima David",
    date: "July 2026",
    duration: "45 min",
    series: "One Another",
    watchUrl: "https://youtube.com",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYXNd2WFGNGK6U4Jo8z0e0IFegevRqVDN_aXiraGJYyYAAxxYMh5_gEuJ3juohSI5OMoox235LDGdxlQ7RnpNmEgEAJQYnOTxlOGFO_ecukmbIz-ZL6T7nZBoIdrgJKL9Rh6gPKcgZwEQXJ2DURYykzJ3Y-QFYdlz5RNlP7EXpyzQXdL9Bo29gHRNdzRxivm5F0oVWOmOqRHuv935vHy4lhERCXHWCnhwT33rM8T3RCJOIB8alXOXj",
  },
  {
    title: "Grace Under Pressure: Overcoming Difficult Seasons",
    description:
      "How God's grace empowers us during seasons of trial, stress, and transition.",
    featured: false,
    speaker: "Pastor Praveen David",
    date: "June 2026",
    duration: "40 min",
    series: "Psalms of Grace",
    watchUrl: "https://youtube.com",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL",
  },
];

export default function SermonGrid() {
  const [activeSeries, setActiveSeries] = useState("All");
  const featuredSermon = sermons.find((s) => s.featured);
  const otherSermons = sermons.filter((s) => !s.featured);

  return (
    <section className="pt-6 sm:pt-8 pb-16 px-4 sm:px-6 md:px-8 bg-[#fbf9f8]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Featured Sermon */}
        {featuredSermon && (
          <SermonCard
            title={featuredSermon.title}
            speaker={featuredSermon.speaker}
            date={featuredSermon.date}
            duration={featuredSermon.duration}
            series={featuredSermon.series}
            watchUrl={featuredSermon.watchUrl}
            thumbnail={featuredSermon.thumbnail}
            featured
          />
        )}


        {/* Sermon Library Header & Series Filter */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-serif font-medium text-3xl text-[#1b1c1c]">
              Recent Message Library
            </h3>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {["All", "Unshakable Faith", "Kingdom Builders", "Psalms of Grace"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSeries(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all ${
                    activeSeries === cat
                      ? "bg-[#f36801] text-white"
                      : "bg-white text-[#594236] border border-[#e1c0b1]/50 hover:bg-[#f5f3f3]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSermons
              .filter((s) => activeSeries === "All" || s.series === activeSeries)
              .map((sermon) => (
                <SermonCard
                  key={sermon.title}
                  title={sermon.title}
                  speaker={sermon.speaker}
                  date={sermon.date}
                  duration={sermon.duration}
                  series={sermon.series}
                  watchUrl={sermon.watchUrl}
                  thumbnail={sermon.thumbnail}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}


