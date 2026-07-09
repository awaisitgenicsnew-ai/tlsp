"use client";

export default function LocationSection() {

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: 'url(https://www.plttower.com/img/h8.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
          — LOCATION
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-display tracking-wider mb-8">
          PRIME POSITION
        </h2>
        <div className="bg-[#1a1a1a]/90 backdrop-blur-md p-6 md:p-8 rounded-lg border border-[var(--tan)]/30">
          <p className="text-white text-base leading-relaxed mb-4 font-light">
            Business Bay is one of Dubai's most exclusive and sought-after mixed-use districts, conceived as a dynamic destination where living, working, and leisure coexist in perfect balance.
          </p>
          <p className="text-white text-base leading-relaxed mb-4 font-light">
            Its strategic location, just minutes from Downtown Dubai and DIFC, makes the area highly desirable for professionals, families, and investors seeking long-term value and strong rental demand.
          </p>
          <p className="text-white text-base leading-relaxed mb-6 font-light">
            Overlooking the Dubai Canal, in the vibrant heart of Business Bay, PLT TOWER offers residents a refined urban lifestyle with immediate access to major road networks, leading financial hubs, and world-class lifestyle destinations.
          </p>
          <div className="pt-6 border-t border-white/20">
            <p className="text-[var(--tan)] text-sm font-medium mb-1">Project Address</p>
            <p className="text-white/80 text-sm">
              57QC+C6C – Marasi Drive, Business Bay, Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
