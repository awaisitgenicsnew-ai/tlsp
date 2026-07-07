"use client";

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
    const development = searchParams.get('development');
    const interest = searchParams.get('interest');

    if (name && email) {
      setFormData({ name, email, phone, development, interest });
    } else {
      // Redirect to home if no data
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  }, [searchParams, router]);

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#d9d9d9]">
        <div className="text-center">
          <p className="text-[var(--ink)]">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#d9d9d9] flex items-center justify-center px-4 md:px-8 lg:px-16 py-10 lg:py-24">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-[#10b981] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4">
            Thank You!
          </h1>
          <p className="font-sans text-lg text-[var(--ink)] opacity-70 mb-8">
            Your enquiry has been submitted successfully. Our team will contact you shortly.
          </p>

          {/* Submitted Information */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg text-left mb-8">
            <h2 className="font-sans text-sm font-semibold text-[var(--tan)] uppercase tracking-widest mb-4">
              Your Information
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-sans text-sm text-gray-600">Name:</span>
                <span className="font-sans text-sm font-medium text-[var(--ink)]">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-sans text-sm text-gray-600">Email:</span>
                <span className="font-sans text-sm font-medium text-[var(--ink)]">{formData.email}</span>
              </div>
              {formData.phone && (
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-sans text-sm text-gray-600">Phone:</span>
                  <span className="font-sans text-sm font-medium text-[var(--ink)]">{formData.phone}</span>
                </div>
              )}
              {formData.development && (
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-sans text-sm text-gray-600">Development:</span>
                  <span className="font-sans text-sm font-medium text-[var(--ink)]">{formData.development}</span>
                </div>
              )}
              {formData.interest && (
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Interest:</span>
                  <span className="font-sans text-sm font-medium text-[var(--ink)]">{formData.interest}</span>
                </div>
              )}
            </div>
          </div>

          {/* Back to Home Button */}
          <button
            onClick={() => router.push('/')}
            className="w-full bg-[var(--tan)] text-white py-4 px-6 font-sans text-sm font-semibold uppercase tracking-widest hover:bg-[#7a341e] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#d9d9d9]">
        <div className="text-center">
          <p className="text-[var(--ink)]">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
