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
      <div className="group relative overflow-hidden rounded-2xl bg-brand-dark hover-lift">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Thumbnail */}
          <div className="relative aspect-video lg:aspect-auto overflow-hidden hover-zoom">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-white shadow-2xl">
                <svg className="h-7 w-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <span className="text-label text-brand-orange">{series || "Latest Message"}</span>
            <h3 className="text-subsection text-white mt-3">{title}</h3>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span>{speaker}</span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span>{date}</span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span>{duration}</span>
            </div>
            <div className="mt-6">
              <Button href={watchUrl} variant="primary" size="md">
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white hover-lift">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden hover-zoom">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-xs font-semibold text-white">
          {duration}
        </span>
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-xl">
            <svg className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow p-5">
        {series && <span className="text-label text-brand-orange text-xs">{series}</span>}
        <h3 className="font-heading text-lg font-bold text-brand-black mt-1 line-clamp-2 group-hover:text-brand-orange transition-colors">
          {title}
        </h3>
        <div className="mt-auto pt-3 flex items-center gap-3 text-xs text-zinc-500">
          <span>{speaker}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
