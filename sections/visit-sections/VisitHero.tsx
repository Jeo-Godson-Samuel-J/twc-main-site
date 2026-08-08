"use client";

import React from "react";
import Link from "next/link";

export default function VisitHero() {
  return (
    <section className="relative pt-20 pb-28 overflow-hidden bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmAA__Xbd9p_VzhFAFDjqhUC5uoeYiJGQ1KNNlTRItz8QObmyNpzacCH-tZDvofPT3Xsfqrh1zpgzk4A_pKrrpLZPDmJ10PDOm6ncshH8Haj_-utF-f2KKd2EU-2-aaCWws8WojY9hQ9JbWsRejaHyuJutpMQxgzQeVB0Ta17RdKLbXv0ghnKqsen3rUgpAjZGDqbyn7JpJeMHzaAqzJ1rducQmTn-eEA5ATDQnChX7_9a5KSu1wmV')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f8] via-transparent to-[#fbf9f8]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#f36801]/10 text-[#9f4200] font-sans font-semibold text-xs mb-6 uppercase tracking-wider">
          Sunday Worship in Mogappair, Chennai
        </span>
        <h1 className="font-serif font-medium text-5xl md:text-7xl text-[#1b1c1c] tracking-tight mb-6">
          We&apos;ve saved you a seat.
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#594236] max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re exploring faith for the first time or searching for a spirit-filled church family to call home, you belong here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#plan-visit"
            className="px-8 py-3.5 bg-[#f36801] text-white rounded-full font-sans font-semibold hover:bg-[#9f4200] active:scale-95 transition-all shadow-sm"
          >
            Plan Your Visit
          </Link>
          <a
            href="#location"
            className="px-8 py-3.5 bg-white text-[#1b1c1c] border border-[#e1c0b1]/60 rounded-full font-sans font-semibold hover:bg-[#f5f3f3] active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl text-[#f36801]">
              location_on
            </span>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}


