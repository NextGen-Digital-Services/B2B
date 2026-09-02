import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, navLinks, isActive }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const lenis = typeof window !== 'undefined' ? window.__lenis : null;
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-ivory z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <img
                src="/zycoon-logo-white.png"
                alt="Zycoon"
                className="h-7 w-auto object-contain"
              />
              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-ink transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="px-6 py-10 space-y-0">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 + idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-4 border-b border-border-light transition-colors duration-300 ${
                      isActive(link.path) ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="section-number text-sm">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm tracking-wider uppercase font-sans font-medium">
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      strokeWidth={1.5}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 py-8 border-t border-border">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 bg-ink text-ivory px-6 py-3.5 text-meta hover:bg-espresso transition-colors duration-300 w-full"
              >
                <span>B2B Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
