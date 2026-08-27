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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-ink text-ivory w-12 h-12 hover:bg-espresso transition-colors duration-300 shadow-lg"
      aria-label="Contact on WhatsApp"
      id="whatsapp-float-btn"
    >
      <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
    </a>
  );
}
