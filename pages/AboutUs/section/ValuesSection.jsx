"use client";

export default function ValuesSection() {
  const values = [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in all our dealings."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every aspect of our work, from design to delivery."
    },
    {
      title: "Innovation",
      description: "We continuously push boundaries and embrace new ideas to create exceptional spaces."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible development and sustainable practices."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve greatness."
    },
    {
      title: "Passion",
      description: "Our love for what we do drives us to create remarkable living experiences."
    }
  ];

  return (
    <section 
      className="w-full bg-[#d9d9d9] text-[var(--ink)] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-10 lg:py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px bg-[var(--tan)] w-16 mr-6 hidden sm:block"></span>
            <p className="font-sans text-sm tracking-[0.25em] font-medium text-[var(--tan)] whitespace-nowrap uppercase">
              Our Values
            </p>
            <span className="hidden sm:block h-px bg-[var(--tan)] w-16 ml-6"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl  mb-8 text-[#2a2620] text-center mx-auto">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-[#1a1a1a] p-6  hover:border-[var(--tan)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--tan)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--tan)] transition-colors">
                  <span className="text-[var(--tan)] group-hover:text-white font-display text-lg">
                    {index + 1}
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
