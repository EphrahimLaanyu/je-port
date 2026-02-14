"use client";

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image component
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';

// --- DATA: THE PROCESS STEPS ---
const STEPS = [
  {
    num: "01",
    phase: "Initiation",
    title: "The Blueprint",
    desc: "We don't just start coding. We dismantle your vision to understand the physics of your business. We define the user psychology, the technical constraints, and the 'North Star' metric."
  },
  {
    num: "02",
    phase: "Architecture",
    title: "System Design",
    desc: "Before pixels, we build skeletons. We map out database schemas , API routes, and user flows. This is where we ensure the system is scalable, secure, and ready for high traffic."
  },
  {
    num: "03",
    phase: "Construction",
    title: "High-Fidelity Dev",
    desc: "We enter the 'Deep Work' phase. Frontend (Next.js/React) meets Backend. We craft the UI with GSAP for motion and ensure the backend logic is bulletproof. This is where the magic happens."
  },
  {
    num: "04",
    phase: "Refinement",
    title: "The White Glove QA",
    desc: "Nothing ships until it feels expensive. We test for speed (Core Web Vitals), mobile responsiveness across all devices, and interactive fluidity. We polish until it shines."
  },
  {
    num: "05",
    phase: "Deployment",
    title: "Launch & Velocity",
    desc: "We deploy to the edge (Vercel/Cloudflare). We set up analytics, SEO tags, and hand over the keys. But we don't leave; we monitor the system as it enters the real world."
  }
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      
      // 1. HERO ANIMATION
      gsap.from(".process-hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      });

      // 2. PROCESS CARDS (Staggered Reveal)
      const cards = gsap.utils.toArray(".process-card");
      cards.forEach((card: any, i) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          {
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // 3. CASE STUDY REVEAL (Parallax)
      gsap.fromTo(".case-study-wrapper", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".case-study-section",
            start: "top 70%",
          }
        }
      );

      gsap.from(".feature-item", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".feature-list",
            start: "top 80%"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#EAE8E4] text-[#0a0a0a] min-h-screen selection:bg-[#4a0404] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ============================================
          HERO: THE SYSTEM
         ============================================ */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 border-b border-[#0a0a0a]/10">
        <div className="max-w-4xl">
           <span className="process-hero-text font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a0404] block mb-6">
             The Methodology
           </span>
           <h1 className="process-hero-text font-serif text-5xl md:text-7xl leading-[0.9] mb-8">
             How we turn <br/>
             <span className="italic text-[#4a0404]">chaos into code.</span>
           </h1>
           <p className="process-hero-text font-sans text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed">
             Great software is not an accident. It is the result of a rigorous, five-step architectural process designed to eliminate risk and maximize impact.
           </p>
        </div>
      </section>

      {/* ============================================
          THE STEPS (CARDS)
         ============================================ */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
                <div 
                    key={index} 
                    className="process-card group relative p-8 md:p-12 border border-[#0a0a0a]/10 bg-[#EAE8E4] hover:bg-white transition-colors duration-500 min-h-[400px] flex flex-col justify-between"
                >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-mono text-4xl text-[#0a0a0a]/10 group-hover:text-[#4a0404]/20 transition-colors duration-500">
                                {step.num}
                            </span>
                            <span className="font-mono text-[9px] tracking-widest uppercase border border-[#0a0a0a]/10 px-2 py-1 rounded-full">
                                {step.phase}
                            </span>
                        </div>
                        <h3 className="font-serif text-3xl mb-6 group-hover:text-[#4a0404] transition-colors duration-300">
                            {step.title}
                        </h3>
                    </div>

                    <p className="relative z-10 font-sans text-sm md:text-base leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        {step.desc}
                    </p>
                </div>
            ))}

            {/* CTA CARD (Last Slot) */}
            <div className="process-card relative p-8 md:p-12 bg-[#0a0a0a] text-[#EAE8E4] flex flex-col justify-center items-center text-center group cursor-pointer">
                <h3 className="font-serif text-4xl italic mb-4">Ready to Start?</h3>
                <p className="font-mono text-xs opacity-60 mb-8 max-w-xs mx-auto">
                    We only take on 3 clients per quarter to ensure quality.
                </p>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <span className="text-2xl">&rarr;</span>
                </div>
            </div>
        </div>
      </section>

      {/* ============================================
          CASE STUDY: DEEJAY KACE
         ============================================ */}
      <section className="case-study-section relative py-32 bg-[#0a0a0a] text-[#EAE8E4] overflow-hidden">
         {/* Background Noise */}
         <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         
         <div className="relative z-10 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="w-full lg:w-1/2">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a0404] bg-white px-2 py-1 inline-block mb-6">
                    Case Study
                </span>
                <h2 className="font-serif text-5xl md:text-7xl leading-none mb-8">
                    Deejay Kace <br/>
                    <span className="italic text-white/50">Experience.</span>
                </h2>
                <p className="font-sans text-lg opacity-70 mb-12 leading-relaxed max-w-md">
                    We didn't just build a website; we built a digital venue. Deejay Kace needed more than a portfolio—he needed a central hub for his brand, his music, and his bookings.
                </p>

                {/* FEATURE LIST */}
                <div className="feature-list grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    {[
                        { title: "The Mix Archive", desc: "A custom audio player interface housing his entire library, categorized and searchable." },
                        { title: "Direct Messaging", desc: "Real-time private messaging system for fans and clients to reach him instantly." },
                        { title: "Booking Engine", desc: "Seamless contact forms integrated directly into his calendar workflow." },
                        { title: "Premium UI/UX", desc: "Dark-mode aesthetic, smooth transitions, and a mobile-first design for club-goers." }
                    ].map((feat, i) => (
                        <div key={i} className="feature-item">
                            <h4 className="font-serif text-xl italic text-[#4a0404] mb-2">{feat.title}</h4>
                            <p className="font-mono text-[10px] uppercase tracking-wider opacity-50 leading-relaxed">
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                     <a href="http://deejaykace.co.ke" target="_blank" className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] hover:text-[#4a0404] transition-colors">
                        View Live Site &rarr;
                     </a>
                </div>
            </div>

            {/* RIGHT: VISUAL REPRESENTATION (ACTUAL SCREENSHOT) */}
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] lg:h-[700px]">
                <div className="case-study-wrapper absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full border border-white/10 rounded-sm overflow-hidden shadow-2xl group">
                        
                        {/* THE SCREENSHOT */}
                        <Image 
                            src="/assets/Screenshot 2026-01-29 102644.png"
                            alt="Deejay Kace Official Website Interface"
                            fill
                            className="object-cover object-top transition-transform duration-[2s] ease-in-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        
                        {/* Optional Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                </div>
            </div>

         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-[#0a0a0a]/10">
         <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">The Maison Process ©2026</p>
      </footer>
    </div>
  );
};