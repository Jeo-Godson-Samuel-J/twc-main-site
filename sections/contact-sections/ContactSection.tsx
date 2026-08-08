"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#fbf9f8] pt-6 sm:pt-8 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#f36801]/10 text-[#9f4200] text-[11px] font-sans font-semibold uppercase tracking-wider mb-2">
                Send a Message
              </span>
              <h2 className="font-serif font-medium text-3xl sm:text-4xl text-[#1b1c1c] tracking-tight">
                We&rsquo;d Love to Hear From You
              </h2>
              <p className="font-sans text-sm text-[#594236] mt-2 leading-relaxed">
                Whether you have questions about our services, cell groups, or ministries, reach out and our team will get in touch with you.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right Column: Contact Details & Map */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#e1c0b1]/50 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif font-medium text-2xl text-[#1b1c1c]">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f36801]/10 text-[#f36801]">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[#1b1c1c]">Church Address</h4>
                  <p className="font-sans text-sm text-[#594236] mt-0.5 leading-relaxed">
                    Trinity Worship Center, Mogappair West, Chennai, Tamil Nadu 600037
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f36801]/10 text-[#f36801]">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[#1b1c1c]">Phone</h4>
                  <p className="font-sans text-sm text-[#594236] mt-0.5">+91 98765 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f36801]/10 text-[#f36801]">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[#1b1c1c]">Email</h4>
                  <p className="font-sans text-sm text-[#594236] mt-0.5">info@twcchurch.org</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-4 border-t border-[#e1c0b1]/40">
                <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#9f4200] mb-3">
                  Connect With Us
                </h4>
                <div className="flex gap-3">
                  {["facebook", "photo_camera", "play_circle"].map((icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf9f8] border border-[#e1c0b1]/60 text-[#1b1c1c] hover:bg-[#f36801] hover:text-white hover:border-[#f36801] transition-all"
                      aria-label="Social Link"
                    >
                      <span className="material-symbols-outlined text-lg">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <MapEmbed className="h-[260px] rounded-2xl overflow-hidden border border-[#e1c0b1]/50 shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

