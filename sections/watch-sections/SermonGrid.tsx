"use client";

import React, { useEffect, useState } from "react";

interface SermonVideo {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
}

const latestSermon: SermonVideo = {
  id: "sermon-01",
  youtubeId: "5qap5aO4i9A",
  youtubeUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
  thumbnail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Y37DWLBcwjrr1DKkyvzrWQnp4Bp_PHYmo_u5msK5WemwJYZsZNWfI6YCK84j1WEZOmp-qNpQ4eQ-pcQ2IOAkUhR9V-9ABO6d4q9rkxpWRb589IK2a5Xyg69SeFgyGUg06Zn7bv1fivgPXJy0FhYi8e6bIj6XaMlF9oLx36o0POOM0PXpLCdzm9OKBwNvjeFV9Bj_RKqxqUZJ31ScP9Fk09X8xLa9et__j1JpH3KKv7QDM7P91_H9",
};

const recommendedSermons: SermonVideo[] = [
  {
    id: "sermon-02",
    youtubeId: "jfKfPfyJRdk",
    youtubeUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6",
  },
  {
    id: "sermon-03",
    youtubeId: "DWcJFNfaw9c",
    youtubeUrl: "https://www.youtube.com/watch?v=DWcJFNfaw9c",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYXNd2WFGNGK6U4Jo8z0e0IFegevRqVDN_aXiraGJYyYAAxxYMh5_gEuJ3juohSI5OMoox235LDGdxlQ7RnpNmEgEAJQYnOTxlOGFO_ecukmbIz-ZL6T7nZBoIdrgJKL9Rh6gPKcgZwEQXJ2DURYykzJ3Y-QFYdlz5RNlP7EXpyzQXdL9Bo29gHRNdzRxivm5F0oVWOmOqRHuv935vHy4lhERCXHWCnhwT33rM8T3RCJOIB8alXOXj",
  },
  {
    id: "sermon-04",
    youtubeId: "4xDzrJKXOOY",
    youtubeUrl: "https://www.youtube.com/watch?v=4xDzrJKXOOY",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL",
  },
];

export default function SermonGrid() {
  const [activeVideo, setActiveVideo] = useState<SermonVideo | null>(null);

  // Close in-screen player on Escape key
  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo]);

  return (
    <>
      {/* SECTION 1: Full-Viewport Main Recent Video on Charcoal (#0D0B0B) */}
      <section className="relative w-full bg-[#0D0B0B] text-white py-6 sm:py-8 lg:py-10 px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="relative w-full h-[76vh] sm:h-[82vh] lg:h-[85vh] rounded-3xl overflow-hidden bg-[#171515] border border-white/10 shadow-2xl group">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src={latestSermon.thumbnail}
              alt="Latest Sunday Sermon Video"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />

            {/* Center Play Button */}
            <button
              type="button"
              onClick={() => setActiveVideo(latestSermon)}
              aria-label="Play Latest Sermon"
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f36801] text-white flex items-center justify-center shadow-2xl ring-8 ring-[#f36801]/25 group-hover:scale-110 transition-transform duration-300">
                <span
                  className="material-symbols-outlined text-4xl sm:text-5xl ml-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </span>
            </button>

            {/* Bottom Action Buttons (View Sermon & View on YouTube) */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-10 flex flex-wrap items-center justify-center sm:justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveVideo(latestSermon)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#f36801] hover:bg-[#d85a00] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  <span>View Sermon</span>
                </button>

                <a
                  href={latestSermon.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-black/45 backdrop-blur-md border border-white/80 text-white hover:bg-white hover:text-[#0D0B0B] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] active:scale-95 transition-all duration-200"
                >
                  <span>View on YouTube</span>
                  <span className="material-symbols-outlined text-base">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Next 3 Recommended Videos Below on Light (#fbf9f8) */}
      <section className="relative w-full bg-[#fbf9f8] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {recommendedSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="group relative aspect-video rounded-3xl overflow-hidden bg-[#0D0B0B] border border-[#0D0B0B]/10 shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src={sermon.thumbnail}
                  alt="Recommended Sermon Video"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Center Play Icon */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(sermon)}
                  aria-label="Play Recommended Sermon"
                  className="absolute inset-0 flex items-center justify-center pb-10 cursor-pointer"
                >
                  <span className="w-14 h-14 rounded-full bg-[#f36801] text-white flex items-center justify-center shadow-lg ring-4 ring-[#f36801]/25 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="material-symbols-outlined text-3xl ml-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </span>
                </button>

                {/* Bottom Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(sermon)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#f36801] hover:bg-[#d85a00] text-white font-sans font-bold text-[11px] uppercase tracking-[0.16em] shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_circle
                    </span>
                    <span>View Sermon</span>
                  </button>

                  <a
                    href={sermon.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/75 text-white hover:bg-white hover:text-[#0D0B0B] font-sans font-bold text-[11px] uppercase tracking-[0.16em] active:scale-95 transition-all"
                  >
                    <span>View on YouTube</span>
                    <span className="material-symbols-outlined text-xs">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-SCREEN PLAYSCREEN MODAL */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sermon Video Player"
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-[#0D0B0B] border border-white/15 shadow-2xl"
          >
            {/* Top Controls Bar */}
            <div className="px-5 py-3.5 bg-[#171515] border-b border-white/10 flex items-center justify-end gap-3">
              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#0D0B0B] font-sans font-bold text-[11px] uppercase tracking-[0.16em] transition-colors"
              >
                <span>View on YouTube</span>
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </a>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close Video Player"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f36801] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">
                  close
                </span>
              </button>
            </div>

            {/* Embedded 16:9 YouTube Player */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title="Sermon Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
