"use client";

import { useEffect, useRef, useState, useCallback, type RefObject } from "react";

interface ParallaxOptions {
  speed?: number; // Multiplier: 0 = no movement, 1 = full scroll speed
  direction?: "up" | "down";
  maxOffset?: number; // Cap the maximum pixel offset
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: ParallaxOptions = {}
): [RefObject<T | null>, number] {
  const { speed = 0.3, direction = "up", maxOffset = 150 } = options;
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how far the element is from the center of the viewport
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;

    // Calculate parallax offset
    let parallaxOffset = distanceFromCenter * speed;

    // Apply direction
    if (direction === "down") {
      parallaxOffset = -parallaxOffset;
    }

    // Clamp to max offset
    parallaxOffset = Math.max(-maxOffset, Math.min(maxOffset, parallaxOffset));

    setOffset(parallaxOffset);
  }, [speed, direction, maxOffset]);

  useEffect(() => {
    // Use requestAnimationFrame for smooth updates
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  return [ref, offset];
}
