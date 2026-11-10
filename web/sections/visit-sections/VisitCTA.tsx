"use client";

import React from "react";
import CTASection from "@/components/CTASection";

export default function VisitCTA() {
  return (
    <CTASection
      heading="We Can't Wait to Meet You"
      subheading="Plan your visit today and let us know you're coming. We'll have a seat and a smile waiting for you."
      buttonLabel="Plan Your Visit"
      buttonHref="/contact"
    />
  );
}
