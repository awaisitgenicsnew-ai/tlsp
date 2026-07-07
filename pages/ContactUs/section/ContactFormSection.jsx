"use client";

import { useState } from 'react';
import { useEffect, useRef } from "react";

export default function ContactFormSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent("changeNavbarTheme", { detail: "light" }));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setError(data.message || 'Failed to submit form');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#d9d9d9] text-[var(--ink)] flex items-center justify-center px-4 md:px-8 lg:px-16 py-28"
    >
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-6">
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-3">
            — Send a Message
          </p>
          <h2 className="font-display text-2xl leading-tight mb-3">
            We'd Love to Hear From You
          </h2>
        </div>

        <div className="bg-white p-4 md:p-6">
          {success && (
            <div className="success-message mb-6">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {error && (
            <div className="error-message mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group mb-1">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={1}
                placeholder="Tell us more about your inquiry..."
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="submit-button mt-2"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--ink);
        }

        .form-input,
        .form-textarea {
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 0;
          font-size: 1rem;
          font-family: var(--font-sans);
          transition: all 0.3s ease;
          background: white;
          color: var(--ink);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--tan);
          box-shadow: 0 0 0 3px rgba(138, 60, 34, 0.1);
        }

        .form-textarea {
          resize: vertical;
        }

        .submit-button {
          background: var(--tan);
          color: white;
          padding: 14px 20px;
          border: none;
          border-radius: 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: var(--font-sans);
          margin-top: 0.5rem;
        }

        .submit-button:hover:not(:disabled) {
          background: #7a341e;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          background: #10b981;
          color: white;
          padding: 1rem;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
        }

        .error-message {
          background: #ef4444;
          color: white;
          padding: 1rem;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
        }
      `}</style>
    </section>
  );
}
