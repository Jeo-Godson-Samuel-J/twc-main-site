"use client";

import React from "react";

export default function AboutPastors() {
  return (
    <section className="py-24 px-6 bg-[#f5f4f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1918] mb-2">
            Leadership
          </h2>
          <div className="w-16 h-1 bg-[#acc300] mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 h-[320px] md:h-[400px] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIV8jnX0zFx9zfWYAERPu713uTUidG89OYkUJ3Y10VPXXWvZKS_U_B1oW_oFSbr1mUMbQJJfrY_kadraZc_01ZT0yC3JxlK_Znrxx_ZmQoNFC6_arRzfjL3GS-e47jlpatcWIada_ejiIFmfIq4IyINd65HHhQSLDnlhdqC2vATvJJXyhFflu-Uvke62abrPlWQOEb1Oj8uPexxNNnfcCLR4oCZj856L08fau95CsTebfMS2NlLdch"
              alt="Founding Pastors Praveen & Pratima David"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:col-span-7 space-y-4">
            <h3 className="text-3xl font-bold text-[#f36801]">
              Praveen &amp; Pratima David
            </h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#586400]">
              Founding Pastors
            </p>
            <div className="space-y-4 text-base text-[#4d4c4b] leading-relaxed pt-2">
              <p>
                Both raised in Chennai, Praveen and Pratima have been married since 1996 and have four children. Their deep roots in the city inform their approach to ministry and community building.
              </p>
              <p>
                They believe the church is meant to reach past its own gated community and into a hurting city, offering hope, practical support, and the transformative message of faith to everyone they encounter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

