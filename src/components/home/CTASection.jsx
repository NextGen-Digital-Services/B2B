import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { B2B_CONFIG, buildWhatsAppContactUrl } from '../../utils/helpers';
import Button from '../shared/Button';

export default function CTASection() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <section className="bg-primary text-ivory py-16 lg:py-24 font-sans relative overflow-hidden">
      
      {/* Editorial Swatch Grid background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full border-l border-r border-gold/40 max-w-7xl mx-auto flex justify-between" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-gold">
          Direct Manufacturer & Exporter
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory leading-tight">
          Request a Custom Quotation for Your Wholesale Leather Goods Order
        </h2>
        
        <p className="text-xs sm:text-sm text-muted/90 font-light max-w-xl mx-auto leading-relaxed">
          From standard catalog customization to fully custom CAD shapes and private labeling. Submit your target designs or choose from our catalog to get current FOB pricing.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <Link to="/products" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center">
              Browse Catalog
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
            </Button>
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline-gold" className="w-full sm:w-auto flex items-center justify-center">
              <MessageSquare className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Chat with Export Office
            </Button>
          </a>
        </div>

        <p className="text-[10px] uppercase tracking-widest text-muted/70 pt-4">
          Export office business hours: Mon - Sat | 9:00 AM - 6:00 PM (IST)
        </p>
      </div>
    </section>
  );
}
export { CTASection };
