"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-[#1D1913] py-[120px] px-12 md:px-12 lg:px-12 overflow-hidden border-r border-[rgba(255,255,255,0.1)]">
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
      {/* Feature block: text left, image right */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-8 mt-4 md:mt-8">
        <div>
          <div className="flex items-center justify-start mb-2">
            <span className="hidden sm:block  h-px bg-[#B98D4F] w-10 mr-6"></span>
            <p className="font-sans text-sm tracking-[0.25em] font-medium text-[#D9B27C] whitespace-nowrap uppercase">
              On How It Feels
            </p>
            <span className="hidden sm:block h-px bg-[#B98D4F] w-10 ml-6"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[44px] leading-[0.98] tracking-[-0.01em] text-[#EDE6D8] mb-4.5">
            Luxury Measured <br /> by Experience
          </h2>
          <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.85] text-[#C9BFAD] ">
            True luxury is defined not by what surrounds you, but by how a
            place makes you feel.
          </p>
          <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.85] text-[#C9BFAD] ">
            It is found in quiet mornings filled with natural light,
            meaningful connections to nature, thoughtfully crafted spaces,
            and the comfort of genuine hospitality. At PLT Properties, every
            residence is designed to inspire wellbeing, encourage
            connection, and create experiences that endure far beyond the
            walls of a home.
          </p>
        </div>

        <div className="relative flex items-stretch justify-end">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[rgba(237,230,216,0.16)]">
            <Image
              src="/images/img2.jpg"
              alt="Quiet morning light interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          </div>

        </div>
      </div>

      {/* Quote */}
      <div className="relative max-w-xl mx-auto text-center">
        <div className="w-px h-10 bg-[#B98D4F] mx-auto mb-4" />
        <p className="font-serif text-4xl md:text-5xl lg:text-[44px] leading-[0.98] tracking-[-0.01em] text-[#EDE6D8] mb-4.5">
          Not simply a place to live. A life to belong to.
        </p>
        <div className="flex items-center justify-center mt-6">
          <span className="h-px bg-[#B98D4F] w-16 mr-6 hidden sm:block"></span>
          <p className="font-sans text-sm tracking-[0.25em] font-medium text-[#D9B27C] whitespace-nowrap uppercase">
            PLT Properties
          </p>
          <span className="hidden sm:block h-px bg-[#B98D4F] w-16 ml-6"></span>
        </div>
      </div>
    </section>
  );
}
