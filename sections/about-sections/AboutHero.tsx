"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden bg-[#f5f3f3] px-6 py-24">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-30"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLL-dTxrGigHFkhZuidw7WQ2yFWTuH8pqqw7UEwC2a6Mbc8jL6ibYXu4RjIyBNadvBE4Nvmystj6AE9GBgjiqwtUrV8Qz838_2KATdlwsWWW0JRBjmKu_RaH8bagC6JAXPaTON6hoE2KbzVvn6jiOoGtNU5qQUcfL1YAiA-S9QURitP9cPWVxSl1mjiCTixDF6hsRl9KK4S9nWfo9JQV6t4xTLwZ3HH0UdBF7QJdpQhc-b3Mgo8HY9')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3f3] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#9f4200] font-bold tracking-tight leading-tight">
          Five people. One rented hall.
        </h1>
        <h2 className="text-xl sm:text-2xl text-[#4d4c4b] max-w-2xl mx-auto font-medium">
          That&apos;s where Trinity Worship Center began, on the 13th of April, 2003.
        </h2>
      </div>
    </section>
  );
}

