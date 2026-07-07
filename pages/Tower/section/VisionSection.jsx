"use client";

export default function VisionSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('section-gallery');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: 'url(https://www.plttower.com/img/h12.jpg)',
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
              OUR VISION
            </h2>
          </div>
          
          <div className="md:col-span-2" />
          
          {/* Content */}
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <p className="text-white text-lg leading-relaxed mb-6">
                PLT Tower is a new expression of modern luxury. Designed for those who value beauty, balance, and meaning, it brings together italian architectural excellence and elevated living.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Every detail is intentional—crafted to create a place that feels both iconic and personal. Here, luxury is not excess, but purpose. A space to arrive, belong, and imagine what's next.
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
