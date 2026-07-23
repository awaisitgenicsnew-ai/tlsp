"use client";

export default function IntroSection2() {
  return (
    <section id="intro-2" className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(100deg, rgba(20,17,14,0.94) 8%, rgba(20,17,14,0.72) 34%, rgba(20,17,14,0.30) 62%, rgba(20,17,14,0.55) 100%),
              linear-gradient(to top, rgba(20,17,14,0.85) 0%, rgba(20,17,14,0.05) 38%),
              url('/images/home-slider/imgslide2.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center 62%'
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.55)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-start px-6 md:px-12 py-24 ">
        <div className="max-w-[800px] w-full py-7 animate-[riseIn_1s_cubic-bezier(0.2,0.8,0.2,1)_both]">
          {/* Headline */}
          <h2 className="font-serif font-normal text-[clamp(36px,5vw,52px)] leading-[1.12] tracking-[-0.01em] m-0 mb-6.5 text-[var(--text-primary)]">
            A new generation of <span className="font-medium text-[var(--bg-tertiary)]">real estate</span>
          </h2>

          {/* Description */}
          <p className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[680px] m-0 mb-5">
            PLT Properties creates more than beautiful projects. We create places designed to make everyday life feel better.
          </p>
          <p className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[680px] m-0 mb-5">
            Inspired by the Italian way of living, our developments bring together timeless architecture, natural beauty, considered craftsmanship and genuine hospitality.
          </p>
          <p className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[680px] m-0 mb-9.5">
            Every project begins with a simple question: how can this place improve the way people live? The answer can be found in every detail — from the flow of a home and the quality of its light to the landscapes, experiences and connections that surround it.
          </p>
        </div>
      </div>

      {/* Credentials */}
      <div className="relative z-10 px-6 md:px-12 pb-11">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[var(--bg-secondary)]/10 border border-[rgba(237,230,216,0.16)] backdrop-blur-[14px] animate-[riseIn_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
          <div className="p-4 md:p-6.5 border-r border-b md:border-b-0 border-[rgba(237,230,216,0.16)] flex gap-3 md:gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)]">
            <span className="font-serif italic text-[16px] md:text-[20px] text-[var(--bg-tertiary)] leading-none pt-0.5">I</span>
            <div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] mb-2">Years of Craft</div>
              <div className="font-serif text-[18px] md:text-[23px] font-medium text-[var(--text-primary)]">15+</div>
            </div>
          </div>
          <div className="p-4 md:p-6.5 border-r-0 border-b md:border-b-0 border-[rgba(237,230,216,0.16)] flex gap-3 md:gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)]">
            <span className="font-serif italic text-[16px] md:text-[20px] text-[var(--bg-tertiary)] leading-none pt-0.5">II</span>
            <div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] mb-2">DLD Escrow-Backed</div>
              <div className="font-serif text-[18px] md:text-[23px] font-medium text-[var(--text-primary)]">100%</div>
            </div>
          </div>
          <div className="p-4 md:p-6.5 border-r border-b-0 md:border-b border-[rgba(237,230,216,0.16)] flex gap-3 md:gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)]">
            <span className="font-serif italic text-[16px] md:text-[20px] text-[var(--bg-tertiary)] leading-none pt-0.5">III</span>
            <div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] mb-2">Flagship Location</div>
              <div className="font-serif text-[18px] md:text-[23px] font-medium text-[var(--text-primary)]">Business Bay</div>
            </div>
          </div>
          <div className="p-4 md:p-6.5 border-r-0 border-b-0 md:border-b border-[rgba(237,230,216,0.16)] flex gap-3 md:gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)]">
            <span className="font-serif italic text-[16px] md:text-[20px] text-[var(--bg-tertiary)] leading-none pt-0.5">IV</span>
            <div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] mb-2">Design Heritage</div>
              <div className="font-serif text-[18px] md:text-[23px] font-medium text-[var(--text-primary)]">European</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
