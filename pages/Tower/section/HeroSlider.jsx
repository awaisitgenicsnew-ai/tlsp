"use client";

import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://www.plttower.com/img/sl1.jpg',
    title1: 'A PLACE',
    title2: 'WHERE YOU BELONG'
  },
  {
    image: 'https://www.plttower.com/img/sl2a.jpg',
    title1: 'IN THE HEART',
    title2: 'OF BUSINESS BAY'
  },
  {
    image: 'https://www.plttower.com/img/sl3a.jpg',
    title1: 'WALKABLE DISTANCE',
    title2: 'TO DOWNTOWN'
  },
  {
    image: 'https://www.plttower.com/img/sl4.jpg',
    title1: 'EXCLUSIVE VIEWS',
    title2: 'OF BURJ KHALIFA & DUBAI CANAL'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('section-vision');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-serif mb-2 tracking-wider">
                {slide.title1}
              </h1>
              <h1 className="text-4xl md:text-6xl font-sans font-light tracking-wide">
                {slide.title2}
              </h1>
            </div>
          </div>
        </div>
      ))}

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
