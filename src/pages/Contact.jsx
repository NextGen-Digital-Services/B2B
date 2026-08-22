import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import ContactForm from '../components/forms/ContactForm';
import { B2B_CONFIG, buildWhatsAppContactUrl } from '../utils/helpers';

export default function Contact() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory py-16 font-sans border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <SectionHeading
          eyebrow="Connect with Sourcing"
          title="Direct Manufacturer Trade Desk"
          description="Speak directly to our export managers regarding design specifications, pricing terms, production timelines, or custom leather development."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Column: Contact details (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct contact info card */}
            <div className="bg-card border border-border p-8 space-y-6 rounded-[2px]">
              
              <h3 className="text-lg font-serif text-primary uppercase border-b border-border pb-3 tracking-wide">
                Export HQ Office
              </h3>

              <div className="space-y-5 text-xs text-charcoal">
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cognac mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold uppercase tracking-wider text-[10px] text-muted mb-0.5">Factory & Office Address</p>
                    <p className="leading-relaxed font-light">{B2B_CONFIG.factoryLocation}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-cognac mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold uppercase tracking-wider text-[10px] text-muted mb-0.5">Corporate Email</p>
                    <a href={`mailto:${B2B_CONFIG.businessEmail}`} className="leading-relaxed font-mono font-medium hover:text-gold transition-colors">
                      {B2B_CONFIG.businessEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-cognac mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold uppercase tracking-wider text-[10px] text-muted mb-0.5">WhatsApp Trade Desk</p>
                    <p className="leading-relaxed font-mono font-medium">{B2B_CONFIG.whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-cognac mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold uppercase tracking-wider text-[10px] text-muted mb-0.5">Sourcing Business Hours</p>
                    <p className="leading-relaxed font-light">Monday – Saturday: 9:00 AM – 6:00 PM (IST)</p>
                    <p className="text-[10px] text-muted font-light mt-0.5">Timezone: UTC +05:30 (Kolkata)</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Instant WhatsApp connection panel */}
            <div className="bg-[#FAF5EC] border border-gold/40 p-8 text-center space-y-4 rounded-[2px]">
              <h4 className="text-sm font-serif text-primary uppercase">Direct WhatsApp Sourcing Support</h4>
              <p className="text-xs text-muted leading-relaxed font-light">
                Prefer direct messaging? Initiate a chat session immediately with our customer support manager to review inventory catalogs.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-cognac hover:bg-[#92552E] text-ivory transition-colors py-3.5 px-6 text-xs uppercase tracking-wider font-semibold rounded-[2px] w-full"
              >
                <MessageSquare className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Open WhatsApp Chat
              </a>
            </div>

          </div>

          {/* Right Column: Contact form (Col 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </motion.div>
  );
}
export { Contact };
