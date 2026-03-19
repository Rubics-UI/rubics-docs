'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { components } from '@/data/components';
import { cn } from '@/lib/utils';

export function ComponentsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full h-full overflow-y-auto py-6 pr-6 lg:py-8">
      <h4 className="mb-3 px-2 text-sm font-semibold tracking-tight text-white">Components</h4>
      <div className="flex flex-col gap-0.5 w-full text-sm">
        {components.map((c) => {
          const isActive = pathname?.startsWith(`/components/${c.slug}`);
          return (
            <Link
              key={c.slug}
              href={`/components/${c.slug}`}
              className={cn(
                "flex w-full items-center border-l-2 py-1.5 px-3 transition-colors",
                isActive 
                  ? "border-[#fafafa] text-white font-medium bg-[#18181b]/50" 
                  : "border-transparent text-[#71717a] hover:text-[#a1a1aa]"
              )}
            >
              {c.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
