"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
    eyebrow: "ABOUT US · PLT PROPERTIES",
    heading: "Building Dubai's Future, Today",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920",
    eyebrow: "ABOUT US · PLT PROPERTIES",
    heading: "European Standards, Arabian Hospitality",
  },
  {
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920",
    eyebrow: "ABOUT US · PLT PROPERTIES",
    heading: "Redefining Luxury Living in Dubai",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b0b0c] ">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        initialSlide={0}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop
        pagination={{
          el: ".custom-hero-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        className="hero-swiper h-full w-full"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              <div
                className="absolute inset-0 bg-cover bg-center slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 text-white mx-auto">
                <h1 className="italic font-light text-3xl sm:text-5xl md:text-6xl leading-[1.15] max-w-4xl mx-auto text-center mb-10">
                  {slide.heading}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- FIXED: PERFECTLY CENTERED BOTTOM CONTAINER --- */}
      <div className="custom-hero-pagination absolute bottom-15 left-0 right-0 mx-auto z-30 flex items-center justify-center gap-3 w-max h-auto !top-auto" />

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 right-8 z-20 items-center gap-2">
        <span className="font-sans text-[11px] tracking-[0.25em] text-white/70 [writing-mode:vertical-rl] rotate-180">
          SCROLL
        </span>
      </div>

    </section>
  );
}