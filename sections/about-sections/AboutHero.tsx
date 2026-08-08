"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#fbf9f8] px-6 py-24 border-b border-[#e1c0b1]/40">
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

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#f36801]/10 text-[#9f4200] font-sans font-semibold text-xs uppercase tracking-widest">
          Established April 13, 2003
        </span>
        <h1 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl text-[#1b1c1c] tracking-tight leading-tight">
          Five people. One rented hall.
        </h1>
        <h2 className="font-serif text-xl sm:text-2xl text-[#9f4200] max-w-2xl mx-auto font-medium leading-relaxed">
          That&apos;s where Trinity Worship Center began in Mogappair, Chennai.
        </h2>
      </div>
    </section>
  );
}


