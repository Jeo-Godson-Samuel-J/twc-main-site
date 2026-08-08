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
    <div className="group relative flex flex-col items-start rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm hover-lift min-w-[260px] max-w-[280px] shrink-0">
      {/* Gradient accent top */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-orange to-brand-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange mb-4 group-hover:bg-brand-orange/20 transition-colors">
        {icon}
      </div>

      {/* Name */}
      <h3 className="font-heading text-lg font-bold text-white">{name}</h3>

      {/* Subtitle */}
      <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>

      {/* Time */}
      <span className="text-label text-brand-orange/80 mt-3">{time}</span>
    </div>
  );
}
