import type { Metadata } from "next";
import AboutHero from "@/sections/about-sections/AboutHero";
import OurStory from "@/sections/about-sections/OurStory";
import AboutPastors from "@/sections/about-sections/AboutPastors";
import WhatWeBelieve from "@/sections/about-sections/WhatWeBelieve";
import MissionSection from "@/sections/about-sections/MissionSection";

export const metadata: Metadata = {
  title: "About TWC | Trinity Worship Center",
  description:
    "Learn about Trinity Worship Center — five people in a rented hall on April 13, 2003, our story, our founding pastors, our beliefs, and our mission.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <OurStory />
      <AboutPastors />
      <WhatWeBelieve />
      <MissionSection />
    </div>
  );
}

