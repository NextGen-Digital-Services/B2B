import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import Magnetic from '../shared/Magnetic';

const specWords = ['CRAFTED BY ZYCOON', 'MADE TO LAST', 'EST. 2007'];

export default function Hero() {
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[clamp(4rem,20vw,18rem)] font-serif font-bold text-ivory/[0.02] tracking-[-0.04em] leading-none whitespace-nowrap">
          BAGPACKS
        </span>
      </div>

      {/* Thin editorial lines */}
      <div className="absolute top-0 left-4 lg:left-10 bottom-0 w-px bg-ivory/5" />
      <div className="absolute top-0 right-4 lg:right-10 bottom-0 w-px bg-ivory/5" />
      <div className="absolute top-1/4 left-0 right-0 h-px bg-ivory/[0.03]" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-ivory/[0.03]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full min-h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16">

          {/* Left - Creative Typography */}
          <div className="lg:col-span-6 space-y-3 lg:space-y-4">
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
              <span>FROM MUMBAI</span>
            </motion.div>
          </div>

          {/* Right - Two Floating Backpacks Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[800px] sm:min-h-[1000px] lg:min-h-[1200px] overflow-visible">
            
            {/* Floating shadow for teal backpack */}
            <div className="absolute top-[70%] left-[10%] w-[700px] h-[120px] bg-black/40 rounded-[100%] blur-[70px] pointer-events-none" />
            
            {/* Floating shadow for brown backpack */}
            <div className="absolute top-[80%] left-[35%] w-[650px] h-[110px] bg-black/35 rounded-[100%] blur-[65px] pointer-events-none" />

            {/* Teal/Cream Backpack - Primary, larger, positioned lower near MADE TO LAST */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[15%] left-[-25%] sm:top-[18%] sm:left-[-20%] w-[150%] sm:w-[145%] lg:w-[140%] z-20"
              style={{
                animation: 'float-teal 6s ease-in-out infinite',
              }}
            >
              <img
                src="/bagpack1.png?v=2"
                alt="ZYCOON teal and cream backpack"
                className="w-full h-auto"
                style={{
                  transform: 'rotate(-5deg)',
                  filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.7))',
                }}
                decoding="async"
              />
            </motion.div>

            {/* Brown Backpack - Secondary, slightly smaller than teal, positioned lower right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[35%] left-[18%] sm:top-[38%] sm:left-[22%] w-[185%] sm:w-[175%] lg:w-[168%] z-10"
              style={{
                animation: 'float-brown 7s ease-in-out infinite',
                animationDelay: '-2s',
              }}
            >
              <img
                src="/bagpack2.png?v=2"
                alt="ZYCOON brown leather backpack"
                className="w-full h-auto"
                style={{
                  transform: 'rotate(6deg)',
                  filter: 'drop-shadow(0 60px 120px rgba(0,0,0,0.8))',
                }}
                decoding="async"
              />
            </motion.div>

            {/* Subtle ambient glow behind products */}
            <div className="absolute top-[10%] left-[0%] w-[100%] h-[90%] bg-gold/[0.06] rounded-full blur-[180px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-30"
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

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float-teal {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        @keyframes float-brown {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes float-teal {
            0%, 100% { transform: translateY(0px) rotate(-5deg); }
          }
          @keyframes float-brown {
            0%, 100% { transform: translateY(0px) rotate(6deg); }
          }
        }
      `}</style>
    </section>
  );
}
export { Hero };
