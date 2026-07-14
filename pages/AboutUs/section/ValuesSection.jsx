"use client";

const icons = {
  integrity: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  excellence: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  innovation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  sustainability: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  collaboration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  passion: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  )
};

export default function ValuesSection() {
  const values = [
    { key: "integrity", title: "Integrity", description: "We conduct our business with honesty, transparency, and ethical practices in all our dealings." },
    { key: "excellence", title: "Excellence", description: "We strive for perfection in every aspect of our work, from design to delivery." },
    { key: "innovation", title: "Innovation", description: "We continuously push boundaries and embrace new ideas to create exceptional spaces." }
  ];

  return (
    <section className="w-full bg-[#f5f2ed] min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#c8935a] mb-6 uppercase">
            Our Core Values
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1a1a1a] mb-8">
            What We Stand For
          </h2>
          <div className="w-20 h-1 bg-[#c8935a] mx-auto" />
        </div>

        {/* Values Grid - Numbered Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.key}
              className="group relative bg-white p-8 md:p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/30 flex-1 max-w-md"
            >
              {/* Large Background Number */}
              <span className="absolute top-4 right-6 font-display text-7xl md:text-8xl text-[#c8935a]/5 font-light group-hover:text-[#c8935a]/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c8935a] transition-colors duration-500">
                <span className="text-[#c8935a] group-hover:text-white transition-colors duration-500">
                  {icons[value.key]}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">{value.title}</h3>
                <p className="font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                  {value.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c8935a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 