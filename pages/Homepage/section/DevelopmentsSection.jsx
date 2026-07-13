"use client";

import Image from "next/image";

export default function DevelopmentsSection() {
  return (
    <section className="w-full bg-[#d9d9d9] min-h-screen flex items-center justify-center px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <div className="flex gap-2 mb-7">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase px-3.5 py-1.5 bg-[#211D17] text-[#F7F4EC] rounded-sm">
              High Demand
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[44px] leading-[0.98] tracking-[-0.01em] text-[#211D17] mb-4.5">
            PLT Tower
          </h1>

          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7C5A2C] mb-6 flex items-center gap-2.5">
            <span className="w-[22px] h-px bg-[#7C5A2C]"></span>
            Business Bay, Dubai
          </p>

          <p className="text-[14px] leading-[1.7] text-[#4A443A] max-w-[760px] mb-1">
            Fifty-one storeys of considered living in Dubai's most dynamic address. Each residence designed with European restraint — natural stone, warm metals, and proportions built to last.
          </p>

          <div className="flex border-t border-[rgba(33,29,23,0.18)] pt-6.5 mb-9">
            <div className="pr-10 mr-10 border-r border-[rgba(33,29,23,0.10)]">
              <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#8A8172] font-semibold mb-2">Type</p>
              <p className="font-serif text-[22px] text-[#211D17]">Studio–3 Bed</p>
            </div>
            <div className="pr-10 mr-10 border-r border-[rgba(33,29,23,0.10)]">
              <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#8A8172] font-semibold mb-2">Handover</p>
              <p className="font-serif text-[22px] text-[#211D17]">Q4 2027</p>
            </div>
            <div>
              <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#8A8172] font-semibold mb-2">Payment</p>
              <p className="font-serif text-[22px] text-[#211D17]">60 / 40</p>
            </div>
          </div>

          <div className="flex items-center gap-7">
            <button className="text-[12.5px] font-semibold tracking-[0.1em] uppercase px-7.5 py-4 bg-[#211D17] text-[#F7F4EC] border-none cursor-pointer hover:bg-[#7C5A2C] transition-colors">
              View development
            </button>
            <button className="text-[12.5px] font-semibold tracking-[0.1em] uppercase px-7.5 py-4 bg-transparent text-[#211D17] border border-[rgba(33,29,23,0.18)] flex items-center gap-2.5 cursor-pointer hover:border-[#7C5A2C] hover:text-[#7C5A2C] transition-colors">
              Register interest
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right: Elevation/Visual */}
        <div className="relative flex justify-center items-center h-full">
          <div className="relative w-full max-w-[560px] h-90 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
              alt="PLT Tower"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
