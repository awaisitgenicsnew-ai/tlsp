"use client";

import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#151412] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-[620px] w-full text-center">
        <div className="text-[12px] tracking-[0.28em] uppercase text-[#b08d57] mb-[34px]">Message Received</div>

        <svg className="w-[118px] h-[150px] mx-auto mb-10" viewBox="0 0 118 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 148 L40 40 L59 18 L78 40 L78 148" fill="none" stroke="#b08d57" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="520" strokeDashoffset="520" style={{ animation: 'draw 1.7s cubic-bezier(0.65, 0, 0.35, 1) forwards 0.15s' }}></path>
          <path d="M46 148 L46 60 M52 148 L52 55 M66 148 L66 55 M72 148 L72 60" strokeWidth="0.8" opacity="0.7" fill="none" stroke="#b08d57" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="520" strokeDashoffset="520" style={{ animation: 'draw 1.7s cubic-bezier(0.65, 0, 0.35, 1) forwards 0.15s' }}></path>
          <path className="base" d="M24 148 L94 148" fill="none" stroke="#f5f1e8" opacity="0.35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200" style={{ animation: 'draw 1s ease-out forwards 1.2s' }}></path>
        </svg>

        <h1 className="font-serif font-medium text-[clamp(30px,4vw,44px)] leading-[1.2] m-0 mb-[22px] text-[#f5f1e8]">
          Thank you for<br /><em className="text-[#b08d57] not-italic">reaching out.</em>
        </h1>

        <p className="text-[16px] leading-[1.85] text-[#948b7c] max-w-[480px] mx-auto mb-[42px]">
          Your message has been received. A member of the PLT Properties team
          will review your enquiry and get back to you shortly.
        </p>

        <div className="w-[56px] h-px bg-[#8a7248] mx-auto mb-[42px]"></div>

        <div className="flex gap-7 justify-center flex-wrap mb-12 text-left">
          <div className="max-w-[190px]">
            <span className="font-serif text-[14px] text-[#b08d57] block mb-2 tracking-[0.08em]">01</span>
            <p className="text-[13.5px] leading-[1.7] text-[#948b7c] m-0">Our team reviews your enquiry and matches it to the right advisor.</p>
          </div>
          <div className="max-w-[190px]">
            <span className="font-serif text-[14px] text-[#b08d57] block mb-2 tracking-[0.08em]">02</span>
            <p className="text-[13.5px] leading-[1.7] text-[#948b7c] m-0">You'll hear from us by phone or email within one business day.</p>
          </div>
          <div className="max-w-[190px]">
            <span className="font-serif text-[14px] text-[#b08d57] block mb-2 tracking-[0.08em]">03</span>
            <p className="text-[13.5px] leading-[1.7] text-[#948b7c] m-0">We'll share details, availability, and next steps for PLT Tower.</p>
          </div>
        </div>

        <div className="flex gap-[18px] justify-center flex-wrap">
          <a className="px-[34px] py-[15px] text-[12.5px] tracking-[0.14em] uppercase transition-all duration-250 inline-block bg-[#b08d57] text-[#0b0b0c] border border-[#b08d57] hover:bg-transparent hover:text-[#b08d57]" href="https://plttower.com">Explore PLT Tower</a>
          <a className="px-[34px] py-[15px] text-[12.5px] tracking-[0.14em] uppercase transition-all duration-250 inline-block border border-[rgba(245,241,232,0.12)] text-[#f5f1e8] hover:border-[#b08d57] hover:text-[#b08d57]" href="/">Back to Home</a>
        </div>

        <div className="mt-14 pt-8 border-t border-[rgba(245,241,232,0.12)] text-[13px] text-[#948b7c] tracking-[0.02em]">
          Prefer to talk now? Call <a className="text-[#f5f1e8] hover:text-[#b08d57]" href="tel:+9714XXXXXXX">+971 4 XXX XXXX</a>
          or WhatsApp <a className="text-[#f5f1e8] hover:text-[#b08d57]" href="https://wa.me/97150XXXXXXX">+971 50 XXX XXXX</a>
        </div>
      </div>

      <footer className="border-t border-[rgba(245,241,232,0.12)] px-[6vw] py-[26px] flex items-center justify-between text-[12px] text-[#948b7c] tracking-[0.04em] flex-wrap gap-[10px] w-full max-w-[1400px]">
        <span className="font-serif text-[13px] text-[#f5f1e8]">PLT Properties</span>
        <span>© 2024 All rights reserved</span>
      </footer>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          svg path {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
