import { DEMO_DATA } from "@/lib/demo-data";

interface SplashScreenProps {
  guestName: string;
  dancingClass: string;
  poppinsClass: string;
}

export function SplashScreen({ guestName, dancingClass, poppinsClass }: SplashScreenProps) {
  const firstName = guestName.split(" ")[0];

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/backgrounds/ocean.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <h1
        className={`relative text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-amber-200 mb-0 leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] ${dancingClass}`}
      >
        Welcome
      </h1>
      <p
        className={`relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-4 font-light drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] ${poppinsClass}`}
      >
        {firstName}
      </p>
      <p className="relative text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-12 px-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        {DEMO_DATA.welcomeMessage}
      </p>
      <p className="relative text-xs md:text-lg text-gray-400 animate-pulse">
        Press any button to continue
      </p>
    </div>
  );
}
