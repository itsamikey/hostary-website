"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Dancing_Script, Poppins } from "next/font/google";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CTA } from "@/lib/constants";
import { TVFrame } from "@/components/demo/tv-frame";
import { SplashScreen } from "@/components/demo/screens/splash-screen";
import { HomeScreen } from "@/components/demo/screens/home-screen";
import { ExploreScreen } from "@/components/demo/screens/explore-screen";
import { StayScreen } from "@/components/demo/screens/stay-screen";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

type Screen = "splash" | "home" | "explore" | "stay";

const SCREEN_ORDER: Screen[] = ["splash", "home", "explore", "stay"];
const SCREEN_LABELS: Record<Screen, string> = {
  splash: "Welcome Screen",
  home: "Home",
  explore: "Explore Nearby",
  stay: "Your Stay",
};

const AUTO_ADVANCE_MS: Record<Screen, number> = {
  splash: 4000,
  home: 7000,
  explore: 7000,
  stay: 7000,
};

export function DemoPageClient() {
  const [guestName, setGuestName] = useState("");
  const [launched, setLaunched] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [autoAdvance, setAutoAdvance] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentIndex = SCREEN_ORDER.indexOf(currentScreen);

  const goToScreen = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  const goNext = useCallback(() => {
    setCurrentScreen((prev) => {
      const idx = SCREEN_ORDER.indexOf(prev);
      // After last screen, loop back to home (skip splash)
      if (idx >= SCREEN_ORDER.length - 1) return "home";
      return SCREEN_ORDER[idx + 1];
    });
  }, []);

  const goPrev = useCallback(() => {
    setCurrentScreen((prev) => {
      const idx = SCREEN_ORDER.indexOf(prev);
      if (idx <= 1) return "home"; // Don't go back to splash
      return SCREEN_ORDER[idx - 1];
    });
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!launched || !autoAdvance) return;

    timerRef.current = setTimeout(() => {
      goNext();
    }, AUTO_ADVANCE_MS[currentScreen]);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [launched, autoAdvance, currentScreen, goNext]);

  const handleManualNav = useCallback(
    (direction: "prev" | "next") => {
      setAutoAdvance(false);
      if (direction === "prev") goPrev();
      else goNext();
    },
    [goPrev, goNext]
  );

  const handleLaunch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!guestName.trim()) return;
      setLaunched(true);
      setCurrentScreen("splash");
      setAutoAdvance(true);
    },
    [guestName]
  );

  // Entry form
  if (!launched) {
    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Hero section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
          <div className="relative container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              See What Your Guests{" "}
              <span className="text-emerald-600">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              Enter a guest name and watch the TV display come to life with
              personalized content, local recommendations, and property details.
            </p>

            <form
              onSubmit={handleLaunch}
              className="max-w-md mx-auto flex flex-col gap-4"
            >
              <div className="text-left">
                <Label htmlFor="guestName" className="text-base">
                  Guest Name
                </Label>
                <Input
                  id="guestName"
                  type="text"
                  placeholder="e.g., Sarah Johnson"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="mt-1.5 h-12 text-lg"
                  autoFocus
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={!guestName.trim()}
                className="h-12 text-lg bg-emerald-600 hover:bg-emerald-700"
              >
                <Play className="w-5 h-5 mr-2" />
                Launch Demo
              </Button>
            </form>

            <p className="text-sm text-gray-400 mt-6">
              No account needed. Takes 30 seconds.
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Demo display
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Screen label */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-sm text-gray-500 mb-1">Interactive Demo</p>
          <h2 className="text-2xl md:text-3xl font-bold">{SCREEN_LABELS[currentScreen]}</h2>
        </div>

        {/* TV Frame with screens — scrollable on narrow screens */}
        <div className="overflow-x-auto pb-2">
        <TVFrame>
          {/* All screens rendered, only active one visible */}
          <div
            className={poppins.className}
            style={{ position: "absolute", inset: 0 }}
          >
            {SCREEN_ORDER.map((screen) => (
              <div
                key={screen}
                style={{
                  opacity: currentScreen === screen ? 1 : 0,
                  visibility: currentScreen === screen ? "visible" : "hidden",
                  transition:
                    currentScreen === screen
                      ? "opacity 500ms ease-in-out, visibility 0s 0s"
                      : "opacity 500ms ease-in-out, visibility 0s 500ms",
                  position: "absolute",
                  inset: 0,
                }}
              >
                {screen === "splash" && (
                  <SplashScreen
                    guestName={guestName}
                    dancingClass={dancingScript.className}
                    poppinsClass={poppins.className}
                  />
                )}
                {screen === "home" && <HomeScreen guestName={guestName} />}
                {screen === "explore" && <ExploreScreen />}
                {screen === "stay" && <StayScreen />}
              </div>
            ))}
          </div>
        </TVFrame>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
          <button
            onClick={() => handleManualNav("prev")}
            disabled={currentIndex <= 1}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dot indicators (skip splash) */}
          <div className="flex gap-2">
            {SCREEN_ORDER.slice(1).map((screen, i) => (
              <button
                key={screen}
                onClick={() => {
                  setAutoAdvance(false);
                  goToScreen(screen);
                }}
                className={`rounded-full transition-all duration-300 ${
                  currentScreen === screen || (currentScreen === "splash" && i === 0)
                    ? "w-8 h-3 bg-emerald-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleManualNav("next")}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Auto-advance indicator */}
        {autoAdvance && (
          <p className="text-center text-sm text-gray-400 mt-3">
            Auto-advancing...{" "}
            <button
              onClick={() => setAutoAdvance(false)}
              className="text-emerald-600 hover:underline"
            >
              Pause
            </button>
          </p>
        )}

        {/* Restart demo */}
        {!autoAdvance && (
          <p className="text-center text-sm text-gray-400 mt-3">
            <button
              onClick={() => {
                setCurrentScreen("splash");
                setAutoAdvance(true);
              }}
              className="text-emerald-600 hover:underline"
            >
              Restart demo
            </button>
          </p>
        )}

        {/* CTA section */}
        <div className="text-center mt-12 md:mt-16 pb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to create this for your property?
          </h3>
          <p className="text-gray-600 mb-6">
            Get started in minutes. No technical setup required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href={CTA.href}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                {CTA.label}
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-8">
            All trademarks and logos belong to their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
}
