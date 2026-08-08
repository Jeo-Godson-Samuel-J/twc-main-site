"use client";

import React from "react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-[#f1f5f9] border-y border-slate-200" id="location">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 w-full">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Where to find us
            </h2>
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 bg-white p-3 rounded-full shadow-sm text-[#c2410c]">
                <span className="material-symbols-outlined text-2xl">
                  map
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xl mb-2">
                  Trinity Worship Center
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  20AB (2nd Floor), Kanishk Complex,
                  <br />
                  Paneer Nagar Main Rd, VGP Nagar,
                  <br />
                  Mogappair, Chennai
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a365d] font-semibold hover:text-[#c2410c] transition-colors group"
            >
              Open in Google Maps
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="lg:w-2/3 w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-inner relative">
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

