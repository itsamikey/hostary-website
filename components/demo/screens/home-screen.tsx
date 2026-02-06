import { useState, useEffect } from "react";
import { ChevronRight, Sun } from "lucide-react";
import { DEMO_DATA, getCheckoutDate, getTimeGreeting } from "@/lib/demo-data";
import { STREAMING_APPS } from "@/components/demo/streaming-logos";

interface HomeScreenProps {
  guestName: string;
}

interface SlideData {
  headline: string;
  subtext: string;
  cta?: string;
}

function buildDemoSlides(guestName: string): SlideData[] {
  const firstName = guestName.split(" ")[0];
  const greeting = getTimeGreeting();
  const checkout = getCheckoutDate();
  const checkoutStr = `Checkout: ${checkout.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at ${checkout.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;

  const slides: SlideData[] = [
    { headline: `${greeting}, ${firstName}`, subtext: checkoutStr },
    {
      headline: DEMO_DATA.restaurants[0].name,
      subtext: `${DEMO_DATA.restaurants.length} restaurants nearby`,
      cta: "Explore Dining",
    },
    {
      headline: DEMO_DATA.attractions[0].name,
      subtext: `${DEMO_DATA.attractions.length} things to do nearby`,
      cta: "Explore Activities",
    },
  ];

  return slides;
}

export function HomeScreen({ guestName }: HomeScreenProps) {
  const slides = buildDemoSlides(guestName);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const checkout = getCheckoutDate();

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      {/* Hero area with background */}
      <div className="relative flex-[3]">
        {/* Gradient fallback */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0369a1 0%, #155e75 40%, #0c4a6e 100%)" }}
        />
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/backgrounds/ocean.jpg)" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 15%, transparent 25%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.25) 55%, rgba(15,23,42,0.6) 70%, rgba(15,23,42,0.85) 82%, rgb(15,23,42) 95%)",
          }}
        />
        {/* Top vignettes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 50% 35% at 15% 0%, rgba(0,0,0,0.5) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 95% 0%, rgba(0,0,0,0.5) 0%, transparent 70%)
            `,
          }}
        />

        {/* Nav bar */}
        <nav
          className="absolute top-0 left-0 right-0 z-10 flex items-start justify-between px-3 py-2 md:px-6 md:py-3"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          <div className="flex items-center gap-3 md:gap-6">
            {["Home", "Explore", "Your Stay"].map((tab, i) => (
              <span
                key={tab}
                className={`text-[10px] md:text-base font-medium pb-0.5 ${
                  i === 0
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="text-right">
            <div className="text-[8px] md:text-xs text-gray-300">
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              <span className="mx-1 md:mx-2 text-gray-500">|</span>
              <span className="text-white font-medium">
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1 md:gap-2 mt-0.5">
              <Sun className="w-4 h-4 md:w-8 md:h-8 text-yellow-400" />
              <span className="text-lg md:text-2xl font-semibold text-white">
                {DEMO_DATA.weather.temp}°F
              </span>
              <span className="text-xs md:text-base text-gray-300">
                {DEMO_DATA.weather.description}
              </span>
            </div>
          </div>
        </nav>

        {/* Hero slider text */}
        <div className="absolute inset-0 flex flex-col justify-end px-3 pb-2 md:px-6 md:pb-3">
          <div className="relative h-20 md:h-28">
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  visibility: index === activeIndex ? "visible" : "hidden",
                  transition:
                    index === activeIndex
                      ? "opacity 800ms ease-in-out, visibility 0s 0s"
                      : "opacity 800ms ease-in-out, visibility 0s 800ms",
                }}
                className={`absolute inset-0 ${index !== activeIndex ? "pointer-events-none" : ""}`}
              >
                <h2 className="text-lg md:text-3xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-0.5 md:mb-1">
                  {slide.headline}
                </h2>
                <p className="text-xs md:text-lg text-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-1 md:mb-2">
                  {slide.subtext}
                </p>
                {slide.cta && (
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm">
                    {slide.cta}
                    <ChevronRight className="w-2.5 h-2.5 md:w-4 md:h-4" />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex gap-1 md:gap-1.5 mt-1 md:mt-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-4 md:w-6 h-1.5 md:h-2 bg-white"
                    : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dark functional area */}
      <div className="shrink-0 px-3 pb-2 pt-1 md:px-6 md:pb-3 bg-[rgb(15,23,42)]">
        {/* Streaming apps */}
        <div className="mb-1.5 md:mb-2">
          <h2 className="text-[10px] md:text-sm font-semibold text-gray-300 mb-1 md:mb-1.5">Popular</h2>
          <div className="flex gap-1.5 md:gap-3">
            {STREAMING_APPS.map((app) => (
              <div
                key={app.name}
                className={`w-12 h-7 md:w-28 md:h-16 shrink-0 ${app.bg} rounded-lg md:rounded-xl flex items-center justify-center`}
              >
                {app.content}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: property info + wifi */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] md:text-sm font-medium text-white">{DEMO_DATA.property.name}</p>
            <p className="text-[8px] md:text-xs text-gray-300">{DEMO_DATA.property.address}</p>
            <p className="text-[8px] md:text-xs text-gray-300">{DEMO_DATA.property.phone}</p>
            <p className="text-[8px] md:text-xs text-gray-400 mt-0.5">
              Checkout:{" "}
              {checkout.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at{" "}
              {checkout.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
            </p>
          </div>
          <div className="flex items-center gap-1.5 md:gap-3">
            <div className="text-right">
              <p className="text-[8px] md:text-xs text-gray-400">CONNECT WiFi</p>
              <p className="text-[10px] md:text-sm font-medium text-white">{DEMO_DATA.wifi.ssid}</p>
              <p className="text-[8px] md:text-xs text-gray-300 font-mono">{DEMO_DATA.wifi.password}</p>
            </div>
            <div className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-md md:rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 md:w-10 md:h-10 grid grid-cols-3 grid-rows-3 gap-[1px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${[0, 1, 2, 3, 5, 6, 8].includes(i) ? "bg-black" : "bg-white"} rounded-[1px]`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
