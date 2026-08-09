"use client";

import Link from "next/link";

const MILESTONES = [
  { title: "2001", label: "The Beginning" },
  { title: "2006", label: "Renewable Energy" },
  { title: "2008–2013", label: "First Industrial Plan" },
  { title: "2014", label: "Public Listing" },
  { title: "2014–2019", label: "Second Industrial Plan" },
  { title: "2022", label: "A New Chapter" },
  { title: "2023", label: "Diversification" },
  { title: "2024–2030", label: "A New Industrial Plan" },
  { title: "2024", label: "PLT Properties" },
  { title: "2027", label: "Flagship Launch", highlight: true },
];

export default function IntroSection1() {
  return (
    <section id="intro-1" className="w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(100deg, rgba(20,17,14,0.94) 8%, rgba(20,17,14,0.72) 34%, rgba(20,17,14,0.30) 62%, rgba(20,17,14,0.55) 100%),
              linear-gradient(to top, rgba(20,17,14,0.85) 0%, rgba(20,17,14,0.05) 38%),
              url('/images/homepage/intro-image.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center 62%'
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.55)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-start px-6 md:px-12 py-22 w-full">
        <div className="w-full py-4 animate-[riseIn_1s_cubic-bezier(0.2,0.8,0.2,1)_both] mx-auto">
          {/* Headline */}
          <h2 className="font-serif font-normal text-[clamp(36px,5vw,52px)] leading-[1.12] tracking-[-0.01em] m-0 mb-6.5 text-[var(--text-primary)]">
            New vision. <span className="font-medium text-[var(--bg-tertiary)]">Established strength.</span>
          </h2>

          {/* Description */}
          <p className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[680px] m-0 mb-5">
            PLT Properties is backed by PLT Holding, a diversified international group founded through the entrepreneurial vision of the Tortora Family.
          </p>
          <p className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[680px] m-0 mb-5">
            Across renewable energy, finance, real estate, hospitality and strategic investments, PLT Holding has built its reputation on long-term thinking, disciplined execution and responsible growth.
          </p>
          <p className="text-[16.5px] leading-[1.75] text-[var(--text-secondary)] font-light max-w-[680px] m-0 mb-9.5">
            PLT Properties brings this same foundation to real estate — combining the energy of a new lifestyle developer with the strength and capabilities of an established group.
          </p>

          {/* CTA */}
          <Link
            href="https://www.pltholding.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-start mt-4 px-6 py-2.5 font-sans font-[300] text-[14px] tracking-[2px] uppercase transition-all duration-300 border border-[#fff] text-[#fff] hover:bg-[var(--accent-gold)] hover:text-[#14110e]"
          >
            Discover PLT Holding
          </Link>

          {/* Milestones Timeline */}
          <div className="relative z-10 mt-6 animate-[riseIn_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block relative pt-20 pb-20 overflow-x-auto overflow-y-visible scrollbar-hide">
              {/* Line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-[rgba(237,230,216,0.08)] via-[rgba(198,167,107,0.55)] to-[var(--bg-tertiary)] min-w-full" />

              <div className="relative flex justify-between min-w-[1400px] px-12">
                {MILESTONES.map((m, i) => (
                  <div key={m.title} className="relative flex flex-col items-center group">
                    {/* Label above (even) */}
                    <div className={`absolute bottom-full mb-5 text-center transition-transform duration-300 group-hover:-translate-y-1 ${i % 2 !== 0 ? 'invisible' : ''}`}>
                      <div className={`font-sans text-[14px] md:text-[15px] font-medium mb-1 whitespace-nowrap ${m.highlight ? 'text-[var(--bg-tertiary)]' : 'text-[var(--text-primary)]'}`}>{m.title}</div>
                      <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] whitespace-nowrap">{m.label}</div>
                    </div>

                    {/* Diamond marker */}
                    <span
                      className={`block w-3 h-3 rotate-45 transition-all duration-300 group-hover:scale-125 ${
                        m.highlight
                          ? 'bg-[var(--bg-tertiary)] shadow-[0_0_18px_rgba(198,167,107,0.65)]'
                          : 'border border-[var(--bg-tertiary)] bg-transparent group-hover:bg-[var(--bg-tertiary)]'
                      }`}
                    />

                    {/* Label below (odd) */}
                    <div className={`absolute top-full mt-5 text-center transition-transform duration-300 group-hover:translate-y-1 ${i % 2 === 0 ? 'invisible' : ''}`}>
                      <div className={`font-sans text-[14px] md:text-[15px] font-medium mb-1 whitespace-nowrap ${m.highlight ? 'text-[var(--bg-tertiary)]' : 'text-[var(--text-primary)]'}`}>{m.title}</div>
                      <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)] whitespace-nowrap">{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden relative pl-6">
              {/* Line */}
              <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gradient-to-b from-[rgba(237,230,216,0.08)] via-[rgba(198,167,107,0.55)] to-[var(--bg-tertiary)]" />

              <div className="flex flex-col gap-8">
                {MILESTONES.map((m) => (
                  <div key={m.title} className="relative">
                    {/* Diamond marker */}
                    <span
                      className={`absolute -left-6 top-1.5 block w-2.5 h-2.5 rotate-45 ${
                        m.highlight
                          ? 'bg-[var(--bg-tertiary)] shadow-[0_0_14px_rgba(198,167,107,0.65)]'
                          : 'border border-[var(--bg-tertiary)] bg-transparent'
                      }`}
                    />
                    <div className={`font-sans text-[14px] font-medium mb-0.5 ${m.highlight ? 'text-[var(--bg-tertiary)]' : 'text-[var(--text-primary)]'}`}>{m.title}</div>
                    <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-secondary)]">{m.label}</div>
                  </div>
                ))}
              </div>
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
