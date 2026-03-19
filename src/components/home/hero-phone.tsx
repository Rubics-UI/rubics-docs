'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IPhoneFrame } from '@/components/ui/iphone-frame';
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
    }, 4000); // Increased interval to allow longer smooth entry animations
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
        className="will-change-transform"
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotateX: [2, -2, 2],
            rotateY: [-3, 3, -3]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="will-change-transform shadow-2xl rounded-[48px] shadow-indigo-500/10"
        >
          <IPhoneFrame screenBg="#09090b">
            <div className="w-full h-6 flex justify-between items-center px-2 mb-4">
              <span className="text-[12px] font-semibold text-white ml-2">9:41</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <Signal className="w-3.5 h-3.5 text-white" />
                <Wifi className="w-3.5 h-3.5 text-white" />
                <Battery className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="relative w-full h-[450px] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(4px)", scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 w-full"
                >
                  <h2 className="text-[22px] font-bold text-white mb-6 px-1 tracking-tight">
                    {screens[currentIndex].iphoneDemo.screenTitle}
                  </h2>
                  <div className="px-1">
                    <DemoRenderer elements={screens[currentIndex].iphoneDemo.elements} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </IPhoneFrame>
        </motion.div>
      </motion.div>
    </div>
  );
}
