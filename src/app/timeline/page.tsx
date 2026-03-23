'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from 'framer-motion';

const versions = [
  { version: '0.0.1', title: 'Repo Initialization', date: 'Initial Phase', desc: 'The very beginning of the Rubics UI journey.' },
  { version: '0.0.2', title: 'Theme and Tokens Setting', date: 'Foundation', desc: 'Establishing the core design tokens, typography, and theming system.' },
  { version: '0.0.3', title: 'Palette Creation', date: 'Colors', desc: 'Crafting a beautiful, vibrant, and cohesive color palette for all components.' },
  { version: '0.0.4', title: 'First Component Released', date: 'Milestone', desc: 'The first functional component is born and introduced to the UI library.' },
  { version: '0.0.5', title: 'Component Testing', date: 'Quality Assur.', desc: 'Ensuring everything works perfectly with rigorous reliability testing.' },
  { version: '0.0.6', title: 'First 15 Components Release', date: 'Launch', desc: 'A massive update bringing 15 high-quality, beautifully animated components to the library.' },
];

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * versions.length);
    if (index === versions.length) index = versions.length - 1;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  // Calculate the height of the vertical progress bar.
  // We want it to grow from 0% to 100% as the user scrolls.
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative bg-[#09090b] text-[#fafafa]" style={{ height: `${versions.length * 100}vh` }}>
      
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#18181b]/50 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl w-full px-4 md:px-8 flex gap-6 md:gap-12 lg:gap-24 items-center">
          
          {/* Left: Vertical Timeline Track */}
          <div className="relative h-[60vh] w-[2px] bg-zinc-800 rounded-full flex-shrink-0">
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-zinc-500 to-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
            {/* Dots for each section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full flex flex-col justify-between">
              {versions.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 -ml-[5px] ${activeIndex >= i ? 'bg-white border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-[#09090b] border-zinc-700'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Dynamic Text Content */}
          <div className="flex-1 relative h-[350px] md:h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-full"
              >
                <div className="flex flex-col items-start md:flex-row md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-5xl md:text-6xl lg:text-8xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">
                    {versions[activeIndex].version}
                  </span>
                  <span className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-white/5 rounded-full border border-white/10 backdrop-blur-md text-zinc-300">
                    {versions[activeIndex].date}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                  {versions[activeIndex].title}
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                  {versions[activeIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
