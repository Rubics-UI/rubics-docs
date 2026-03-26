'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroPhone } from '@/components/home/hero-phone';
import { Copy, Palette, Terminal, ArrowRight, Github, Figma } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center">
        <div className="container relative px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
          <div className="flex flex-col items-start z-10 space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 text-[13px] font-medium rounded-full bg-accent text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              v1.0 Now Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-foreground tracking-tight leading-[1.05]"
            >
              Beautiful<br />
              <span className="text-primary">React Native</span><br />
              components.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-[480px] leading-relaxed"
            >
              Copy-paste beautiful, accessible components. Full control, no dependencies. 
              Ship your app faster with our professionally designed component library.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <Link
                href="/docs"
                className="inline-flex h-11 sm:h-12 min-w-[150px] items-center justify-center rounded-lg bg-primary px-6 sm:px-8 text-[15px] font-medium text-primary-foreground transition-all duration-200 hover:shadow-soft hover:translate-y-[-1px] active:translate-y-0"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/components"
                className="inline-flex h-11 sm:h-12 min-w-[150px] items-center justify-center rounded-lg border border-border bg-card px-6 sm:px-8 text-[15px] font-medium text-foreground transition-all duration-200 hover:bg-accent hover:shadow-soft"
              >
                Browse Components
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-6 pt-2 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4" /> Open Source
              </span>
              <span className="flex items-center gap-2">
                <Figma className="w-4 h-4" /> Figma Ready
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="w-full max-w-[460px] pt-4"
            >
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 font-mono text-[13px] sm:text-[14px]">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center">
                    <span className="text-muted-foreground mr-3 w-4">$</span>
                    <span className="text-foreground">npm i rubics</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-3 w-4">✔</span>
                    <span className="text-muted-foreground">Installed Rubics</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground mr-3 w-4">$</span>
                    <span className="text-foreground">rubics add button</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-3 w-4">✔</span>
                    <span className="text-muted-foreground">Copied → components/ui/</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end w-full"
          >
            <HeroPhone />
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full border-t border-border bg-card/50 py-20 lg:py-28"
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Why Rubics?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Everything you need to build stunning React Native apps, minus the headache.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col items-start gap-4 p-7 sm:p-8 bg-card border border-border rounded-2xl hover:shadow-soft-lg hover:border-border/80 transition-all duration-300"
            >
              <div className="p-3.5 bg-accent border border-border rounded-xl">
                <Copy className="w-5 h-5 text-foreground" />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg font-semibold text-foreground">You own the code</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Components live in your project. Full control, no black box. Customize everything.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="group flex flex-col items-start gap-4 p-7 sm:p-8 bg-card border border-border rounded-2xl hover:shadow-soft-lg hover:border-border/80 transition-all duration-300"
            >
              <div className="p-3.5 bg-accent border border-border rounded-xl">
                <Palette className="w-5 h-5 text-foreground" />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg font-semibold text-foreground">Themed by default</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  One token file controls every component. Perfect dark and light mode out of the box.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="sm:col-span-2 lg:col-span-1 group flex flex-col items-start gap-4 p-7 sm:p-8 bg-card border border-border rounded-2xl hover:shadow-soft-lg hover:border-border/80 transition-all duration-300"
            >
              <div className="p-3.5 bg-accent border border-border rounded-xl">
                <Terminal className="w-5 h-5 text-foreground" />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg font-semibold text-foreground">CLI powered</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Run <code className="text-foreground bg-accent px-1.5 py-0.5 rounded text-xs">rubics add button</code> and we place the file right where you need it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="w-full border-t border-border bg-muted/30 py-12">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span>Built with</span>
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1.5 bg-card border border-border rounded-md text-foreground text-xs font-medium">React Native</span>
                <span className="px-3 py-1.5 bg-card border border-border rounded-md text-foreground text-xs font-medium">TypeScript</span>
                <span className="px-3 py-1.5 bg-card border border-border rounded-md text-foreground text-xs font-medium">Tailwind</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
              <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">Components</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}