"use client";

import React from "react";
import Link from "next/link";

export default function SundayLocationCTA() {
  return (
    <section className="w-full bg-[#fbf9f8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1360px] mx-auto rounded-3xl sm:rounded-[2.25rem] bg-[#f3efec] border border-[#e1c0b1]/40 px-8 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Multi-Line Heading + Outlined GET CONNECTED Pill Button */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8 sm:space-y-10">
            <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-[#231815] tracking-tight leading-[1.08]">
              Weekly emails,
              <br />
              Meet-Ups, House
              <br />
              Churches, next
              <br />
              steps, <span className="text-[#f36801]">and more.</span>
            </h2>

            <Link
              href="/connect"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-[#231815]/70 text-[#231815] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-[#f36801] hover:border-[#f36801] hover:text-white active:scale-95 transition-all duration-200"
            >
              Get Connected
            </Link>
          </div>

          {/* Right Column: Landscape Fellowship Photo */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] rounded-2xl overflow-hidden shadow-md bg-[#e8e2de]">
              {/* eslint-disable-next-html-element-suppression */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q"
                alt="Community fellowship and connection at Trinity Worship Center"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
