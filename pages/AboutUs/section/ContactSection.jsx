"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f5f2ed] min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#c8935a] mb-6 uppercase">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1a1a1a] mb-8">
            Let's Build Something Great Together
          </h2>
          <div className="w-20 h-1 bg-[#c8935a] mx-auto mb-8" />
         
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Office */}
          <div className="group bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/20 text-center">
            <div className="w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c8935a] transition-colors duration-500">
              <svg className="w-8 h-8 text-[#c8935a] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">Our Office</h3>
            <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed">
              Business Bay, Dubai<br />
              United Arab Emirates
            </p>
          </div>

          {/* Phone */}
          <div className="group bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/20 text-center">
            <div className="w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c8935a] transition-colors duration-500">
              <svg className="w-8 h-8 text-[#c8935a] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">Call Us</h3>
            <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed">
              +971 4 XXX XXXX<br />
              Sat-Thu: 9AM - 6PM
            </p>
          </div>

          {/* Email */}
          <div className="group bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/20 text-center">
            <div className="w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c8935a] transition-colors duration-500">
              <svg className="w-8 h-8 text-[#c8935a] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">Email Us</h3>
            <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed">
              info@pltproperties.com<br />
              enquiries@pltproperties.com
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="/contact-us"
            className="inline-flex items-center gap-3 bg-[#c8935a] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#b07d4a] transition-colors duration-300 group"
          >
            Send Us a Message
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
