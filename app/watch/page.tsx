import type { Metadata } from "next";
import WatchHero from "@/sections/watch-sections/WatchHero";
import SermonGrid from "@/sections/watch-sections/SermonGrid";

export const metadata: Metadata = {
  title: "Watch | Trinity Worship Center",
  description:
    "Watch recent messages and sermons from Trinity Worship Center. Finding Peace in the Chaos, The Foundation of Hope, Community in Practice, and more.",
};

export default function WatchPage() {
  return (
    <div className="flex flex-col w-full">
      <WatchHero />
      <SermonGrid />
    </div>
  );
}

