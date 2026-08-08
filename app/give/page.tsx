import type { Metadata } from "next";
import GiveHero from "@/sections/give-sections/GiveHero";
import GivingOptions from "@/sections/give-sections/GivingOptions";

export const metadata: Metadata = {
  title: "Give | Trinity Worship Center",
  description:
    "Cheerful Givers Only! Everything you give at Trinity Worship Center goes towards Sunday gatherings, our ministries, and church plants.",
};

export default function GivePage() {
  return (
    <div className="flex flex-col w-full bg-[#faf9f8] min-h-screen">
      <GiveHero />
      <GivingOptions />
    </div>
  );
}

