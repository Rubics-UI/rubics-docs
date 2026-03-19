import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="container max-w-screen-2xl mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1flex)] md:gap-6 lg:grid-cols-[240px_minmax(0,1flex)] lg:gap-10 px-4">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <div className="w-full h-full overflow-y-auto py-6 pr-6 lg:py-8">
          <h4 className="mb-3 px-2 text-sm font-semibold tracking-tight text-white">Getting Started</h4>
          <div className="flex flex-col gap-0.5 w-full text-sm">
            <Link href="/docs" className="flex w-full items-center border-l-2 py-1.5 px-3 transition-colors border-[#fafafa] text-white font-medium bg-[#18181b]/50">Installation</Link>
            <span className="flex w-full items-center border-l-2 border-transparent py-1.5 px-3 text-[#71717a] cursor-not-allowed">Theming</span>
            <span className="flex w-full items-center border-l-2 border-transparent py-1.5 px-3 text-[#71717a] cursor-not-allowed">CLI Options</span>
            <span className="flex w-full items-center border-l-2 border-transparent py-1.5 px-3 text-[#71717a] cursor-not-allowed">Dark Mode</span>
          </div>
        </div>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 min-w-0 md:pl-6 max-w-4xl">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">Installation</h1>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              Rubics is a component library for React Native inspired by shadcn/ui.
              Instead of installing a package and importing from it, Rubics copies
              component source files directly into your project. You own the code.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Step 1: Installation & Init</h2>
            <p className="text-[#a1a1aa]">Install the CLI and run the init command to set up the configuration file and dependencies.</p>
            <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg flex flex-col gap-1">
              <code className="text-[14px] text-white font-mono">npm i rubics</code>
              <code className="text-[14px] text-white font-mono">rubics init</code>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Step 2: ThemeProvider</h2>
            <p className="text-[#a1a1aa]">Wrap your root layout with the ThemeProvider to enable the token system.</p>
            <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg">
              <pre className="text-[14px] text-[#a1a1aa] font-mono leading-relaxed">
                <code dangerouslySetInnerHTML={{ __html: `import { ThemeProvider } from "@/components/theme-provider";\n\nexport default function App() {\n  return (\n    &lt;ThemeProvider&gt;\n      &lt;Navigation /&gt;\n    &lt;/ThemeProvider&gt;\n  );\n}`}} />
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Step 3: Add Components</h2>
            <p className="text-[#a1a1aa]">Use the CLI to add the components you need.</p>
            <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg">
              <code className="text-[14px] text-white font-mono">rubics add button</code>
            </div>
            <p className="text-[#a1a1aa] mt-2">This will create <code className="text-[#fafafa] bg-[#18181b] border border-[#27272a] rounded px-1.5 py-0.5 font-mono text-xs">components/ui/button.tsx</code> along with any required dependencies.</p>
          </section>

          <div className="pt-8 flex items-center justify-start border-t border-[#27272a]">
             <Link href="/components" className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90">
                Browse Components &rarr;
              </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
