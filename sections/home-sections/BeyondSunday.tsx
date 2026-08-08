"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import MinistryCard from "@/components/MinistryCard";

const ministries = [
  {
    name: "Spark Kids",
    time: "Sundays 10:30 AM",
    subtitle: "Fun & faith for ages 3–12",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: "Transit",
    time: "Fridays 7:00 PM",
    subtitle: "Teens finding their way",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    name: "Young Adults",
    time: "Saturdays 6:00 PM",
    subtitle: "Community for 18–30s",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: "Men's Fellowship",
    time: "1st Saturday 8:00 AM",
    subtitle: "Brotherhood & accountability",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.56-5.56a2.002 2.002 0 012.83-2.83l5.56 5.56m0 0l5.56 5.56a2.002 2.002 0 01-2.83 2.83l-5.56-5.56m0 0L8.59 12.34m2.83 2.83L14.25 18" />
      </svg>
    ),
  },
  {
    name: "Women's Fellowship",
    time: "2nd Saturday 10:00 AM",
    subtitle: "Sisterhood & growth",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Prayer Meeting",
    time: "Wednesdays 7:00 PM",
    subtitle: "Intercession & worship",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Cell Groups",
    time: "Various Days",
    subtitle: "Small groups, big impact",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function BeyondSunday() {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-brand-dark py-24 lg:py-32 overflow-hidden"
    >
      {/* Heading */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center mb-16">
        <h2
          className={`text-section text-white anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Beyond Sunday
        </h2>
        <div
          className={`mx-auto mt-5 h-1 w-16 bg-brand-orange rounded-full anim-width-grow ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "300ms", transformOrigin: "center" }}
        />
        <p
          className={`text-body text-zinc-300 mt-6 max-w-2xl mx-auto anim-fade-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          Church isn&rsquo;t just one day a week. Discover ministries and groups
          that meet throughout the week — there&rsquo;s something for everyone.
        </p>
      </div>

      {/* Infinite Carousel */}
      <div
        className={`anim-fade-up ${visible ? "anim-visible" : ""}`}
        style={{ transitionDelay: "600ms" }}
      >
        <InfiniteCarousel speed={35}>
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.name}
              name={ministry.name}
              time={ministry.time}
              subtitle={ministry.subtitle}
              icon={ministry.icon}
            />
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  );
}
