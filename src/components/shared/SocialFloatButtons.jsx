import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { buildWhatsAppContactUrl, B2B_CONFIG } from '../../utils/helpers';

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function SocialFloatButtons() {
  const whatsappUrl = buildWhatsAppContactUrl();
  const instagramUrl = (B2B_CONFIG.instagramUrl || '').trim();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - (rect.left + rect.width / 2)) / rect.width) * 5);
    y.set(((e.clientY - (rect.top + rect.height / 2)) / rect.height) * 5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6, bounce: 0.2, delay: 1.2 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-ink text-ivory w-12 h-12 hover:bg-espresso transition-colors duration-300 shadow-lg"
        aria-label="Contact on WhatsApp"
        id="whatsapp-float-btn"
      >
        <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
      </a>

      <a
        href={instagramUrl || '#'}
        target={instagramUrl ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-espresso text-ivory w-12 h-12 hover:bg-ink transition-colors duration-300 shadow-lg"
        aria-label="Follow on Instagram"
        id="instagram-float-btn"
      >
        <InstagramIcon className="w-5 h-5" />
      </a>
    </motion.div>
  );
}
