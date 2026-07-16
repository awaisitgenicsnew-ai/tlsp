"use client";

import { useState, useEffect, useRef } from "react";

export default function AchievementsSection() {
  const [counts, setCounts] = useState({ years: 0, projects: 0, residents: 0, awards: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounts();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const duration = 1300;
    const targets = { years: 15, projects: 50, residents: 2000, awards: 25 };
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        years: Math.floor(eased * targets.years),
        projects: Math.floor(eased * targets.projects),
        residents: Math.floor(eased * targets.residents),
        awards: Math.floor(eased * targets.awards),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden gap-4"
      style={{
        background: `
          linear-gradient(0deg, rgba(10,7,5,0.97) 0%, rgba(10,7,5,0.72) 32%, rgba(20,15,10,0.28) 58%, rgba(20,15,10,0.15) 100%),
          url('https://images.unsplash.com/photo-1768069794826-a31af289449f?fm=jpg&q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.1.0')
        `,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center 30%',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      {/* Lattice pattern */}
      <div
        className="absolute top-0 right-0 w-[340px] h-[340px] opacity-0.16 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, var(--gold) 0 1.5px, transparent 1.5px 34px),
            repeating-linear-gradient(-45deg, var(--gold) 0 1.5px, transparent 1.5px 34px)
          `,
          WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 55%, transparent 75%)',
          maskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 55%, transparent 75%)',
        }}
      />

      {/* Top content */}
      <div className="relative z-2 max-w-[840px] px-[7vw] pt-[160px]">
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.01em] text-[#ffffff] mb-6">
          A skyline of <span className="italic font-normal text-[#ffffff]">numbers</span>
          <br />that speak for us.
        </h2>
        <p className="text-[16.5px] leading-[1.7] text-[rgba(237,230,216,0.7)] max-w-[44ch]">
          Every marker on this horizon is a milestone — measured against Dubai's own skyline, and still rising.
        </p>
      </div>

      {/* Skyline of stats */}
      <div className="relative z-2 flex items-end justify-between gap-[clamp(10px,3vw,40px)] px-[7vw] pb-0 max-w-[1180px] mx-auto w-full">
        {/* Tower 1 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="font-sans font-semibold text-[clamp(30px,3.2vw,42px)] text-[#ffffff] leading-none mb-[14px] tracking-[-0.01em]">
            {counts.years}<span className="text-[#d9b27c]">+</span>
          </span>
          <div className="w-px bg-[#181410] mb-[6px] relative" style={{ height: '20px' }}>
            <span className="absolute top-[-4px] left-1/2 w-[6px] h-[6px] rounded-full bg-[#181410] -translate-x-1/2" style={{ boxShadow: '0 0 8px 2px rgba(24,20,16,0.7)', animation: 'blink 2.6s ease-in-out infinite' }} />
          </div>
          <div
            className="w-full max-w-[150px] rounded-t-[3px] relative overflow-hidden origin-bottom"
            style={{
              height: '118px',
              background: 'linear-gradient(180deg, rgba(24,20,16,0.32) 0%, rgba(24,20,16,0.14) 55%, rgba(24,20,16,0.05) 100%)',
              border: '1px solid rgba(24,20,16,0.35)',
              borderBottom: 'none',
              animation: 'rise 1.1s cubic-bezier(0.2,0.8,0.2,1) forwards',
              animationDelay: '0.05s',
            }}
          >
            <div
              className="absolute inset-0 opacity-0.6"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent 0 9px, rgba(24,20,16,0.35) 9px 10px),
                  repeating-linear-gradient(90deg, transparent 0 13px, rgba(24,20,16,0.35) 13px 14px)
                `,
              }}
            />
          </div>
          <span className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-[rgba(244,236,221,0.62)]">
            Years of experience
          </span>
        </div>

        {/* Tower 2 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="font-sans font-semibold text-[clamp(30px,3.2vw,42px)] text-[#ffffff] leading-none mb-[14px] tracking-[-0.01em]">
            {counts.projects}<span className="text-[#d9b27c]">+</span>
          </span>
          <div className="w-px bg-[#181410] mb-[6px] relative" style={{ height: '20px' }}>
            <span className="absolute top-[-4px] left-1/2 w-[6px] h-[6px] rounded-full bg-[#181410] -translate-x-1/2" style={{ boxShadow: '0 0 8px 2px rgba(24,20,16,0.7)', animation: 'blink 2.6s ease-in-out infinite 0.5s' }} />
          </div>
          <div
            className="w-full max-w-[150px] rounded-t-[3px] relative overflow-hidden origin-bottom"
            style={{
              height: '168px',
              background: 'linear-gradient(180deg, rgba(24,20,16,0.32) 0%, rgba(24,20,16,0.14) 55%, rgba(24,20,16,0.05) 100%)',
              border: '1px solid rgba(24,20,16,0.35)',
              borderBottom: 'none',
              animation: 'rise 1.1s cubic-bezier(0.2,0.8,0.2,1) forwards',
              animationDelay: '0.18s',
            }}
          >
            <div
              className="absolute inset-0 opacity-0.6"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent 0 9px, rgba(24,20,16,0.35) 9px 10px),
                  repeating-linear-gradient(90deg, transparent 0 13px, rgba(24,20,16,0.35) 13px 14px)
                `,
              }}
            />
          </div>
          <span className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-[rgba(244,236,221,0.62)]">
            Projects completed
          </span>
        </div>

        {/* Tower 3 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="font-sans font-semibold text-[clamp(30px,3.2vw,42px)] text-[#ffffff] leading-none mb-[14px] tracking-[-0.01em]">
            {counts.residents}<span className="text-[#d9b27c]">+</span>
          </span>
          <div className="w-px bg-[#181410] mb-[6px] relative" style={{ height: '20px' }}>
            <span className="absolute top-[-4px] left-1/2 w-[6px] h-[6px] rounded-full bg-[#181410] -translate-x-1/2" style={{ boxShadow: '0 0 8px 2px rgba(24,20,16,0.7)', animation: 'blink 2.6s ease-in-out infinite 1s' }} />
          </div>
          <div
            className="w-full max-w-[150px] rounded-t-[3px] relative overflow-hidden origin-bottom"
            style={{
              height: '224px',
              background: 'linear-gradient(180deg, rgba(24,20,16,0.32) 0%, rgba(24,20,16,0.14) 55%, rgba(24,20,16,0.05) 100%)',
              border: '1px solid rgba(24,20,16,0.35)',
              borderBottom: 'none',
              animation: 'rise 1.1s cubic-bezier(0.2,0.8,0.2,1) forwards',
              animationDelay: '0.31s',
            }}
          >
            <div
              className="absolute inset-0 opacity-0.6"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent 0 9px, rgba(24,20,16,0.35) 9px 10px),
                  repeating-linear-gradient(90deg, transparent 0 13px, rgba(24,20,16,0.35) 13px 14px)
                `,
              }}
            />
          </div>
          <span className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-[rgba(244,236,221,0.62)]">
            Happy residents
          </span>
        </div>

        {/* Tower 4 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="font-sans font-semibold text-[clamp(30px,3.2vw,42px)] text-[#ffffff] leading-none mb-[14px] tracking-[-0.01em]">
            {counts.awards}<span className="text-[#d9b27c]">+</span>
          </span>
          <div className="w-px bg-[#181410] mb-[6px] relative" style={{ height: '20px' }}>
            <span className="absolute top-[-4px] left-1/2 w-[6px] h-[6px] rounded-full bg-[#181410] -translate-x-1/2" style={{ boxShadow: '0 0 8px 2px rgba(24,20,16,0.7)', animation: 'blink 2.6s ease-in-out infinite 1.5s' }} />
          </div>
          <div
            className="w-full max-w-[150px] rounded-t-[3px] relative overflow-hidden origin-bottom"
            style={{
              height: '146px',
              background: 'linear-gradient(180deg, rgba(24,20,16,0.32) 0%, rgba(24,20,16,0.14) 55%, rgba(24,20,16,0.05) 100%)',
              border: '1px solid rgba(24,20,16,0.35)',
              borderBottom: 'none',
              animation: 'rise 1.1s cubic-bezier(0.2,0.8,0.2,1) forwards',
              animationDelay: '0.44s',
            }}
          >
            <div
              className="absolute inset-0 opacity-0.6"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent 0 9px, rgba(24,20,16,0.35) 9px 10px),
                  repeating-linear-gradient(90deg, transparent 0 13px, rgba(24,20,16,0.35) 13px 14px)
                `,
              }}
            />
          </div>
          <span className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-[rgba(244,236,221,0.62)]">
            Industry awards
          </span>
        </div>
      </div>

      {/* Ground line */}
      <div className="relative z-2 h-px bg-gradient-to-r from-transparent via-[rgba(24,20,16,0.55)] to-transparent max-w-[1180px] mx-auto w-full" />

     

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        @keyframes rise {
          from { transform: scaleY(0); opacity: 0; }
          to { transform: scaleY(1); opacity: 1; }
        }
        @media (max-width: 760px) {
          section {
            padding: 70px 6vw 0;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}

