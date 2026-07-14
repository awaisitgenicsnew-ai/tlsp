"use client";

export default function AchievementsSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-screen">
      {/* LEFT: dark panel */}
      <div className="relative bg-[#181410] overflow-hidden px-8 py-16 md:px-16 md:py-24 flex flex-col justify-center">
        {/* decorative faint circles */}
        <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full border border-white/5"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 rounded-full border border-white/5"></div>

        <div className="relative max-w-lg">
          <p className="text-[#c8935a] text-xs font-semibold tracking-[0.2em] mb-6">OUR ACHIEVEMENTS</p>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl leading-tight text-[#f2ede4] mb-8">
            Numbers That Speak
          </h2>

          <p className="text-[#9c9790] text-base leading-relaxed mb-10 max-w-md">
            Our track record of success is a testament to our commitment to excellence and customer satisfaction.
          </p>
        </div>
      </div>

      {/* RIGHT: stats grid */}
      <div className="bg-[#efeae1] px-8 py-16 md:px-16 md:py-24 flex items-center">
        <div className="w-full grid grid-cols-2 border border-[#dcd5c8]">
          {/* 15+ Years */}
          <div className="p-8 md:p-10 border-b border-r border-[#dcd5c8]">
            <div className="w-11 h-11 rounded-full border border-[#c8935a] flex items-center justify-center mb-6 text-[#c8935a]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-serif text-3xl text-[#1c1a17] mb-2">15+</p>
            <p className="text-[11px] tracking-[0.15em] font-semibold text-[#84796a]">YEARS OF EXPERIENCE</p>
          </div>

          {/* 50+ Projects */}
          <div className="p-8 md:p-10 border-b border-[#dcd5c8]">
            <div className="w-11 h-11 rounded-full border border-[#c8935a] flex items-center justify-center mb-6 text-[#c8935a]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="font-serif text-3xl text-[#1c1a17] mb-2">50+</p>
            <p className="text-[11px] tracking-[0.15em] font-semibold text-[#84796a]">PROJECTS COMPLETED</p>
          </div>

          {/* 2000+ Residents */}
          <div className="p-8 md:p-10 border-r border-[#dcd5c8]">
            <div className="w-11 h-11 rounded-full border border-[#c8935a] flex items-center justify-center mb-6 text-[#c8935a]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="font-serif text-3xl text-[#1c1a17] mb-2">2000+</p>
            <p className="text-[11px] tracking-[0.15em] font-semibold text-[#84796a]">HAPPY RESIDENTS</p>
          </div>

          {/* 25+ Awards */}
          <div className="p-8 md:p-10">
            <div className="w-11 h-11 rounded-full border border-[#c8935a] flex items-center justify-center mb-6 text-[#c8935a]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <p className="font-serif text-3xl text-[#1c1a17] mb-2">25+</p>
            <p className="text-[11px] tracking-[0.15em] font-semibold text-[#84796a]">INDUSTRY AWARDS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

