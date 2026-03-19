'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Docs', href: '/docs' },
    { name: 'Components', href: '/components' },
    { name: 'Blocks', disabled: true },
    { name: 'Charts', disabled: true },
    { name: 'Directory', disabled: true },
    { name: 'Create', disabled: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#27272a]/40 bg-[#09090b]/80 backdrop-blur-md transition-all">
      <div className="container flex h-14 items-center px-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="mr-8 flex items-center space-x-2.5 group">
          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-[5px] ring-1 ring-white/10 shadow-sm transform group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/rubics-light.png"
              alt="Rubics UI"
              fill
              className="object-cover"
              sizes="24px"
            />
          </div>
          <span className="font-mono font-semibold tracking-tight text-[15px] text-[#fafafa] group-hover:text-white transition-colors">{"rubics"}</span>
        </Link>
        <nav className="flex items-center space-x-6 text-[14px] font-medium">
          {links.map((link) => {
            if (link.disabled) {
              return (
                <span
                  key={link.name}
                  className="text-[#3f3f46] cursor-not-allowed transition-colors"
                  title="Coming soon"
                >
                  {link.name}
                </span>
              );
            }
            const isActive = pathname?.startsWith(link.href!);
            return (
              <Link
                key={link.name}
                href={link.href!}
                className={cn(
                  "transition-colors hover:text-white relative py-1",
                  isActive ? "text-white" : "text-[#71717a]"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-t-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
