"use client";

import React from "react";

export default function OurStory() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-[#fce1cc] text-[#4a1e00] rounded-full font-semibold text-xs tracking-wider uppercase">
            History
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918]">
            Our Story So Far…
          </h2>
          <p className="text-lg text-[#4d4c4b] leading-relaxed">
            Trinity Worship Center began as a conviction before it was a church — a vision God placed in the hearts of Praveen and Pratima David. What started as a small gathering in a humble rented space has grown through faith and community.
          </p>
          <p className="text-lg text-[#4d4c4b] leading-relaxed">
            More than twenty years on, Trinity is a family of families, committed to spreading love, building community, and maintaining the core values established on that very first day.
          </p>
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPdxTRB2UdtDbAs5WwjBT7wkJuWeJ149Rt4bdbUXgiXY9MdHQBtomHgrUP6M3UfwaFp2X7eq-UNGih9EveBezXbZgePwmDmg6kt1oKiJE9Y0rT-J9CjpnyDwcWJryCGoTgIW_UdR3jPrn5gclyVijz2D4Lpgi0Q4S3ckbqK0QIQIxLeCo0ixqzknMIJw_QHyv73DVb6bTcB7MdHq4XWkKHe3PlnV5zhdfMDq7aQiNLWHKLM44PkVza"
            alt="Trinity Worship Center congregation gathering"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

