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
    <footer className="w-full bg-[#0D0B0B] text-[#fbf9f8] border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10 items-start">
          {/* Column 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Trinity Worship Center Logo"
                className="w-11 h-11 rounded-full object-contain shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-xl text-white tracking-tight leading-none group-hover:text-[#f36801] transition-colors">
                  Trinity Worship Center
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-[#f36801] mt-1">
                  Mogappair • Chennai
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-[#d4d5d5] leading-relaxed max-w-xs">
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
            <ul className="space-y-2 font-sans text-sm text-[#d4d5d5]">
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

          {/* Column 3: Google Maps Embed (6 cols) */}
          <div className="md:col-span-2 lg:col-span-6">
            <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-[#171515] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.222796677812!2d80.17244517413364!3d13.085061687240907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263e4bd7b2981%3A0xc41f3bf7faa300ad!2sTrinity%20Worship%20Center!5e0!3m2!1sen!2sin!4v1793768829586!5m2!1sen!2sin"
                title="Trinity Worship Center Location Map"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Slim Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#9a9c9c]">
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
