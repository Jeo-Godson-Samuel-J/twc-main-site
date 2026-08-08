"use client";

import React, { useState } from "react";

export default function GivingOptions() {
  const [amount, setAmount] = useState<string>("");

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
      {/* Giving Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Online Giving Card (Bento Style) */}
        <div className="bg-white rounded-2xl p-8 col-span-1 md:col-span-2 shadow-sm border border-[#EEEEEE] flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#9f4200]">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                volunteer_activism
              </span>
              <h2 className="text-2xl font-bold text-[#1b1c1c]">Give Online</h2>
            </div>
            <p className="text-[#594236] text-base mb-6 leading-relaxed">
              Simple, secure, and fast. Choose your amount and give directly.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#594236] material-symbols-outlined">
                  attach_money
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#EEEEEE] bg-[#fbf9f8] focus:border-[#f36801] focus:ring-2 focus:ring-[#f36801]/20 transition-all outline-none text-lg font-medium text-[#1b1c1c]"
                  placeholder="0.00"
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                {["50", "100", "250", "500"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    className={`px-5 py-2 rounded-full border transition-colors font-medium text-sm ${
                      amount === val
                        ? "bg-[#f36801] text-white border-[#f36801]"
                        : "bg-[#d6ef3f]/10 text-[#586400] border-[#586400]/20 hover:bg-[#d6ef3f]/30"
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-full mt-8 py-3.5 rounded-lg bg-[#f36801] text-white font-semibold text-base hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
          >
            Give Now
          </button>
        </div>

        {/* QR Code Area */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EEEEEE] flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
          <div className="text-[#9f4200] mb-4">
            <span
              className="material-symbols-outlined text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              qr_code_scanner
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-[#1b1c1c]">
            Scan to Give
          </h3>
          <p className="text-[#594236] text-sm mb-6 leading-relaxed">
            Use your mobile banking app to scan and donate instantly.
          </p>
          <div className="w-48 h-48 bg-[#e4e2e2] rounded-xl flex items-center justify-center border border-[#e1c0b1] overflow-hidden p-2">
            {/* eslint-disable-next-html-element-suppression */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAugEF2Ujx7a2WPV00OXWFUBD8SrVPy0BdxqmeESY85fukbkoQzfRMNtaec872rrGjYGAXPrdeNl57hGPnSQMW85CYH6cA9_W9NuSZN8iVyZnVx7OGjebXy3PRvQ6n9LaRktBAcKULwrODE1Wi2sftUiJH_qXkDOYNXjxBhA2Ei_sM0mjrXumxCHNrCCBdt04oBKd-DOKDaFWkII4iShWaKJJYk1Z6WbUydSvaTHNTyHZvTv8Pp7PN-"
              alt="Scan to give QR Code"
              className="w-full h-full object-contain p-2 opacity-90 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Bank Transfer Details Section */}
        <div className="bg-white rounded-2xl p-8 col-span-1 md:col-span-3 lg:col-span-3 shadow-sm border border-[#EEEEEE] hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6 text-[#9f4200]">
            <span
              className="material-symbols-outlined text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance
            </span>
            <h2 className="text-2xl font-bold text-[#1b1c1c]">
              Bank Transfer Details
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
              <p className="text-xs text-[#5e5e5e] uppercase tracking-wider mb-1 font-semibold">
                Account Name
              </p>
              <p className="text-base text-[#1b1c1c] font-semibold">
                Trinity Worship Center
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
              <p className="text-xs text-[#5e5e5e] uppercase tracking-wider mb-1 font-semibold">
                Account Number
              </p>
              <p className="text-base text-[#1b1c1c] font-mono font-semibold">
                1234 5678 9012
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
              <p className="text-xs text-[#5e5e5e] uppercase tracking-wider mb-1 font-semibold">
                IFSC Code
              </p>
              <p className="text-base text-[#1b1c1c] font-mono font-semibold">
                TRIN0001234
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
              <p className="text-xs text-[#5e5e5e] uppercase tracking-wider mb-1 font-semibold">
                Bank Name
              </p>
              <p className="text-base text-[#1b1c1c] font-semibold">
                Community Trust Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
