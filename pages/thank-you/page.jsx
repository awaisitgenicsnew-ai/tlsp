"use client";

import { useSearchParams } from 'next/navigation';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';

  return (
    <div className="min-h-screen bg-[#12151f] flex items-center justify-center px-6 py-20">
      <div className="confirm max-w-[620px] w-full text-center">
        <div className="eyebrow">Message Received</div>

        <svg className="signature" viewBox="0 0 118 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 148 L40 40 L59 18 L78 40 L78 148"></path>
          <path d="M46 148 L46 60 M52 148 L52 55 M66 148 L66 55 M72 148 L72 60" strokeWidth="0.8" opacity="0.7"></path>
          <path className="base" d="M24 148 L94 148"></path>
        </svg>

        <h1>Thank you for<br /><em>reaching out.</em></h1>

        <p className="lede">
          Your message has been received. A member of the PLT Properties team
          will review your enquiry and get back to you shortly.
        </p>

        <div className="rule"></div>

        <div className="next">
          <div className="next-item">
            <span className="num">01</span>
            <p>Our team reviews your enquiry and matches it to the right advisor.</p>
          </div>
          <div className="next-item">
            <span className="num">02</span>
            <p>You'll hear from us by phone or email within one business day.</p>
          </div>
          <div className="next-item">
            <span className="num">03</span>
            <p>We'll share details, availability, and next steps for PLT Tower.</p>
          </div>
        </div>

        <div className="actions">
          <a className="btn btn-primary" href="https://plttower.com">Explore PLT Tower</a>
          <a className="btn btn-secondary" href="/">Back to Home</a>
        </div>

        <div className="direct">
          Prefer to talk now? Call <a href="tel:+9714XXXXXXX">+971 4 XXX XXXX</a>
          or WhatsApp <a href="https://wa.me/97150XXXXXXX">+971 50 XXX XXXX</a>
        </div>
      </div>

      <style jsx>{`
        .confirm {
          max-width: 620px;
          width: 100%;
          text-align: center;
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c9a876;
          margin-bottom: 34px;
        }

        /* Signature element: single-line tower silhouette that draws itself */
        .signature {
          width: 118px;
          height: 150px;
          margin: 0 auto 40px;
        }
        .signature path {
          fill: none;
          stroke: #c9a876;
          stroke-width: 1.4;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          animation: draw 1.7s cubic-bezier(0.65, 0, 0.35, 1) forwards 0.15s;
        }
        .signature .base {
          stroke: #ede8de;
          opacity: 0.35;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 1s ease-out forwards 1.2s;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .signature path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }

        h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.2;
          margin: 0 0 22px;
          color: #ede8de;
        }

        h1 em {
          color: #c9a876;
          font-style: normal;
        }

        .lede {
          font-size: 16px;
          line-height: 1.85;
          color: #a9a9a0;
          max-width: 480px;
          margin: 0 auto 42px;
        }

        .rule {
          width: 56px;
          height: 1px;
          background: rgba(237, 232, 222, 0.12);
          margin: 0 auto 42px;
        }

        .next {
          display: flex;
          gap: 28px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
          text-align: left;
        }
        .next-item {
          max-width: 190px;
        }
        .next-item .num {
          font-family: 'Playfair Display', serif;
          color: #c9a876;
          font-size: 14px;
          display: block;
          margin-bottom: 8px;
          letter-spacing: 0.08em;
        }
        .next-item p {
          font-size: 13.5px;
          line-height: 1.7;
          color: #a9a9a0;
          margin: 0;
        }

        .actions {
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          padding: 15px 34px;
          font-size: 12.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary {
          background: #c9a876;
          color: #12151f;
          border: 1px solid #c9a876;
        }
        .btn-primary:hover {
          background: transparent;
          color: #c9a876;
        }
        .btn-secondary {
          border: 1px solid rgba(237, 232, 222, 0.12);
          color: #ede8de;
        }
        .btn-secondary:hover {
          border-color: #c9a876;
          color: #c9a876;
        }

        .direct {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid rgba(237, 232, 222, 0.12);
          font-size: 13px;
          color: #a9a9a0;
          letter-spacing: 0.02em;
        }
        .direct a {
          color: #ede8de;
        }
        .direct a:hover {
          color: #c9a876;
        }
      `}</style>
    </div>
  );
}
