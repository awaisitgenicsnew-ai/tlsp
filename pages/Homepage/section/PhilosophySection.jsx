"use client";

import { useEffect, useRef } from 'react';

export default function Philosophy() {
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
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section
      id="philosophy"
      className="relative bg-[#1D1913] py-[120px] px-12 md:px-12 lg:px-12 overflow-hidden"
    >
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

      {/* Header */}
      <div className="relative max-w-[760px] mx-auto mb-[92px] text-center reveal" ref={addToRefs}>
        <div className="flex items-center justify-center gap-[18px] font-mono text-[11.5px] tracking-[0.3em] uppercase text-[#D9B27C] mb-7">
          <span className="w-[44px] h-px bg-[#B98D4F]" />
          The PLT Philosophy
          <span className="w-[44px] h-px bg-[#B98D4F]" />
        </div>
        <h2 className="font-serif font-normal italic text-[46px] leading-[1.15] text-[#EDE6D8] m-0 mb-[26px]">
          More than places to live
        </h2>
        <p className="text-[16px] leading-[1.75] text-[#C9BFAD] font-light m-0">
          Creating timeless residences where Italian heritage, exceptional architecture, wellness, and hospitality come together to shape extraordinary lifestyles.
        </p>
      </div>

      {/* Body */}
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-[0.85fr_1fr] gap-16 items-center">
        {/* Media */}
        <div className="relative pl-9 reveal" ref={addToRefs}>
    
          <div className="relative border border-[rgba(237,230,216,0.16)] leading-none">
            <img
              src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1400&auto=format&fit=crop"
              alt="Landmark tower at golden hour, referencing PLT's architectural inspiration"
              className="w-full h-[480px] object-cover block"
              style={{ filter: 'saturate(1.02) contrast(1.02)' }}
            />
      
          </div>
        </div>

        {/* Copy */}
        <div className="reveal" ref={addToRefs}>
          <div className="w-[56px] h-px bg-[#B98D4F] mb-6" />
          <h3 className="font-serif font-normal text-[36px] leading-[1.22] text-[#EDE6D8] m-0 mb-7">
            Designed to enrich everyday living
          </h3>
          <p className="text-[15.5px] leading-[1.85] text-[#C9BFAD] font-light m-0 mb-5">
            Every PLT residence begins with a simple belief: exceptional living starts with exceptional design.
          </p>
          <p className="text-[15.5px] leading-[1.85] text-[#C9BFAD] font-light m-0">
            Inspired by Italian craftsmanship, every detail is thoughtfully considered to create homes that feel timeless, welcoming, and beautifully balanced. From elegant architecture to refined interiors, our spaces are designed to elevate everyday life while creating lasting value for generations.
          </p>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 880px) {
          section {
            padding: 80px 24px 90px 24px;
          }
          .phil-head h2 {
            font-size: 32px;
          }
          .phil-body {
            grid-template-columns: 1fr;
            gap: 44px;
          }
          .phil-media {
            padding-left: 28px;
          }
          .phil-frame img {
            height: 340px;
          }
          .phil-copy h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}