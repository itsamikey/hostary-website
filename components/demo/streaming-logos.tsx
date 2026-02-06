// Streaming app tiles with brand-accurate styling

export const STREAMING_APPS = [
  {
    name: "Netflix",
    bg: "bg-black",
    content: (
      <span className="text-sm md:text-xl font-extrabold tracking-tighter text-[#e50914]">
        NETFLIX
      </span>
    ),
  },
  {
    name: "YouTube",
    bg: "bg-[#282828]",
    content: (
      <div className="flex items-center gap-0.5 md:gap-1">
        <div className="w-3 h-2 md:w-5 md:h-3.5 bg-red-600 rounded-[2px] md:rounded-sm flex items-center justify-center">
          <div className="w-0 h-0 border-l-[3px] md:border-l-[5px] border-l-white border-y-[2px] md:border-y-[3px] border-y-transparent ml-[1px]" />
        </div>
        <span className="text-[8px] md:text-sm font-semibold text-white">YouTube</span>
      </div>
    ),
  },
  {
    name: "Disney+",
    bg: "bg-[#1a1d29]",
    content: (
      <span className="text-[10px] md:text-base font-bold tracking-wide text-white">
        Disney<span className="text-[#0682f0]">+</span>
      </span>
    ),
  },
  {
    name: "Hulu",
    bg: "bg-black",
    content: (
      <span className="text-xs md:text-xl font-extrabold tracking-widest text-[#1ce783] uppercase">
        hulu
      </span>
    ),
  },
  {
    name: "Prime Video",
    bg: "bg-[#00050d]",
    content: (
      <div className="flex flex-col items-center leading-none">
        <span className="text-[8px] md:text-xs font-bold text-white">
          prime video
        </span>
        <svg viewBox="0 0 40 8" className="w-6 md:w-10 mt-0.5">
          <path
            d="M2 6 C10 2, 20 0, 38 2"
            stroke="#00a8e1"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M34 0 L38 2 L34 4"
            fill="#00a8e1"
          />
        </svg>
      </div>
    ),
  },
];
