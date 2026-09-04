import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProducts } from '../../context/ZycoonContext';
import useGsapReveal from '../../hooks/useGsapReveal';

const chapters = [
  { id: 'all', label: 'ALL', num: '00' },
  { id: 'handbags', label: 'WORK', num: '01' },
  { id: 'totes', label: 'DAILY', num: '02' },
  { id: 'travel', label: 'TRAVEL', num: '03' },
  { id: 'wallets', label: 'SMALL', num: '04' },
];

/* ── Cover ── */
function NotebookCover({ onOpen }) {
  return (
    <div className="notebook-cover w-full h-full rounded-r-sm relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 cursor-pointer" onClick={onOpen}>
      <div className="absolute inset-4 border-2 border-ivory/15 rounded-sm" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(242,237,228,0.12) 6px, rgba(242,237,228,0.12) 8px), repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(242,237,228,0.12) 6px, rgba(242,237,228,0.12) 8px)',
      }} />
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold/60 rounded-tl-sm" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/60 rounded-tr-sm" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold/60 rounded-bl-sm" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold/60 rounded-br-sm" />
      <div className="relative text-center space-y-4 sm:space-y-6">
        <img
          src="/brand-icon.png"
          alt="Zycoon"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto"
        />
        <div className="space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-[11px] text-ivory/60 font-sans tracking-[0.3em] uppercase">The Zycoon Collection</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 sm:w-10 h-px bg-gold/40" />
            <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
            <div className="w-8 sm:w-10 h-px bg-gold/40" />
          </div>
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif text-ivory/80 tracking-[0.15em] leading-tight">THE ZYCOON</h3>
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif text-ivory/80 tracking-[0.15em] leading-tight">RANGE.</h3>
          <p className="text-[10px] sm:text-[11px] text-ivory/50 font-sans tracking-[0.2em] uppercase mt-2">Bags Made by Zycoon</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-8 sm:w-10 h-px bg-gold/40" />
            <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
            <div className="w-8 sm:w-10 h-px bg-gold/40" />
          </div>
          <p className="text-[9px] sm:text-[10px] text-ivory/45 font-sans tracking-wider mt-2">Vol. 01 / 2026</p>
        </div>
        <div className="pt-4 sm:pt-6">
          <p className="text-[10px] sm:text-[11px] text-ivory/60 font-sans tracking-wider animate-pulse">CLICK TO OPEN</p>
          <div className="w-px h-6 sm:h-8 bg-ivory/20 mx-auto mt-2 sm:mt-3 relative overflow-hidden">
            <motion.div className="absolute top-0 left-0 w-full bg-gold/50" animate={{ height: ['0%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 leather-grain pointer-events-none" />
    </div>
  );
}

/* ── Page Layouts ── */
function ArchivePage({ product, layout, index, totalProducts }) {
  const firstImage = product.images[0] || '#291A13';
  const hasPhoto = typeof firstImage === 'string' && (firstImage.startsWith('/') || firstImage.startsWith('http'));

  if (layout === 'hero') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="relative overflow-hidden min-h-[180px] sm:min-h-0 bg-ink">
          {hasPhoto ? (
            <img src={firstImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
          ) : (
            <div className="absolute inset-0 leather-grain z-0" style={{ backgroundColor: firstImage }} />
          )}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-8 z-20">
            <span className="stamp text-ivory/40 border-ivory/15 self-start">Specimen / {String(index + 1).padStart(2, '0')}</span>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-[9px] sm:text-[10px] text-ivory/50 font-sans tracking-wider uppercase">{product.material}</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-ivory leading-tight">{product.name}</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 border border-ivory/10 transform rotate-45" />
        </div>
        <div className="notebook-page p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[8px] sm:text-[9px] text-muted font-sans tracking-[0.2em] uppercase">Product Passport</p>
            <div className="w-full h-px bg-border" />
            {[
              { label: 'Material', value: product.material },
              { label: 'Hardware', value: product.specifications.hardware },
              { label: 'Lining', value: product.specifications.lining },
              { label: 'Dimensions', value: product.specifications.dimensions },
              { label: 'MOQ', value: `${product.moq} PCS` },
              { label: 'Custom', value: 'Available' },
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-border/40 pb-2 gap-2">
                <span className="text-[8px] sm:text-[9px] text-muted font-sans uppercase tracking-wider flex-shrink-0">{s.label}</span>
                <span className="text-[10px] sm:text-[11px] text-ink font-medium text-right">{s.value}</span>
              </div>
            ))}
          </div>
          <Link to={`/products/${product.slug}`} className="mt-4 sm:mt-6 flex items-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-leather hover:text-espresso transition-colors">
            View Specimen <ArrowRight className="w-3 h-3 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  if (layout === 'editorial') {
    const isEven = index % 2 === 0;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className={`notebook-page p-5 sm:p-6 lg:p-10 flex flex-col justify-center ${!isEven ? 'order-2' : ''}`}>
          <div className="space-y-3 sm:space-y-4">
            <span className="section-number text-4xl sm:text-5xl">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink leading-tight">{product.name}</h3>
            <div className="w-10 sm:w-12 h-px bg-leather/40" />
            <p className="text-[11px] sm:text-xs text-muted leading-relaxed">{product.description}</p>
            <p className="text-[8px] sm:text-[9px] text-muted font-sans tracking-wider pt-2">MOQ: {product.moq}+ | SERIAL: {product.serial}</p>
            <Link to={`/products/${product.slug}`} className="inline-flex items-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-leather hover:text-espresso transition-colors pt-2">
              View Specimen <ArrowRight className="w-3 h-3 ml-2" />
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden min-h-[180px] sm:min-h-0 bg-ink">
          {hasPhoto ? (
            <img src={firstImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
          ) : (
            <div className="absolute inset-0 leather-grain z-0" style={{ backgroundColor: firstImage }} />
          )}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-8 z-20">
            <span className="stamp text-ivory/40 border-ivory/15 self-end">MOQ {product.moq}+</span>
            <p className="text-[9px] sm:text-[10px] text-ivory/40 font-sans">{product.specifications.hardware}</p>
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-px bg-ivory/10" />
        </div>
      </div>
    );
  }

  // technical
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full">
      <div className="md:col-span-5 relative overflow-hidden min-h-[140px] sm:min-h-0 bg-ink">
        {hasPhoto ? (
          <img src={firstImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
        ) : (
          <div className="absolute inset-0 leather-grain z-0" style={{ backgroundColor: firstImage }} />
        )}
        <div className="absolute inset-4 sm:inset-6 border border-ivory/10" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <p className="text-[8px] sm:text-[9px] text-ivory/30 font-sans tracking-wider mb-1">LEATHER</p>
          <p className="text-base sm:text-lg font-serif text-ivory/80">{product.material}</p>
        </div>
      </div>
      <div className="hidden md:block md:col-span-1 notebook-binding" />
      <div className="md:col-span-6 notebook-page p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-between items-start gap-2">
            <span className="stamp text-leather border-leather/30">Archive Entry</span>
            <span className="text-[8px] sm:text-[9px] text-muted font-sans">{String(index + 1).padStart(2, '0')} / {String(totalProducts).padStart(2, '0')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-ink leading-tight">{product.name}</h3>
          <p className="text-[11px] sm:text-xs text-muted leading-relaxed line-clamp-3">{product.description}</p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
            <div><p className="text-[7px] sm:text-[8px] text-muted font-sans tracking-wider">HARDWARE</p><p className="text-[10px] sm:text-[11px] text-ink">{product.specifications.hardware}</p></div>
            <div><p className="text-[7px] sm:text-[8px] text-muted font-sans tracking-wider">WEIGHT</p><p className="text-[10px] sm:text-[11px] text-ink">{product.specifications.weight}</p></div>
            <div><p className="text-[7px] sm:text-[8px] text-muted font-sans tracking-wider">MOQ</p><p className="text-[10px] sm:text-[11px] text-ink">{product.moq} PCS</p></div>
            <div><p className="text-[7px] sm:text-[8px] text-muted font-sans tracking-wider">SERIAL</p><p className="text-[10px] sm:text-[11px] text-ink font-medium">{product.serial}</p></div>
          </div>
        </div>
        <Link to={`/products/${product.slug}`} className="mt-4 sm:mt-6 flex items-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-leather hover:text-espresso transition-colors">
          View Specimen <ArrowRight className="w-3 h-3 ml-2" />
        </Link>
      </div>
    </div>
  );
}

/* ── End Page ── */
function EndPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="notebook-page p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
        <span className="section-number text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">∞</span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink leading-tight mb-3 sm:mb-4">END OF<br />THE ARCHIVE.</h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">Looking for something not in the collection?</p>
      </div>
      <div className="bg-espresso/90 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6">
        <div className="space-y-1">
          <p className="text-[9px] sm:text-[10px] text-ivory/40 font-sans tracking-wider">YOUR DESIGN</p>
          <p className="text-[9px] sm:text-[10px] text-ivory/40 font-sans tracking-wider">YOUR MATERIAL</p>
          <p className="text-[9px] sm:text-[10px] text-ivory/40 font-sans tracking-wider">YOUR BRAND</p>
        </div>
        <div className="w-10 sm:w-12 h-px bg-gold/30" />
        <Link to="/contact" className="inline-flex items-center text-ivory bg-gold/90 hover:bg-gold px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium transition-colors">
          Start a Custom Project <ArrowRight className="w-3.5 h-3.5 ml-2" />
        </Link>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function LeatherNotebookArchive() {
  const products = useProducts();
  const [activeChapter, setActiveChapter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [notebookOpen, setNotebookOpen] = useState(false); // eslint-disable-line no-unused-vars
  const [turning, setTurning] = useState(false);
  const [turnDir, setTurnDir] = useState(null);
  const [hovering, setHovering] = useState(false);
  const scrollAccum = useRef(0);
  const lastScrollTime = useRef(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  useGsapReveal(containerRef);

  // Only show products that are marked for diary
  const diaryProducts = products.filter((p) => p.show_in_diary !== false);
  
  const filteredProducts = activeChapter === 'all'
    ? diaryProducts
    : diaryProducts.filter((p) => p.category_id === activeChapter);

  const allPages = [
    { type: 'cover' },
    ...filteredProducts.map((p, i) => ({
      product: p,
      layout: i % 3 === 0 ? 'hero' : i % 3 === 1 ? 'editorial' : 'technical',
    })),
    { type: 'end' },
  ];

  const totalPages = allPages.length;

  const turnToPage = useCallback((target) => {
    if (turning || target === currentPage || target < 0 || target >= totalPages) return;
    setTurnDir(target > currentPage ? 'next' : 'prev');
    setTurning(true);
    if (currentPage === 0 && target > 0) setNotebookOpen(true);
    if (currentPage > 0 && target === 0) setNotebookOpen(false);
    setTimeout(() => {
      setCurrentPage(target);
      setTimeout(() => setTurning(false), 600);
    }, 100);
  }, [turning, currentPage, totalPages]);

  // Mouse wheel (desktop) - capture phase to block page scroll
  useEffect(() => {
    const THRESHOLD = 80;
    const COOLDOWN = 800;

    const handleWheel = (e) => {
      if (!hovering) return;
      
      // Always prevent scroll when hovering over diary
      e.preventDefault();
      e.stopPropagation();
      
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN) return;

      scrollAccum.current += e.deltaY;

      if (Math.abs(scrollAccum.current) > THRESHOLD) {
        if (scrollAccum.current > 0 && currentPage < totalPages - 1) {
          turnToPage(currentPage + 1);
          lastScrollTime.current = now;
        } else if (scrollAccum.current < 0 && currentPage > 0) {
          turnToPage(currentPage - 1);
          lastScrollTime.current = now;
        }
        scrollAccum.current = 0;
      }

      clearTimeout(window.__nbScrollReset);
      window.__nbScrollReset = setTimeout(() => { scrollAccum.current = 0; }, 150);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    }
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, [currentPage, totalPages, turnToPage, hovering]);

  // Touch swipe (mobile)
  useEffect(() => {
    const SWIPE_THRESHOLD = 50;
    const COOLDOWN = 1000;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN) return;

      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      // Only trigger if horizontal swipe is dominant
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX < 0 && currentPage < totalPages - 1) {
          turnToPage(currentPage + 1);
          lastScrollTime.current = now;
        } else if (deltaX > 0 && currentPage > 0) {
          turnToPage(currentPage - 1);
          lastScrollTime.current = now;
        }
      }
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    return () => {
      if (el) {
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentPage, totalPages, turnToPage]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') turnToPage(currentPage + 1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') turnToPage(currentPage - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentPage, turnToPage]);

  const handleChapterChange = (id) => {
    setActiveChapter(id);
    setCurrentPage(1);
    setNotebookOpen(true);
  };

  /* ── Realistic page-turn variants ── */
  const pageVariants = {
    enter: (dir) => ({
      rotateY: dir === 'next' ? 90 : -90,
      opacity: 0,
      scale: 0.92,
      x: dir === 'next' ? '40%' : '-40%',
      filter: 'brightness(0.4)',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      filter: 'brightness(1)',
    },
    exit: (dir) => ({
      rotateY: dir === 'next' ? -90 : 90,
      opacity: 0,
      scale: 0.92,
      x: dir === 'next' ? '-40%' : '40%',
      filter: 'brightness(0.4)',
    }),
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 120,
    damping: 22,
    mass: 0.9,
    duration: 0.7,
  };

  return (
    <section className="bg-ivory py-12 sm:py-20 lg:py-32 border-b border-border overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Entry text */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4" data-reveal>
          <span className="stamp text-leather border-leather/30">OUR PRODUCTS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05]">THE ZYCOON RANGE</h2>
          <p className="text-xs sm:text-sm text-muted font-light max-w-lg mx-auto">
            Explore our complete range of bags and backpacks, designed and manufactured by Zycoon. From everyday essentials to business and travel bags, discover products made for wholesale, bulk orders, and custom branding.
          </p>
          <Link to="/products" className="inline-flex items-center gap-2 mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-leather hover:text-espresso transition-colors duration-300 group">
            VIEW ALL PRODUCTS
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Chapter tabs */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 flex-wrap">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleChapterChange(ch.id)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] font-sans tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeChapter === ch.id
                  ? 'bg-ink border-ink text-ivory'
                  : 'bg-transparent border-border text-muted hover:border-ink hover:text-ink'
              }`}
            >
              <span className="opacity-50 mr-1">{ch.num}</span> {ch.label}
            </button>
          ))}
        </div>

        {/* ── The Notebook ── */}
        <div className="relative mx-auto w-full" style={{ maxWidth: 'min(900px, 100%)', perspective: '2000px' }}>

          {/* Tabs on right edge */}
          <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 flex-col z-20">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleChapterChange(ch.id)}
                className={`px-2 py-2.5 text-[8px] font-sans tracking-wider uppercase text-right border-r-2 transition-all duration-300 cursor-pointer ${
                  activeChapter === ch.id
                    ? 'tab-active border-r-gold'
                    : 'bg-border/40 text-muted hover:bg-border/60 border-r-transparent'
                }`}
                style={{ marginBottom: '-1px' }}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {/* Notebook body */}
          <div
            className="notebook-shadow rounded-sm overflow-hidden relative"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => { setHovering(false); scrollAccum.current = 0; }}
          >
            {/* Page edges */}
            <div className="absolute -right-0.5 top-2 bottom-2 w-1 bg-gradient-to-r from-border/60 to-border/30 rounded-r-sm z-10" />
            <div className="absolute -right-1.5 top-3 bottom-3 w-1 bg-gradient-to-r from-border/40 to-border/20 rounded-r-sm z-10" />
            <div className="absolute -right-2.5 top-4 bottom-4 w-1 bg-gradient-to-r from-border/25 to-border/10 rounded-r-sm z-10" />

            <div className="relative" style={{ minHeight: 'min(520px, 70vh)' }}>

              {/* Binding spine */}
              <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 notebook-binding z-30" />
              <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-5 sm:w-8 bg-gradient-to-r from-black/15 via-black/8 to-transparent pointer-events-none z-20" />

              {/* Pages */}
              <AnimatePresence mode="wait" custom={turnDir}>
                <motion.div
                  key={`${activeChapter}-${currentPage}`}
                  custom={turnDir}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={pageTransition}
                  className="absolute inset-0 ml-2 sm:ml-3"
                  style={{
                    transformOrigin: 'left center',
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: turning ? 0.3 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ backfaceVisibility: 'hidden' }}
                  />

                  {currentPage === 0 ? (
                    <NotebookCover onOpen={() => turnToPage(1)} />
                  ) : allPages[currentPage]?.type === 'end' ? (
                    <EndPage />
                  ) : allPages[currentPage]?.product ? (
                    <ArchivePage
                      product={allPages[currentPage].product}
                      layout={allPages[currentPage].layout}
                      index={currentPage - 1}
                      totalProducts={filteredProducts.length}
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>

              {turning && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 ml-2 sm:ml-3 pointer-events-none z-50"
                  style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.1) 100%)',
                  }}
                />
              )}
            </div>

            {/* Bottom bar */}
            <div className="bg-espresso/90 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between relative z-20">
              <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-hidden">
                {allPages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 flex-shrink-0 ${
                      i === currentPage ? 'bg-gold w-3 sm:w-4' : i < currentPage ? 'bg-gold/30 w-1' : 'bg-ivory/15 w-1'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[9px] sm:text-[10px] text-ivory/60 font-sans flex-shrink-0 ml-3">
                {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Scroll hint */}
          {currentPage === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-center mt-4 sm:mt-6">
              <p className="text-[9px] sm:text-[10px] text-muted font-sans tracking-wider">
                <span className="hidden sm:inline">SCROLL DOWN TO OPEN</span>
                <span className="sm:hidden">TAP TO OPEN</span>
              </p>
              <div className="w-px h-5 sm:h-6 bg-border mx-auto mt-2 relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 w-full bg-leather/40" animate={{ height: ['0%', '100%'] }} transition={{ duration: 1.2, repeat: Infinity }} />
              </div>
            </motion.div>
          )}

          {currentPage > 0 && currentPage < totalPages - 1 && (
            <div className="text-center mt-3 sm:mt-4">
              <p className="text-[8px] sm:text-[9px] text-muted/60 font-sans tracking-wider">
                <span className="hidden sm:inline">SCROLL TO TURN PAGES</span>
                <span className="sm:hidden">SWIPE TO TURN PAGES</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
