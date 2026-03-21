'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Iphone } from '@/components/ui/iphone';
import { components } from '@/data/components';
import { DemoRenderer } from '@/components/ui/demo-renderer';
import { Battery, Wifi, Signal } from 'lucide-react';

export function HeroPhone() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screens = [
    components.find(c => c.slug === 'button')!,
    components.find(c => c.slug === 'input')!,
    components.find(c => c.slug === 'slider')!,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 4500); 
    return () => clearInterval(timer);
  }, [screens.length]);

  return (
    <div className="relative flex items-center justify-center w-full h-[600px] min-h-[600px] perspective-1000">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#6366f1] opacity-15 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        style={{ perspective: 1200 }}
        className="will-change-transform z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotateX: [1, -1, 1],
            rotateY: [-2, 2, -2]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="will-change-transform shadow-2xl rounded-[48px] shadow-indigo-500/10"
        >
          <Iphone className="w-[320px]">
            <div className="w-full h-full flex flex-col items-center">
              {/* Status Bar */}
              <div className="w-full h-8 flex justify-between items-end px-6 pt-1">
                <span className="text-[12px] font-semibold text-white tracking-wider ml-1">9:41</span>
                <div className="flex items-center gap-1.5 opacity-90 pb-[1px] mr-1">
                  <Signal className="w-3.5 h-3.5 text-white fill-white" />
                  <Wifi className="w-3.5 h-3.5 text-white" />
                  <Battery className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Screens content */}
              <div className="flex-1 w-full relative overflow-hidden mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, filter: "blur(4px)", scale: 0.96 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(4px)", scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 w-full h-full flex flex-col"
                  >
                    <h2 className="text-[24px] font-bold text-white mb-8 px-6 tracking-tight">
                      {screens[currentIndex].iphoneDemo.screenTitle}
                    </h2>
                    <div className="px-6 flex-1 overflow-y-auto">
                      <DemoRenderer elements={screens[currentIndex].iphoneDemo.elements} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Iphone>
        </motion.div>
      </motion.div>
    </div>
  );
}
