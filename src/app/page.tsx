'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroPhone } from '@/components/home/hero-phone';
import { Copy, Palette, Terminal } from 'lucide-react';

export default function Home() {
  const [terminalText, setTerminalText] = useState('');
  const fullText = "$ npm i rubics\n✔ Installed Rubics\n$ rubics init\n✔ Initialized Rubics\n$ rubics add button\n✔ Copied button → components/ui/button";

  useEffect(() => {
    let i = 0;
    let timer: NodeJS.Timeout;
    const typeWriter = () => {
      if (i <= fullText.length) {
        setTerminalText(fullText.slice(0, i));
        i++;
        timer = setTimeout(typeWriter, 40);
      } else {
        setTimeout(() => {
          i = 0;
          typeWriter();
        }, 2000);
      }
    };
    timer = setTimeout(typeWriter, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
        <div className="container px-4 max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-8 items-center pt-8 pb-16">

          <div className="flex flex-col items-start z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-3 py-1 text-[13px] font-medium border border-[#27272a] rounded-full bg-[#18181b] text-[#a1a1aa]"
            >
              React Native • Open Source
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-[68px] font-semibold text-white tracking-tight leading-[1.05]"
            >
              Craft beautiful<br />native apps.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[17px] text-[#a1a1aa] max-w-[500px]"
            >
              Beautifully designed components for React Native. Copy, paste, own. Themed by default.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/docs"
                className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-[15px] font-medium text-black transition-colors hover:bg-white/90"
              >
                Get Started
              </Link>
              <Link
                href="/components"
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#27272a] bg-transparent px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#27272a]"
              >
                Components &rarr;
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-[520px] mt-6"
            >
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-5 font-mono text-[14px] min-h-[160px] flex items-start w-full relative overflow-hidden shadow-xl shadow-black/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#52525b] to-transparent opacity-30"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {terminalText.split('\n').map((line, idx) => (
                    <div key={idx} className="flex">
                      <span className={line.startsWith('✔') ? "text-[#4ade80] mr-3" : (line.startsWith('$') ? "text-[#71717a] mr-3" : "text-[#fafafa] mr-3")}>
                        {line.startsWith('✔') ? '✔' : (line.startsWith('$') ? '$' : '')}
                      </span>
                      <span className={line.startsWith('✔') ? "text-[#a1a1aa]" : "text-[#fafafa]"}>
                        {line.replace(/^✔\s|^\$\s/, '')}
                      </span>
                    </div>
                  ))}
                  <span className="w-2 h-[18px] bg-[#fafafa] animate-pulse mt-0.5 inline-block" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center lg:justify-end w-full">
            <HeroPhone />
          </div>

        </div>
      </section>

      <section className="w-full border-t border-[#27272a] bg-[#09090b] py-24">
        <div className="container px-4 max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative flex flex-col items-start gap-5 p-7 bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors rounded-2xl">
              <div className="p-3 bg-[#09090b] border border-[#27272a] rounded-xl group-hover:bg-[#27272a]/50 transition-colors">
                <Copy className="w-5 h-5 text-[#fafafa]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#fafafa] tracking-tight">You own the code</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
                  Components live in your project, not in node_modules. Full control over everything.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col items-start gap-5 p-7 bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors rounded-2xl">
              <div className="p-3 bg-[#09090b] border border-[#27272a] rounded-xl group-hover:bg-[#27272a]/50 transition-colors">
                <Palette className="w-5 h-5 text-[#fafafa]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#fafafa] tracking-tight">Themed by default</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
                  One token file controls every component. Match your brand&apos;s dark and light modes.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col items-start gap-5 p-7 bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors rounded-2xl">
              <div className="p-3 bg-[#09090b] border border-[#27272a] rounded-xl group-hover:bg-[#27272a]/50 transition-colors">
                <Terminal className="w-5 h-5 text-[#fafafa]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#fafafa] tracking-tight">CLI powered</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
                  Just use `rubics add component` and we will place the file right where you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
