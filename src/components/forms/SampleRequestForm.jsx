import React, { useState } from 'react';
import { Truck, Mail, Building, MapPin, Clipboard } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import Button from '../shared/Button';

export default function SampleRequestForm({ product, selectedColor }) {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    courierAccount: '',
    shippingAddress: '',
    notes: ''
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
      const messageText = `SAMPLE REQUEST: Product: ${product.name} | Selected Leather Swatch: ${selectedColor} | Carrier Account: ${formData.courierAccount || 'No Carrier Account'} | Notes: ${formData.notes || 'None'} | Delivery Address: ${formData.shippingAddress}`;
      
      if (supabase) {
        const { error } = await supabase.from('contact_inquiries').insert([
          {
            name: 'Sample Desk Request',
            email: formData.email,
            phone: 'N/A',
            company: formData.companyName,
            message: messageText
          }
        ]);
        if (error) throw error;
      } else {
        console.log('Supabase offline. Submitting sample request locally:', formData, selectedColor);
      }

      setSuccess(true);
    } catch (err) {
      console.error('Error submitting sample request:', err);
      setErrorMsg('Failed to submit sample request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-card border border-gold p-6 text-center space-y-3 rounded-[2px] font-sans">
        <h4 className="text-sm font-serif text-primary uppercase">Sample Request Logged</h4>
        <p className="text-[11px] text-muted leading-relaxed">
          Your sample request for **{product.name}** in color **{selectedColor}** has been processed. Sourcing division will send a verification email within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-sans border border-border bg-card p-6 rounded-[2px] space-y-4">
      
      <div className="border-b border-border pb-3">
        <h4 className="text-xs uppercase tracking-widest font-bold text-primary">
          Request Physical Sample
        </h4>
        <p className="text-[10px] text-muted mt-1 leading-relaxed">
          B2B buyers can request pre-production samples. Samples are billed at first-tier pricing and shipped collect using your courier account.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-primary/5 border border-primary text-primary py-2 px-3 text-[10px] font-semibold">
          {errorMsg}
        </div>
      )}

      {/* Company Name */}
      <div className="space-y-1">
        <label htmlFor="sample-company" className="text-[9px] font-bold uppercase tracking-wider text-muted flex items-center">
          <Building className="w-3.5 h-3.5 mr-1 text-cognac" />
          Company Name *
        </label>
        <input
          type="text"
          id="sample-company"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
          placeholder="e.g. Avenue Goods Corp"
          className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2 px-3 text-xs text-charcoal focus:outline-none focus:border-cognac"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="sample-email" className="text-[9px] font-bold uppercase tracking-wider text-muted flex items-center">
          <Mail className="w-3.5 h-3.5 mr-1 text-cognac" />
          Business Email *
        </label>
        <input
          type="email"
          id="sample-email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. logistics@avenuegoods.com"
          className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2 px-3 text-xs text-charcoal focus:outline-none focus:border-cognac"
        />
      </div>

      {/* Courier Account */}
      <div className="space-y-1">
        <label htmlFor="sample-courier" className="text-[9px] font-bold uppercase tracking-wider text-muted flex items-center">
          <Truck className="w-3.5 h-3.5 mr-1 text-cognac" />
          Courier account (DHL / FedEx / UPS)
        </label>
        <input
          type="text"
          id="sample-courier"
          name="courierAccount"
          value={formData.courierAccount}
          onChange={handleChange}
          placeholder="e.g. DHL #968382012 (Collect)"
          className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2 px-3 text-xs text-charcoal focus:outline-none focus:border-cognac"
        />
        <p className="text-[8px] text-muted">
          * Leaving blank means we will calculate and quote courier freight costs separately.
        </p>
      </div>

      {/* Shipping address */}
      <div className="space-y-1">
        <label htmlFor="sample-address" className="text-[9px] font-bold uppercase tracking-wider text-muted flex items-center">
          <MapPin className="w-3.5 h-3.5 mr-1 text-cognac" />
          Complete shipping address *
        </label>
        <textarea
          id="sample-address"
          name="shippingAddress"
          required
          rows="3"
          value={formData.shippingAddress}
          onChange={handleChange}
          placeholder="e.g. Suite 405, 120 Broadway, New York, NY 10271, USA"
          className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2 px-3 text-xs text-charcoal focus:outline-none focus:border-cognac resize-y"
        />
      </div>

      {/* Notes */}
      <div className="space-y-1">
        <label htmlFor="sample-notes" className="text-[9px] font-bold uppercase tracking-wider text-muted flex items-center">
          <Clipboard className="w-3.5 h-3.5 mr-1 text-cognac" />
          Additional swatches / details
        </label>
        <textarea
          id="sample-notes"
          name="notes"
          rows="2"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Include sample leather swatches for other colors (Oxblood, Saddle, etc.)"
          className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2 px-3 text-xs text-charcoal focus:outline-none focus:border-cognac resize-y"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="outline-dark"
          className="w-full py-3 text-xs"
          disabled={loading}
        >
          {loading ? 'Submitting sample request...' : `Request Sample (${selectedColor})`}
        </Button>
      </div>

    </form>
  );
}
export { SampleRequestForm };
