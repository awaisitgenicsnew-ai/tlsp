"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SLIDES = [
  {
    image: "/images/aboutimg1.jpeg",
    eyebrow: "ABOUT US · PLT PROPERTIES",
    heading: "Building Dubai's Future, Today",
    subheading: "Where Vision Meets Excellence"
  },
  {
    image: "/images/aboutimg2.jpeg",
    eyebrow: "ABOUT US · PLT PROPERTIES",
    heading: "European Standards, Arabian Hospitality",
    subheading: "A Legacy of Luxury"
  },
  {
    image: "/images/aboutimg3.jpeg",
    eyebrow: "ABOUT US · PLT PROPERTIES",
    heading: "Redefining Luxury Living in Dubai",
    subheading: "Crafting Extraordinary Spaces"
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--bg-hero)]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        initialSlide={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                className="absolute inset-0 bg-cover bg-center scale-105 slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="relative z-10 h-full w-full flex items-center px-6 md:px-12 ">
                <div className="max-w-4xl">
                  <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[var(--accent-brown)] mb-6 uppercase">
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-6">
                    {slide.heading}
                  </h1>
                  <div className="w-24 h-1 bg-[var(--accent-brown)] mb-8" />
                  <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                    {slide.subheading}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-hero-pagination absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-3" />

      <div className="hidden md:flex absolute bottom-12 right-12 z-20 items-center gap-3">
        <div className="w-12 h-px bg-white/30" />
        <span className="font-sans text-xs tracking-[0.25em] text-white/60 uppercase">
          Scroll to explore
        </span>
      </div>

      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: var(--accent-brown);
          width: 36px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}