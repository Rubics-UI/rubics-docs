import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="container max-w-screen-2xl mx-auto flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)_200px] md:gap-6 lg:gap-10 px-4">
      {/* LEFT SIDEBAR */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <div className="w-full h-full overflow-y-auto py-6 pr-6 lg:py-8">
          <h4 className="mb-3 px-2 text-sm font-semibold tracking-tight text-white">Getting Started</h4>
          <div className="flex flex-col gap-1 w-full text-[14px]">
            <a href="#introduction" className="flex w-full items-center border-l-2 py-1.5 px-3 transition-colors border-transparent hover:border-[#52525b] text-[#a1a1aa] hover:text-white">Introduction</a>
            <a href="#installation" className="flex w-full items-center border-l-2 py-1.5 px-3 transition-colors border-transparent hover:border-[#52525b] text-[#a1a1aa] hover:text-white">Installation</a>
            <a href="#cli" className="flex w-full items-center border-l-2 py-1.5 px-3 transition-colors border-transparent hover:border-[#52525b] text-[#a1a1aa] hover:text-white">CLI Usage</a>
          </div>
          <h4 className="mb-3 mt-6 px-2 text-sm font-semibold tracking-tight text-white">Customization</h4>
          <div className="flex flex-col gap-1 w-full text-[14px]">
            <a href="#theming" className="flex w-full items-center border-l-2 py-1.5 px-3 transition-colors border-transparent hover:border-[#52525b] text-[#a1a1aa] hover:text-white">Theming</a>
            <a href="#dark-mode" className="flex w-full items-center border-l-2 py-1.5 px-3 transition-colors border-transparent hover:border-[#52525b] text-[#a1a1aa] hover:text-white">Dark Mode</a>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative py-6 lg:gap-10 lg:py-8 min-w-0 max-w-3xl">
        <div className="flex flex-col space-y-16">
          
          <section id="introduction" className="scroll-mt-24 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">Documentation</h1>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              Rubics UI is a collection of extremely polished, re-usable React Native components inspired by the web&apos;s shadcn/ui. 
              We do not distribute via npm packages for the UI components. Instead, we use a CLI to copy the raw source code 
              directly into your project, giving you absolute control over exactly how everything looks and behaves.
            </p>
          </section>

          <section id="installation" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Installation</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">1. Install the CLI</h3>
              <p className="text-[#a1a1aa] text-[15px]">You can install the Rubics CLI globally or locally into your project&apos;s dev dependencies.</p>
              <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg">
                <code className="text-[#fafafa] font-mono text-[14px]">npm i -g rubics</code>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">2. Initialize</h3>
              <p className="text-[#a1a1aa] text-[15px]">Run the init command at the root of your React Native (Expo) project. This will set up your tailwind configuration, theme tokens, and necessary utility files.</p>
              <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg">
                <code className="text-[#fafafa] font-mono text-[14px]">rubics init</code>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">3. Setup Provider</h3>
              <p className="text-[#a1a1aa] text-[15px]">Wrap your application root with the generated `ThemeProvider` so your components can consume the CSS variables correctly.</p>
              <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg overflow-x-auto">
                <pre className="text-[#a1a1aa] font-mono text-[13px] leading-relaxed">
                  <code dangerouslySetInnerHTML={{ __html: `import { ThemeProvider } from "@/components/theme-provider";\n\nexport default function App() {\n  return (\n    &lt;ThemeProvider&gt;\n      &lt;YourApp /&gt;\n    &lt;/ThemeProvider&gt;\n  );\n}`}} />
                </pre>
              </div>
            </div>
          </section>

          <section id="cli" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white">CLI Usage</h2>
            <p className="text-[#a1a1aa] text-[15px]">The primary way to interact with Rubics is via its CLI. This allows you to rapidly scaffold components into your project.</p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Adding a component</h3>
              <p className="text-[#a1a1aa] text-[15px]">When you add a component, the CLI downloads the `.tsx` file into your `components/ui` directory, and automatically installs any 3rd party dependencies (like `framer-motion` or `lucide-react`) required by the component.</p>
              <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg">
                <code className="text-[#fafafa] font-mono text-[14px]">rubics add button</code>
              </div>
            </div>
          </section>

          <section id="theming" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Theming & Dark Mode</h2>
            <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
              Every component uses semantic color tokens (e.g., `bg-background`, `text-primary`, `border-border`). These exist mapped within your `tailwind.config.ts`.
              To change your primary accent color, simply adjust the `--primary` block inside your `global.css`.
            </p>
            <div className="p-4 bg-[#18181b] border border-[#27272a] rounded-lg overflow-x-auto border-l-4 border-l-indigo-500">
              <p className="text-[#a1a1aa] text-[14px]">
                <strong className="text-white">Note:</strong> Dark mode is the default and only officially supported tier right now. You can add light mode overrides manually in your stylesheets!
              </p>
            </div>
          </section>

          <div className="pt-8 flex items-center justify-start border-t border-[#27272a]">
             <Link href="/components" className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-[15px] font-medium text-black transition-colors hover:bg-white/90">
                Browse Components &rarr;
              </Link>
          </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR (TOC) - Hidden on small screens */}
      <div className="hidden lg:block w-full pt-8 pb-8 h-[calc(100vh-3.5rem)] sticky top-14">
         <div className="space-y-2 border-l border-[#27272a] pl-4">
            <p className="font-medium text-[14px] text-white">On this page</p>
            <div className="flex flex-col space-y-2 text-[13px] text-[#a1a1aa]">
              <a href="#introduction" className="hover:text-white transition-colors">Introduction</a>
              <a href="#installation" className="hover:text-white transition-colors">Installation</a>
              <a href="#cli" className="hover:text-white transition-colors">CLI Usage</a>
              <a href="#theming" className="hover:text-white transition-colors">Theming & Dark Mode</a>
            </div>
         </div>
      </div>
    </div>
  );
}
