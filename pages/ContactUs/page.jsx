"use client";

import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import NavigationControls from '@/components/NavigationControls';
import ProgressBar from '@/components/ProgressBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/HorizontalScroll.css';

// Import Contact Us sections
import HeroSection from './section/HeroSection';
import ContactInfoSection from './section/ContactInfoSection';
import ContactFormSection from './section/ContactFormSection';

/**
 * Contact Us page with horizontal scroll implementation
 * Following the same pattern as Homepage and AboutUs
 */
export default function ContactUs() {
  const {
    containerRef,
    scrollPinTrackRef,
    scrollState,
    navigationState,
    scrollLeft,
    scrollRight,
    scrollToSection,
    isDesktop,
    progress,
    canNavigate,
  } = useHorizontalScroll({
    easeFactor: 0.08,
    breakpoint: 768,
    enableWheelControl: true,
    enableNavigation: true,
  });

  const sections = [
    { component: HeroSection, name: 'hero' },
    { component: ContactFormSection, name: 'contact-form' },
    { component: ContactInfoSection, name: 'contact-info' },
  ];

  return (
    <div className="contactus-layout">
      {/* Header - Fixed Position */}
      <header className="contactus-header">
        <Navbar />
      </header>

      {/* Horizontal Scroll Container */}
      <div className="contactus-scroll-wrapper" ref={scrollPinTrackRef}>
        <main 
          ref={containerRef}
          className="timeline-container"
          role="main"
          aria-label="Contact Us sections"
        >
          <section className="timeline-section" data-section-name="hero">
            <HeroSection />
          </section>
          <section className="timeline-section" data-section-name="contact-form">
            <ContactFormSection />
          </section>
          <section className="timeline-section" data-section-name="contact-info">
            <ContactInfoSection />
          </section>
        </main>

        {/* Navigation Controls */}
        {canNavigate && (
          <NavigationControls
            onNavigateLeft={scrollLeft}
            onNavigateRight={scrollRight}
            canGoLeft={navigationState.canGoLeft}
            canGoRight={navigationState.canGoRight}
          />
        )}

        {/* Progress Bar */}
        <ProgressBar progress={progress} />
      </div>

      {/* Footer */}
      <footer className="contactus-footer">
        <Footer />
      </footer>

      <style jsx global>{`
        .contactus-layout {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        .contactus-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
        }

        .contactus-scroll-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
        }

        .timeline-container {
          display: flex;
          height: 100vh;
          width: max-content;
          align-items: stretch;
          position: sticky;
          top: 0;
          overflow: hidden;
          will-change: transform;
        }

        .timeline-section {
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .timeline-section > * {
          flex: 1;
          min-height: 0;
        }

        .contactus-footer {
          position: relative;
          width: 100%;
          z-index: 10;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .timeline-container {
            flex-direction: column;
            height: auto !important;
            width: 100%;
            position: relative;
            top: 0;
            align-items: stretch;
          }

          .timeline-section {
            width: 100%;
            height: auto;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .timeline-section > * {
            flex: 1;
            min-height: 0;
          }
        }
      `}</style>
    </div>
  );
}
