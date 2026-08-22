import React, { useState } from 'react';
import { Mail, Phone, Building, User, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import Button from '../shared/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      if (supabase) {
        const { error } = await supabase.from('contact_inquiries').insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message
          }
        ]);
        if (error) throw error;
      } else {
        console.log('Supabase offline. Submitting contact inquiry locally:', formData);
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setErrorMsg('Failed to send message. Please verify network status and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans border border-border bg-card p-6 md:p-8 rounded-[2px] space-y-5">
      
      <div className="border-b border-border pb-4">
        <h3 className="text-base font-serif text-primary uppercase tracking-wide">
          Message Sourcing Department
        </h3>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          For custom ODM designs, container scheduling, or direct executive communication.
        </p>
      </div>

      {success && (
        <div className="bg-[#FAF5EC] border border-gold text-primary py-3.5 px-4 text-xs font-semibold">
          Your inquiry has been successfully sent. An export manager will respond within 12 business hours.
        </div>
      )}

      {errorMsg && (
        <div className="bg-primary/5 border border-primary text-primary py-3 px-4 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <div className="space-y-4">
        
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <User className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Your Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Elena Rostova"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Building className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Company registered name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Maison Cuir France"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Mail className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Corporate Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. procurement@maisoncuir.fr"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Phone className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Contact Mobile (with country code) *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +33 6 1234 5678"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <FileText className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Inquiry Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your leather grain choices, estimated order size, destination port, and target sampling dates."
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac resize-y"
          />
        </div>

      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Submitting Inquiry...' : 'Submit B2B Message'}
        </Button>
      </div>

    </form>
  );
}
export { ContactForm };
