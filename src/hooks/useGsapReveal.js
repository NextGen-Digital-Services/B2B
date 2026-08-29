import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE_OUT = 'power3.out';

export default function useGsapReveal(scopeRef, deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray('[data-reveal]', scope);

      if (reduce) {
        // Reduced motion: no movement, content simply visible.
        gsap.set(targets, { y: 0, opacity: 1 });
        return;
      }

      // Reveal-only motion: element arrives from 24px down (personal, out).
      // Never scale(0), never a layout-triggering property.
      gsap.set(targets, { y: 24, opacity: 0 });

      const batch = ScrollTrigger.batch('[data-reveal]', {
        start: 'top 85%',
        once: true,
        onEnter: (els) => {
          gsap.to(els, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: EASE_OUT,
            stagger: 0.08,
            overwrite: true,
          });
        },
      });

      return () => batch.forEach((t) => t.kill());
    }, scope);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}