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

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-background text-foreground" style={{ height: `${versions.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8">
          <motion.div 
            style={{ opacity }}
            className="mb-8 md:mb-12"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Version History</h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Scroll to explore our journey</p>
          </motion.div>

          <div className="flex items-stretch gap-4 md:gap-8 max-w-4xl mx-auto w-full">
            <div className="relative flex flex-col items-center">
              <motion.div 
                style={{ height: lineHeight }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-muted-foreground to-primary rounded-full"
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex flex-col justify-between py-4">
                {versions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const targetScroll = (i / (versions.length - 1)) * (versions.length * 100 - 100);
                      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                    }}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 -ml-[5px] cursor-pointer ${
                      activeIndex >= i 
                        ? 'bg-primary border-primary scale-125' 
                        : 'bg-background border-muted-foreground hover:border-muted-foreground/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full py-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-black font-mono tracking-tighter text-foreground">
                      {versions[activeIndex].version}
                    </span>
                    <span className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase bg-accent rounded-full border border-border text-muted-foreground w-fit">
                      {versions[activeIndex].date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                    {versions[activeIndex].title}
                  </h2>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {versions[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1"
            >
              <div className="w-1 h-2 bg-muted-foreground/60 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}