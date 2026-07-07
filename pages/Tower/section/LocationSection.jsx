"use client";

export default function LocationSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('section-accessibility');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Title */}
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-wider">
              LOCATION
            </h2>
          </div>
          
          <div className="md:col-span-2" />
          
          {/* Content */}
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm p-4">
              <p className="text-white text-lg leading-relaxed mb-4">
                Business Bay is one of Dubai's most exclusive and sought-after mixed-use districts, conceived as a dynamic destination where living, working, and leisure coexist in perfect balance.
              </p>
              <p className="text-white text-lg leading-relaxed mb-4">
                Its strategic location, just minutes from Downtown Dubai and DIFC, makes the area highly desirable for professionals, families, and investors seeking long-term value and strong rental demand.
              </p>
              <p className="text-white text-lg leading-relaxed mb-4">
                Overlooking the Dubai Canal, in the vibrant heart of Business Bay, PLT TOWER offers residents a refined urban lifestyle with immediate access to major road networks, leading financial hubs, and world-class lifestyle destinations - all within close reach.
              </p>
              <p className="text-white text-lg leading-relaxed">
                <strong>Project Address:</strong><br />
                <span className="text-white/80">57QC+C6C – Marasi Drive, Business Bay, Dubai, United Arab Emirates</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
