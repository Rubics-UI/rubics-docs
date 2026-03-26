import Link from 'next/link';
import { components } from '@/data/components';
import { ChevronRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <div className="flex flex-col space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Components</h1>
        <p className="text-lg text-muted-foreground">
          Beautifully designed components for React Native that you can copy and paste into your apps.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className="group flex flex-col justify-between p-6 bg-card border border-border rounded-xl hover:shadow-soft-lg hover:border-border/80 transition-all"
          >
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">{c.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {c.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-[13px] text-muted-foreground">
                {c.installCommand.replace('rubics add ', 'add ')}
              </code>
              <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary">
                View <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}