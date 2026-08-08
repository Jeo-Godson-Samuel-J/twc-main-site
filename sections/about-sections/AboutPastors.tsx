"use client";

import React from "react";

export default function AboutPastors() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-[#fbf9f8] border-b border-[#e1c0b1]/40">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#9f4200]">
            Pastoral Leadership
          </span>
          <h2 className="font-serif font-medium text-4xl text-[#1b1c1c]">
            Meet Our Founding Pastors
          </h2>
          <div className="w-16 h-1 bg-[#f36801] mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#e1c0b1]/50 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-[#e1c0b1]/40">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIV8jnX0zFx9zfWYAERPu713uTUidG89OYkUJ3Y10VPXXWvZKS_U_B1oW_oFSbr1mUMbQJJfrY_kadraZc_01ZT0yC3JxlK_Znrxx_ZmQoNFC6_arRzfjL3GS-e47jlpatcWIada_ejiIFmfIq4IyINd65HHhQSLDnlhdqC2vATvJJXyhFflu-Uvke62abrPlWQOEb1Oj8uPexxNNnfcCLR4oCZj856L08fau95CsTebfMS2NlLdch"
              alt="Founding Pastors Praveen & Pratima David"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#9f4200]">
              Lead Pastors
            </span>
            <h3 className="font-serif font-medium text-3xl md:text-4xl text-[#1b1c1c]">
              Praveen &amp; Pratima David
            </h3>
            <div className="space-y-4 font-sans text-base text-[#594236] leading-relaxed pt-2">
              <p>
                Both born and raised in Chennai, Praveen and Pratima have been married since 1996. Their deep love for Chennai shapes Trinity Worship Center&apos;s heart for local community transformation.
              </p>
              <p>
                They believe the local church is God&apos;s instrument of hope — meant to reach beyond its walls into the neighborhood, bringing restoration, empowerment, and practical Christ-like care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


