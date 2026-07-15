"use client";

export default function MissionSection() {
  const principles = [
    {
      stage: "STAGE 01 — MATERIAL",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22 L24 8 L42 22" />
          <path d="M12 20 V40 H36 V20" />
          <path d="M20 40 V28 H28 V40" />
        </svg>
      ),
      title: "Quality First",
      description: "Every material, finish, and detail is chosen for what it will look like in ten years, not just on delivery day.",
      tag: "No shortcuts. No substitutions."
    },
    {
      stage: "STAGE 02 — METHOD",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6 L24 18" />
          <path d="M24 30 L24 42" />
          <circle cx="24" cy="24" r="6" />
          <path d="M8 24 L18 24" />
          <path d="M30 24 L40 24" />
        </svg>
      ),
      title: "Forward Design",
      description: "We build with tomorrow's tools and standards in mind, so the spaces we deliver stay ahead of their time.",
      tag: "Tested ideas, applied early."
    },
    {
      stage: "STAGE 03 — RELATIONSHIP",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 18 Q8 10 16 10 Q22 10 24 16 Q26 10 32 10 Q40 10 40 18 Q40 28 24 38 Q8 28 8 18 Z" />
        </svg>
      ),
      title: "Client Partnership",
      description: "We listen before we draft. Every decision is made in conversation with the people who'll live in the space.",
      tag: "Your vision, our craft."
    }
  ];

  return (
    <section className="w-full bg-[#1c1b19] min-h-screen relative overflow-hidden">
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(100deg, rgba(20,17,14,0.94) 8%, rgba(20,17,14,0.72) 34%, rgba(20,17,14,0.30) 62%, rgba(20,17,14,0.55) 100%),
              linear-gradient(to top, rgba(20,17,14,0.85) 0%, rgba(20,17,14,0.05) 38%),
              url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        {/* Header */}
        <div className="text-center mb-7 max-w-[760px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#7a6042]" />
            <p className="text-[11.5px] tracking-[0.22em] uppercase text-[#b08a5a] font-medium">
              Our Principles
            </p>
            <span className="w-6 h-px bg-[#7a6042]" />
          </div>
          <h2 className="font-serif text-4xl leading-[1.12] tracking-[-0.01em] text-[#f3efe6] mb-5">
            Spaces built on <em className="italic font-light text-[#b08a5a]">conviction</em>,<br />not compromise
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-[#9a948a] max-w-[480px] mx-auto">
            Three commitments guide every project we take on — from the first sketch to the final walkthrough.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          {/* Horizontal rail line */}
          <div className="hidden md:block absolute top-[11px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(243,239,230,0.16)] to-transparent" />

          {principles.map((principle, index) => (
            <div key={index} className="relative pt-14 text-left">
              {/* Node */}
              <div className="absolute top-0 left-0 w-[23px] h-[23px] rounded-full bg-[#1c1b19] border-[1.5px] border-[#b08a5a] flex items-center justify-center">
                <span className="w-[7px] h-[7px] rounded-full bg-[#b08a5a]" />
              </div>

              {/* Stage label */}
              <p className="text-[11px] tracking-[0.16em] text-[#7a6042] mb-[18px]">
                {principle.stage}
              </p>

              {/* Icon */}
              <div className="w-[38px] h-[38px] mb-[22px] text-[#b08a5a]">
                {principle.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[22px] font-medium tracking-[-0.01em] text-[#f3efe6] mb-3">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-[14.5px] leading-[1.75] text-[#9a948a] mb-[18px] max-w-[290px]">
                {principle.description}
              </p>

              {/* Tag */}
              <div className="text-[12px] tracking-[0.03em] text-[#7a6042] pt-[14px] border-t border-[rgba(243,239,230,0.16)] max-w-[290px]">
                {principle.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
