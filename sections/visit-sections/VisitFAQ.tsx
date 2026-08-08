"use client";

import React from "react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "How long is the Sunday service?",
    answer:
      "Our services typically last about 90 minutes. This includes spirited worship, an encouraging biblical message, and time for personal prayer.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as you are! You'll find people in everything from traditional sarees & dhotis to casual shirts & jeans. There is no formal dress code.",
  },
  {
    question: "Is there something for my kids?",
    answer:
      "Yes! Spark Kids runs alongside both our 8:00 AM and 10:30 AM services with fun, age-appropriate teaching in a safe and loving environment.",
  },
  {
    question: "Where do I park?",
    answer:
      "Parking is available directly around Kanishk Complex on Paneer Nagar Main Road. Our volunteer greeters at the entrance will assist you.",
  },
  {
    question: "How do I get involved or request prayer?",
    answer:
      "Our pastoral team is available after every service at the prayer altar, or you can connect with us online anytime through our Connect page.",
  },
];

export default function VisitFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-[#fbf9f8]" id="plan-visit">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#9f4200]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#1b1c1c]">
            What to Expect
          </h2>
          <p className="font-sans text-[#594236] text-base max-w-xl mx-auto">
            We want you to feel comfortable, welcomed, and at home from the moment you step into Trinity Worship Center.
          </p>
        </div>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
