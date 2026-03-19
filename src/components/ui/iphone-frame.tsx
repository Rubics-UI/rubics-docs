import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  screenBg?: string;
  className?: string;
}

export function IPhoneFrame({ children, screenBg = "#000000", className }: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto border-[#1c1c1e] bg-[#1c1c1e] border-[14px] rounded-[48px] h-[560px] w-[280px] shadow-xl overflow-hidden shadow-[#1c1c1e]/50 ring-1 ring-white/10 shrink-0",
        className
      )}
    >
      {/* Side buttons */}
      <div className="absolute -left-[17px] top-[100px] w-[3px] h-[26px] bg-[#1c1c1e] rounded-l-md"></div>
      <div className="absolute -left-[17px] top-[140px] w-[3px] h-[50px] bg-[#1c1c1e] rounded-l-md"></div>
      <div className="absolute -left-[17px] top-[200px] w-[3px] h-[50px] bg-[#1c1c1e] rounded-l-md"></div>
      <div className="absolute -right-[17px] top-[150px] w-[3px] h-[70px] bg-[#1c1c1e] rounded-r-md"></div>

      {/* Screen area */}
      <div
        className="relative w-full h-full rounded-[36px] overflow-hidden shadow-inner flex flex-col"
        style={{ backgroundColor: screenBg }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-20 flex items-center justify-end px-2">
            {/* Camera dot */}
            <div className="w-[10px] h-[10px] bg-[#121212] rounded-full mr-2 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
        </div>

        {/* Content wrapper */}
        <div className="pt-[45px] px-4 pb-6 h-full w-full overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style suppressHydrationWarning>{`
             .iphone-scroll::-webkit-scrollbar { display: none; }
           `}</style>
          <div className="iphone-scroll h-full w-full relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
