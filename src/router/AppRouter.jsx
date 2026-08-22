import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloatButton from '../components/shared/WhatsAppFloatButton';

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

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRouter() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      
      {/* Scroll restoration */}
      <ScrollToTop />
      
      {/* Main Header Navigation */}
      <Navbar />
      
      {/* Main Page Layout Wrapper */}
      <main className="flex-grow flex flex-col">
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
      </main>

      {/* Main Footer & Compliance */}
      <Footer />

      {/* Direct Contact Floating Assist */}
      <WhatsAppFloatButton />

    </div>
  );
}
export { AppRouter };
