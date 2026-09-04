import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import Magnetic from '../shared/Magnetic';

const specWords = ['CRAFTED BY ZYCOON', 'MADE TO LAST', 'EST. 2007'];

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % specWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-ink overflow-hidden">
      {/* Animated grain overlay */}
      <div className="absolute inset-0 leather-grain opacity-30 pointer-events-none" />

      {/* Giant background word */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[clamp(4rem,20vw,18rem)] font-serif font-bold text-ivory/[0.02] tracking-[-0.04em] leading-none whitespace-nowrap">
          ZYCOON
        </span>
      </motion.div>

      {/* Thin editorial lines */}
      <div className="absolute top-0 left-4 lg:left-10 bottom-0 w-px bg-ivory/5" />
      <div className="absolute top-0 right-4 lg:right-10 bottom-0 w-px bg-ivory/5" />
      <div className="absolute top-1/4 left-0 right-0 h-px bg-ivory/[0.03]" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-ivory/[0.03]" />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full min-h-screen flex items-center relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center py-20 sm:py-24 lg:py-32">

          {/* Left - Creative Typography */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-10">
            {/* Top meta row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 sm:gap-4"
            >
              <span className="stamp text-gold/60 border-gold/20">B2B Manufacturing</span>
              <span className="text-[9px] sm:text-[10px] text-ivory/30 font-sans tracking-wider">EST. 2007</span>
              <span className="text-[9px] sm:text-[10px] text-ivory/30 font-sans tracking-wider">01 / 08</span>
            </motion.div>

            {/* Giant headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[clamp(3rem,9vw,8rem)] leading-[0.88] tracking-[-0.03em] font-serif font-bold text-ivory">
                MADE<br />
                TO<br />
                <span className="italic font-normal text-gold relative">
                  LAST.
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-gold/30" />
                </span>
              </h1>
            </motion.div>

            {/* Rotating accent word */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="h-6 sm:h-8 overflow-hidden"
            >
              <motion.span
                key={wordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block text-xs sm:text-sm font-sans text-gold/40 tracking-[0.3em]"
              >
                {specWords[wordIndex]}
              </motion.span>
            </motion.div>

            {/* Supporting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-xs sm:text-sm text-ivory/50 font-light leading-relaxed max-w-md"
            >
              Premium bags and backpacks manufactured for brands, retailers and corporate buyers. Factory-direct from Mumbai, with a wide range of materials, designs and custom requirements.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5"
            >
              <Magnetic strength={6} className="w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center group bg-gold text-ink hover:bg-gold/90 hover:text-ivory border-gold">
                    Request B2B Quote
                    <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={6} className="w-full sm:w-auto">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button variant="ghost" className="w-full sm:w-auto flex items-center justify-center group text-ivory/70 hover:text-ivory border-0 hover:bg-ivory/5">
                    View All Products
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </Button>
                </Link>
              </Magnetic>
            </motion.div>

            {/* Bottom meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap items-center gap-2 sm:gap-4 lg:space-x-8 text-[9px] sm:text-[10px] text-ivory/30 font-sans tracking-wider pt-4 sm:pt-8"
            >
              <span>MOQ FROM 100 PCS</span>
              <span className="w-4 sm:w-8 h-px bg-ivory/10 hidden sm:block" />
              <span>OEM / ODM</span>
              <span className="w-4 sm:w-8 h-px bg-ivory/10 hidden sm:block" />
              <span>FOR MUMBAI</span>
            </motion.div>
          </div>

          {/* Right - Creative Visual Composition */}
          <motion.div
            style={{ y: y2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[3/4]">
              {/* Main leather piece */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-espresso leather-grain overflow-hidden"
                style={{ clipPath: 'polygon(0% 0%, 98% 0%, 100% 97%, 2% 100%)' }}
              >
                <div className="absolute inset-3 sm:inset-4 border border-ivory/10" />
                <div className="absolute inset-4 sm:inset-5 border border-ivory/5" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
                  <div className="flex justify-between items-start">
                    <span className="stamp text-gold/50 border-gold/15 text-[7px] sm:text-[8px]">Specimen / 0042</span>
                    <span className="text-[8px] sm:text-[9px] text-ivory/20 font-sans">WH-029</span>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-12 sm:w-16 h-px bg-gold/30" />
                    <p className="text-[9px] sm:text-[10px] text-ivory/40 font-sans tracking-wider uppercase">
                      Full Grain / Cognac
                    </p>
                    <img
                      src="/zycoon-logo-white.png"
                      alt="Zycoon"
                      className="w-32 sm:w-44 h-auto object-contain"
                    />
                    <p className="text-[8px] sm:text-[9px] text-ivory/25 font-sans">
                      LWG Environmental Code
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping cognac swatch */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-left-10 w-3/5 aspect-[4/3] bg-leather/90 leather-grain overflow-hidden"
                style={{ clipPath: 'polygon(0% 3%, 97% 0%, 100% 96%, 3% 100%)' }}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                  <span className="stamp text-ivory/40 border-ivory/15 text-[7px] sm:text-[8px]">Saddle Cognac</span>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-ivory/50 font-sans">Grain: 1.8 — 2.0mm</p>
                    <div className="w-5 sm:w-6 h-px bg-ivory/20 mt-2" />
                  </div>
                </div>
              </motion.div>

              {/* Floating burgundy accent */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-right-8 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-burgundy/80 leather-grain flex items-center justify-center"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                <span className="text-[7px] sm:text-[8px] text-ivory/50 font-sans tracking-wider">BRG-033</span>
              </motion.div>

              {/* Corner marks */}
              <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-ivory/10" />
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-ivory/10" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[8px] sm:text-[9px] text-ivory/30 font-sans tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-6 sm:h-8 bg-ivory/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gold/40"
            initial={{ height: '0%' }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
export { Hero };
