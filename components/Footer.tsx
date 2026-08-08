import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f2] border-t border-[#e0dedc] mt-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 max-w-7xl mx-auto">
        {/* Brand & Info */}
        <div className="space-y-4">
          <Link
            href="/"
            className="text-xl font-bold text-[#f36801] flex items-center gap-2 tracking-tight"
          >
            <span className="material-symbols-outlined text-2xl">church</span>
            <span>Trinity Worship Center</span>
          </Link>
          <p className="text-sm text-[#4d4c4b] flex items-start gap-2 mt-4 leading-relaxed">
            <span className="material-symbols-outlined text-lg mt-0.5 text-[#f36801]">
              location_on
            </span>
            <span>
              20AB (2nd Floor), Kanishk Complex,
              <br />
              Paneer Nagar Main Rd, VGP Nagar,
              <br />
              Mogappair, Chennai
            </span>
          </p>
          <p className="text-sm text-[#4d4c4b] flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#acc300]">
              schedule
            </span>
            <span>8:00 AM (Tamil) · 10:30 AM (English)</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h4 className="font-bold text-[#1a1918] mb-2">Quick Links</h4>
          <Link
            href="/about"
            className="text-[#4d4c4b] hover:text-[#f36801] transition-colors duration-200"
          >
            About TWC
          </Link>
          <Link
            href="/visit"
            className="text-[#f36801] font-semibold hover:text-orange-600 transition-colors duration-200"
          >
            Visit
          </Link>
          <Link
            href="/watch"
            className="text-[#4d4c4b] hover:text-[#f36801] transition-colors duration-200"
          >
            Watch
          </Link>
          <Link
            href="/connect"
            className="text-[#4d4c4b] hover:text-[#f36801] transition-colors duration-200"
          >
            Connect
          </Link>
          <Link
            href="/give"
            className="text-[#4d4c4b] hover:text-[#f36801] transition-colors duration-200"
          >
            Give
          </Link>
          <Link
            href="/contact"
            className="text-[#4d4c4b] hover:text-[#f36801] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Action */}
        <div className="flex flex-col items-start md:items-end justify-center space-y-4">
          <p className="text-sm text-[#4d4c4b] text-left md:text-right leading-relaxed">
            Join us this Sunday. We can&apos;t wait to meet you.
          </p>
          <Link
            href="/visit#plan-visit"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#f36801] text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-sm"
          >
            Plan a Visit
          </Link>
        </div>
      </div>

      <div className="border-t border-[#e0dedc] py-6 px-6">
        <div className="max-w-7xl mx-auto text-center text-xs text-[#4d4c4b]">
          © {new Date().getFullYear()} Trinity Worship Center. Mogappair, Chennai. Evangelize. Empower. Educate.
        </div>
      </div>
    </footer>
  );
}

