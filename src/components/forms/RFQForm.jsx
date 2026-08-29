import React, { useState } from 'react';
import { Mail, Phone, Globe, Building, User, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { buildWhatsAppRFQUrl } from '../../utils/helpers';
import Button from '../shared/Button';

export default function RFQForm({ cartItems, onClearCart }) {
  const [formData, setFormData] = useState({
    companyName: '', contactPerson: '', email: '', phone: '', country: '', message: '',
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

    if (cartItems.length === 0) {
      setErrorMsg('Your inquiry cart is empty. Please add products first.');
      setLoading(false);
      return;
    }

    try {
      if (supabase) {
        const { error } = await supabase.from('rfq_requests').insert([{
          company_name: formData.companyName, contact_person: formData.contactPerson,
          email: formData.email, phone: formData.phone, country: formData.country,
          items: cartItems.map((item) => ({
            product_id: item.product_id, product_name: item.product_name,
            color: item.selected_color, quantity: item.quantity,
          })),
          message: formData.message, status: 'pending',
        }]);
        if (error) throw error;
      }
      setSuccess(true);
      const waUrl = buildWhatsAppRFQUrl(formData.companyName, formData.country, cartItems);
      setTimeout(() => { window.open(waUrl, '_blank'); onClearCart(); }, 1000);
    } catch {
      setErrorMsg('Failed to submit. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="border border-border bg-card p-8 text-center space-y-4">
        <h3 className="text-xl font-serif text-ink">Inquiry Submitted</h3>
        <p className="text-xs text-muted leading-relaxed">
          Redirecting to WhatsApp to connect with our sales team...
        </p>
        <div className="animate-pulse inline-block h-0.5 w-16 bg-leather" />
      </div>
    );
  }

  const inputClass = "w-full bg-ivory border border-border py-2.5 px-4 text-xs font-sans text-ink focus:outline-none focus:border-leather transition-colors duration-300 placeholder-muted";

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8 space-y-5">
      <div className="border-b border-border-light pb-4">
        <h3 className="text-base font-serif text-ink">Submit Quote Requirements</h3>
        <p className="text-[10px] text-muted mt-1 font-mono uppercase tracking-wider">
          Provide your business credentials for an official wholesale price quote.
        </p>
      </div>

      {errorMsg && (
        <div className="border border-burgundy/30 bg-burgundy/5 py-3 px-4 text-xs text-burgundy font-medium">{errorMsg}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Building className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Company *
          </label>
          <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange}
            placeholder="e.g. Vance Retail Ltd" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <User className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Contact Person *
          </label>
          <input type="text" name="contactPerson" required value={formData.contactPerson} onChange={handleChange}
            placeholder="e.g. Marcus Vance" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Mail className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Email *
          </label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange}
            placeholder="e.g. buyer@vancegoods.co.uk" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Phone className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Phone *
          </label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
            placeholder="e.g. +44 20 7946 0192" className={inputClass} />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Globe className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Destination Country *
          </label>
          <input type="text" name="country" required value={formData.country} onChange={handleChange}
            placeholder="e.g. London Gateway Port, UK" className={inputClass} />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <FileText className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Customization Details
          </label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange}
            placeholder="e.g. Custom metal rivets with logo stamp, matching burgundy lining for 100 units."
            className={`${inputClass} resize-y`} />
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full py-3.5" disabled={loading}>
        {loading ? 'Processing...' : 'Send B2B Inquiry via WhatsApp'}
      </Button>
    </form>
  );
}
