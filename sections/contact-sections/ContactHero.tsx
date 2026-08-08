"use client";

import React from "react";

export default function ContactHero() {
  return (
    <section className="relative pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 overflow-hidden bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      {/* Background Image Overlay like AboutHero */}
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

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-2 sm:space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#f36801]/10 text-[#9f4200] text-[11px] font-sans font-semibold uppercase tracking-wider">
          Get In Touch
        </span>
        <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#1b1c1c] tracking-tight">
          Say <span className="text-[#f36801]">Hello.</span>
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#594236] max-w-xl mx-auto leading-relaxed">
          No question is too small. Send it over and someone will get back to you.
        </p>
      </div>
    </section>
  );
}

