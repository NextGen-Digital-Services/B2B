import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const EASE_OUT = [0.23, 1, 0.32, 1];
const REEL_SLOTS = ['01', '02', '03', '04', '05'];

export default function ReelsStrip() {
  return (
    <section className="mb-12 lg:mb-16">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 mb-5">
        <div>
          <h2 className="text-2xl lg:text-3xl font-serif text-ink leading-none">Reels</h2>
          <p className="text-[11px] text-muted font-light mt-2 max-w-md leading-relaxed">
            Five vertical slots reserved for upcoming reel posts.
          </p>
        </div>
        <span className="stamp text-muted border-border">05 Slots Open</span>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 pb-3">
        {REEL_SLOTS.map((slot, idx) => (
          <motion.div
            key={slot}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE_OUT }}
            className="snap-start shrink-0 w-[58%] sm:w-[36%] md:w-[28%] lg:w-auto lg:flex-1 lg:min-w-0"
          >
            <div className="relative aspect-[9/16] border border-dashed border-border bg-card hover:border-leather/40 transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 leather-grain opacity-[0.05] pointer-events-none" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2.5">
                <span className="text-[9px] font-mono uppercase tracking-wider text-muted">Reel {slot}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-muted">9:16</span>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="w-12 h-12 border border-border bg-ivory flex items-center justify-center text-muted">
                  <Play className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted">Placeholder</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 px-3 py-2.5 border-t border-border-light bg-ivory/70">
                <span className="text-[9px] font-mono uppercase tracking-wider text-muted">Caption pending</span>
              </div>

              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border-light" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border-light" />
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[10px] font-mono uppercase tracking-wider text-muted mt-1 lg:hidden">
        Swipe for more →
      </p>
    </section>
  );
}
