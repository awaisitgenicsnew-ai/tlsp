"use client";

const INTRO_STATS = [
  { 
    value: "15+", 
    label: "YEARS OF CRAFT",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: "100%", 
    label: "DLD ESCROW-BACKED",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    value: "Business Bay", 
    label: "FLAGSHIP LOCATION",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    value: "European", 
    label: "DESIGN HERITAGE",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
];

export default function IntroSection() {
  return (
    <section id="building" className="bg-[#d9d9d9] text-[var(--ink)] py-10 lg:py-24 px-6 sm:px-10 flex flex-col justify-center min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <span className="block h-px bg-[var(--tan)] w-16 mr-6"></span>
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] whitespace-nowrap">
            WHO WE ARE
          </p>
          <span className="block h-px bg-[var(--tan)] w-16 ml-6"></span>
        </div>
        
        <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto mb-8">
          PLT Properties brings European craftsmanship to the heart of Dubai
        </h2>

        <p className="text-center font-sans text-sm leading-relaxed text-[var(--ink)]/80 max-w-3xl mx-auto mb-16">
      Good design is not an event - it is patience. At PLT, every material is chosen for its longevity, not its spectacle. We draw on a European tradition of considered making: the belief that a home should age into something better than it was on the day it was handed over. That conviction, carried into Dubai's most connected districts, is what defines a PLT address. </p>

      
      </div>
        <div className="border-y border-[var(--ink)]/20 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-[var(--ink)]/20">
            {INTRO_STATS.map((stat, index) => (
              <div key={index} className="text-center px-4 sm:px-6 md:px-8">
                <div className="w-8 h-8 mx-auto mb-3 text-[var(--tan)]">
                  {stat.icon}
                </div>
                <p className="font-display text-2xl md:text-3xl lg:text-4xl mb-2 text-[var(--ink)]">
                  {stat.value}
                </p>
                <p className="font-sans text-xs tracking-[0.1em] text-[var(--ink)]/60 uppercase leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
