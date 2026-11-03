"use client";

import React from "react";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="w-full bg-[#fbf9f8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1360px] mx-auto rounded-3xl sm:rounded-[2.25rem] bg-[#f3efec] border border-[#e1c0b1]/40 px-8 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Multi-Line Mission Statement + Outlined Pill Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-7 sm:space-y-9">
            <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9f4200]">
              Our Purpose &amp; Calling
            </p>

            <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-[#231815] tracking-tight leading-[1.08]">
              Evangelize,
              <br />
              Empower,
              <br />
              Educate, <span className="text-[#f36801]">and love.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#594236] leading-relaxed max-w-lg">
              Ready to experience Trinity Worship Center in person? Join us
              this Sunday at 8:00 AM (Tamil) or 10:30 AM (English) in
              Mogappair, Chennai.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#f36801] hover:bg-[#9f4200] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-sm active:scale-95 transition-all duration-200"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/connect"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-[#231815]/70 text-[#231815] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-[#231815] hover:text-white active:scale-95 transition-all duration-200"
              >
                Get Connected
              </Link>
            </div>
          </div>

          {/* Right Column: Landscape Church Community Photo */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] rounded-2xl overflow-hidden shadow-md bg-[#e8e2de]">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6"
                alt="Trinity Worship Center community welcoming visitors"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
