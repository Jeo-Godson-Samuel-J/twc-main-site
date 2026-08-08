"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b1c1c] text-[#fbf9f8] mt-20 w-full border-t border-[#353535]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#f36801] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-xl">church</span>
            </div>
            <span className="font-serif font-bold text-xl text-white tracking-tight">
              Trinity Worship Center
            </span>
          </Link>
          <p className="text-sm text-[#cfc4c5] leading-relaxed">
            A vibrant, spirit-filled church in Mogappair, Chennai. Dedicated to worship, community, and sharing God&apos;s love.
          </p>
          <div className="pt-2 text-xs font-semibold uppercase tracking-widest text-[#f36801]">
            Evangelize • Empower • Educate
          </div>
        </div>

        {/* Location & Services */}
        <div className="space-y-3">
          <h4 className="font-serif font-semibold text-lg text-white">Location & Service</h4>
          <p className="text-sm text-[#cfc4c5] flex items-start gap-2 leading-relaxed">
            <span className="material-symbols-outlined text-lg text-[#f36801] shrink-0 mt-0.5">
              location_on
            </span>
            <span>
              20AB (2nd Floor), Kanishk Complex,
              <br />
              Paneer Nagar Main Rd, Mogappair,
              <br />
              Chennai, Tamil Nadu 600037
            </span>
          </p>
          <p className="text-sm text-[#cfc4c5] flex items-center gap-2 pt-1">
            <span className="material-symbols-outlined text-lg text-[#f36801] shrink-0">
              schedule
            </span>
            <span>Sundays • 8 AM (Tamil) & 10:30 AM (Eng)</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif font-semibold text-lg text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-[#cfc4c5]">
            <li>
              <Link href="/about" className="hover:text-[#f36801] transition-colors">
                About TWC
              </Link>
            </li>
            <li>
              <Link href="/visit" className="hover:text-[#f36801] transition-colors">
                Plan Your Visit
              </Link>
            </li>
            <li>
              <Link href="/watch" className="hover:text-[#f36801] transition-colors">
                Watch Live & Sermons
              </Link>
            </li>
            <li>
              <Link href="/connect" className="hover:text-[#f36801] transition-colors">
                Ministries & Small Groups
              </Link>
            </li>
            <li>
              <Link href="/give" className="hover:text-[#f36801] transition-colors">
                Generosity & Giving
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#f36801] transition-colors">
                Contact & Prayer Request
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Action */}
        <div className="space-y-4">
          <h4 className="font-serif font-semibold text-lg text-white">Stay Connected</h4>
          <p className="text-xs text-[#cfc4c5]">
            Subscribe to our weekly newsletter for service updates, devotionals, and church events.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm bg-[#2a2a2a] text-white border border-[#4c4546] rounded-lg focus:outline-none focus:border-[#f36801] placeholder-[#988e90]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#f36801] text-white font-sans text-xs font-semibold rounded-lg hover:bg-[#9f4200] active:scale-95 transition-all shrink-0"
            >
              Join
            </button>
          </form>
          <div className="pt-2 flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-lg p-2 rounded-full bg-[#2a2a2a] hover:bg-[#f36801] transition-colors cursor-pointer">
              video_camera_front
            </span>
            <span className="material-symbols-outlined text-lg p-2 rounded-full bg-[#2a2a2a] hover:bg-[#f36801] transition-colors cursor-pointer">
              share
            </span>
            <span className="material-symbols-outlined text-lg p-2 rounded-full bg-[#2a2a2a] hover:bg-[#f36801] transition-colors cursor-pointer">
              mail
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#353535] py-6 px-6 text-center text-xs text-[#988e90]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Trinity Worship Center, Mogappair, Chennai. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
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


