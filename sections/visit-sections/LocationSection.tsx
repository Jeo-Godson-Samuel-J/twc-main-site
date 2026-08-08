"use client";

import React from "react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-[#fbf9f8] border-b border-[#e1c0b1]/40" id="location">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 w-full space-y-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#9f4200]">
              Find Us Easily
            </span>
            <h2 className="font-serif font-medium text-4xl text-[#1b1c1c]">
              Location &amp; Map
            </h2>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white p-3 rounded-full border border-[#e1c0b1]/50 text-[#f36801] shadow-sm shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  map
                </span>
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#1b1c1c] text-xl mb-1">
                  Trinity Worship Center
                </h4>
                <p className="font-sans text-[#594236] leading-relaxed text-sm">
                  20AB (2nd Floor), Kanishk Complex,
                  <br />
                  Paneer Nagar Main Rd, Mogappair,
                  <br />
                  Chennai, Tamil Nadu 600037
                </p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f36801] font-sans font-semibold hover:text-[#9f4200] transition-colors group text-sm"
              >
                Open in Google Maps
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 w-full h-[380px] bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 relative">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDttrBcVbbQCjUNBQfh-MhNWakaoMIGq-0Oj5hhxNXLbGdqHenOUyMDBf3VChFBgJmcKRG2CCz4jdRGwCWlyP97rEr3LLDXvIthAp5WkusiM6HVu1MWdnD66gWnOBhbhCNLU7Mb6HjqBIvuc40pigPTonlXLucJPNgE5WEJnnOLyX5LqWltafHrY0-BK6FPvc14t1ztEI1eX6tVGGmG3F9ly2PtNxFJKiqX9rJiBRv3RHjqwdRhgS-i"
              alt="Map location for Trinity Worship Center Mogappair Chennai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


