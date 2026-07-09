"use client";

import Image from "next/image";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="w-full bg-[#d9d9d9] py-10 lg:py-24 px-6 md:px-12 lg:px-20 flex flex-col justify-center gap-5"
    >
      {/* Hero */}
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-12 mt-5">
        <div className="flex items-center justify-center mb-6">
          <span className="h-px bg-[var(--tan)] w-16 mr-6 hidden sm:block"></span>
          <p className="font-sans text-sm tracking-[0.25em] font-medium text-[var(--tan)] whitespace-nowrap uppercase">
            The PLT Philosophy
          </p>
          <span className="hidden sm:block h-px bg-[var(--tan)] w-16 ml-6"></span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto mb-8 text-[#2a2620]">
          More Than Places to Live
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#7a7468] font-[400] text-[16px] tracking-[0.5px] mx-auto paragraph">
          Creating timeless residences where Italian heritage, exceptional
          architecture, wellness, and hospitality come together to shape
          extraordinary lifestyles.
        </p>
      </div>

      {/* Feature block 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto w-full">
        <div className="relative flex items-stretch w-full">
          <span className="hidden md:block [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-[#c5811b] mr-4 self-end pb-4">
            Artisanal
          </span>

        
          <div className="relative aspect-[4/3] md:max-h-[350px] w-full overflow-hidden border border-[#d8d3c7]">
            <Image
              src="/images/philosophy-artisanal.jpg"
              alt="Italian craftsmanship materials"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-[10px] tracking-widest uppercase text-white/90">
              Photography, Arpeggi Travertine, Bronze, Oak, Linen Textiles
            </p>
          </div>
        </div>

        <div>
        
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto mb-8 text-[#2a2620]">
            Designed to Enrich <br /> Everyday Living
          </h2>
          <p className="text-sm leading-relaxed text-[#6b6558] mb-4 paragraph">
            Every PLT residence begins with a simple belief: exceptional
            living starts with exceptional design.
          </p>
          <p className="text-sm leading-relaxed text-[#6b6558] paragraph">
            Inspired by Italian craftsmanship, every detail is thoughtfully
            considered to create homes that feel timeless, welcoming, and
            beautifully balanced. From elegant architecture to refined
            interiors, our spaces are designed to elevate everyday life while
            creating lasting value for generations.
          </p>
        </div>
      </div>
    </section>
  );
}