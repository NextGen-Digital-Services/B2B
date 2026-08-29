import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloatButton from '../components/shared/WhatsAppFloatButton';
import useLenis from '../hooks/useLenis';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import CustomManufacturing from '../pages/CustomManufacturing';
import ExportWholesale from '../pages/ExportWholesale';
import Certifications from '../pages/Certifications';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import RFQCart from '../pages/RFQCart';
import NotFound from '../pages/NotFound';
import Admin from '../pages/admin/Admin';

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = typeof window !== 'undefined' ? window.__lenis : null;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function AppRouter() {
  const { pathname } = useLocation();

  useLenis();

  // Admin console renders standalone (no site nav/footer)
  if (pathname.startsWith('/admin')) {
    return <Admin />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      
      {/* Scroll restoration */}
      <ScrollToTop />
      
      {/* Main Header Navigation */}
      <Navbar />
      
      {/* Main Page Layout Wrapper */}
      <main className="flex-grow flex flex-col">
        {/* Enter-transition per route */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col flex-grow"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/custom-manufacturing" element={<CustomManufacturing />} />
            <Route path="/export-wholesale" element={<ExportWholesale />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rfq-cart" element={<RFQCart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </main>

      {/* Main Footer & Compliance */}
      <Footer />

      {/* Direct Contact Floating Assist */}
      <WhatsAppFloatButton />

    </div>
  );
}
export { AppRouter };
