"use client";

import React from "react";
import CTASection from "@/components/CTASection";

export default function ConnectCTA() {
  return (
    <CTASection
      heading="Find Your Community"
      subheading="Don't do life alone. Whether it's a Sunday service, a cell group, or a ministry — there's a place for you at TWC."
      buttonLabel="Join a Group"
      buttonHref="/contact"
    />
  );
}
