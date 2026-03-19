import { ComponentsSidebar } from "@/components/layout/components-sidebar";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-screen-2xl mx-auto flex flex-1 items-start px-4">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-[220px]">
        <ComponentsSidebar />
      </aside>
      <main className="relative py-6 lg:py-8 flex-1 w-full min-w-0 md:pl-6">
        {children}
      </main>
    </div>
  );
}
