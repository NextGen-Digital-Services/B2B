import React, { useState } from 'react';
import { Truck, Mail, Building, MapPin, Clipboard } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import Button from '../shared/Button';

export default function SampleRequestForm({ product, selectedColor }) {
  const [formData, setFormData] = useState({
    companyName: '', email: '', courierAccount: '', shippingAddress: '', notes: '',
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
      const messageText = `SAMPLE: ${product.name} | Color: ${selectedColor} | Courier: ${formData.courierAccount || 'N/A'} | Address: ${formData.shippingAddress}`;
      if (supabase) {
        const { error } = await supabase.from('contact_inquiries').insert([{
          name: 'Sample Request', email: formData.email, phone: 'N/A',
          company: formData.companyName, message: messageText,
        }]);
        if (error) throw error;
      }
      setSuccess(true);
    } catch {
      setErrorMsg('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="border border-border bg-card p-6 text-center space-y-3">
        <h4 className="text-sm font-serif text-ink">Sample Request Logged</h4>
        <p className="text-[10px] text-muted leading-relaxed font-mono">
          {product.name} in {selectedColor}. Verification email within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = "w-full bg-ivory border border-border py-2 px-3 text-xs font-sans text-ink focus:outline-none focus:border-leather transition-colors duration-300 placeholder-muted";

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 space-y-4">
      <div className="border-b border-border-light pb-3">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted">Request Physical Sample</h4>
        <p className="text-[9px] text-muted mt-1 font-mono">
          Billed at first-tier pricing. Shipped collect via your courier account.
        </p>
      </div>

      {errorMsg && (
        <div className="border border-burgundy/30 bg-burgundy/5 py-2 px-3 text-[10px] text-burgundy font-medium">{errorMsg}</div>
      )}

      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Building className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Company *
          </label>
          <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange}
            placeholder="e.g. Avenue Goods Corp" className={inputClass} />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Mail className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Email *
          </label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange}
            placeholder="e.g. logistics@avenuegoods.com" className={inputClass} />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Truck className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Courier Account
          </label>
          <input type="text" name="courierAccount" value={formData.courierAccount} onChange={handleChange}
            placeholder="e.g. DHL #968382012" className={inputClass} />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <MapPin className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Shipping Address *
          </label>
          <textarea name="shippingAddress" required rows="3" value={formData.shippingAddress} onChange={handleChange}
            placeholder="Full address" className={`${inputClass} resize-y`} />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
            <Clipboard className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Notes
          </label>
          <textarea name="notes" rows="2" value={formData.notes} onChange={handleChange}
            placeholder="Additional swatches or details" className={`${inputClass} resize-y`} />
        </div>
      </div>

      <Button type="submit" variant="outline" className="w-full py-2.5" disabled={loading}>
        {loading ? 'Submitting...' : `Request Sample (${selectedColor})`}
      </Button>
    </form>
  );
}
