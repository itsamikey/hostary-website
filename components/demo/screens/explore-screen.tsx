import { useState } from "react";
import { DEMO_DATA } from "@/lib/demo-data";

type ExploreTab = "dining" | "activities";

export function ExploreScreen() {
  const [activeTab, setActiveTab] = useState<ExploreTab>("dining");

  return (
    <div
      className="absolute inset-0 flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/backgrounds/ocean.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col flex-1 overflow-hidden px-3 pt-10 pb-2 md:px-6 md:pt-16 md:pb-4">
        {/* Nav bar */}
        <nav
          className="absolute top-0 left-0 right-0 z-10 flex items-start px-3 py-2 md:px-6 md:py-3 gap-3 md:gap-6"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          {["Home", "Explore", "Your Stay"].map((tab, i) => (
            <span
              key={tab}
              className={`text-[10px] md:text-base font-medium pb-0.5 ${
                i === 1
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </span>
          ))}
        </nav>

        {/* Sub-tabs */}
        <div className="flex gap-3 md:gap-5 mb-2 md:mb-4">
          {([
            { key: "dining" as const, label: "Nearby Dining" },
            { key: "activities" as const, label: "Things to Do" },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-xs md:text-lg font-semibold pb-1 transition-colors ${
                activeTab === tab.key
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto space-y-1.5 md:space-y-2.5">
          {activeTab === "dining" &&
            DEMO_DATA.restaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="bg-white/10 rounded-lg md:rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3"
              >
                {/* QR placeholder */}
                <div className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-md md:rounded-lg shrink-0 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-10 md:h-10 grid grid-cols-3 grid-rows-3 gap-[1px]">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${[0, 2, 3, 4, 6, 8].includes(i) ? "bg-black" : "bg-white"} rounded-[1px]`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <p className="text-xs md:text-lg font-medium text-white truncate">{restaurant.name}</p>
                    {restaurant.featured && (
                      <span className="text-[8px] md:text-xs bg-amber-500/20 text-amber-300 px-1 md:px-2 py-0.5 rounded-full shrink-0">
                        Host Recommended
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 text-[8px] md:text-xs text-gray-300">
                    <span>{restaurant.distance} away</span>
                    <span className="text-gray-400">{restaurant.priceRange}</span>
                    <span className="text-gray-400">{restaurant.cuisineType}</span>
                  </div>
                  <p className="text-[8px] md:text-xs text-gray-400 mt-0.5 line-clamp-1 hidden md:block">
                    {restaurant.description}
                  </p>
                </div>
                <div className="text-yellow-400 text-[10px] md:text-base shrink-0">
                  ★ {restaurant.rating.toFixed(1)}
                </div>
              </div>
            ))}

          {activeTab === "activities" &&
            DEMO_DATA.attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-white/10 rounded-lg md:rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3"
              >
                <div className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-md md:rounded-lg shrink-0 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-10 md:h-10 grid grid-cols-3 grid-rows-3 gap-[1px]">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${[1, 3, 4, 5, 7].includes(i) ? "bg-black" : "bg-white"} rounded-[1px]`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <p className="text-xs md:text-lg font-medium text-white truncate">{attraction.name}</p>
                    {attraction.featured && (
                      <span className="text-[8px] md:text-xs bg-amber-500/20 text-amber-300 px-1 md:px-2 py-0.5 rounded-full shrink-0">
                        Host Recommended
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 text-[8px] md:text-xs text-gray-300">
                    <span>{attraction.distance} away</span>
                    <span className="text-gray-400 capitalize">{attraction.category}</span>
                  </div>
                  <p className="text-[8px] md:text-xs text-gray-400 mt-0.5 line-clamp-1 hidden md:block">
                    {attraction.description}
                  </p>
                </div>
                <div className="text-yellow-400 text-[10px] md:text-base shrink-0">
                  ★ {attraction.rating.toFixed(1)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
