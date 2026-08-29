import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { buildWhatsAppContactUrl } from '../../utils/helpers';

export default function WhatsAppFloatButton() {
  const url = buildWhatsAppContactUrl();
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
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6, bounce: 0.2, delay: 1.2 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-ink text-ivory w-12 h-12 hover:bg-espresso transition-colors duration-300 shadow-lg"
      aria-label="Contact on WhatsApp"
      id="whatsapp-float-btn"
    >
      <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
    </motion.a>
  );
}