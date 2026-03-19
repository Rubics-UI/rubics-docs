import { notFound } from 'next/navigation';
import { components } from '@/data/components';
import { IPhoneFrame } from '@/components/ui/iphone-frame';
import { DemoRenderer } from '@/components/ui/demo-renderer';
import { Copy } from 'lucide-react';

export function generateStaticParams() {
  return components.map((c) => ({
    slug: c.slug,
  }));
}

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const component = components.find((c) => c.slug === params.slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between w-full h-full gap-8 xl:gap-14">
      <div className="flex-1 w-full min-w-0 max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">{component.name}</h1>
          <p className="text-lg text-[#a1a1aa]">{component.description}</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-white">Installation</h2>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative flex items-center justify-between p-4 bg-[#18181b] border border-[#27272a] rounded-lg">
              <code className="text-[14px] text-white font-mono">{component.installCommand}</code>
              <button className="text-[#a1a1aa] hover:text-white transition-colors" title="Copy to clipboard">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          {component.npmDeps && component.npmDeps.length > 0 && (
            <div className="mt-4 p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-lg text-yellow-200/90 text-[14px]">
              This component requires: <code className="font-mono bg-yellow-500/20 px-1 py-0.5 rounded">{component.npmDeps.join(', ')}</code>
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-white">Usage</h2>
          <div className="space-y-6">
            {component.usage.map((u, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-[15px] font-medium text-white">{u.label}</h3>
                <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg overflow-x-auto">
                  <pre className="text-[13px] text-[#a1a1aa] font-mono leading-relaxed"><code dangerouslySetInnerHTML={{ __html: u.code.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;') }} /></pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-white">Props</h2>
          <div className="w-full overflow-hidden border border-[#27272a] rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#18181b] text-[#fafafa]">
                <tr>
                  <th className="px-4 py-3 font-medium border-b border-[#27272a]">Name</th>
                  <th className="px-4 py-3 font-medium border-b border-[#27272a]">Type</th>
                  <th className="px-4 py-3 font-medium border-b border-[#27272a]">Default</th>
                  <th className="px-4 py-3 font-medium border-b border-[#27272a]">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272a] bg-[#09090b]">
                {component.props.map((p, i) => (
                  <tr key={i} className="hover:bg-[#18181b]/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-[13px] text-white">{p.name}</td>
                    <td className="px-4 py-3 font-mono text-[13px] text-indigo-300">{p.type}</td>
                    <td className="px-4 py-3 font-mono text-[13px] text-[#a1a1aa]">{p.default || '-'}</td>
                    <td className="px-4 py-3 text-[#a1a1aa]">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="hidden xl:flex w-[340px] shrink-0 justify-end h-full">
        <div className="sticky top-24 pt-4">
          <IPhoneFrame screenBg={component.iphoneDemo.screenBg || '#09090b'}>
            <div className="w-full text-center py-2 mb-2 mt-2">
              <span className="text-[18px] font-semibold text-white tracking-tight">
                {component.iphoneDemo.screenTitle}
              </span>
            </div>
            <DemoRenderer elements={component.iphoneDemo.elements} />
          </IPhoneFrame>
        </div>
      </div>
    </div>
  );
}
