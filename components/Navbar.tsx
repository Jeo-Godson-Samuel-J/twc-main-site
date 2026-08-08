"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About TWC", href: "/about" },
  { name: "Visit", href: "/visit" },
  { name: "Watch", href: "/watch" },
  { name: "Connect", href: "/connect" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`w-full top-0 sticky z-50 transition-all duration-300 ${
        scrolled ? "bg-[#faf9f8]/95 backdrop-blur-md shadow-md" : "bg-[#faf9f8] shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
        {/* Brand */}
        <Link
          href="/"
          className="font-bold text-xl md:text-2xl text-[#f36801] flex items-center gap-2 tracking-tight"
        >
          <span className="material-symbols-outlined text-3xl">church</span>
          <span>Trinity Worship Center</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-medium text-base">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#f36801] border-b-2 border-[#f36801] pb-1 font-semibold"
                    : "text-[#4d4c4b] hover:text-[#f36801]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/visit#plan-visit"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#f36801] text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Plan Your Visit
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4d4c4b] hover:text-[#f36801] p-2"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#faf9f8] border-b border-[#e0dedc] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#f36801] font-bold"
                    : "text-[#1a1918] hover:text-[#f36801]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#e0dedc]">
            <Link
              href="/visit#plan-visit"
              className="w-full flex items-center justify-center px-6 py-3 bg-[#f36801] text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

