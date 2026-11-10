"use client";

import React from "react";

const ministries = [
  {
    number: "01",
    titleFirst: "Sparkz",
    titleHighlight: "Kids.",
    day: "Sundays",
    time: "8:00 AM & 10:30 AM",
    subtitle: "Fun & faith for ages 3–12",
    description:
      "A safe, joyful, and engaging environment where children discover God’s Word through interactive Bible storytelling, worship, and age-appropriate small groups.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6",
  },
  {
    number: "02",
    titleFirst: "Transit",
    titleHighlight: "Youth.",
    day: "Fridays",
    time: "7:00 PM",
    subtitle: "Teens finding purpose",
    description:
      "Middle and high school students gathering every Friday night for high-energy worship, honest conversations about faith, and lifelong Christ-centered friendships.",
    image: "/hero-worship.png",
  },
  {
    number: "03",
    titleFirst: "Young",
    titleHighlight: "Adults.",
    day: "Saturdays",
    time: "6:00 PM",
    subtitle: "Community for 18–30s",
    description:
      "University students and young professionals navigating career, relationships, and calling together through authentic fellowship, mentorship, and Scripture study.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6",
  },
  {
    number: "04",
    titleFirst: "Men’s",
    titleHighlight: "Fellowship.",
    day: "1st Saturday",
    time: "8:00 AM",
    subtitle: "Brotherhood & accountability",
    description:
      "Equipping men to lead with integrity at home, in the workplace, and in the church through brotherhood, prayer, accountability, and practical biblical wisdom.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdxTRB2UdtDbAs5WwjBT7wkJuWeJ149Rt4bdbUXgiXY9MdHQBtomHgrUP6M3UfwaFp2X7eq-UNGih9EveBezXbZgePwmDmg6kt1oKiJE9Y0rT-J9CjpnyDwcWJryCGoTgIW_UdR3jPrn5gclyVijz2D4Lpgi0Q4S3ckbqK0QIQIxLeCo0ixqzknMIJw_QHyv73DVb6bTcB7MdHq4XWkKHe3PlnV5zhdfMDq7aQiNLWHKLM44PkVza",
  },
  {
    number: "05",
    titleFirst: "Women’s",
    titleHighlight: "Fellowship.",
    day: "2nd Saturday",
    time: "10:00 AM",
    subtitle: "Sisterhood & spiritual growth",
    description:
      "A warm sisterhood where women of all generations encourage one another, grow in grace and spiritual gifts, and stand together in fervent prayer.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q",
  },
  {
    number: "06",
    titleFirst: "Midweek",
    titleHighlight: "Prayer.",
    day: "Wednesdays",
    time: "7:00 PM",
    subtitle: "Intercession & worship",
    description:
      "The spiritual engine of Trinity Worship Center. Gather midweek as a church family to seek God’s presence, pray for one another, and intercede for Chennai.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL",
  },
];

export default function BeyondSunday() {
  return (
    <section className="relative w-full bg-[#0D0B0B] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 space-y-14 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f36801]">
              Active Community
            </p>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.03em] leading-[1.06] text-white">
              Beyond <span className="text-[#f36801]">Sunday</span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-white/75 max-w-md leading-relaxed">
            Church isn&apos;t just a Sunday service. Find your community and
            grow in faith throughout the week across Mogappair.
          </p>
        </div>

        {/* Tile-Based Grid (3x2 on Desktop, 2x3 on Tablet, 1x6 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ministries.map((ministry) => (
            <div
              key={ministry.number}
              className="group rounded-3xl overflow-hidden bg-[#171515] border border-white/10 hover:border-[#f36801]/50 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Tile Image Header */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0D0B0B]">
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src={ministry.image}
                  alt={`${ministry.titleFirst} ${ministry.titleHighlight} at Trinity Worship Center`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171515] via-black/20 to-transparent" />
              </div>

              {/* Tile Body */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-3">
                  <p className="font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-white/55">
                    {ministry.subtitle}
                  </p>

                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                    {ministry.titleFirst}{" "}
                    <span className="text-[#f36801]">
                      {ministry.titleHighlight}
                    </span>
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed">
                    {ministry.description}
                  </p>
                </div>

                {/* Date & Time Row at Bottom */}
                <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[#f36801] font-sans font-bold text-xs uppercase tracking-[0.18em]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">
                      calendar_today
                    </span>
                    <span>{ministry.day}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    <span>{ministry.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
