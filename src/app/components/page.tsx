import Link from 'next/link';
import { components } from '@/data/components';
import { ChevronRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <div className="flex flex-col space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">Components</h1>
        <p className="text-lg text-[#a1a1aa]">
          Beautifully designed components for React Native that you can copy and paste into your apps.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className="group flex flex-col justify-between p-6 bg-[#18181b] border border-[#27272a] rounded-xl hover:border-[#52525b] transition-colors"
          >
            <div className="space-y-3">
              <h3 className="font-semibold text-white">{c.name}</h3>
              <p className="text-sm text-[#a1a1aa] line-clamp-2">
                {c.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#27272a] flex items-center justify-between">
              <code className="relative rounded bg-[#09090b] px-[0.4rem] py-[0.2rem] font-mono text-[13px] text-[#a1a1aa]">
                {c.installCommand.replace('rubics add ', 'add ')}
              </code>
              <div className="flex items-center text-sm font-medium text-white group-hover:text-[#fafafa]">
                View <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
