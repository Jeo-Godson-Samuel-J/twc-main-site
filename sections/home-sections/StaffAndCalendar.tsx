"use client";

import React from "react";
import Link from "next/link";

export default function StaffAndCalendar() {
  return (
    <section className="py-24 bg-[#faf9f8] text-[#1a1918] px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fce1cc] text-[#4a1e00] text-xs font-bold uppercase tracking-wider">
            Life at TWC
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1918]">
            Leadership &amp; Events
          </h2>
          <p className="text-lg text-[#4d4c4b]">
            Get to know our leadership team and stay up to date with church gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Staff & Leaders */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e0dedc] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] bg-zinc-100 overflow-hidden">
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIV8jnX0zFx9zfWYAERPu713uTUidG89OYkUJ3Y10VPXXWvZKS_U_B1oW_oFSbr1mUMbQJJfrY_kadraZc_01ZT0yC3JxlK_Znrxx_ZmQoNFC6_arRzfjL3GS-e47jlpatcWIada_ejiIFmfIq4IyINd65HHhQSLDnlhdqC2vATvJJXyhFflu-Uvke62abrPlWQOEb1Oj8uPexxNNnfcCLR4oCZj856L08fau95CsTebfMS2NlLdch"
                  alt="Staff & Leaders - Trinity Worship Center"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="inline-block px-3 py-1 bg-[#f36801] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Leadership
                </span>
                <h3 className="text-3xl font-bold text-[#1a1918]">
                  Staff &amp; Leaders
                </h3>
                <p className="text-base text-[#4d4c4b] leading-relaxed">
                  Meet our founding pastors Praveen &amp; Pratima David and our ministry team dedicated to serving our church family and city.
                </p>
              </div>
            </div>
            <div className="px-8 pb-8">
              <Link
                href="/about#leadership"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#f36801] text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-sm text-sm"
              >
                Meet Our Leadership
              </Link>
            </div>
          </div>

          {/* Card 2: Calendar */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e0dedc] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] bg-zinc-100 overflow-hidden">
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAA__Xbd9p_VzhFAFDjqhUC5uoeYiJGQ1KNNlTRItz8QObmyNpzacCH-tZDvofPT3Xsfqrh1zpgzk4A_pKrrpLZPDmJ10PDOm6ncshH8Haj_-utF-f2KKd2EU-2-aaCWws8WojY9hQ9JbWsRejaHyuJutpMQxgzQeVB0Ta17RdKLbXv0ghnKqsen3rUgpAjZGDqbyn7JpJeMHzaAqzJ1rducQmTn-eEA5ATDQnChX7_9a5KSu1wmV"
                  alt="Calendar & Service Schedule"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="inline-block px-3 py-1 bg-[#acc300]/20 text-[#586400] text-xs font-bold rounded-full uppercase tracking-wider">
                  Events
                </span>
                <h3 className="text-3xl font-bold text-[#1a1918]">
                  Calendar
                </h3>
                <p className="text-base text-[#4d4c4b] leading-relaxed">
                  Join our weekly Sunday services at 8:00 AM (Tamil) &amp; 10:30 AM (English), Spark Kids, Cell Groups, and special gatherings.
                </p>
              </div>
            </div>
            <div className="px-8 pb-8">
              <Link
                href="/visit#schedule"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1918] text-white font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-sm text-sm"
              >
                View Service Times
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

