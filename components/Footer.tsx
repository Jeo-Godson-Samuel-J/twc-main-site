"use client";

import React from "react";
import Link from "next/link";

const quickLinks = [
  { name: "About TWC", href: "/about" },
  { name: "Plan Your Visit", href: "/visit" },
  { name: "Watch Online", href: "/watch" },
  { name: "Ministries & Groups", href: "/connect" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#231815] text-[#fbf9f8] border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-[#f36801] text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-xl">
                  church
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-xl text-white tracking-tight leading-none group-hover:text-[#f36801] transition-colors">
                  Trinity Worship Center
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-[#f36801] mt-1">
                  Mogappair • Chennai
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-[#cfc4c5] leading-relaxed max-w-xs">
              A warm, spirit-filled church family in Mogappair dedicated to
              worship, Scripture, and sharing the love of Jesus.
            </p>

            <p className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#f36801]">
              Evangelize • Empower • Educate
            </p>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.18em] text-white">
              Explore
            </h4>
            <ul className="space-y-2 font-sans text-sm text-[#cfc4c5]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f36801] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location & Service Times (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.18em] text-white">
              Visit &amp; Times
            </h4>
            <div className="space-y-2.5 font-sans text-sm text-[#cfc4c5]">
              <p className="flex items-start gap-2 leading-relaxed">
                <span className="material-symbols-outlined text-base text-[#f36801] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  20AB (2nd Floor), Kanishk Complex, Paneer Nagar Main Rd,
                  Mogappair, Chennai 600037
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#f36801] shrink-0">
                  schedule
                </span>
                <span className="text-white font-medium">
                  Sundays: 8:00 AM (Tam) &amp; 10:30 AM (Eng)
                </span>
              </p>
            </div>
          </div>

          {/* Column 4: Compact Newsletter & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.18em] text-white">
              Stay Connected
            </h4>
            <p className="font-sans text-xs text-[#cfc4c5] leading-relaxed">
              Get weekly updates on services and church events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3.5 py-2 text-xs font-sans bg-white/[0.06] text-white border border-white/15 rounded-full focus:outline-none focus:border-[#f36801] placeholder-white/40"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#f36801] hover:bg-[#9f4200] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-colors shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
            <div className="flex items-center gap-2.5 pt-1">
              <Link
                href="/watch"
                aria-label="Watch Online"
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#f36801] flex items-center justify-center text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">
                  play_arrow
                </span>
              </Link>
              <Link
                href="/visit"
                aria-label="Location"
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#f36801] flex items-center justify-center text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
              </Link>
              <Link
                href="/contact"
                aria-label="Contact Us"
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#f36801] flex items-center justify-center text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slim Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#988e90]">
          <p>
            © {new Date().getFullYear()} Trinity Worship Center, Mogappair,
            Chennai. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
