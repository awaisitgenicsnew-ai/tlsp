"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Building, Home, Ruler, MapPin, Eye, Train } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

export default function DevelopmentsSection() {
  const router = useRouter();
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
        if (ref.getBoundingClientRect().top < window.innerHeight) {
          ref.classList.add('in');
          observer.unobserve(ref);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleButtonClick = (link) => {
    if (!link) return;
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  const scrollToDevelopments = () => {
    const panel = document.getElementById('section-developments-grid');
    if (!panel) return;

    if (window.matchMedia('(min-width: 768px)').matches) {
      window.scrollTo({ top: panel.offsetLeft, behavior: 'smooth' });
    } else {
      panel.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Static project data
  const project = {
    badge: "Welcome back",
    title: "PLT Tower",
    location: "Business Bay, Dubai",
    description: "PLT Tower is the first expression of the PLT Properties vision. Rising in Dubai's Business Bay, the 39-storey residential development brings Italian design culture and a more personal understanding of luxury to one of the city's most dynamic destinations. Its architecture, residences and experiences are conceived around a single belief: the greatest luxury is how your home makes you feel.",
    type: "Residential",
    handover: "Q4 2026",
    payment: "60/40",
    primaryButtonText: "Discover PLT Tower",
    primaryButtonLink: "https://www.plttower.com/",
    secondaryButtonText: "Register Interest",
    secondaryButtonLink: "/register-interest"
  };

  // Project highlights
  const highlights = [
    { icon: <Building size={20} />, text: "39-storey residential tower" },
    { icon: <Home size={20} />, text: "384 residences" },
    { icon: <Ruler size={20} />, text: "Approximately 43,000 sqm of gross floor area" },
    { icon: <MapPin size={20} />, text: "Located on Marasi Drive in Business Bay" },
    { icon: <Eye size={20} />, text: "Unmatched Views toward Burj Khalifa and Dubai Canal" },
    { icon: <Train size={20} />, text: "Close to Downtown Dubai and DIFC" }
  ];

  // Static images from public folder
  const slides = [
    "/images/plt-tower.jpg",
    "/images/business-bay.jpg",
    "/images/home-slider/imgslide1.jpg"
  ];

  return (
    <section className="relative bg-[var(--bg-section)] py-[clamp(56px,10vw,110px)] px-[clamp(20px,5vw,18px)] overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(237,230,216,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,230,216,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          opacity: '0.05'
        }}
      />

      <div className="relative max-w-[1300px] mx-auto grid grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] gap-[clamp(36px,6vw,72px)] items-center px-[20px]">
        {/* Copy */}
        <div className="min-w-0 reveal" ref={addToRefs}>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--bg-tertiary)] border border-[var(--bg-tertiary)] px-3.5 py-2 mb-2 whitespace-nowrap">
            <span className="w-1.5 h-1.5 flex-shrink-0 bg-[var(--accent-gold)] rounded-full" />
            {project.badge}
          </span>

          {/* Headline */}
          <h1 className="font-serif font-medium text-[clamp(34px,5.5vw,56px)] tracking-[0.01em] leading-[1.05] text-[var(--text-primary)] m-0 mb-5 uppercase word-break">
            {project.title}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-3.5 font-mono text-[11.5px] tracking-[0.18em] uppercase text-[var(--bg-tertiary)] mb-4 flex-wrap">
            <span className="w-[26px] h-px bg-[var(--bg-tertiary)] flex-shrink-0" />
            {project.location}
          </div>

          {/* Description */}
          <p className="text-[clamp(14.5px,1.6vw,16px)] leading-[1.75] text-[var(--text-secondary)] font-light  m-0 mb-[clamp(28px,5vw,36px)]">
            {project.description}
          </p>

          {/* Project Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-[clamp(28px,5vw,36px)]">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 p-3 h-[72px] bg-[rgba(237,230,216,0.05)] border border-[rgba(237,230,216,0.12)] backdrop-blur-sm transition-all duration-300 hover:bg-[rgba(237,230,216,0.08)] hover:border-[rgba(237,230,216,0.2)]">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[rgba(237,230,216,0.1)] rounded-lg text-[var(--bg-tertiary)]">
                  {highlight.icon}
                </div>
                <p className="text-[13px] leading-[1.4] text-[var(--text-primary)] font-light m-0 line-clamp-2">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3.5">
            <Link
              href={project.primaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-mono text-[12px] tracking-[0.14em] uppercase text-[#fff] bg-[var(--bg-secondary)] px-6.5 py-4 border border-[var(--bg-secondary)] cursor-pointer transition-all duration-250 hover:bg-[var(--bg-tertiary)] hover:border-[var(--bg-tertiary)] whitespace-nowrap"
            >
              {project.primaryButtonText}
            </Link>
            <button
              onClick={() => handleButtonClick(project.secondaryButtonLink)}
              className="flex-1 font-mono text-[12px] tracking-[0.14em] uppercase text-[var(--text-primary)] bg-transparent px-5.5 py-4 border border-[rgba(237,230,216,0.18)] cursor-pointer transition-all duration-250 hover:border-[var(--accent-gold)] hover:bg-[rgba(237,230,216,0.04)] inline-flex items-center gap-2.5 whitespace-nowrap"
            >
              {project.secondaryButtonText}
              <svg className="w-3.5 h-3.5 transition-transform duration-250 flex-shrink-0 hover:translate-x-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Media - Static Swiper */}
        <div className="min-w-0 reveal" ref={addToRefs}>
          <div className="relative">
            <div className="relative border border-[rgba(237,230,216,0.16)] leading-none">
              <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={slides.length > 1}
                navigation={{
                  nextEl: '.custom-dev-next',
                  prevEl: '.custom-dev-prev',
                }}
                className="w-full h-[350px]"
              >
                {slides.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-[350px]">
                      <img
                        src={img}
                        alt={`${project.title} - ${i + 1}`}
                        className="w-full h-full object-cover"
                        style={{ filter: 'saturate(1.03) contrast(1.02)' }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute w-[22px] h-[22px] -top-px -right-px border-t-1.5 border-r-1.5 border-[var(--accent-gold)]" />
              <div className="absolute w-[22px] h-[22px] -bottom-px -left-px border-b-1.5 border-l-1.5 border-[var(--accent-gold)]" />
            </div>
            {slides.length > 1 && (
              <>
                <button className="custom-dev-prev absolute bottom-4 right-16 z-30 w-10 h-10 bg-[var(--bg-section)] border border-[rgba(237,230,216,0.3)] text-[var(--text-primary)] flex items-center justify-center cursor-pointer hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="custom-dev-next absolute bottom-4 right-4 z-30 w-10 h-10 bg-[var(--bg-section)] border border-[rgba(237,230,216,0.3)] text-[var(--text-primary)] flex items-center justify-center cursor-pointer hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 940px) {
          section > div {
            grid-template-columns: 1fr;
          }
          .reveal:last-child {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .flex-wrap > div {
            flex: 1 1 50%;
          }
          .flex-wrap > div:nth-child(2) {
            border-right: none;
          }
          .flex-wrap > div:nth-child(3) {
            border-top: 1px solid rgba(237,230,216,0.18);
            padding-top: 16px;
            margin-top: 2px;
          }
          .flex-wrap.gap-3\\.5 {
            flex-direction: column;
          }
          .flex-wrap.gap-3\\.5 button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
