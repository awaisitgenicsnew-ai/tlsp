"use client";

export default function LandmarksSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('section-contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: 'url(https://www.plttower.com/img/mappa2.jpg)',
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
              LANDMARKS
            </h2>
          </div>
          
          <div className="md:col-span-2" />
          
          {/* Content */}
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <div className="text-white text-lg leading-relaxed space-y-4">
                <div>
                  <strong>Downtown Dubai & Burj Khalifa:</strong><br />
                  approximately 5 minutes
                </div>
                <div>
                  <strong>Dubai Mall & Dubai Fountain:</strong><br />
                  approximately 5 minutes
                </div>
                <div>
                  <strong>Dubai Opera:</strong><br />
                  approximately 5 minutes
                </div>
                <div>
                  <strong>DIFC:</strong><br />
                  approximately 10 minutes
                </div>
                <div>
                  <strong>Business Bay Marina & Yacht Club</strong><br />
                  in the immediate vicinity
                </div>
              </div>
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
