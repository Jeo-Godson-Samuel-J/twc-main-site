import React from "react";

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function InfiniteCarousel({
  children,
  speed = 30,
  direction = "left",
  className = "",
}: InfiniteCarouselProps) {
  const animDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="carousel-track gap-6"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: animDirection,
        }}
      >
        {/* Original items */}
        <div className="flex gap-6 shrink-0">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-6 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
