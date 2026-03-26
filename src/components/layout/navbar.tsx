'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, BookOpen } from 'lucide-react';

const navLinks = [
  { name: 'Docs', href: '/docs', icon: BookOpen },
  { name: 'Components', href: '/components' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Blocks', disabled: true },
  { name: 'Charts', disabled: true },
  { name: 'Directory', disabled: true },
  { name: 'Create', disabled: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-6 h-6 overflow-hidden rounded-md ring-1 ring-border shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/rubics-light.png"
                alt="Rubics"
                fill
                className="object-cover"
                sizes="24px"
              />
            </div>
            <span className="font-mono font-semibold tracking-tight text-[15px] text-foreground group-hover:text-primary transition-colors">
              rubics
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 text-[14px] font-medium">
            {navLinks.map((link) => {
              if (link.disabled) {
                return (
                  <span
                    key={link.name}
                    className="px-3 py-1.5 text-muted-foreground cursor-not-allowed transition-colors"
                    title="Coming soon"
                  >
                    {link.name}
                  </span>
                );
              }
              const isActive = pathname?.startsWith(link.href!);
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={cn(
                    "relative flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors",
                    isActive ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {LinkIcon && <LinkIcon className="w-3.5 h-3.5" />}
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="container px-4 pb-4 flex flex-col gap-1 text-[15px] font-medium">
              {navLinks.map((link) => {
                if (link.disabled) {
                  return (
                    <span
                      key={link.name}
                      className="px-3 py-2.5 text-muted-foreground cursor-not-allowed"
                    >
                      {link.name} (Coming soon)
                    </span>
                  );
                }
                const isActive = pathname?.startsWith(link.href!);
                return (
                  <Link
                    key={link.name}
                    href={link.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-2.5 rounded-md transition-colors",
                      isActive ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}