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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf9f8]/90 backdrop-blur-md shadow-sm border-b border-[#e1c0b1]/40 py-3"
          : "bg-[#fbf9f8] border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-98"
        >
          <div className="w-10 h-10 rounded-full bg-[#f36801] text-white flex items-center justify-center shadow-sm group-hover:bg-[#9f4200] transition-colors">
            <span className="material-symbols-outlined text-2xl">church</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl md:text-2xl text-[#1b1c1c] tracking-tight leading-none group-hover:text-[#f36801] transition-colors">
              Trinity Worship Center
            </span>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#594236] mt-0.5">
              Mogappair • Chennai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#f36801] font-semibold"
                    : "text-[#4d4c4b] hover:text-[#f36801]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f36801] rounded-full animate-in fade-in zoom-in-75 duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/visit"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#f36801] text-white font-sans text-sm font-semibold rounded-full hover:bg-[#9f4200] active:scale-95 transition-all duration-200 shadow-sm hover:shadow"
          >
            Plan Your Visit
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1b1c1c] hover:text-[#f36801] p-2 rounded-lg transition-colors"
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
        <div className="md:hidden bg-[#fbf9f8] border-b border-[#e1c0b1]/50 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium py-1 transition-colors ${
                  pathname === link.href
                    ? "text-[#f36801] font-serif font-bold"
                    : "text-[#1b1c1c] hover:text-[#f36801]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#e1c0b1]/40">
            <Link
              href="/visit"
              className="w-full flex items-center justify-center px-6 py-3 bg-[#f36801] text-white font-sans font-semibold rounded-full hover:bg-[#9f4200] active:scale-98 transition-all shadow-sm"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


