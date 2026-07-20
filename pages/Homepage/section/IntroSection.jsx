"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SLIDES = [
  {
    image: "/images/homepage/intro-image.jpg",
    headline: (
      <>
        New vision. <span className="font-medium text-[var(--accent-gold)]">Established strength.</span>
      </>
    ),
    paragraphs: [
      "PLT Properties is backed by PLT Holding, a diversified international group founded through the entrepreneurial vision of the Tortora Family.",
      "Across renewable energy, finance, artificial intelligence, hospitality and strategic investments, PLT Holding has built its reputation on long-term thinking, disciplined execution and responsible growth.",
      "PLT Properties brings this same foundation to real estate — combining the energy of a new lifestyle developer with the strength and capabilities of an established group.",
    ],
    cta: { label: "Discover PLT Holding", href: "#" },
    credentials: [
      { numeral: "I", label: "Years of Craft", value: "15+" },
      { numeral: "II", label: "DLD Escrow-Backed", value: "100%" },
      { numeral: "III", label: "Flagship Location", value: "Business Bay" },
      { numeral: "IV", label: "Design Heritage", value: "European" },
    ],
  },
  {
    image: "/images/home-slider/imgslide2.jpg",
    headline: (
      <>
        A new generation of <span className="font-medium text-[var(--accent-gold)]">real estate</span>
      </>
    ),
    paragraphs: [
      "PLT Properties creates more than beautiful projects. We create places designed to make everyday life feel better.",
      "Inspired by the Italian way of living, our developments bring together timeless architecture, natural beauty, considered craftsmanship and genuine hospitality.",
      "Every project begins with a simple question: how can this place improve the way people live? The answer can be found in every detail — from the flow of a home and the quality of its light to the landscapes, experiences and connections that surround it.",
    ],
    credentials: [
      { numeral: "I", label: "Years of Craft", value: "15+" },
      { numeral: "II", label: "DLD Escrow-Backed", value: "100%" },
      { numeral: "III", label: "Flagship Location", value: "Business Bay" },
      { numeral: "IV", label: "Design Heritage", value: "European" },
    ],
  },
  {
    image: "/images/home-slider/imgslide3.jpg",
    headline: (
      <>
        A beautiful place is only <span className="font-medium text-[var(--accent-gold)]">the beginning</span>
      </>
    ),
    paragraphs: [
      "At PLT Properties, luxury is not measured by excess. It is measured by experience and by the quality of life.",
    ],
    pillars: [
      {
        label: "Italian Elegance",
        text: "A design culture shaped by proportion, beauty and an appreciation for the art of living well.",
      },
      {
        label: "Architectural Excellence",
        text: "Distinctive architecture where every detail has a purpose and every element contributes to the whole.",
      },
      {
        label: "Inspired by Nature",
        text: "Natural light, landscaping and outdoor spaces are integrated into our projects to support balance and wellbeing.",
      },
      {
        label: "Timeless Design",
        text: "Spaces conceived to endure — designed beyond trends, with materials and forms that age gracefully.",
      },
      {
        label: "Investment Confidence",
        text: "DLD escrow-backed developments delivered with transparency, discipline and long-term value in mind.",
      },
      {
        label: "Premium Experience",
        text: "Genuine hospitality and considered services that make everyday living feel effortless and refined.",
      },
    ],
  },
];

