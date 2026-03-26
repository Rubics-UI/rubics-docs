'use client';

import { useState } from 'react';
import { Iphone } from '@/components/ui/iphone';
import { DemoRenderer } from '@/components/ui/demo-renderer';
import { Copy, Check, Battery, Wifi, Signal } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ComponentDemo } from '@/data/components';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-medium rounded-md bg-accent border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-500">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface UsageRow {
  label: string;
  code: string;
}

export function ClientComponent({ component }: { component: ComponentDemo }) {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between w-full h-full gap-8 xl:gap-14">
      <div className="flex-1 w-full min-w-0 max-w-3xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">{component.name}</h1>
          <p className="text-lg text-muted-foreground">{component.description}</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
            <code className="text-[14px] text-foreground font-mono">{component.installCommand}</code>
            <CopyButton text={component.installCommand} />
          </div>
          {component.npmDeps && component.npmDeps.length > 0 && (
            <div className="mt-3 p-4 border border-amber-500/20 bg-amber-500/10 rounded-lg text-amber-200/90 text-[14px]">
              This component requires: <code className="font-mono bg-amber-500/20 px-1.5 py-0.5 rounded">{component.npmDeps.join(', ')}</code>
            </div>
          )}
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Usage</h2>
          <div className="space-y-6">
            {component.usage.map((u: UsageRow, i: number) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-medium text-foreground">{u.label}</h3>
                  <CopyButton text={u.code} />
                </div>
                <div className="p-4 bg-card border border-border rounded-lg overflow-x-auto">
                  <pre className="text-[13px] text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap">
                    <code>{u.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Props</h2>
          <div className="w-full overflow-hidden border border-border rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-card text-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium border-b border-border">Name</th>
                  <th className="px-4 py-3 font-medium border-b border-border">Type</th>
                  <th className="px-4 py-3 font-medium border-b border-border">Default</th>
                  <th className="px-4 py-3 font-medium border-b border-border">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {component.props.map((p: PropsRow, i: number) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-mono text-[13px] text-foreground">{p.name}</td>
                    <td className="px-4 py-3 font-mono text-[13px] text-indigo-400">{p.type}</td>
                    <td className="px-4 py-3 font-mono text-[13px] text-muted-foreground">{p.default || '-'}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="hidden xl:flex w-[340px] shrink-0 justify-end h-full">
        <div className="sticky top-24 pt-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Iphone className="w-[320px]">
              <div className="w-full h-full flex flex-col items-center">
                <div className="w-full h-8 flex justify-between items-end px-6 pt-1">
                  <span className="text-[12px] font-semibold text-foreground tracking-wider ml-1">9:41</span>
                  <div className="flex items-center gap-1.5 opacity-90 pb-[1px] mr-1">
                    <Signal className="w-3.5 h-3.5 text-foreground fill-foreground" />
                    <Wifi className="w-3.5 h-3.5 text-foreground" />
                    <Battery className="w-4 h-4 text-foreground" />
                  </div>
                </div>
                <div className="flex-1 w-full overflow-y-auto px-6 pt-8 pb-10">
                  <div className="w-full mb-8">
                    <span className="text-[24px] font-bold text-foreground tracking-tight">
                      {component.iphoneDemo.screenTitle}
                    </span>
                  </div>
                  <DemoRenderer elements={component.iphoneDemo.elements} />
                </div>
              </div>
            </Iphone>
          </motion.div>
        </div>
      </div>
    </div>
  );
}