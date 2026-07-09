"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-[#d9d9d9] py-10 lg:py-24 px-6 md:px-10 flex flex-col justify-center align-center">
      {/* Feature block: text left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-8 mt-24">
        <div>
          <div className="flex items-center justify-start mb-2">
            <span className="hidden sm:block  h-px bg-[var(--tan)] w-10 mr-6"></span>
            <p className="font-sans text-sm tracking-[0.25em] font-medium text-[var(--tan)] whitespace-nowrap uppercase">
              On How It Feels
            </p>
            <span className="hidden sm:block h-px bg-[var(--tan)] w-10 ml-6"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto mb-8 text-[#2a2620]">
            Luxury Measured <br /> by Experience
          </h2>
          <p className="text-sm leading-relaxed text-[#6b6558] mb-2 paragraph">
            True luxury is defined not by what surrounds you, but by how a
            place makes you feel.
          </p>
          <p className="text-sm leading-relaxed text-[#6b6558] paragraph">
            It is found in quiet mornings filled with natural light,
            meaningful connections to nature, thoughtfully crafted spaces,
            and the comfort of genuine hospitality. At PLT Properties, every
            residence is designed to inspire wellbeing, encourage
            connection, and create experiences that endure far beyond the
            walls of a home.
          </p>
        </div>

        <div className="relative flex items-stretch justify-end">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/philosophy-stillness.jpg"
              alt="Quiet morning light interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 right-4 text-[10px] tracking-widest uppercase text-white/80">
              Photography, A Quiet Morning, Floor-to-ceiling Glass, Coffee,
              Vinyl, Soft Fabric, Candid
            </p>
          </div>
          <span className="hidden md:block [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-[#c5811b] ml-4 self-end pb-4">
            Stillness
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="max-w-xl mx-auto text-center">
        <div className="w-px h-10 bg-[#c5811b] mx-auto mb-4" />
        <p className="font-serif italic text-2xl md:text-3xl text-[#2b2823] leading-snug">
          Not simply a place to live. A life to belong to.
        </p>
        <div className="flex items-center justify-center mt-6">
          <span className="h-px bg-[var(--tan)] w-16 mr-6 hidden sm:block"></span>
          <p className="font-sans text-sm tracking-[0.25em] font-medium text-[var(--tan)] whitespace-nowrap uppercase">
            PLT Properties
          </p>
          <span className="hidden sm:block h-px bg-[var(--tan)] w-16 ml-6"></span>
        </div>
      </div>
    </section>
  );
}
