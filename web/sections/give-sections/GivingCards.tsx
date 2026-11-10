"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const givingMethods = [
  {
    title: "Online Giving",
    description:
      "Give securely online via UPI, credit card, or net banking. Quick, simple, and available 24/7.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Bank Transfer",
    description:
      "Transfer directly to the church bank account via NEFT, RTGS, or IMPS. Bank details are provided below.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Church Offering",
    description:
      "Give during our Sunday service offering. Envelopes are available at the entrance for those who prefer to give in person.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

export default function GivingCards() {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-section text-brand-black anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Ways to Give
          </h2>
          <div
            className={`mx-auto mt-5 h-1 w-16 bg-brand-orange rounded-full anim-width-grow ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "300ms", transformOrigin: "center" }}
          />
          <p
            className={`text-body text-zinc-600 mt-6 max-w-2xl mx-auto anim-fade-up ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            Every gift makes a difference. Choose the method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {givingMethods.map((method, index) => (
            <div
              key={method.title}
              className={`group relative flex flex-col items-center text-center rounded-2xl border border-zinc-200 bg-white p-8 lg:p-10 hover-lift anim-fade-up ${visible ? "anim-visible" : ""}`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}
            >
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-brand-orange to-brand-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange mb-6 group-hover:bg-brand-orange/20 transition-colors">
                {method.icon}
              </div>
              <h3 className="text-subsection text-brand-black">{method.title}</h3>
              <p className="text-body text-zinc-600 mt-4">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
