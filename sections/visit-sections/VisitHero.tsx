"use client";

import React from "react";
import Link from "next/link";

export default function VisitHero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[#f1f5f9]">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-20"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmAA__Xbd9p_VzhFAFDjqhUC5uoeYiJGQ1KNNlTRItz8QObmyNpzacCH-tZDvofPT3Xsfqrh1zpgzk4A_pKrrpLZPDmJ10PDOm6ncshH8Haj_-utF-f2KKd2EU-2-aaCWws8WojY9hQ9JbWsRejaHyuJutpMQxgzQeVB0Ta17RdKLbXv0ghnKqsen3rUgpAjZGDqbyn7JpJeMHzaAqzJ1rducQmTn-eEA5ATDQnChX7_9a5KSu1wmV')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f1f5f9] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1a365d] font-semibold text-sm mb-6 tracking-wide uppercase">
          Join Us This Sunday
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a365d] tracking-tight mb-8">
          We&apos;ve saved you a seat.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re exploring faith for the first time or looking for a place to call home, you belong here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#plan-visit"
            className="px-8 py-4 bg-[#1a365d] text-white rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Plan Your Visit
          </Link>
          <a
            href="#location"
            className="px-8 py-4 bg-white text-[#1a365d] border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">location_on</span>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

