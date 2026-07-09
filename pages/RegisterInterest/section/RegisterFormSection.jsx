"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { leadApi } from '../../../lib/api';

export default function RegisterFormSection() {
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
      <div className="max-w-2xl mx-auto w-full">
        {/* Form */}
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl shadow-2xl border border-[var(--tan)]/30 mt-4">
          <h3 className="font-display text-2xl md:text-3xl text-white mb-6 text-center">Register Interest</h3>
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
    </section>
  );
}
