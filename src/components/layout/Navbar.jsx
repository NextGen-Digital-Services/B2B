import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ClipboardList } from 'lucide-react';
import useRFQCart from '../../hooks/useRFQCart';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { distinctItemsCount } = useRFQCart();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collection', path: '/products' },
    { name: 'Custom', path: '/custom-manufacturing' },
    { name: 'Export', path: '/export-wholesale' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Workshop', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'B2B Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-espresso border-b border-leather/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center select-none group gap-2">
                <img
                  src="/brand-icon.jpeg"
                  alt="Zycoon Icon"
                  className="h-9 md:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
                />
                <img
                  src="/zycoon-logo-white.png"
                  alt="Zycoon"
                  className="h-14 md:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-sans font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-gold border-b border-gold'
                      : 'text-ivory/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/rfq-cart"
                className="relative p-2.5 text-ivory/90 hover:text-gold transition-colors duration-300 border border-gold/10 hover:border-gold/30 rounded-[2px]"
                aria-label="View RFQ Quote Cart"
                id="rfq-cart-nav-btn"
              >
                <ClipboardList className="w-5 h-5" strokeWidth={1.5} />
                <AnimatePresence>
                  {distinctItemsCount > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                      className="absolute -top-1.5 -right-1.5 bg-cognac text-ivory text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-espresso"
                    >
                      {distinctItemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-ivory hover:text-gold focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {isOpen && (
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navLinks={navLinks}
          isActive={isActive}
        />
      )}
    </>
  );
}
export { Navbar };
