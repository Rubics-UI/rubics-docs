'use client';

import { DemoElement } from "@/data/components";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DemoRenderer({ elements }: { elements: DemoElement[] }) {
  return (
    <div className="flex flex-col w-full">
      <AnimatePresence>
        {elements.map((el, i) => {
          let content = null;
          
          if (el.type === 'spacer') {
            content = <div className="h-4" />;
          } else if (el.type === 'text') {
            const isSection = el.props?.style === 'section';
            content = (
              <div className={cn("mb-3", isSection ? "text-[13px] uppercase tracking-wider text-[#52525b] font-semibold mt-4 first:mt-0" : "text-[14px] text-[#a1a1aa]")}>
                {el.props?.label}
              </div>
            );
          } else if (el.type === 'button') {
            const variant = el.props?.variant || 'default';
            const base = "flex items-center justify-center rounded-md font-medium text-[15px] h-11 px-4 transition-colors w-full mb-3 last:mb-0";
            const variants = {
              default: "bg-[#fafafa] text-[#09090b] hover:bg-[#fafafa]/90",
              outline: "border border-[#27272a] bg-transparent text-[#fafafa] hover:bg-[#27272a]",
              ghost: "bg-transparent text-[#fafafa] hover:bg-[#27272a]",
              destructive: "bg-[#7f1d1d] text-[#fafafa] hover:bg-[#7f1d1d]/90",
            };
            content = (
              <button className={cn(base, variants[variant as keyof typeof variants])}>
                {el.props?.label}
              </button>
            );
          } else if (el.type === 'input') {
            content = (
              <div className="flex flex-col gap-1.5 w-full mb-3">
                {el.props?.label && <label className="text-[14px] font-medium text-[#fafafa]">{el.props.label}</label>}
                <div className={cn("flex items-center h-11 w-full rounded-md border border-[#27272a] bg-[#09090b] px-3 text-[15px] text-[#fafafa]", el.props?.error && "border-red-500/50")}>
                  <span className={cn("flex-1", el.props?.placeholder ? "text-[#a1a1aa]" : "text-[#fafafa]")}>
                    {el.props?.secure ? '••••••••' : el.props?.placeholder || ''}
                  </span>
                </div>
                {el.props?.error && <span className="text-[13px] text-red-500">{el.props.error}</span>}
              </div>
            );
          } else if (el.type === 'checkbox') {
            const checked = el.props?.checked;
            const disabled = el.props?.disabled;
            content = (
              <div className={cn("flex items-center space-x-3 mb-3", disabled && "opacity-50")}>
                <div className={cn("w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors", checked ? "bg-[#fafafa] border-[#fafafa]" : "border-[#27272a] bg-transparent")}>
                  {checked && <Check className="w-3.5 h-3.5 text-[#09090b]" strokeWidth={3} />}
                </div>
                <span className="text-[15px] text-[#fafafa] font-medium">{el.props?.label}</span>
              </div>
            );
          } else if (el.type === 'slider') {
            content = (
              <div className="w-full flex flex-col gap-3 mb-4 mt-2">
                <div className="w-full h-1.5 bg-[#27272a] rounded-full relative">
                  <div 
                    className="absolute left-0 top-0 h-full rounded-full" 
                    style={{ width: `${el.props?.value || 50}%`, backgroundColor: el.props?.rangeColor || '#fafafa' }}
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#fafafa] rounded-full shadow-md border border-neutral-200"
                    style={{ left: `calc(${el.props?.value || 50}% - 10px)` }}
                  />
                </div>
                {(el.props?.startLabel || el.props?.endLabel) && (
                  <div className="flex justify-between w-full text-[13px] text-[#a1a1aa] font-medium">
                    <span>{el.props?.startLabel}</span>
                    <span>{el.props?.endLabel}</span>
                  </div>
                )}
              </div>
            );
          } else if (el.type === 'otp') {
            content = (
              <div className="flex gap-2 w-full justify-center mb-4 mt-2">
                {Array.from({ length: el.props?.length || 6 }).map((_, j) => {
                  const val = el.props?.value?.split(' ')[j];
                  return (
                    <div key={j} className="flex items-center justify-center w-[42px] h-[52px] rounded-lg border border-[#27272a] bg-[#18181b] text-[22px] font-medium text-[#fafafa]">
                      {val || ''}
                    </div>
                  );
                })}
              </div>
            );
          } else if (el.type === 'carousel') {
            content = (
              <div className="flex gap-2 w-full overflow-hidden mb-4 mt-2">
                <div className="w-[85%] h-32 shrink-0 rounded-lg bg-[#27272a] animate-pulse" />
                <div className="w-[85%] h-32 shrink-0 rounded-lg bg-[#27272a] opacity-50" />
              </div>
            );
          } else if (el.type === 'combobox') {
            content = (
              <div className="flex items-center justify-between h-11 w-full rounded-md border border-[#27272a] bg-[#09090b] px-3 text-[15px] text-[#a1a1aa] mb-3">
                <span>Select an option...</span>
                <svg className="w-4 h-4 text-[#a1a1aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            );
          } else if (el.type === 'date-picker') {
            content = (
              <div className="flex items-center space-x-2 h-11 w-full rounded-md border border-[#27272a] bg-[#09090b] px-3 text-[15px] text-[#fafafa] mb-3">
                <svg className="w-4 h-4 text-[#a1a1aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span>{new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            );
          } else if (el.type === 'login-card') {
            content = (
              <div className="w-full flex flex-col p-4 rounded-xl border border-[#27272a] bg-[#09090b] mb-4 shadow-sm">
                <div className="text-[18px] font-semibold text-[#fafafa] mb-1">Login</div>
                <div className="text-[13px] text-[#a1a1aa] mb-4">Enter your details to sign in.</div>
                <div className="h-10 w-full rounded border border-[#27272a] mb-3" />
                <div className="h-10 w-full rounded border border-[#27272a] mb-4" />
                <div className="h-10 w-full rounded bg-[#fafafa]" />
              </div>
            );
          } else if (el.type === 'progress') {
            const progressVal = el.props?.value || 50;
            content = (
              <div className="w-full h-2 bg-[#27272a] rounded-full overflow-hidden mb-3">
                <div className="h-full bg-[#fafafa]" style={{ width: `${progressVal}%` }} />
              </div>
            );
          } else if (el.type === 'radio-group') {
            content = (
              <div className="flex flex-col gap-3 mb-3">
                {['Option A', 'Option B'].map((label, idx) => (
                  <div key={label} className="flex items-center space-x-3">
                    <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", idx === 0 ? "border-[#fafafa]" : "border-[#27272a]")}>
                      {idx === 0 && <div className="w-2.5 h-2.5 rounded-full bg-[#fafafa]" />}
                    </div>
                    <span className="text-[15px] text-[#fafafa]">{label}</span>
                  </div>
                ))}
              </div>
            );
          } else if (el.type === 'range-slider') {
            content = (
              <div className="w-full flex flex-col gap-3 mb-4 mt-2">
                <div className="w-full h-1.5 bg-[#27272a] rounded-full relative">
                  <div className="absolute left-[20%] right-[20%] h-full bg-[#fafafa] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#fafafa] rounded-full shadow-sm border border-neutral-200 left-[20%] -ml-2.5" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#fafafa] rounded-full shadow-sm border border-neutral-200 left-[80%] -ml-2.5" />
                </div>
              </div>
            );
          } else if (el.type === 'select-card') {
            content = (
              <div className="w-full p-4 rounded-xl border border-[#fafafa] bg-[#09090b] mb-4 flex justify-between items-center opacity-90">
                <div className="flex flex-col">
                  <span className="text-[15px] font-medium text-[#fafafa]">Pro Plan</span>
                  <span className="text-[13px] text-[#a1a1aa]">$29/month</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#fafafa] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#09090b]" strokeWidth={3} />
                </div>
              </div>
            );
          } else if (el.type === 'sidebar') {
            content = (
              <div className="w-full h-40 rounded-xl border border-[#27272a] bg-[#09090b] flex overflow-hidden mb-4">
                <div className="w-16 h-full border-r border-[#27272a] flex flex-col gap-2 p-2">
                  <div className="w-8 h-8 rounded bg-[#27272a] mb-2" />
                  <div className="w-full h-8 rounded bg-[#27272a] opacity-50" />
                  <div className="w-full h-8 rounded bg-[#27272a] opacity-50" />
                </div>
                <div className="flex-1 p-3 flex flex-col gap-3">
                  <div className="w-24 h-4 rounded bg-[#27272a]" />
                  <div className="w-full h-20 rounded bg-[#27272a] opacity-30" />
                </div>
              </div>
            );
          } else if (el.type === 'skeleton') {
            content = (
              <div className="w-full flex flex-col gap-3 mb-4 mt-2">
                <div className="w-12 h-12 rounded-full bg-[#27272a] animate-pulse" />
                <div className="w-full h-4 rounded-md bg-[#27272a] animate-pulse" />
                <div className="w-3/4 h-4 rounded-md bg-[#27272a] animate-pulse" />
              </div>
            );
          }

          if (!content) return null;

          return (
            <motion.div
              key={`element-${i}`}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              layout="position"
            >
              {content}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
