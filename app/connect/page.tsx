import type { Metadata } from "next";
import ConnectHero from "@/sections/connect-sections/ConnectHero";
import MinistrySection from "@/sections/connect-sections/MinistrySection";

export const metadata: Metadata = {
  title: "Connect | Trinity Worship Center",
  description:
    "A family of families. Discover Spark Kids, Transit Youth, Young Adults, Cell Groups, Men's & Women's Fellowships, and Prayer Meetings at Trinity Worship Center.",
};

export default function ConnectPage() {
  return (
    <div className="flex flex-col w-full">
      <ConnectHero />
      <MinistrySection />
    </div>
  );
}

