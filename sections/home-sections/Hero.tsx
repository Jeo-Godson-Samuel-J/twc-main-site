"use client";

import React from "react";
import Link from "next/link";

const heroPhotos = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWDpsFP0MGUSBv8HhEZrxwn-3NPBgbQ85dVuh8-lsgFQhx8kIvOLTsG2YnaGYq5DzL-W-fyRNMGe3L1JXpx2UZe4NzsgXsmapuVK4-eGPi5gKzosZ8Ndc8p0vkuv63FgXSTftHjTRF-oj1Wlqv1X5RA15xRXDB2aJ4fqszEUz9uLl5Zm_6R0jrmH9-9mCWxlyknvpjQE-c3NZi_CFAEVNkFa22UC8d68oB1Fozq6Ed3eoq3sAu4u6",
    alt: "Warm church community fellowship at Trinity Worship Center",
  },
  {
    src: "/hero-worship.png",
    alt: "Sunday worship gathering at Trinity Worship Center",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDwx7KjhBu3etqiXkc9Bn0fcIuS9aI2eXnsSFO9yDmjZBta6brAQ1_FJ_yv94EFxR2jPu3vOSe5PDouw8KogW5UeLuhYR-Qp6n0KioZeP9ctfs_6wpjSDwbT322NeRxrU-7jvUhCeHP96Izx_tmhGfcBIm6b_i3-S4EGVcJeyyY_EnYUN9-_476yOtYYSc-W90GrMFHfzhNWxsPhq-zbl4zzNT8JTx_jrjr4mI9fhxV8RBA3KUqEWL",
    alt: "Joyful worship and praising God together",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5zOfiaZny82QjSV5E2VdAZ_eYcxiV6R4mB47TRQZILrX9JT8Tx_fBfLiRNCQNfwlIWFXloagakH2j-fwKcBjOyxI30gH94t99AUU0nktJn4AJ42CogSFToJsAUDqZetnIqCtwGrTNS_K91OkuKFBqixXfA-MyVtPNiCZZ3jfB-7tQTPkOhc2ZDoqoMAOfRwxTU1sDgkaIj1vRvkrhC3HHw62fWjUXq75UXndk164Oks9hSVMlCJ8Q",
    alt: "Cell group fellowship and community connection",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdxTRB2UdtDbAs5WwjBT7wkJuWeJ149Rt4bdbUXgiXY9MdHQBtomHgrUP6M3UfwaFp2X7eq-UNGih9EveBezXbZgePwmDmg6kt1oKiJE9Y0rT-J9CjpnyDwcWJryCGoTgIW_UdR3jPrn5gclyVijz2D4Lpgi0Q4S3ckbqK0QIQIxLeCo0ixqzknMIJw_QHyv73DVb6bTcB7MdHq4XWkKHe3PlnV5zhdfMDq7aQiNLWHKLM44PkVza",
    alt: "Congregation gathering at Trinity Worship Center Mogappair",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjYRlECmDxW9AO50K5sEXsHezJOm-2LqLhynS0szreRK3QrhWsyIhlS_BJ0LTB6IvfRim6YUqeHb7GsSyZhgzLFqrYcFqBsStHbUED7MCc8wppkUGtgt4LisqPqZEn3Z9kBXII2wILfgkQQ_HS3UcClABCBGdp6KdxIhyhuneu9HybdKhGRXlJQ5VqPzf0fltcAOvsmz4yIeo7zj_ziKl9nln_MN1PCwz6guDduiBezy9t-0TzQZf6",
    alt: "Families and Spark Kids ministry at Trinity Worship Center",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fbf9f8] text-[#1b1c1c] pt-10 sm:pt-14 md:pt-16 pb-8 overflow-hidden">
      {/* Centered Editorial Text Block */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
        <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9f4200]">
          Trinity Worship Center
        </p>

        <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] uppercase tracking-[0.04em] leading-[1.12] text-[#1b1c1c]">
          Learning To Follow
          <br />
          Jesus <span className="text-[#f36801]">Together</span>
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#594236] max-w-xl mx-auto leading-relaxed">
          Trinity Worship Center is a church family that prays for one another,
          learns from the Scriptures, worships Jesus, and lives life in
          community.
        </p>

        <div className="pt-2">
          <Link
            href="/visit"
            className="inline-flex items-center justify-center px-9 py-3.5 sm:px-10 sm:py-4 bg-[#f36801] hover:bg-[#9f4200] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>

      {/* Curved-Arc Left-to-Right Infinite Photo Carousel */}
      <div className="relative w-full mt-6 sm:mt-8 md:mt-10 overflow-hidden">
        {/* Top Concave Arc Overlay — sculpts the top of the moving photos into a continuous downward curve */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute -top-[1px] left-0 w-full h-8 sm:h-12 md:h-16 lg:h-20 z-10"
        >
          <path
            d="M0,0 L1440,0 L1440,10 Q720,120 0,10 Z"
            fill="#fbf9f8"
          />
        </svg>

        {/* Infinite Moving Track (Left -> Right) */}
        <div className="hero-arc-track gap-5 sm:gap-7 md:gap-8">
          {/* First Set */}
          <div className="flex gap-5 sm:gap-7 md:gap-8 shrink-0">
            {heroPhotos.map((photo, idx) => (
              <div
                key={`hero-photo-a-${idx}`}
                className="relative w-[260px] sm:w-[340px] md:w-[400px] lg:w-[440px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] shrink-0 overflow-hidden bg-[#efeded]"
              >
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div
            className="flex gap-5 sm:gap-7 md:gap-8 shrink-0"
            aria-hidden="true"
          >
            {heroPhotos.map((photo, idx) => (
              <div
                key={`hero-photo-b-${idx}`}
                className="relative w-[260px] sm:w-[340px] md:w-[400px] lg:w-[440px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] shrink-0 overflow-hidden bg-[#efeded]"
              >
                {/* eslint-disable-next-html-element-suppression */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Concave Arc Overlay — sculpts the bottom of the moving photos into a matching upward curve */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[1px] left-0 w-full h-8 sm:h-12 md:h-16 lg:h-20 z-10"
        >
          <path
            d="M0,120 L1440,120 L1440,110 Q720,0 0,110 Z"
            fill="#fbf9f8"
          />
        </svg>
      </div>
    </section>
  );
}
