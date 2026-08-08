"use client";

import React, { useState } from "react";

export default function GivingOptions() {
  const [amount, setAmount] = useState<string>("1000");
  const [fund, setFund] = useState<string>("Tithes & Offerings");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {/* Online Giving Portal (2 Cols) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 col-span-1 md:col-span-2 shadow-sm border border-[#e1c0b1]/50 flex flex-col justify-between hover-lift">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
              </div>
              <div>
                <h2 className="font-serif font-medium text-xl sm:text-2xl text-[#1b1c1c]">Give Online</h2>
                <p className="font-sans text-xs text-[#594236]">
                  Simple, secure, and instant. Choose your fund and contribution amount.
                </p>
              </div>
            </div>

            {/* Fund Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#9f4200] block">
                Select Fund
              </label>
              <div className="flex flex-wrap gap-2">
                {["Tithes & Offerings", "Building Fund", "Missions & Outreach"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFund(f)}
                    className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold transition-all ${
                      fund === f
                        ? "bg-[#f36801] text-white shadow-sm"
                        : "bg-[#fbf9f8] text-[#594236] border border-[#e1c0b1]/50 hover:bg-[#f5f3f3]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input & Presets */}
            <div className="space-y-2.5">
              <label className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#9f4200] block">
                Contribution Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 font-serif text-lg font-bold text-[#1b1c1c]">
                  ₹
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#e1c0b1]/70 bg-[#fbf9f8] focus:border-[#f36801] focus:ring-2 focus:ring-[#f36801]/20 transition-all outline-none text-xl font-serif font-semibold text-[#1b1c1c] shadow-inner"
                  placeholder="0.00"
                />
              </div>

              {/* Preset Buttons */}
              <div className="flex gap-2 flex-wrap pt-0.5">
                {["500", "1000", "2500", "5000", "10000"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    className={`px-3 py-1.5 rounded-full border transition-all font-sans font-semibold text-xs ${
                      amount === val
                        ? "bg-[#1b1c1c] text-white border-[#1b1c1c] shadow-sm"
                        : "bg-white text-[#594236] border-[#e1c0b1]/60 hover:border-[#f36801] hover:text-[#f36801]"
                    }`}
                  >
                    ₹{Number(val).toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full mt-5 py-3 rounded-full bg-[#f36801] text-white font-sans font-semibold text-xs sm:text-sm hover:bg-[#9f4200] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">lock</span>
            <span>Complete Secure Giving</span>
          </button>
        </div>

        {/* UPI / QR Code Card (1 Col) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#e1c0b1]/50 flex flex-col items-center text-center justify-between hover-lift">
          <div className="w-full space-y-1">
            <div className="w-9 h-9 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center mx-auto mb-1">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                qr_code_scanner
              </span>
            </div>
            <h3 className="font-serif font-medium text-xl text-[#1b1c1c]">
              Scan UPI / GPay
            </h3>
            <p className="font-sans text-[#594236] text-[11px] leading-tight max-w-xs mx-auto">
              Scan using Google Pay, PhonePe, Paytm, BHIM, or any banking app.
            </p>
          </div>

          {/* Compact Clean QR Frame */}
          <div className="my-3 p-2.5 bg-[#fbf9f8] rounded-xl border border-dashed border-[#e1c0b1]/70 flex flex-col items-center justify-center relative shadow-inner w-full max-w-[160px]">
            <div className="w-28 h-28 bg-white rounded-lg p-1.5 shadow-sm border border-[#e1c0b1]/40 flex items-center justify-center">
              {/* Clean QR Graphic */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#1b1c1c]" fill="currentColor">
                {/* QR Finder Patterns */}
                <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="4"/>
                <rect x="11" y="11" width="16" height="16" rx="2" fill="currentColor"/>
                <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="4"/>
                <rect x="73" y="11" width="16" height="16" rx="2" fill="currentColor"/>
                <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="4"/>
                <rect x="11" y="73" width="16" height="16" rx="2" fill="currentColor"/>
                
                {/* Data Modules */}
                <rect x="40" y="8" width="6" height="6" rx="1"/>
                <rect x="50" y="8" width="6" height="6" rx="1"/>
                <rect x="40" y="18" width="6" height="6" rx="1"/>
                <rect x="56" y="18" width="6" height="6" rx="1"/>
                <rect x="8" y="40" width="6" height="6" rx="1"/>
                <rect x="18" y="40" width="6" height="6" rx="1"/>
                <rect x="8" y="50" width="6" height="6" rx="1"/>
                <rect x="24" y="50" width="6" height="6" rx="1"/>
                <rect x="40" y="40" width="20" height="20" rx="3" fill="#f36801"/>
                <circle cx="50" cy="50" r="4" fill="white"/>
                <rect x="68" y="40" width="6" height="6" rx="1"/>
                <rect x="78" y="40" width="14" height="6" rx="1"/>
                <rect x="68" y="50" width="6" height="6" rx="1"/>
                <rect x="86" y="50" width="6" height="6" rx="1"/>
                <rect x="40" y="68" width="6" height="14" rx="1"/>
                <rect x="50" y="68" width="14" height="6" rx="1"/>
                <rect x="50" y="78" width="6" height="14" rx="1"/>
                <rect x="68" y="68" width="12" height="12" rx="2"/>
                <rect x="84" y="68" width="8" height="8" rx="1"/>
                <rect x="68" y="84" width="8" height="8" rx="1"/>
                <rect x="80" y="84" width="12" height="12" rx="2"/>
              </svg>
            </div>
            <span className="text-[9px] font-sans font-semibold text-[#594236] uppercase tracking-wider mt-1.5">
              Trinity Worship Center
            </span>
          </div>

          {/* Copyable UPI Badge */}
          <div className="w-full space-y-1.5">
            <button
              type="button"
              onClick={() => copyToClipboard("twc@upi", "upi")}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbf9f8] border border-[#e1c0b1]/60 text-[11px] font-mono font-semibold text-[#9f4200] hover:bg-[#f5f3f3] transition-colors"
            >
              <span>UPI ID: twc@upi</span>
              <span className="material-symbols-outlined text-xs">
                {copiedField === "upi" ? "check" : "content_copy"}
              </span>
            </button>
            <p className="text-[9px] font-sans text-[#594236]/80 tracking-wide uppercase">
              GPay • PhonePe • Paytm • BHIM
            </p>
          </div>
        </div>

        {/* Bank Transfer Details Section (Full 3 Cols) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 col-span-1 md:col-span-3 lg:col-span-3 shadow-sm border border-[#e1c0b1]/50 hover-lift">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_balance
                </span>
              </div>
              <div>
                <h2 className="font-serif font-medium text-xl sm:text-2xl text-[#1b1c1c]">
                  Direct Bank Transfer
                </h2>
                <p className="font-sans text-[11px] text-[#594236]">
                  Use these account details for NEFT, RTGS, or IMPS wire transfers.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Account Name */}
            <div className="p-3.5 rounded-xl bg-[#fbf9f8] border border-[#e1c0b1]/50 flex flex-col justify-between">
              <div>
                <p className="text-[9px] font-sans text-[#594236] uppercase tracking-wider mb-0.5 font-semibold">
                  Account Name
                </p>
                <p className="font-serif text-sm sm:text-base text-[#1b1c1c] font-semibold leading-snug">
                  Trinity Worship Center
                </p>
              </div>
            </div>

            {/* Account Number with Copy */}
            <div className="p-3.5 rounded-xl bg-[#fbf9f8] border border-[#e1c0b1]/50 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[9px] font-sans text-[#594236] uppercase tracking-wider mb-0.5 font-semibold">
                    Account Number
                  </p>
                  <p className="text-sm sm:text-base text-[#1b1c1c] font-mono font-semibold">
                    0123 4567 8901 234
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("012345678901234", "acc")}
                  className="p-1 rounded-md text-[#f36801] hover:bg-[#f36801]/10 transition-colors"
                  title="Copy Account Number"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedField === "acc" ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* IFSC Code with Copy */}
            <div className="p-3.5 rounded-xl bg-[#fbf9f8] border border-[#e1c0b1]/50 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[9px] font-sans text-[#594236] uppercase tracking-wider mb-0.5 font-semibold">
                    IFSC Code
                  </p>
                  <p className="text-sm sm:text-base text-[#1b1c1c] font-mono font-semibold">
                    HDFC0001234
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("HDFC0001234", "ifsc")}
                  className="p-1 rounded-md text-[#f36801] hover:bg-[#f36801]/10 transition-colors"
                  title="Copy IFSC Code"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedField === "ifsc" ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* Bank & Branch */}
            <div className="p-3.5 rounded-xl bg-[#fbf9f8] border border-[#e1c0b1]/50 flex flex-col justify-between">
              <div>
                <p className="text-[9px] font-sans text-[#594236] uppercase tracking-wider mb-0.5 font-semibold">
                  Bank &amp; Branch
                </p>
                <p className="font-serif text-sm sm:text-base text-[#1b1c1c] font-semibold leading-snug">
                  HDFC Bank, Mogappair West
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



