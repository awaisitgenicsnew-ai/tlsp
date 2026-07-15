"use client";

export default function IntroSection() {
  const credentials = [
    {
      numeral: "I",
      label: "Years of Craft",
      value: "15+"
    },
    {
      numeral: "II",
      label: "DLD Escrow-Backed",
      value: "100%"
    },
    {
      numeral: "III",
      label: "Flagship Location",
      value: "Business Bay"
    },
    {
      numeral: "IV",
      label: "Design Heritage",
      value: "European"
    }
  ];

  return (
    <section id="building" className="w-full min-h-screen relative overflow-hidden py-12 md:py-28 bg-[#14110E]">
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
            backgroundPosition: 'center 62%'
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.55)]" />
      </div>

     
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 py-0">
        <div className="max-w-[620px] py-4 animate-[riseIn_1s_cubic-bezier(0.2,0.8,0.2,1)_both]">
          {/* Eyebrow */}
       

          {/* Headline */}
          <h2 className="font-serif font-normal text-[clamp(36px,5vw,52px)] leading-[1.12] tracking-[-0.01em] m-0 mb-6.5 text-[#EDE6D8]">
            PLT Properties brings <span className=" font-medium text-[#D9B27C]">European craftsmanship</span> to the heart of Dubai
          </h2>

          {/* Description */}
          <p className="text-[16.5px] leading-[1.75] text-[#C9BFAD] font-light max-w-[520px] m-0 mb-9.5">
            Good design is not an event — it is patience. At PLT, every material is chosen for its longevity, not its spectacle. We draw on a European tradition of considered making: the belief that a home should age into something better than the day it was handed over. That conviction, carried into Dubai's most connected districts, is what defines a PLT address.
          </p>
        </div>
      </div>

      {/* Ledger / Credentials */}
      <div className="relative z-10 px-6 md:px-12 pb-11">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[rgba(237,230,216,0.06)] border border-[rgba(237,230,216,0.16)] backdrop-blur-[14px] animate-[riseIn_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className={`p-4 md:p-6.5 border-r border-b md:border-b-0 border-[rgba(237,230,216,0.16)] flex gap-3 md:gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)] ${(index % 2 === 1 || index === 3) ? 'border-r-0' : ''} ${index >= 2 ? 'border-b-0 md:border-b' : ''}`}
            >
              <span className="font-serif italic text-[16px] md:text-[20px] text-[#B98D4F] leading-none pt-0.5">{cred.numeral}</span>
              <div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[#C9BFAD] mb-2">{cred.label}</div>
                <div className="font-serif text-[18px] md:text-[23px] font-medium text-[#EDE6D8]">{cred.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Rail */}
    

      <style jsx>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
