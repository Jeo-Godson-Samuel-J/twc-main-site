import type { Metadata } from "next";
import ContactHero from "@/sections/contact-sections/ContactHero";
import ContactSection from "@/sections/contact-sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | The Worship Centre",
  description:
    "Get in touch with The Worship Centre. Send us a message, find our address, or connect with us on social media.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <ContactSection />
    </div>
  );
}
