import type { Metadata } from "next";
import VisitHero from "@/sections/visit-sections/VisitHero";
import ServiceTimes from "@/sections/visit-sections/ServiceTimes";
import LocationSection from "@/sections/visit-sections/LocationSection";
import VisitFAQ from "@/sections/visit-sections/VisitFAQ";

export const metadata: Metadata = {
  title: "Visit | Trinity Worship Center",
  description:
    "We've saved you a seat! Find service times (8 AM Tamil & 10:30 AM English), venue address in Mogappair Chennai, and what to expect on your first visit.",
};

export default function VisitPage() {
  return (
    <div className="flex flex-col w-full">
      <VisitHero />
      <ServiceTimes />
      <LocationSection />
      <VisitFAQ />
    </div>
  );
}

