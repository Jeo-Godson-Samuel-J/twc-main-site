"use client";

import React from "react";

export default function GiveHero() {
  return (
    <section className="relative pt-4 sm:pt-5 pb-3 sm:pb-4 px-4 sm:px-6 overflow-hidden bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-15"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLL-dTxrGigHFkhZuidw7WQ2yFWTuH8pqqw7UEwC2a6Mbc8jL6ibYXu4RjIyBNadvBE4Nvmystj6AE9GBgjiqwtUrV8Qz838_2KATdlwsWWW0JRBjmKu_RaH8bagC6JAXPaTON6hoE2KbzVvn6jiOoGtNU5qQUcfL1YAiA-S9QURitP9cPWVxSl1mjiCTixDF6hsRl9KK4S9nWfo9JQV6t4xTLwZ3HH0UdBF7QJdpQhc-b3Mgo8HY9')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f8] via-transparent to-[#fbf9f8]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-1.5">
        <span className="inline-block px-3 py-0.5 rounded-full bg-[#f36801]/10 text-[#9f4200] font-sans font-semibold text-[10px] uppercase tracking-wider">
          Generosity &amp; Stewardship
        </span>
        <h1 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-[#1b1c1c] tracking-tight">
          Generosity Changes Everything.
        </h1>
        <p className="font-sans text-xs sm:text-sm text-[#594236] max-w-xl mx-auto leading-normal">
          Everything you give at TWC advances the gospel: Sunday gatherings, community outreach in Mogappair, children&apos;s programs, and church plants.
        </p>
      </div>
    </section>
  );
}




