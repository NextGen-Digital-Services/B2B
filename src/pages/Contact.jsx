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
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Start a Project."
          description="Speak directly to our export managers regarding design specifications, pricing terms, production timelines, or custom leather development."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">

          {/* Left - Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border p-8 space-y-6">
              <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-muted border-b border-border-light pb-3">
                Export HQ Office
              </h3>
              <div className="space-y-5 text-xs text-ink">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-leather mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-medium tracking-wider text-muted mb-0.5">Address</p>
                    <p className="leading-relaxed font-light">{B2B_CONFIG.factoryLocation}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-leather mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-medium tracking-wider text-muted mb-0.5">Email</p>
                    <a href={`mailto:${B2B_CONFIG.businessEmail}`} className="font-mono hover:text-leather transition-colors">
                      {B2B_CONFIG.businessEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-4 h-4 text-leather mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-medium tracking-wider text-muted mb-0.5">WhatsApp</p>
                    <p className="font-mono">{B2B_CONFIG.whatsappNumber}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-4 h-4 text-leather mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-medium tracking-wider text-muted mb-0.5">Hours</p>
                    <p className="font-light">Mon — Sat: 9:00 AM — 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-ink text-ivory px-6 py-3.5 text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-espresso transition-colors duration-300 w-full"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={1.5} />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
