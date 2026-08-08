"use client";

import React from "react";

const sermons = [
  {
    title: "Finding Peace in the Chaos",
    description:
      "In this week's message, we explore how to maintain spiritual equilibrium when the world around us feels unpredictable. Discover practical steps rooted in ancient wisdom to anchor your daily life.",
    featured: true,
    speaker: "Pastor Praveen David",
    date: "Latest Service",
  },
  {
    title: "The Foundation of Hope: Building on Solid Ground",
    description:
      "Understanding what it means to build your life and family on an unshakeable spiritual foundation.",
    featured: false,
    speaker: "Pastor Praveen David",
    date: "2 weeks ago",
  },
  {
    title: "Community in Practice",
    description:
      "Living out authentic Christian community beyond Sunday morning gatherings.",
    featured: false,
    speaker: "Pastor Pratima David",
    date: "3 weeks ago",
  },
  {
    title: "Grace Under Pressure",
    description:
      "How God's grace empowers us during seasons of trial and difficulty.",
    featured: false,
    speaker: "Pastor Praveen David",
    date: "1 month ago",
  },
  {
    title: "Worship Night: A Special Service",
    description:
      "Creating an environment of Bright Hospitality and Invigorated Peace for our community.",
    featured: false,
    speaker: "TWC Worship Team",
    date: "Special Event",
  },
];

export default function SermonGrid() {
  const featuredSermon = sermons.find((s) => s.featured);
  const otherSermons = sermons.filter((s) => !s.featured);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Featured Sermon */}
        {featuredSermon && (
          <div className="bg-[#faf9f8] rounded-3xl border border-[#e0dedc] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#f36801] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Featured Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1918]">
                {featuredSermon.title}
              </h2>
              <p className="text-base text-[#4d4c4b] leading-relaxed">
                {featuredSermon.description}
              </p>
              <div className="pt-2 flex items-center gap-4 text-sm text-[#4d4c4b] font-medium">
                <span>{featuredSermon.speaker}</span>
                <span>•</span>
                <span>{featuredSermon.date}</span>
              </div>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f36801] text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">
                  play_circle
                </span>
                Watch Now
              </a>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/5 border border-[#e0dedc] flex items-center justify-center group cursor-pointer">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Y37DWLBcwjrr1DKkyvzrWQnp4Bp_PHYmo_u5msK5WemwJYZsZNWfI6YCK84j1WEZOmp-qNpQ4eQ-pcQ2IOAkUhR9V-9ABO6d4q9rkxpWRb589IK2a5Xyg69SeFgyGUg06Zn7bv1fivgPXJy0FhYi8e6bIj6XaMlF9oLx36o0POOM0PXpLCdzm9OKBwNvjeFV9Bj_RKqxqUZJ31ScP9Fk09X8xLa9et__j1JpH3KKv7QDM7P91_H9"
                alt={featuredSermon.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-6xl drop-shadow-md">
                  play_circle
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Previous Messages */}
        <div>
          <h3 className="text-2xl font-bold text-[#1a1918] mb-6">
            Previous Messages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSermons.map((sermon) => (
              <div
                key={sermon.title}
                className="bg-[#faf9f8] border border-[#e0dedc] rounded-2xl p-6 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-[#1a1918] mb-2 leading-snug">
                    {sermon.title}
                  </h4>
                  <p className="text-sm text-[#4d4c4b] leading-relaxed mb-4">
                    {sermon.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e0dedc] flex items-center justify-between">
                  <span className="text-xs text-[#4d4c4b] font-medium">
                    {sermon.speaker}
                  </span>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f36801] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Watch <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

