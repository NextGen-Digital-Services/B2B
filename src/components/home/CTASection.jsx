import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { buildWhatsAppContactUrl } from '../../utils/helpers';
import Button from '../shared/Button';
import Magnetic from '../shared/Magnetic';

export default function CTASection() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <section className="bg-ink py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 leather-grain opacity-20 pointer-events-none" />

      {/* Editorial lines */}
      <div className="absolute top-0 left-6 lg:left-10 bottom-0 w-px bg-ivory/5" />
      <div className="absolute top-0 right-6 lg:right-10 bottom-0 w-px bg-ivory/5" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="stamp text-ivory/40 border-ivory/15">
            Direct Manufacturer & Exporter
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory leading-[1.05]">
            Start a Project.
          </h2>

          <p className="text-sm text-ivory/50 font-light max-w-lg mx-auto leading-relaxed">
            From standard catalog customization to fully custom CAD shapes and private labeling. Submit your target designs or choose from our catalog.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Magnetic strength={5} className="w-full sm:w-auto">
              <Link to="/products" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center group">
                  Request B2B Quote
                  <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={5} className="w-full sm:w-auto">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline-light" className="w-full sm:w-auto flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Chat on WhatsApp
                </Button>
              </a>
            </Magnetic>
          </div>

          <p className="text-[9px] text-ivory/30 font-mono uppercase tracking-[0.2em] pt-4">
            Mon — Sat | 10:00 AM — 9:00 PM IST
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export { CTASection };
