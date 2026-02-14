"use client";

import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components - Assumed paths based on a standard Next.js setup
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkPreview from '@/components/WorkPreview';

// Helper to avoid SSR errors with useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function HomePage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // 1. DESKTOP LOGIC (Horizontal Scroll)
      mm.add("(min-width: 769px)", () => {
        const sections = gsap.utils.toArray(".panel");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + (containerRef.current?.offsetWidth || 0)
          }
        });
      });

      // 2. MOBILE LOGIC (Vertical Fade-Ins)
      mm.add("(max-width: 768px)", () => {
        const sections = gsap.utils.toArray(".panel");
        sections.forEach((section: any) => {
          gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
              opacity: 1, 
              y: 0, 
              duration: 1, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
              }
            }
          );
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative overflow-x-hidden">
      
      {/* SCROLL CONTAINER */}
      <div 
        ref={containerRef} 
        className="flex flex-col md:flex-row w-full md:w-[300vw] h-auto md:h-screen overflow-hidden"
      >
        {/* SECTION 1: HERO */}
        <section className="panel w-full md:w-screen h-screen flex-shrink-0 relative border-b md:border-b-0 md:border-r border-[#0a0a0a]/10">
          <Hero />
        </section>

        {/* SECTION 2: ABOUT */}
        <section className="panel w-full md:w-screen min-h-screen md:h-screen flex-shrink-0 relative border-b md:border-b-0 md:border-r border-[#0a0a0a]/10">
          <About />
        </section>

        {/* SECTION 3: WORK PREVIEW */}
        <section className="panel w-full md:w-screen min-h-screen md:h-screen flex-shrink-0 relative">
          <WorkPreview />
        </section>
      </div>
      
      {/* MOBILE FOOTER */}
      <div className="md:hidden h-[20vh] flex items-center justify-center border-t border-[#0a0a0a]/10 opacity-40">
         <p className="font-mono text-xs uppercase tracking-widest">End of Line</p>
      </div>
    </div>
  );
}