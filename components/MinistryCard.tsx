import React from "react";

interface MinistryCardProps {
  name: string;
  time: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function MinistryCard({
  name,
  time,
  subtitle,
  icon,
}: MinistryCardProps) {
  return (
    <div className="group relative flex flex-col items-start rounded-2xl border border-[#e1c0b1]/50 bg-white p-6 shadow-sm hover-lift min-w-[260px] max-w-[280px] shrink-0">
      {/* Accent top line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#f36801] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f36801]/10 text-[#f36801] mb-4 group-hover:bg-[#f36801] group-hover:text-white transition-colors">
        {icon}
      </div>

      {/* Name */}
      <h3 className="font-serif font-medium text-xl text-[#1b1c1c]">{name}</h3>

      {/* Subtitle */}
      <p className="text-sm font-sans text-[#594236] mt-1 leading-relaxed">{subtitle}</p>

      {/* Time */}
      <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#9f4200] mt-4">
        {time}
      </span>
    </div>
  );
}

