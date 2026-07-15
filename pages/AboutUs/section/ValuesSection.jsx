"use client";

export default function ValuesSection() {
  const values = [
    {
      roman: "I",
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in every dealing — with clients, partners, and each other.",
      tag: "Trust is the first deliverable."
    },
    {
      roman: "II",
      title: "Excellence",
      description: "We strive for perfection in every aspect of our work, from the first design sketch through to final delivery on site.",
      tag: "Good enough never is."
    },
    {
      roman: "III",
      title: "Innovation",
      description: "We continuously push boundaries and embrace new ideas, materials, and methods to create genuinely exceptional spaces.",
      tag: "Built for what's next, not what's now."
    }
  ];

  return (
    <section className="w-full bg-[#181410] min-h-screen flex items-center justify-center px-6 py-28">
      <div className="w-full max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-10 max-w-[700px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#b08a5a]" />
            <p className="text-[11.5px] tracking-[0.22em] uppercase text-[#b08a5a] font-medium">
              Our Core Values
            </p>
            <span className="w-8 h-px bg-[#b08a5a]" />
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.01em] text-[#f3efe6] mb-6">
            What We <em className="italic font-light text-[#b08a5a]">Stand</em> For
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#9a948a]">
            The principles that shape every decision we make, from the first blueprint to the final handover.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative p-4 border border-[rgba(243,239,230,0.12)] hover:border-[#b08a5a]/40 transition-all duration-500"
            >
              {/* Roman Numeral */}
              <span className="font-serif italic font-light text-[48px] text-[#b08a5a]/20 group-hover:text-[#b08a5a]/30 transition-colors mb-4 block">
                {value.roman}
              </span>
              
              {/* Title */}
              <h3 className="font-serif text-[24px] font-medium tracking-[-0.01em] text-[#f3efe6] mb-4">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-[14px] leading-[1.75] text-[#9a948a] mb-6">
                {value.description}
              </p>
              
              {/* Tag */}
              <div className="pt-4 border-t border-[rgba(243,239,230,0.12)]">
                <span className="inline-block font-serif italic font-light text-[12px] text-[#b08a5a]">
                  {value.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-[rgba(243,239,230,0.12)]">
          <p className="text-[11px] tracking-[0.05em] text-[#b08a5a]">
            PLT Properties — Est. Principles
          </p>
        </div>
      </div>
    </section>
  );
}
 