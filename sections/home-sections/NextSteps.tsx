"use client";

import React from "react";
import Link from "next/link";

export default function NextSteps() {
  return (
    <section className="py-24 bg-[#faf9f8] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="space-y-8 relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#acc300]/20 text-[#586400] text-xs font-bold uppercase tracking-wider">
            Growth &amp; Connection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] tracking-tight">
            Next Steps
          </h2>
          <div className="w-20 h-1.5 bg-[#acc300] rounded-full" />
          <p className="text-lg text-[#4d4c4b] leading-relaxed">
            Whether you want to join a cell group, sign up for membership, volunteer to serve, or get baptized, we have clear pathways to help you take your next steps in faith.
          </p>
          <div>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f36801] text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-md text-base"
            >
              Connect With Us
            </Link>
          </div>
        </div>

        {/* Right Side: Image Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#acc300]/20 rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q"
            alt="Next Steps Fellowship"
            className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}

