import type { Metadata } from "next";
import VisitHero from "@/sections/visit-sections/VisitHero";
import ServiceTimes from "@/sections/visit-sections/ServiceTimes";
import VisitFAQ from "@/sections/visit-sections/VisitFAQ";

export const metadata: Metadata = {
  title: "Visit | Trinity Worship Center",
  description:
    "Connect with us this Sunday! Find service times (8:00 AM Tamil & 10:30 AM English), Sparkz Kids ministry, and FAQs at Trinity Worship Center in Mogappair, Chennai.",
};

export default function VisitPage() {
  return (
    <div className="flex flex-col w-full">
      <VisitHero />
      <ServiceTimes />
      <VisitFAQ />
    </div>
  );
}
