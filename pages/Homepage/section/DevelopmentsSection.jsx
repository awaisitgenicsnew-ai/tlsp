"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectApi, getImageUrl } from "@/lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function DevelopmentsSection() {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectApi.getAll({ badge: "High Demand", publication_status: "published" });
        if (response?.data?.length > 0) {
          setProject(response.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch featured project:", error);
      }
    };
    fetchProject();
  }, []);

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
        // Check if element is already in view
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

  if (!project) {
    return null;
  }

  // Get images array or fall back to single image
  const slides = project.images && project.images.length > 0 
    ? project.images 
    : project.image ? [project.image] : [];

  return (
    <section className="relative bg-[#1D1913] py-[clamp(56px,10vw,110px)] px-[clamp(20px,5vw,48px)] overflow-hidden">
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

      <div className="relative max-w-[1300px] mx-auto grid grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] gap-[clamp(36px,6vw,72px)] items-center">
        {/* Copy */}
        <div className="min-w-0 reveal" ref={addToRefs}>
          {/* Badge */}
          {project.badge && (
            <span className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#D9B27C] border border-[#B98D4F] px-3.5 py-2 mb-[clamp(22px,4vw,32px)] whitespace-nowrap">
              <span className="w-1.5 h-1.5 flex-shrink-0 bg-[#D9B27C] rounded-full" />
              {project.badge}
            </span>
          )}

          {/* Headline */}
          <h1 className="font-serif font-medium text-[clamp(34px,5.5vw,56px)] tracking-[0.01em] leading-[1.05] text-[#EDE6D8] m-0 mb-5 uppercase word-break">
            {project.title}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-3.5 font-mono text-[11.5px] tracking-[0.18em] uppercase text-[#D9B27C] mb-6.5 flex-wrap">
            <span className="w-[26px] h-px bg-[#B98D4F] flex-shrink-0" />
            {project.location}
          </div>

          {/* Description */}
          <p className="text-[clamp(14.5px,1.6vw,16px)] leading-[1.75] text-[#C9BFAD] font-light max-w-[480px] m-0 mb-[clamp(28px,5vw,36px)]">
            {project.description}
          </p>

          {/* Stats Strip */}
          <div className="flex flex-wrap border-t border-b border-[rgba(237,230,216,0.18)] mb-[clamp(30px,5vw,40px)]">
            <div className="flex-1 min-w-[110px] py-5 pl-[clamp(12px,2vw,24px)] pr-[clamp(12px,2vw,24px)] border-r border-[rgba(237,230,216,0.18)]">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#C9BFAD] mb-2.5 whitespace-nowrap">Type</div>
              <div className="font-serif text-[clamp(18px,2.2vw,24px)] font-medium text-[#EDE6D8] whitespace-nowrap">{project.type}</div>
            </div>
            <div className="flex-1 min-w-[110px] py-5 pl-[clamp(12px,2vw,24px)] pr-[clamp(12px,2vw,24px)] border-r border-[rgba(237,230,216,0.18)]">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#C9BFAD] mb-2.5 whitespace-nowrap">Handover</div>
              <div className="font-serif text-[clamp(18px,2.2vw,24px)] font-medium text-[#EDE6D8] whitespace-nowrap">{project.handover}</div>
            </div>
            <div className="flex-1 min-w-[110px] py-5 pl-[clamp(12px,2vw,24px)] pr-[clamp(12px,2vw,24px)] border-r-0">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#C9BFAD] mb-2.5 whitespace-nowrap">Payment</div>
              <div className="font-serif text-[clamp(18px,2.2vw,24px)] font-medium text-[#EDE6D8] whitespace-nowrap">{project.payment}</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3.5">
            <button
              onClick={() => handleButtonClick(project.primaryButtonLink)}
              className="flex-1 text-center font-mono text-[12px] tracking-[0.14em] uppercase text-[#14110E] bg-[#D9B27C] px-6.5 py-4 border border-[#D9B27C] cursor-pointer transition-all duration-250 hover:bg-[#B98D4F] hover:border-[#B98D4F] whitespace-nowrap"
            >
              {project.primaryButtonText || "View Information"}
            </button>
            <button
              onClick={() => handleButtonClick(project.secondaryButtonLink)}
              className="flex-1 font-mono text-[12px] tracking-[0.14em] uppercase text-[#EDE6D8] bg-transparent px-5.5 py-4 border border-[rgba(237,230,216,0.18)] cursor-pointer transition-all duration-250 hover:border-[#C9BFAD] hover:bg-[rgba(237,230,216,0.04)] inline-flex items-center gap-2.5 whitespace-nowrap"
            >
              {project.secondaryButtonText || "Register"}
              <svg className="w-3.5 h-3.5 transition-transform duration-250 flex-shrink-0 hover:translate-x-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Media */}
        <div className="min-w-0 reveal" ref={addToRefs}>
          <div className="relative">
            <div className="relative border border-[rgba(237,230,216,0.16)] leading-none">
              {slides.length > 0 ? (
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
                        <Image
                          src={getImageUrl(img)}
                          alt={`${project.imageAlt || project.title} - ${i + 1}`}
                          fill
                          className="object-cover"
                          style={{ filter: 'saturate(1.03) contrast(1.02)' }}
                          priority
                          unoptimized
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                project.image && (
                  <Image
                    src={getImageUrl(project.image)}
                    alt={project.imageAlt || project.title}
                    width={1600}
                    height={560}
                    className="w-full h-[350px] object-cover block"
                    style={{ filter: 'saturate(1.03) contrast(1.02)' }}
                    priority
                    unoptimized
                  />
                )
              )}
            
              <div className="absolute w-[22px] h-[22px] -top-px -right-px border-t-1.5 border-r-1.5 border-[#D9B27C]" />
              <div className="absolute w-[22px] h-[22px] -bottom-px -left-px border-b-1.5 border-l-1.5 border-[#D9B27C]" />
            </div>
            {slides.length > 1 && (
              <>
                <button className="custom-dev-prev absolute bottom-4 right-16 z-30 w-10 h-10 bg-[#1D1913] border border-[rgba(237,230,216,0.3)] text-[#EDE6D8] flex items-center justify-center cursor-pointer hover:bg-[#D9B27C] hover:border-[#D9B27C] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="custom-dev-next absolute bottom-4 right-4 z-30 w-10 h-10 bg-[#1D1913] border border-[rgba(237,230,216,0.3)] text-[#EDE6D8] flex items-center justify-center cursor-pointer hover:bg-[#D9B27C] hover:border-[#D9B27C] transition-colors">
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
