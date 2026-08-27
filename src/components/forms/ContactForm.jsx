import React, { useState } from 'react';
import { Mail, Phone, Building, User, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import Button from '../shared/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
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
        const { error } = await supabase.from('contact_inquiries').insert([{
          name: formData.name, email: formData.email, phone: formData.phone,
          company: formData.company, message: formData.message,
        }]);
        if (error) throw error;
      }
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch {
      setErrorMsg('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-card border border-border py-2.5 px-4 text-xs font-sans text-ink focus:outline-none focus:border-leather transition-colors duration-300 placeholder-muted";

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8 space-y-5">
      <div className="border-b border-border-light pb-4">
        <h3 className="text-base font-serif text-ink">Send an Inquiry</h3>
        <p className="text-[10px] text-muted mt-1 font-mono uppercase tracking-wider">
          For custom ODM designs, container scheduling, or direct communication.
        </p>
      </div>

      {success && (
        <div className="border border-leather/30 bg-leather/5 py-3 px-4 text-xs text-leather font-medium">
          Inquiry sent. An export manager will respond within 12 business hours.
        </div>
      )}
      {errorMsg && (
        <div className="border border-burgundy/30 bg-burgundy/5 py-3 px-4 text-xs text-burgundy font-medium">
          {errorMsg}
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <User className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Full Name *
          </label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange}
            placeholder="e.g. Elena Rostova" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Building className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Company *
          </label>
          <input type="text" name="company" required value={formData.company} onChange={handleChange}
            placeholder="e.g. Maison Cuir France" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Mail className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Email *
          </label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange}
            placeholder="e.g. procurement@maisoncuir.fr" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Phone className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Phone *
          </label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
            placeholder="e.g. +33 6 1234 5678" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <FileText className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Message *
          </label>
          <textarea name="message" required rows="5" value={formData.message} onChange={handleChange}
            placeholder="Detail your leather grain choices, order size, destination port, and sampling dates."
            className={`${inputClass} resize-y`} />
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={loading}>
        {loading ? 'Sending...' : 'Send B2B Inquiry'}
      </Button>
    </form>
  );
}
