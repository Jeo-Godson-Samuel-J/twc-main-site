"use client";

import React from "react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "How long is the service?",
    answer:
      "Our services typically last about 90 minutes. This includes worship, an encouraging message, and time for prayer.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as you are! You'll find people in everything from sarees to jeans. There's no dress code.",
  },
  {
    question: "Is there something for my kids?",
    answer:
      "Yes! Spark Kids runs alongside both services with fun, age-appropriate learning in a safe and loving environment.",
  },
  {
    question: "What can I expect on my first visit?",
    answer:
      "When you arrive, our greeters will welcome you at the door and help you find a seat. Expect uplifting worship, a relevant message, and a friendly community.",
  },
  {
    question: "How do I get involved or request prayer?",
    answer:
      "Our team is available after every service at the prayer altar, or you can connect with us online through our Connect page.",
  },
];

export default function VisitFAQ() {
  return (
    <section className="py-24 bg-white" id="plan-visit">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
            What to Expect
          </h2>
          <p className="text-slate-600 text-lg">
            We want you to feel comfortable and at home from the moment you arrive.
          </p>
        </div>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

