import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface SermonCardProps {
  thumbnail: string;
  title: string;
  date: string;
  series?: string;
  speaker: string;
  duration: string;
  watchUrl: string;
  featured?: boolean;
}

export default function SermonCard({
  thumbnail,
  title,
  date,
  series,
  speaker,
  duration,
  watchUrl,
  featured = false,
}: SermonCardProps) {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-[#1b1c1c] text-white shadow-md hover-lift">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Thumbnail */}
          <div className="relative aspect-video lg:aspect-auto overflow-hidden hover-zoom">
            <Image
              src={thumbnail}
              alt={title}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f36801] text-white shadow-2xl">
                <svg className="h-7 w-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#f36801]">
              {series || "Featured Message"}
            </span>
            <h3 className="font-serif font-medium text-2xl lg:text-3xl text-white mt-3 leading-snug">
              {title}
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-sans text-[#cfc4c5]">
              <span>{speaker}</span>
              <span className="h-1 w-1 rounded-full bg-[#4c4546]" />
              <span>{date}</span>
              <span className="h-1 w-1 rounded-full bg-[#4c4546]" />
              <span>{duration}</span>
            </div>
            <div className="mt-6">
              <Button href={watchUrl} variant="primary" size="md">
                Watch Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e1c0b1]/50 bg-white shadow-sm hover-lift">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden hover-zoom">
        <Image
          src={thumbnail}
          alt={title}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Duration badge */}

        <span className="absolute bottom-3 right-3 rounded-md bg-[#1b1c1c]/80 px-2 py-1 text-[11px] font-semibold text-white">
          {duration}
        </span>
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f36801] text-white shadow-xl">
            <svg className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow p-5">
        {series && (
          <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#9f4200]">
            {series}
          </span>
        )}
        <h3 className="font-serif font-medium text-xl text-[#1b1c1c] mt-1 line-clamp-2 group-hover:text-[#f36801] transition-colors leading-snug">
          {title}
        </h3>
        <div className="mt-auto pt-4 flex items-center gap-3 text-xs font-sans text-[#594236]">
          <span>{speaker}</span>
          <span className="h-1 w-1 rounded-full bg-[#e1c0b1]" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

