"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About TWC", href: "/about" },
  { name: "Watch", href: "/watch" },
  { name: "Connect", href: "/connect" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const leadCapsuleRef = useRef<HTMLSpanElement | null>(null);
  const trailCapsuleRef = useRef<HTMLSpanElement | null>(null);
  const isInitializedRef = useRef(false);

  const activeIndex = navLinks.findIndex((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );
  const currentTargetIndex =
    hoveredIndex !== null ? hoveredIndex : activeIndex >= 0 ? activeIndex : 0;

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
    setHoveredIndex(null);
  }, [pathname]);

  useEffect(() => {
    const updateCapsule = (immediate = false) => {
      const targetEl = linkRefs.current[currentTargetIndex];
      const lead = leadCapsuleRef.current;
      const trail = trailCapsuleRef.current;
      if (!targetEl || !lead || !trail) return;

      const x = targetEl.offsetLeft;
      const width = targetEl.offsetWidth;

      if (immediate || !isInitializedRef.current) {
        gsap.set(lead, { x, width, opacity: 1 });
        gsap.set(trail, {
          x: x + width * 0.08,
          width: width * 0.84,
          opacity: 1,
        });
        isInitializedRef.current = true;
        return;
      }

      // Lead capsule glides briskly to the target item
      gsap.to(lead, {
        x,
        width,
        opacity: 1,
        duration: 0.36,
        ease: "power3.out",
        overwrite: "auto",
      });

      // Trail capsule follows with liquid elastic spring, creating the gooey stretch bridge
      gsap.to(trail, {
        x: x + width * 0.08,
        width: width * 0.84,
        opacity: 1,
        duration: 0.68,
        ease: "elastic.out(1, 0.72)",
        overwrite: "auto",
      });
    };

    updateCapsule();

    const handleResize = () => updateCapsule(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentTargetIndex]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#f36801]/95 backdrop-blur-md border-b border-white/15 shadow-[0_4px_20px_rgba(27,28,28,0.14)] py-3"
          : "bg-[#f36801] border-b border-white/15 py-3.5"
      }`}
    >
      {/* Hidden SVG Filter for the Liquid Gooey Capsule Morph */}
      <svg aria-hidden="true" className="pointer-events-none absolute w-0 h-0">
        <defs>
          <filter id="navbar-gooey-capsule">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5.5"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/twc-logo.png"
            alt="Trinity Worship Center Logo"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-xl sm:text-[22px] text-white tracking-tight leading-none">
              Trinity Worship Center
            </span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-white/85 mt-1">
              Mogappair • Chennai
            </span>
          </div>
        </Link>

        {/* Single-Strip Desktop Navigation with White Gooey Capsule Selection */}
        <nav
          aria-label="Primary Navigation"
          onMouseLeave={() => setHoveredIndex(null)}
          className="hidden lg:flex relative items-center gap-2 xl:gap-3 py-1"
        >
          {/* Gooey Filter Layer holding White Lead + Trail Capsules */}
          <div
            aria-hidden="true"
            style={{ filter: "url(#navbar-gooey-capsule)" }}
            className="pointer-events-none absolute inset-0 z-0"
          >
            <span
              ref={leadCapsuleRef}
              className="absolute top-1 bottom-1 left-0 rounded-full bg-white opacity-0 will-change-transform"
            />
            <span
              ref={trailCapsuleRef}
              className="absolute top-1.5 bottom-1.5 left-0 rounded-full bg-white opacity-0 will-change-transform"
            />
          </div>

          {navLinks.map((link, index) => {
            const isSelected = index === currentTargetIndex;
            return (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative z-10 px-4 py-2 rounded-full text-sm font-sans font-bold tracking-wide transition-colors duration-200 ${
                  isSelected
                    ? "text-[#0D0B0B]"
                    : "text-white hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/visit"
            className="hidden lg:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-[#0D0B0B] font-sans text-xs font-bold uppercase tracking-[0.18em] active:scale-95 transition-all duration-200 group"
          >
            <span>Plan Your Visit</span>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              arrow_outward
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/15 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Single-Strip Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#f36801] border-t border-white/20 px-6 sm:px-10 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-full text-base font-sans transition-colors ${
                    isActive
                      ? "bg-white text-[#0D0B0B] font-bold"
                      : "text-white font-semibold hover:bg-white/15"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`material-symbols-outlined text-lg ${
                      isActive ? "text-[#0D0B0B]" : "text-white/75"
                    }`}
                  >
                    chevron_right
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 space-y-3 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-xs font-sans font-medium text-white/90">
              <span className="material-symbols-outlined text-base text-white">
                schedule
              </span>
              <span>Sundays • 8:00 AM (Tamil) & 10:30 AM (English)</span>
            </div>

            <Link
              href="/visit"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0D0B0B] hover:bg-[#0D0B0B] hover:text-white font-sans text-xs font-bold uppercase tracking-[0.18em] rounded-full active:scale-98 transition-all shadow-sm"
            >
              <span>Plan Your Visit</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
