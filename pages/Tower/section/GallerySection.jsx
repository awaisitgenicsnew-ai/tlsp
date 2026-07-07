"use client";

import { useState } from 'react';

const galleryImages = [
  'https://www.plttower.com/img/sld1.jpg',
  'https://www.plttower.com/img/sld2.jpg',
  'https://www.plttower.com/img/sld3.jpg',
  'https://www.plttower.com/img/sld4.jpg',
  'https://www.plttower.com/img/sld5.jpg',
  'https://www.plttower.com/img/sld6.jpg',
  'https://www.plttower.com/img/sld7.jpg',
  'https://www.plttower.com/img/sld8.jpg',
  'https://www.plttower.com/img/sld9.jpg',
  'https://www.plttower.com/img/sld10.jpg',
  'https://www.plttower.com/img/sld11.jpg',
  'https://www.plttower.com/img/sld12.jpg'
];

export default function GallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('section-location');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: 'url(https://www.plttower.com/img/h2.jpg)',
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
              GALLERY
            </h2>
          </div>
          
          <div className="md:col-span-2" />
          
          {/* Content */}
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <p className="text-white text-lg leading-relaxed mb-6">
                A glimpse into what's coming.<br />
                Welcome to PLT Tower where design, light, and intention come together.
              </p>
              <button
                onClick={openModal}
                className="text-white underline font-semibold hover:text-gray-200 transition-colors"
              >
                Discover the gallery.
              </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            ×
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ‹
          </button>
          
          <img
            src={galleryImages[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
