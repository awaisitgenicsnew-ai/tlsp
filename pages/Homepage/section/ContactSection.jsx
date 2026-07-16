"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    development: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        developmentOfInterest: formData.development,
        interest: formData.interest,
        subject: `${formData.development} - ${formData.interest}`,
        message: 'New enquiry from website - please contact me regarding my interest in the property development.'
      };
      
      console.log('Submitting payload:', payload);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('API Response:', data);
      console.log('Validation errors:', data.errors);

      if (response.ok) {
        // Redirect to thank you page with form data
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          development: formData.development || '',
          interest: formData.interest || ''
        });
        router.push(`/thank-you?${params.toString()}`);
      } else {
        if (data.errors && data.errors.length > 0) {
          const errorMessages = data.errors.map(err => `${err.field}: ${err.message}`).join(', ');
          setSubmitMessage(`Validation error: ${errorMessages}`);
        } else {
          setSubmitMessage(data.message || 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <section 
      id="contact" 
      className="w-full bg-[#1D1913] py-10 lg:py-24 px-6 md:px-12 lg:px-20 min-h-screen flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-[156px] max-w-8xl mx-auto sm:mt-12">
        {/* Left: intro + sales info */}
        <div className="px-2 lg:px-1 py-24 sm:py-8"> 
          
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-normal mb-5">
            Begin a conversation with our team
          </h2>
          <p className="text-sm leading-[28px] text-white/50 max-w-lg mb-10 paragraph">
            Our sales team is available in person at the PLT Tower Sales
            Gallery, Business Bay, seven days a week — or reach us by phone
            and WhatsApp.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                Sales Gallery
              </p>
              <p className="text-sm text-white/80">
                Business Bay, Dubai · Open daily 10am–8pm
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                Phone
              </p>
              <p className="text-sm text-white/80">+971 4 XXX XXXX</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                WhatsApp
              </p>
              <p className="text-sm text-white/80">+971 50 XXX XXXX</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                Email
              </p>
              <p className="text-sm text-white/80">enquiries@pltproperties.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 bg-[#241D18] border-[1px] border-[rgba(255,255,255,0.1)] px-10 py-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-normal mb-8">
         Register Interest
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 content-start">
        
          <Field 
            label="Full Name" 
            placeholder="Your name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Field 
            label="Mobile" 
            placeholder="+971 XX XXX XXXX" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Field
            label="Email Address"
            placeholder="you@email.com"
            className="sm:col-span-2"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Select
            label="Development of Interest"
            placeholder="Select development"
            className="sm:col-span-2"
            name="development"
            value={formData.development}
            onChange={handleChange}
            options={[
              { value: 'plt-tower', label: 'PLT Tower' },
              { value: 'plt-residences', label: 'PLT Residences' },
              { value: 'plt-villas', label: 'PLT Villas' },
              { value: 'plt-commercial', label: 'PLT Commercial' },
              { value: 'other', label: 'Other' }
            ]}
          />
          <Select
            label="I am interested in"
            placeholder="Select interest"
            className="sm:col-span-2"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            options={[
              { value: 'buying', label: 'Buying Property' },
              { value: 'renting', label: 'Renting Property' },
              { value: 'investment', label: 'Investment Opportunity' },
              { value: 'information', label: 'General Information' },
              { value: 'partnership', label: 'Partnership Inquiry' }
            ]}
          />

          {submitMessage && (
            <div className={`sm:col-span-2 text-sm ${submitMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="sm:col-span-2 mt-4 justify-self-start border border-white/70 text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-[#241D18] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>
       </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, className = "", name, value, onChange }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[14px] tracking-widest uppercase text-white/40 mb-2">
        {label}
      </span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B08D57] transition-colors"
      />
    </label>
  );
}

function Select({ label, placeholder, className = "", name, value, onChange, options = [] }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white/50 focus:outline-none focus:border-[#B08D57] transition-colors appearance-none"
      >
        <option value="" disabled className="text-gray-400">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}