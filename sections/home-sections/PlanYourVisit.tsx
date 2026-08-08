"use client";

import React from "react";
import Link from "next/link";

export default function PlanYourVisit() {
  return (
    <section className="py-24 bg-[#f5f4f2] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#586400] uppercase tracking-widest mb-3">
            8 AM TAMIL | 10:30 AM ENGLISH
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-6">
            Your first Sunday
          </h1>
          <p className="text-xl text-[#4d4c4b]">
            We&apos;d love to meet you... Come as you are: you&apos;ll find people in everything from sarees to jeans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Main Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Join us this weekend</h3>
              <p className="text-white/80 max-w-md mb-6">
                Experience uplifting worship, an encouraging message, and a community ready to welcome you.
              </p>
              <Link
                href="/visit#plan-visit"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#f36801] text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-200"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          {/* Spark Kids Card */}
          <div className="rounded-3xl bg-white p-8 border border-[#e0dedc] shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#acc300]/20 rounded-full flex items-center justify-center text-[#586400] mb-4">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1918] mb-2">
                Spark Kids
              </h3>
              <p className="text-[#4d4c4b] text-sm leading-relaxed">
                Your kids are welcome too! Spark Kids runs alongside both services with fun, age-appropriate learning.
              </p>
            </div>
          </div>

          {/* Timings Card */}
          <div className="rounded-3xl bg-[#1a1918] text-white p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#f36801]/20 rounded-full blur-2xl" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Service Times
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#f36801]">
                  schedule
                </span>
                <div>
                  <p className="font-bold">8:00 AM</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">
                    Tamil Service
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#acc300]">
                  schedule
                </span>
                <div>
                  <p className="font-bold">10:30 AM</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">
                    English Service
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


