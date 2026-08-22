import React from 'react';
import { MessageSquare } from 'lucide-react';
import { buildWhatsAppContactUrl } from '../../utils/helpers';

export default function WhatsAppFloatButton() {
  const url = buildWhatsAppContactUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-cognac hover:bg-[#92552E] text-ivory p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      aria-label="Contact on WhatsApp"
      id="whatsapp-float-btn"
    >
      <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
      <span className="absolute right-full mr-3 bg-primary-dark text-gold text-xs uppercase tracking-wider py-1 px-3 border border-border/20 rounded-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none md:block hidden">
        Chat With Export Manager
      </span>
    </a>
  );
}
export { WhatsAppFloatButton };
