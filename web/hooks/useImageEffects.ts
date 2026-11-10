"use client";

import { useEffect, useRef, useState, useCallback, type RefObject } from "react";

interface ImageZoomOptions {
  /** Initial scale when image is off-screen (default: 1.4) */
  initialScale?: number;
  /** Final scale when image is fully in view (default: 1.0) */
  finalScale?: number;
  /** How much of the viewport the element needs to traverse for the full zoom (0-1) */
  scrollRange?: number;
}

/**
 * Hook for the "zoom from fullscreen" image effect.
 * Returns a ref to attach to the image container, and the current scale value.
 * The image starts zoomed in and zooms out to normal as the user scrolls.
 */
export function useImageZoom<T extends HTMLElement = HTMLDivElement>(
  options: ImageZoomOptions = {}
): [RefObject<T | null>, number] {
  const { initialScale = 1.35, finalScale = 1.0, scrollRange = 0.6 } = options;
  const ref = useRef<T | null>(null);
  const [scale, setScale] = useState(initialScale);

  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setScale(finalScale);
      return;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate progress: 0 = element just entered viewport bottom, 1 = element is at/past center
    const entryPoint = windowHeight; // bottom of viewport
    const exitPoint = windowHeight * (1 - scrollRange);
    const progress = Math.max(
      0,
      Math.min(1, (entryPoint - rect.top) / (entryPoint - exitPoint))
    );

    // Interpolate scale
    const currentScale = initialScale + (finalScale - initialScale) * progress;
    setScale(currentScale);
  }, [initialScale, finalScale, scrollRange]);

  useEffect(() => {
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

  return [ref, scale];
}

interface MouseTiltOptions {
  maxTilt?: number; // degrees
  perspective?: number; // px
}

/**
 * Hook for 3D perspective tilt on mouse hover.
 * Returns a ref and transform style string.
 */
export function useMouseTilt<T extends HTMLElement = HTMLDivElement>(
  options: MouseTiltOptions = {}
): [RefObject<T | null>, string] {
  const { maxTilt = 6, perspective = 1000 } = options;
  const ref = useRef<T | null>(null);
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    };

    const handleMouseLeave = () => {
      setTransform(
        `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`
      );
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, perspective]);

  return [ref, transform];
}
