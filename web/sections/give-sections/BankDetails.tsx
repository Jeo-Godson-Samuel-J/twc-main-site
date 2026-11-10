"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BankDetails() {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-zinc-50 py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-section text-brand-black anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Bank Details
          </h2>
          <div
            className={`mx-auto mt-5 h-1 w-16 bg-brand-orange rounded-full anim-width-grow ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "300ms", transformOrigin: "center" }}
          />
        </div>

        {/* Premium Bank Card */}
        <div
          className={`relative rounded-2xl border border-zinc-200 bg-white p-8 lg:p-10 shadow-xl shadow-zinc-200/50 overflow-hidden anim-scale-up ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-lime" />

          {/* Bank logo area */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-dark">
              <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-brand-black text-lg">The Worship Centre</span>
          </div>

          <div className="space-y-5">
            <div className="flex justify-between items-center py-3 border-b border-zinc-100">
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Bank Name</span>
              <span className="font-heading font-bold text-brand-black">State Bank of India</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-zinc-100">
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Account Name</span>
              <span className="font-heading font-bold text-brand-black">The Worship Centre</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-zinc-100">
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Account No.</span>
              <span className="font-heading font-bold text-brand-black font-mono tracking-wider">XXXX XXXX XXXX</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-zinc-100">
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">IFSC Code</span>
              <span className="font-heading font-bold text-brand-black font-mono">SBIN0XXXXXX</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Branch</span>
              <span className="font-heading font-bold text-brand-black">Chennai Main Branch</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-zinc-400 text-center">
            Please use your name as the payment reference for tracking purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
