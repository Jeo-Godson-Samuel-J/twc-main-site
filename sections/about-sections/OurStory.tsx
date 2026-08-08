"use client";

import React from "react";

export default function OurStory() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="inline-block px-3.5 py-1 bg-[#f36801]/10 text-[#9f4200] rounded-full font-sans font-semibold text-xs tracking-wider uppercase">
            Our Journey &amp; Legacy
          </span>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#1b1c1c] tracking-tight leading-tight">
            Our Story So Far…
          </h2>
          <div className="w-16 h-1 bg-[#f36801] rounded-full" />
          <p className="font-sans text-lg text-[#594236] leading-relaxed">
            Trinity Worship Center began as a deep conviction before it was a church building — a vision God placed in the hearts of Pastors Praveen and Pratima David on April 13, 2003. What started with five people in a small rented space in Mogappair has flourished into a thriving spiritual home.
          </p>
          <p className="font-sans text-lg text-[#594236] leading-relaxed">
            Over two decades later, Trinity remains a multi-generational family of families committed to evangelism, spiritual empowerment, and active community outreach across Chennai.
          </p>
        </div>

        <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 bg-white">
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


