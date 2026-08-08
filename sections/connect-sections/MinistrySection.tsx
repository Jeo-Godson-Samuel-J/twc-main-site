"use client";

import React from "react";

export default function MinistrySection() {
  return (
    <section className="px-4 sm:px-6 pt-6 sm:pt-8 pb-16 bg-[#fbf9f8] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        {/* Row 1: Spark Kids (2 cols) + Transit Youth (1 col) */}
        <div className="lg:col-span-2 group rounded-2xl overflow-hidden relative shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/85 via-[#1b1c1c]/30 to-transparent z-10" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6"
            alt="Spark Kids Ministry"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="material-symbols-outlined text-3xl text-[#f36801]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
              <h3 className="font-serif font-medium text-3xl text-white">Spark Kids</h3>
            </div>
            <p className="font-sans text-white/90 text-base mb-4 max-w-lg leading-relaxed">
              A safe, joyful, and engaging environment where children learn God&apos;s Word through interactive storytelling and games.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans font-semibold text-white/80 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-[#f36801]">schedule</span>
                Sundays, 8 AM &amp; 10:30 AM
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-[#f36801]">location_on</span>
                Children&apos;s Wing
              </span>
            </div>
          </div>
        </div>

        {/* Transit (Youth) */}
        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
            </div>
            <h3 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Transit Youth</h3>
            <p className="font-sans text-[#594236] text-sm leading-relaxed">
              Middle and high school students discovering their identity in Christ, building godly friendships, and serving the city.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e1c0b1]/40 mt-4">
            <p className="text-xs font-sans font-semibold text-[#594236] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#f36801]">schedule</span>
              Fridays, 7:00 PM
            </p>
          </div>
        </div>

        {/* Row 2: Young Adults (1 col) + Cell Groups (2 cols) */}
        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
            </div>
            <h3 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Young Adults</h3>
            <p className="font-sans text-[#594236] text-sm leading-relaxed">
              For university students and young professionals navigating career, relationships, and faith together.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e1c0b1]/40 mt-4">
            <p className="text-xs font-sans font-semibold text-[#594236] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#f36801]">schedule</span>
              Saturdays, 6:00 PM
            </p>
          </div>
        </div>

        {/* Cell Groups (Large Span) */}
        <div className="lg:col-span-2 group rounded-2xl overflow-hidden relative shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 w-3/4 md:w-2/3" />
          {/* eslint-disable-next-html-element-suppression */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q"
            alt="Cell Groups Fellowship"
            className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-20 h-full flex flex-col justify-center p-8 max-w-md">
            <span className="inline-block px-3 py-1 bg-[#f36801]/10 text-[#9f4200] text-xs font-sans font-semibold rounded-full w-fit mb-3 uppercase tracking-wider">
              The Heartbeat
            </span>
            <h3 className="font-serif font-medium text-3xl text-[#1b1c1c] mb-2">Cell Groups</h3>
            <p className="font-sans text-[#594236] text-base mb-6 leading-relaxed">
              Meet weekly in homes across Mogappair and Chennai to share meals, study God&apos;s Word, and pray together.
            </p>
          </div>
        </div>

        {/* Row 3: Balanced 3-Card Row (Men's + Women's + Outreach & Missions) */}
        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">man</span>
            </div>
            <h3 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Men&apos;s Fellowship</h3>
            <p className="font-sans text-[#594236] text-sm leading-relaxed">
              Building godly men through accountability, leadership development, and biblical study.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e1c0b1]/40 mt-4">
            <p className="text-xs font-sans font-semibold text-[#9f4200] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#f36801]">schedule</span>
              1st Saturdays, 8:00 AM
            </p>
          </div>
        </div>

        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">woman</span>
            </div>
            <h3 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Women&apos;s Fellowship</h3>
            <p className="font-sans text-[#594236] text-sm leading-relaxed">
              Encouraging women to grow in grace, prayer, spiritual gifts, and sisterhood.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e1c0b1]/40 mt-4">
            <p className="text-xs font-sans font-semibold text-[#9f4200] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#f36801]">schedule</span>
              2nd Saturdays, 10:00 AM
            </p>
          </div>
        </div>

        <div className="group rounded-2xl overflow-hidden shadow-sm border border-[#e1c0b1]/50 hover-lift bg-white flex flex-col p-8 justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f36801]/10 text-[#f36801] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
            </div>
            <h3 className="font-serif font-medium text-2xl text-[#1b1c1c] mb-2">Outreach &amp; Missions</h3>
            <p className="font-sans text-[#594236] text-sm leading-relaxed">
              Serving our local community in Mogappair and planting churches across Tamil Nadu.
            </p>
          </div>
          <div className="pt-6 border-t border-[#e1c0b1]/40 mt-4">
            <p className="text-xs font-sans font-semibold text-[#9f4200] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#f36801]">schedule</span>
              Monthly Outreaches
            </p>
          </div>
        </div>

        {/* Row 4: Prayer Meeting (Full Row Span) */}
        <div className="lg:col-span-3 rounded-2xl bg-[#1b1c1c] text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-3 text-[#f36801]">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                volunteer_activism
              </span>
              <span className="font-sans font-semibold tracking-widest uppercase text-xs">
                Prayer &amp; Intercession
              </span>
            </div>
            <h3 className="font-serif font-medium text-3xl md:text-4xl text-white mb-3">Midweek Prayer Service</h3>
            <p className="font-sans text-[#cfc4c5] text-base leading-relaxed">
              Join us every Wednesday as we seek God&apos;s guidance, pray for families, and intercede for our city.
            </p>
          </div>
          <div className="relative z-10 shrink-0 text-center md:text-right">
            <p className="font-serif font-semibold text-xl text-[#f36801] mb-2">Wednesdays, 7:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}


