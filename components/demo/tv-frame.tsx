import { cn } from "@/lib/utils";

interface TVFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function TVFrame({ children, className }: TVFrameProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-5xl min-w-[500px]", className)}>
      {/* Outer bezel */}
      <div className="rounded-2xl bg-gray-900 p-2.5 md:p-3.5 shadow-2xl shadow-black/60 ring-1 ring-white/5">
        {/* Inner screen */}
        <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-950">
          {children}
        </div>
        {/* Bottom bezel accent */}
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gray-700/50" />
      </div>
      {/* Stand */}
      <div className="mx-auto -mt-0.5 h-5 w-20 rounded-b-xl bg-gray-800 shadow-lg shadow-black/30" />
      <div className="mx-auto h-1.5 w-32 rounded-b-lg bg-gray-800/80" />
    </div>
  );
}
