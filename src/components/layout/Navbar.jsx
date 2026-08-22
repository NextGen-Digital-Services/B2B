import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ClipboardList } from 'lucide-react';
import { B2B_CONFIG } from '../../utils/helpers';
import useRFQCart from '../../hooks/useRFQCart';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { distinctItemsCount } = useRFQCart();

  const navLinks = [
    { name: 'Products Catalog', path: '/products' },
    { name: 'Custom Manufacturing', path: '/custom-manufacturing' },
    { name: 'Export & Wholesale', path: '/export-wholesale' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-primary-dark border-b border-gold/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col select-none group">
              <span className="text-xl md:text-2xl font-serif tracking-[0.25em] text-ivory transition-colors duration-300 group-hover:text-gold">
                WESTMERE
              </span>
              <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-gold/80 -mt-0.5">
                LEATHER EXPORTERS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
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

          {/* Action Icons: RFQ Cart */}
          <div className="flex items-center space-x-4">
            <Link
              to="/rfq-cart"
              className="relative p-2.5 text-ivory/90 hover:text-gold transition-colors duration-300 border border-gold/10 hover:border-gold/30 rounded-[2px]"
              aria-label="View RFQ Quote Cart"
              id="rfq-cart-nav-btn"
            >
              <ClipboardList className="w-5 h-5" strokeWidth={1.5} />
              {distinctItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cognac text-ivory text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-primary-dark">
                  {distinctItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
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

      {/* Mobile Sidebar overlay */}
      {isOpen && (
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navLinks={navLinks}
          isActive={isActive}
        />
      )}
    </header>
  );
}
export { Navbar };
