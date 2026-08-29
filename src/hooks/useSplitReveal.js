import { useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function useSplitReveal(scopeRef) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const splits = [];

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-split]', scope).forEach((el) => {
        const split = new SplitText(el, { type: 'words' });
        splits.push(split);

        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      });
    }, scope);

    return () => {
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, [scopeRef]);
}