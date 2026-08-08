"use client";

import React from "react";

export default function MinistrySection() {
  return (
    <section className="px-6 pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        {/* Spark Kids (Large Span) */}
        <div className="lg:col-span-2 group rounded-2xl overflow-hidden relative shadow-sm border border-[#e0dedc] hover:shadow-md transition-all duration-300 bg-white min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6"
            alt="Spark Kids Ministry"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="material-symbols-outlined text-3xl text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
              <h3 className="text-3xl font-bold">Spark Kids</h3>
            </div>
            <p className="text-white/90 text-lg mb-4 max-w-lg leading-relaxed">
              A safe, fun, and engaging environment where children learn about God&apos;s love through age-appropriate lessons.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">schedule</span>
                Sundays, 10:00 AM
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">location_on</span>
                Children&apos;s Wing
              </span>
            </div>
          </div>
        </div>

        {/* Transit (Youth) */}
        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e0dedc] hover:shadow-md transition-all duration-300 bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#fce1cc] text-[#f36801] flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1918] mb-3">Transit</h3>
            <p className="text-[#4d4c4b] leading-relaxed">
              Middle and high school students exploring faith, building friendships, and serving others.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e0dedc] mt-4">
            <p className="text-sm text-[#4d4c4b] flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-lg text-[#f36801]">schedule</span>
              Wednesdays, 7:00 PM
            </p>
          </div>
        </div>

        {/* Young Adults */}
        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e0dedc] hover:shadow-md transition-all duration-300 bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1918] mb-3">Young Adults</h3>
            <p className="text-[#4d4c4b] leading-relaxed">
              For college students and young professionals navigating life, career, and faith together.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e0dedc] mt-4">
            <p className="text-sm text-[#4d4c4b] flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-lg text-[#f36801]">schedule</span>
              Thursdays, 6:30 PM
            </p>
          </div>
        </div>

        {/* Cell Groups (Large Span) */}
        <div className="lg:col-span-2 group rounded-2xl overflow-hidden relative shadow-sm border border-[#e0dedc] hover:shadow-md transition-all duration-300 bg-white min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-3/4" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q"
            alt="Cell Groups Fellowship"
            className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-20 h-full flex flex-col justify-center p-8 max-w-md">
            <span className="inline-block px-3 py-1 bg-[#acc300]/20 text-[#586400] text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wider">
              The Core
            </span>
            <h3 className="text-3xl font-bold text-[#1a1918] mb-3">Cell Groups</h3>
            <p className="text-[#4d4c4b] text-lg mb-6 leading-relaxed">
              The heartbeat of our church. Meet weekly in homes across the city to share meals, study scripture, and pray for one another.
            </p>
          </div>
        </div>

        {/* Men's & Women's Stack */}
        <div className="flex flex-col gap-6">
          <div className="flex-1 p-6 rounded-2xl border border-[#e0dedc] bg-white hover:border-[#f36801]/50 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-600">man</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1918]">Men&apos;s Fellowship</h3>
            </div>
            <p className="text-sm text-[#4d4c4b] mb-3">Building strong men through accountability and study.</p>
            <p className="text-xs text-[#4d4c4b] font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#f36801]">schedule</span>
              1st Saturdays, 8:00 AM
            </p>
          </div>

          <div className="flex-1 p-6 rounded-2xl border border-[#e0dedc] bg-white hover:border-[#f36801]/50 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-rose-500">woman</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1918]">Women&apos;s Fellowship</h3>
            </div>
            <p className="text-sm text-[#4d4c4b] mb-3">Encouraging women to grow in grace and community.</p>
            <p className="text-xs text-[#4d4c4b] font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#f36801]">schedule</span>
              2nd Saturdays, 9:30 AM
            </p>
          </div>
        </div>

        {/* Prayer Meeting (Full Row Span) */}
        <div className="lg:col-span-3 rounded-2xl bg-[#1a1918] text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4 text-[#acc300]">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                volunteer_activism
              </span>
              <span className="font-bold tracking-widest uppercase text-sm">
                Corporate Focus
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Prayer Meeting</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Join us as we seek God&apos;s guidance for our church, our city, and the world. All are welcome.
            </p>
          </div>
          <div className="relative z-10 shrink-0 text-center md:text-right">
            <p className="text-xl font-medium mb-4">Tuesdays, 6:00 AM &amp; 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