function PillarBoxes({ pillars }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 animate-[riseIn_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
      {pillars.map((pillar, index) => (
        <div key={index} className="flex flex-col">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex flex-col items-center justify-center gap-2 px-3 py-5 bg-[rgba(237,230,216,0.06)] border border-[rgba(237,230,216,0.16)] backdrop-blur-[14px] text-center transition-colors duration-300 hover:bg-[rgba(237,230,216,0.12)] cursor-pointer"
          >
            <span className="font-sans text-[11px] md:text-[12px] tracking-[0.16em] uppercase text-[var(--text-primary)] leading-snug">
              {pillar.label}
            </span>
            <ChevronDown
              size={14}
              className={`text-[var(--accent-gold)] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-2" : "max-h-0"}`}
          >
            <p className="m-0 p-3 bg-[rgba(237,230,216,0.08)] border border-[rgba(237,230,216,0.16)] backdrop-blur-[14px] text-[12px] leading-relaxed text-[var(--text-secondary)] text-center">
              {pillar.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function IntroSection() {
  return (
    <section id="building" className="w-full min-h-screen relative overflow-hidden bg-[var(--bg-tertiary)]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        initialSlide={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{
          el: ".custom-intro-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        navigation={{
          prevEl: ".intro-nav-prev",
          nextEl: ".intro-nav-next",
        }}
        className="intro-swiper h-full w-full"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full min-h-screen flex flex-col py-12 md:py-28">
              {/* Background Image with Gradients */}
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(100deg, rgba(20,17,14,0.94) 8%, rgba(20,17,14,0.72) 34%, rgba(20,17,14,0.30) 62%, rgba(20,17,14,0.55) 100%),
                      linear-gradient(to top, rgba(20,17,14,0.85) 0%, rgba(20,17,14,0.05) 38%),
                      url('${slide.image}')
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 62%'
                  }}
                />
                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.55)]" />
              </div>

              {/* Hero Content */}
              <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 py-0">
                <div className="max-w-[620px] py-4 animate-[riseIn_1s_cubic-bezier(0.2,0.8,0.2,1)_both]">
                  {/* Headline */}
                  <h2 className="font-serif font-normal text-[clamp(36px,5vw,52px)] leading-[1.12] tracking-[-0.01em] m-0 mb-6.5 text-[var(--text-primary)]">
                    {slide.headline}
                  </h2>

                  {/* Description */}
                  {slide.paragraphs.map((para, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[520px] m-0 mb-5 last:mb-9.5"
                    >
                      {para}
                    </p>
                  ))}

                  {/* CTA */}
                  {slide.cta && (
                    <a
                      href={slide.cta.href}
                      className="inline-flex items-center mt-4 px-6 py-2.5 font-sans font-[300] text-[14px] tracking-[2px] uppercase transition-all duration-300 border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#14110e]"
                    >
                      {slide.cta.label}
                    </a>
                  )}
                </div>
              </div>

              {/* Ledger / Credentials or Pillars */}
              <div className="relative z-10 px-6 md:px-12 pb-11">
                {slide.pillars ? (
                  <PillarBoxes pillars={slide.pillars} />
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 bg-[rgba(237,230,216,0.06)] border border-[rgba(237,230,216,0.16)] backdrop-blur-[14px] animate-[riseIn_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
                    {slide.credentials.map((cred, index) => (
                      <div
                        key={index}
                        className={`p-4 md:p-6.5 border-r border-b md:border-b-0 border-[rgba(237,230,216,0.16)] flex gap-3 md:gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)] ${(index % 2 === 1 || index === 3) ? 'border-r-0' : ''} ${index >= 2 ? 'border-b-0 md:border-b' : ''}`}
                      >
                        <span className="font-serif italic text-[16px] md:text-[20px] text-[var(--accent-gold-dark)] leading-none pt-0.5">{cred.numeral}</span>
                        <div>
                          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] mb-2">{cred.label}</div>
                          <div className="font-serif text-[18px] md:text-[23px] font-medium text-[var(--text-primary)]">{cred.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute bottom-3 right-4 md:right-8 z-30 flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          className="intro-nav-prev flex w-10 h-10 items-center justify-center border border-[rgba(237,230,216,0.3)] bg-[rgba(20,17,14,0.35)] backdrop-blur-[6px] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="intro-nav-next flex w-10 h-10 items-center justify-center border border-[rgba(237,230,216,0.3)] bg-[rgba(20,17,14,0.35)] backdrop-blur-[6px] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pagination */}
      <div className="custom-intro-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-3 w-auto h-5" />

      <style jsx>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
