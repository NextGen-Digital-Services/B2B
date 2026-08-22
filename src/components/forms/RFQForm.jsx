import React, { useState } from 'react';
import { Mail, Phone, Globe, Building, User, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { buildWhatsAppRFQUrl } from '../../utils/helpers';
import Button from '../shared/Button';

export default function RFQForm({ cartItems, onClearCart }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
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

    if (cartItems.length === 0) {
      setErrorMsg('Your RFQ cart is empty. Please add products first.');
      setLoading(false);
      return;
    }

    try {
      // 1. Submit to Supabase if config is active
      if (supabase) {
        const { error } = await supabase.from('rfq_requests').insert([
          {
            company_name: formData.companyName,
            contact_person: formData.contactPerson,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            items: cartItems.map((item) => ({
              product_id: item.product_id,
              product_name: item.product_name,
              color: item.selected_color,
              quantity: item.quantity
            })),
            message: formData.message,
            status: 'pending'
          }
        ]);

        if (error) throw error;
      } else {
        // Mock offline fallback
        console.log('Supabase offline. Submitting RFQ data locally:', formData, cartItems);
      }

      setSuccess(true);
      
      // 2. Open WhatsApp pre-filled template link
      const waUrl = buildWhatsAppRFQUrl(formData.companyName, formData.country, cartItems);
      
      setTimeout(() => {
        // Open WhatsApp in a separate tab
        window.open(waUrl, '_blank');
        onClearCart();
      }, 1000);

    } catch (err) {
      console.error('Error submitting RFQ:', err);
      setErrorMsg('Failed to submit quote request. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-card border border-gold p-8 text-center space-y-4 rounded-[2px] font-sans">
        <h3 className="text-xl font-serif text-primary">RFQ Submission Successful</h3>
        <p className="text-xs text-muted leading-relaxed">
          Your wholesale quotation request has been recorded. Redirecting you to WhatsApp to connect directly with our export manager...
        </p>
        <div className="animate-pulse inline-block h-2 w-16 bg-gold" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-sans border border-border bg-card p-6 md:p-8 rounded-[2px] space-y-6">
      
      <div className="border-b border-border pb-4">
        <h3 className="text-base font-serif text-primary uppercase tracking-wide">
          Submit Quote Requirements
        </h3>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          Provide your business credentials. Our sales desk will verify your company status and send an official FOB price quote email.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-primary/5 border border-primary text-primary py-3 px-4 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Company Name */}
        <div className="space-y-1.5">
          <label htmlFor="companyName" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Building className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Company Registered Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Vance Retail Ltd"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Contact Person */}
        <div className="space-y-1.5">
          <label htmlFor="contactPerson" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <User className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Contact Sourcing Officer *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="e.g. Marcus Vance"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Business Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Mail className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. buyer@vancegoods.co.uk"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Phone className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            WhatsApp / Mobile Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +44 20 7946 0192"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Country */}
        <div className="space-y-1.5 md:col-span-2">
          <label htmlFor="country" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <Globe className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Destination Port / Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. London Gateway Port, United Kingdom"
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac"
          />
        </div>

        {/* Additional specifications / custom requests */}
        <div className="space-y-1.5 md:col-span-2">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center">
            <FileText className="w-3.5 h-3.5 mr-1.5 text-cognac" />
            Customization Instructions & Details
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. Need customized metal rivets with our logo stamp. Custom cotton lining in matching burgundy color for 100 units."
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 px-3.5 text-xs text-charcoal focus:outline-none focus:border-cognac resize-y"
          />
        </div>

      </div>

      <div className="pt-4 border-t border-border/40">
        <Button
          type="submit"
          variant="primary"
          className="w-full py-4 text-xs font-semibold uppercase tracking-wider"
          disabled={loading}
        >
          {loading ? 'Processing Quotation...' : 'Request B2B FOB Quote (WhatsApp)'}
        </Button>
      </div>

    </form>
  );
}
export { RFQForm };
