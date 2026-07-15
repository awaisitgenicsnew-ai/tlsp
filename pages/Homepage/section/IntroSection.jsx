"use client";

export default function IntroSection() {
  const credentials = [
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
    }
  ];

  return (
    <section id="building" className="w-full bg-[#F1ECE2] text-[#242019] flex justify-center items-center min-h-screen">
      <div className="w-full  px-6 md:px-10 md:pr-20 py-16 md:py-28">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Rail */}
          <div className="border-b md:border-b-0 md:border-r border-[rgba(36,32,25,0.14)] pb-8 md:pb-0 md:pt-8 flex flex-col justify-center">
            <h2 className="font-serif text-[32px] md:text-[42px]  leading-[1.18] tracking-[-0.3px] font-medium text-[#242019] mb-8">
              PLT Properties brings European craftsmanship to the heart of Dubai
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.85] text-[#5B5348] max-w-[560px]">
              Good design is not an event — it is patience. At PLT, every material is chosen for its longevity, not its spectacle. We draw on a European tradition of considered making: the belief that a home should age into something better than it was on the day it was handed over. That conviction, carried into Dubai's most connected districts, is what defines a PLT address.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center ">
            {/* Spec Sheet */}
            <div className="pt-4 md:pt-0">
              <div className="flex justify-between items-center pb-4 border-b border-[#242019]/20 mb-8">
                <span className="text-[11px] tracking-[0.3em] font-semibold text-[#8B8272]">
                  CREDENTIALS
                </span>
                <span className="font-mono text-[11px] text-[#8B8272]">
                  REF. PLT-WWA-01
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6  bg-white/40 backdrop-blur-sm border border-[rgba(36,32,25,0.08] transition-all duration-500 hover:bg-white hover:shadow-xl hover:border-[#5E7B6B]/30 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#5E7B6B]/10 to-[#5E7B6B]/5 text-[#5E7B6B] group-hover:from-[#5E7B6B] group-hover:to-[#4a6355] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        {cred.icon.props.children}
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-sans text-[11px] tracking-[0.2em] font-semibold text-[#c5811b] mb-2 group-hover:text-[#5E7B6B] transition-colors duration-300">
                        {cred.label}
                      </div>
                      <div className="font-serif text-[22px] md:text-[26px] font-semibold text-[#242019] group-hover:text-[#5E7B6B] transition-colors duration-300">
                        {cred.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
