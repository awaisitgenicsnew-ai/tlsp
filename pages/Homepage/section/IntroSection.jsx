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
      <div className="relative z-10 flex-1 flex items-center px-12 py-0">
        <div className="max-w-[620px] py-4 animate-[riseIn_1s_cubic-bezier(0.2,0.8,0.2,1)_both]">
          {/* Eyebrow */}
          <div className="font-mono text-[11.5px] tracking-[0.3em] uppercase text-[#D9B27C] flex items-center gap-3.5 mb-6.5">
            <span className="w-6.5 h-px bg-[#B98D4F]" />
            Business Bay, Dubai
          </div>

          {/* Headline */}
          <h2 className="font-serif font-normal text-[52px] leading-[1.12] tracking-[-0.01em] m-0 mb-6.5 text-[#EDE6D8]">
            PLT Properties brings <span className=" font-medium text-[#D9B27C]">European craftsmanship</span> to the heart of Dubai
          </h2>

          {/* Description */}
          <p className="text-[16.5px] leading-[1.75] text-[#C9BFAD] font-light max-w-[520px] m-0 mb-9.5">
            Good design is not an event — it is patience. At PLT, every material is chosen for its longevity, not its spectacle. We draw on a European tradition of considered making: the belief that a home should age into something better than the day it was handed over. That conviction, carried into Dubai's most connected districts, is what defines a PLT address.
          </p>
        </div>
      </div>

      {/* Ledger / Credentials */}
      <div className="relative z-10 px-12 pb-11">
        <div className="grid grid-cols-4 bg-[rgba(237,230,216,0.06)] border border-[rgba(237,230,216,0.16)] backdrop-blur-[14px] animate-[riseIn_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className={`p-6.5 border-r border-[rgba(237,230,216,0.16)] flex gap-4 items-start transition-background duration-300 hover:bg-[rgba(237,230,216,0.045)] ${index === 3 ? 'border-r-0' : ''}`}
            >
              <span className="font-serif italic text-[20px] text-[#B98D4F] leading-none pt-0.5">{cred.numeral}</span>
              <div>
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#C9BFAD] mb-2">{cred.label}</div>
                <div className="font-serif text-[23px] font-medium text-[#EDE6D8]">{cred.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Rail */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col border border-[rgba(237,230,216,0.16)] border-r-0">
        <button className="w-13 h-13 bg-[rgba(20,17,14,0.55)] backdrop-blur-[10px] border-none border-b border-[rgba(237,230,216,0.16)] text-[#EDE6D8] flex items-center justify-center cursor-pointer transition-background duration-250 hover:bg-[#B98D4F] last:border-b-0">
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M7 3h7l5 5v13H7z"/>
            <path d="M14 3v5h5"/>
          </svg>
        </button>
        <button className="w-13 h-13 bg-[rgba(20,17,14,0.55)] backdrop-blur-[10px] border-none border-b border-[rgba(237,230,216,0.16)] text-[#EDE6D8] flex items-center justify-center cursor-pointer transition-background duration-250 hover:bg-[#B98D4F] last:border-b-0">
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2z"/>
          </svg>
        </button>
        <button className="w-13 h-13 bg-[rgba(20,17,14,0.55)] backdrop-blur-[10px] border-none border-b border-[rgba(237,230,216,0.16)] text-[#EDE6D8] flex items-center justify-center cursor-pointer transition-background duration-250 hover:bg-[#B98D4F] last:border-b-0">
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </button>
        <button className="w-13 h-13 bg-[rgba(20,17,14,0.55)] backdrop-blur-[10px] border-none border-b border-[rgba(237,230,216,0.16)] text-[#EDE6D8] flex items-center justify-center cursor-pointer transition-background duration-250 hover:bg-[#B98D4F] last:border-b-0">
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M2 10h20"/>
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
