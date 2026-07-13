"use client";

const icons = {
  integrity: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  excellence: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  innovation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  sustainability: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  collaboration: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  passion: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  )
};

export default function ValuesSection() {
  const values = [
    { key: "integrity", title: "Integrity", description: "We conduct our business with honesty, transparency, and ethical practices in all our dealings." },
    { key: "excellence", title: "Excellence", description: "We strive for perfection in every aspect of our work, from design to delivery." },
    { key: "innovation", title: "Innovation", description: "We continuously push boundaries and embrace new ideas to create exceptional spaces." },
    { key: "sustainability", title: "Sustainability", description: "We are committed to environmentally responsible development and sustainable practices." },
    { key: "collaboration", title: "Collaboration", description: "We believe in the power of teamwork and partnerships to achieve greatness." },
    { key: "passion", title: "Passion", description: "Our love for what we do drives us to create remarkable living experiences." }
  ];

  return (
    <section 
      className="w-full bg-[#d9d9d9] text-[var(--ink)] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-10 lg:py-24"

    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px bg-(--tan) w-16 mr-6 hidden sm:block"></span>
            <p className="font-sans text-sm tracking-[0.25em] font-medium text-(--tan) whitespace-nowrap uppercase">
              Our Values
            </p>
            <span className="hidden sm:block h-px bg-(--tan) w-16 ml-6"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl  mb-8 text-[#2a2620] text-center mx-auto">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div 
              key={value.key}
              className="group bg-[#1a1a1a] p-6 border border-transparent hover:border-(--tan) transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0 group-hover:bg-(--tan) transition-colors">
                  <span className="text-[#1a1a1a] group-hover:text-white">
                    {icons[value.key]}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-white">{value.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-white/70 paragraph">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 