"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { leadApi } from '../../../lib/api';

export default function ContactFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    developmentOfInterest: '',
    interest: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      console.log('Submitting form data:', formData);
      const response = await leadApi.createLead(formData);
      console.log('API response:', response);

      if (response.success) {
        // Redirect to thank you page with form data
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          development: formData.developmentOfInterest || '',
          interest: formData.interest || ''
        });
        router.push(`/thank-you?${params.toString()}`);
      } else {
        setError(response.message || 'Failed to submit form');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full bg-black text-white flex items-center justify-center px-4 md:px-8 lg:px-16 py-10 lg:py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-5">
          {/* Left Column - Heading, Paragraph, Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-3">
                — Contact Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                Get in Touch
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Have questions about PLT Tower? We're here to help. Reach out to us and our team will get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--tan)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--tan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p className="text-white/70 text-sm">info@plttower.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--tan)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--tan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p className="text-white/70 text-sm">+971 4 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--tan)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--tan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p className="text-white/70 text-sm">57QC+C6C – Marasi Drive, Business Bay, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Prominent Form */}
          <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl shadow-2xl border border-[var(--tan)]/30">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-6 text-center">Contact Us</h3>
            {success && (
              <div className="mb-6 bg-green-500 text-white p-4 text-center text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-6 bg-red-500 text-white p-4 text-center text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans font-medium text-sm tracking-wide text-white mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="p-3 border border-white/20 text-base transition-all bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[var(--tan)] focus:ring-2 focus:ring-[var(--tan)]/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans font-medium text-sm tracking-wide text-white mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="p-3 border border-white/20 text-base transition-all bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[var(--tan)] focus:ring-2 focus:ring-[var(--tan)]/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-sans font-medium text-sm tracking-wide text-white mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className="p-3 border border-white/20 text-base transition-all bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[var(--tan)] focus:ring-2 focus:ring-[var(--tan)]/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans font-medium text-sm tracking-wide text-white mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us more about your inquiry..."
                  className="p-3 border border-white/20 text-base transition-all bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[var(--tan)] focus:ring-2 focus:ring-[var(--tan)]/20 resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--tan)] text-white py-3.5 px-5 font-semibold text-sm uppercase tracking-widest transition-all hover:bg-[#7a341e] disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
