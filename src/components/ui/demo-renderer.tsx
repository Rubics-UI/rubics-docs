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
