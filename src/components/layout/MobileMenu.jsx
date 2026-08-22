import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { B2B_CONFIG } from '../../utils/helpers';

export default function MobileMenu({ isOpen, onClose, navLinks, isActive }) {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.25,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
        className="lg:hidden absolute top-20 left-0 right-0 bg-primary-dark border-b border-gold/20 shadow-2xl py-6 px-6 z-40"
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`block py-2 text-sm uppercase tracking-widest font-sans font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-gold pl-2 border-l border-gold'
                  : 'text-ivory/80 hover:text-gold pl-0'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-6 mt-4 border-t border-gold/10">
            <p className="text-[10px] uppercase tracking-wider text-muted font-sans font-semibold">
              B2B Trade Department
            </p>
            <p className="text-xs text-gold mt-2 font-mono">{B2B_CONFIG.businessEmail}</p>
            <p className="text-xs text-ivory mt-1 font-mono">{B2B_CONFIG.whatsappNumber}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export { MobileMenu };
