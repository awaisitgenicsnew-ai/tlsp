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
    <section className="w-full bg-[#141311] min-h-screen flex items-center justify-center px-6 mt-20">
      <div className="w-full max-w-[1180px] h-[550px] bg-[#1b1a17] border border-[rgba(243,239,230,0.12)] rounded-[4px] grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
        
        {/* Left Panel */}
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[rgba(243,239,230,0.12)] flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#b08a5a] mb-4">
            Our Core Values
          </p>
          <h2 className="font-serif text-[clamp(28px,2.5vw,36px)] leading-[1.22] tracking-[-0.01em] text-[#f3efe6] mb-4">
            What We <em className="italic font-light text-[#b08a5a]">Stand</em> For
          </h2>
          <p className="text-[13.5px] leading-[1.75] text-[#8b857a] max-w-[300px] mb-5">
            The principles that shape every decision we make, from the first blueprint to the final handover.
          </p>
          <div className="text-[11px] tracking-[0.05em] text-[#b08a5a] pt-4 border-t border-[rgba(243,239,230,0.12)] max-w-[240px]">
            PLT Properties — Est. Principles
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-4 md:p-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="relative py-6 border-b border-[rgba(243,239,230,0.12)] pl-0 md:pl-10 last:border-b-0"
            >
              <span className="absolute left-0 top-6 font-serif italic font-light text-[12px] text-[#b08a5a]">
                {value.roman}
              </span>
              <h3 className="font-serif text-[20px] font-medium tracking-[-0.01em] text-[#f3efe6] mb-2">
                {value.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[#8b857a] mb-2 max-w-[420px]">
                {value.description}
              </p>
              <span className="inline-block font-serif italic font-light text-[12px] text-[#b08a5a]">
                {value.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
 