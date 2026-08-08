import Hero from "@/sections/home-sections/Hero";
import WelcomeSection from "@/sections/home-sections/WelcomeSection";
import PlanYourVisit from "@/sections/home-sections/PlanYourVisit";
import BeyondSunday from "@/sections/home-sections/BeyondSunday";
import MeetOurPastors from "@/sections/home-sections/MeetOurPastors";
import SundayLocationCTA from "@/sections/home-sections/SundayLocationCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WelcomeSection />
      <PlanYourVisit />
      <BeyondSunday />
      <MeetOurPastors />
      <SundayLocationCTA />
    </div>
  );
}




