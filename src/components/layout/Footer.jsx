import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, FileDown, ShieldCheck } from 'lucide-react';
import { B2B_CONFIG } from '../../utils/helpers';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E0D14] border-t border-gold/20 text-ivory/80 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info & Address */}
          <div>
            <h3 className="text-lg font-serif tracking-[0.2em] text-ivory uppercase mb-4">
              WESTMERE
            </h3>
            <p className="text-xs text-muted mb-6 leading-relaxed">
              Premium wholesale leather goods manufacturing, private label supply, and worldwide container exports.
            </p>
            <div className="space-y-3.5 text-xs text-ivory/95">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gold mr-2.5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{B2B_CONFIG.factoryLocation}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gold mr-2.5 flex-shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${B2B_CONFIG.businessEmail}`} className="hover:text-gold transition-colors font-mono">
                  {B2B_CONFIG.businessEmail}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gold mr-2.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-mono">{B2B_CONFIG.whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gold mb-5">
              Trade Links
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/products" className="hover:text-gold transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link to="/custom-manufacturing" className="hover:text-gold transition-colors">Custom OEM/ODM</Link>
              </li>
              <li>
                <Link to="/export-wholesale" className="hover:text-gold transition-colors">Export & Shipping</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-gold transition-colors">Certifications & Compliance</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">Factory Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">About Our Factory</Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Verification */}
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gold mb-5">
              Compliance & Safety
            </h4>
            <p className="text-xs text-muted mb-4 leading-relaxed">
              All materials strictly conform to international export regulations.
            </p>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-gold mr-2" strokeWidth={1.5} />
                <span>EU REACH Chemicals Compliant</span>
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-gold mr-2" strokeWidth={1.5} />
                <span>ISO 9001:2015 QMS Audited</span>
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-gold mr-2" strokeWidth={1.5} />
                <span>Sedex SMETA Ethical Labor</span>
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-gold mr-2" strokeWidth={1.5} />
                <span>LWG Gold Tanneries Sourcing</span>
              </li>
            </ul>
          </div>

          {/* Catalog Download / CTAs */}
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gold mb-5">
              Trade Downloads
            </h4>
            <p className="text-xs text-muted mb-5 leading-relaxed">
              Access our complete leather bags product line specs and MOQ tiers in a single offline document.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading wholesale catalog PDF file...');
              }}
              className="inline-flex items-center justify-center bg-transparent border border-gold hover:bg-gold hover:text-[#2E0D14] transition-all duration-300 py-3 px-5 text-[10px] uppercase tracking-wider font-semibold rounded-[2px] w-full text-gold text-center"
            >
              <FileDown className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Download B2B Catalog
            </a>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-gold/15 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider text-muted">
          <div>
            &copy; {currentYear} {B2B_CONFIG.brandName}. All Rights Reserved. Export Office: {B2B_CONFIG.factoryLocation}.
          </div>
          <div className="flex space-x-6 text-[9px] uppercase">
            <span>B2B Quote Desk (WhatsApp): {B2B_CONFIG.whatsappNumber}</span>
            <span className="text-gold/60">•</span>
            <span>No Direct Checkout (RFQ Only)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
export { Footer };
