"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const ministries = [
  {
    number: "01",
    titleFirst: "Spark",
    titleHighlight: "Kids.",
    time: "Sundays • 8:00 AM & 10:30 AM",
    subtitle: "Fun & faith for ages 3–12",
    description:
      "A safe, joyful, and engaging environment where children discover God’s Word through interactive Bible storytelling, worship, and age-appropriate small groups during both Sunday services.",
    icon: "child_care",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6",
  },
  {
    number: "02",
    titleFirst: "Transit",
    titleHighlight: "Youth.",
    time: "Fridays • 7:00 PM",
    subtitle: "Teens finding purpose",
    description:
      "Middle and high school students gathering every Friday night for high-energy worship, honest conversations about faith and life, and building lifelong Christ-centered friendships.",
    icon: "local_fire_department",
    image: "/hero-worship.png",
  },
  {
    number: "03",
    titleFirst: "Young",
    titleHighlight: "Adults.",
    time: "Saturdays • 6:00 PM",
    subtitle: "Community for 18–30s",
    description:
      "University students and young professionals navigating career, relationships, and calling together through authentic fellowship, mentorship, and Scripture study.",
    icon: "groups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6",
  },
  {
    number: "04",
    titleFirst: "Men’s",
    titleHighlight: "Fellowship.",
    time: "1st Saturday • 8:00 AM",
    subtitle: "Brotherhood & accountability",
    description:
      "Equipping men to lead with integrity at home, in the workplace, and in the church through brotherhood, prayer, accountability, and practical biblical wisdom.",
    icon: "man",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdxTRB2UdtDbAs5WwjBT7wkJuWeJ149Rt4bdbUXgiXY9MdHQBtomHgrUP6M3UfwaFp2X7eq-UNGih9EveBezXbZgePwmDmg6kt1oKiJE9Y0rT-J9CjpnyDwcWJryCGoTgIW_UdR3jPrn5gclyVijz2D4Lpgi0Q4S3ckbqK0QIQIxLeCo0ixqzknMIJw_QHyv73DVb6bTcB7MdHq4XWkKHe3PlnV5zhdfMDq7aQiNLWHKLM44PkVza",
  },
  {
    number: "05",
    titleFirst: "Women’s",
    titleHighlight: "Fellowship.",
    time: "2nd Saturday • 10:00 AM",
    subtitle: "Sisterhood & spiritual growth",
    description:
      "A warm sisterhood where women of all generations encourage one another, grow in grace and spiritual gifts, and stand together in fervent prayer.",
    icon: "favorite",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q",
  },
  {
    number: "06",
    titleFirst: "Midweek",
    titleHighlight: "Prayer.",
    time: "Wednesdays • 7:00 PM",
    subtitle: "Intercession & worship",
    description:
      "The spiritual engine of Trinity Worship Center. Gather midweek as a church family to seek God’s presence, pray for one another, and intercede for Mogappair and Chennai.",
    icon: "volunteer_activism",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL",
  },
];

export default function BeyondSunday() {
  const runwayRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const runway = runwayRef.current;
    const track = trackRef.current;
    if (!runway || !track) return;

    const totalSlides = ministries.length;

    // Slower, weighted GSAP damping on the track's horizontal translation
    const xTo = gsap.quickTo(track, "xPercent", {
      duration: 0.95,
      ease: "power3.out",
    });

    const handleScroll = () => {
      const rect = runway.getBoundingClientRect();
      const scrollableDistance = runway.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const rawProgress = -rect.top / scrollableDistance;

      // Hold buffer at the start (6%) and end (8%) so the first and last cards pause comfortably
      const mappedProgress = Math.min(
        1,
        Math.max(0, (rawProgress - 0.06) / 0.86)
      );

      // Translate track horizontally across all 6 slides (-100% per slide step)
      xTo(-mappedProgress * (totalSlides - 1) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#fbf9f8] text-[#1b1c1c] border-b border-[#e1c0b1]/40">
      {/* Longer 960vh Scroll Runway (160vh per card) — slows down horizontal movement per scroll */}
      <div
        ref={runwayRef}
        style={{ height: `${ministries.length * 160}vh` }}
        className="relative w-full"
      >
        {/* Sticky Full-Screen Viewport — locks the horizontal scroll in the center of the screen */}
        <div className="sticky top-0 left-0 w-full h-screen pt-16 sm:pt-20 pb-6 flex flex-col justify-center overflow-hidden bg-[#fbf9f8] z-20">
          {/* Top Header */}
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 mb-5 sm:mb-7 shrink-0">
            <div className="space-y-1.5">
              <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9f4200]">
                Active Community
              </p>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.03em] leading-[1.06] text-[#1b1c1c]">
                Beyond <span className="text-[#f36801]">Sunday</span>
              </h2>
            </div>
          </div>

          {/* Centered Horizontal Scroll Track — Each Slide Spans Full Screen Width with Left & Right Margins */}
          <div
            ref={trackRef}
            className="flex w-full items-center flex-nowrap will-change-transform"
          >
            {ministries.map((ministry) => (
              <div
                key={ministry.number}
                className="w-full shrink-0 px-6 sm:px-10 md:px-16 lg:px-24"
              >
                {/* Full-Width Card Inside Margins: Image on Left, Content on Right */}
                <div className="w-full max-w-[1440px] mx-auto rounded-3xl overflow-hidden bg-[#231815] text-white shadow-2xl border border-[#e1c0b1]/20 grid grid-cols-1 lg:grid-cols-12 h-[420px] sm:h-[450px] lg:h-[480px]">
                  {/* Left Side: Full-Bleed Event Image */}
                  <div className="lg:col-span-6 relative h-[190px] sm:h-[220px] lg:h-full overflow-hidden bg-[#1b1c1c]">
                    {/* eslint-disable-next-html-element-suppression */}
                    <img
                      src={ministry.image}
                      alt={`${ministry.titleFirst} ${ministry.titleHighlight} at Trinity Worship Center`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#231815]/80 via-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#231815]/40" />
                  </div>

                  {/* Right Side: Editorial Event Content */}
                  <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center items-start space-y-4 sm:space-y-5 relative overflow-hidden">
                    {/* Ambient Orange Glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 bg-[#f36801]/15 rounded-full blur-3xl"
                    />

                    {/* Schedule Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f36801]/15 border border-[#f36801]/30 text-[#f36801] font-sans font-bold text-xs uppercase tracking-[0.18em]">
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {ministry.icon}
                      </span>
                      <span>{ministry.time}</span>
                    </div>

                    {/* Bold Two-Tone Heading */}
                    <div className="space-y-1">
                      <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#cfc4c5]">
                        {ministry.subtitle}
                      </p>
                      <h3 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
                        {ministry.titleFirst}{" "}
                        <span className="text-[#f36801]">
                          {ministry.titleHighlight}
                        </span>
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm sm:text-base lg:text-lg text-[#fbf9f8]/85 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                      {ministry.description}
                    </p>

                    {/* Outlined Pill CTA */}
                    <div className="pt-1">
                      <Link
                        href="/connect"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/80 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#f36801] hover:border-[#f36801] active:scale-95 transition-all duration-200"
                      >
                        Get Connected
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
