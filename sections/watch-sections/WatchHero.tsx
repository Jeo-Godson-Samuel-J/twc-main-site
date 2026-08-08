"use client";

import React from "react";

export default function WatchHero() {
  return (
    <section className="py-20 px-6 bg-[#f5f4f2]">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#f36801]/10 text-[#f36801] text-xs font-bold uppercase tracking-wider">
          Recent Messages
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#1a1918]">
          Catch Our Latest Sermons
        </h1>
        <p className="text-lg md:text-xl text-[#4d4c4b] max-w-2xl mx-auto leading-relaxed">
          Every message we preach is here, and on our YouTube channel. Start with the most recent, or work back through the series.
        </p>
      </div>
    </section>
  );
}

