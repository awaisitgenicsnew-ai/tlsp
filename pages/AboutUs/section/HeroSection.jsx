"use client";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--bg-hero)]">
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/aboutimg1.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative z-10 h-full w-full flex items-center px-6 md:px-12 ">
          <div className="w-full">
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[var(--accent-brown)] mb-2 uppercase">
              ABOUT US · PLT PROPERTIES
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-4">
              A New Generation Of Real Estate
            </h1>
            <div className="w-24 h-1 bg-[var(--accent-brown)] mb-4" />
            <div className="space-y-6 text-white/80 max-w-2xl leading-relaxed">
              <p className="font-sans text-[18px] ">
                PLT Properties creates more than beautiful projects. We create places designed to make everyday life feel better.
              </p>
              <p className="font-sans text-[18px] ">
                Inspired by the Italian way of living, our developments bring together timeless architecture, natural beauty, considered craftsmanship and genuine hospitality.
              </p>
              <p className="font-sans text-[18px] ">
                Every project begins with a simple question: how can this place improve the way people live? The answer can be found in every detail — from the flow of a home and the quality of its light to the landscapes, experiences and connections that surround it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-12 right-12 z-20 items-center gap-3">
        <div className="w-12 h-px bg-white/30" />
        <span className="font-sans text-xs tracking-[0.25em] text-white/60 uppercase">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}