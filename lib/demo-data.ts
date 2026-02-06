export interface DemoRestaurant {
  name: string;
  cuisineType: string;
  rating: number;
  distance: string;
  priceRange: string;
  description: string;
  featured?: boolean;
}

export interface DemoAttraction {
  name: string;
  category: string;
  rating: number;
  distance: string;
  description: string;
  featured?: boolean;
}

export interface DemoInfoCard {
  id: string;
  category: string;
  title: string;
  content: {
    type: "text" | "key_value" | "list" | "contact";
    text?: string;
    items?: Array<{ key: string; value: string }> | string[];
    contacts?: Array<{ label: string; phone: string }>;
  };
}

export interface DemoData {
  property: {
    name: string;
    address: string;
    phone: string;
  };
  weather: {
    temp: number;
    description: string;
    icon: string;
  };
  wifi: {
    ssid: string;
    password: string;
  };
  welcomeMessage: string;
  streamingApps: Array<{ name: string; initial: string; color: string }>;
  restaurants: DemoRestaurant[];
  attractions: DemoAttraction[];
  infoCards: DemoInfoCard[];
}

export function getCheckoutDate(): Date {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  d.setHours(11, 0, 0, 0);
  return d;
}

export function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export const DEMO_DATA: DemoData = {
  property: {
    name: "Sunset Beach House",
    address: "2847 Pacific Coast Hwy, Malibu, CA 90265",
    phone: "(310) 555-0192",
  },
  weather: {
    temp: 75,
    description: "Sunny",
    icon: "sun",
  },
  wifi: {
    ssid: "SunsetBeach-Guest",
    password: "welcome2malibu",
  },
  welcomeMessage: "Make yourself at home! Fresh towels are in the hall closet.",
  streamingApps: [
    { name: "Netflix", initial: "N", color: "bg-red-600" },
    { name: "YouTube", initial: "Y", color: "bg-red-500" },
    { name: "Disney+", initial: "D", color: "bg-blue-700" },
    { name: "Hulu", initial: "H", color: "bg-green-500" },
    { name: "Prime Video", initial: "P", color: "bg-blue-500" },
  ],
  restaurants: [
    {
      name: "Nobu Malibu",
      cuisineType: "Japanese",
      rating: 4.7,
      distance: "0.8 mi",
      priceRange: "$$$$",
      description: "World-renowned Japanese cuisine with stunning ocean views",
      featured: true,
    },
    {
      name: "Malibu Seafood",
      cuisineType: "Seafood",
      rating: 4.5,
      distance: "1.2 mi",
      priceRange: "$$",
      description: "Fresh catch of the day with casual beachside dining",
    },
    {
      name: "Broad Street Oyster Co.",
      cuisineType: "Seafood & Bar",
      rating: 4.6,
      distance: "0.5 mi",
      priceRange: "$$$",
      description: "East coast-style oyster bar with craft cocktails",
    },
    {
      name: "Taverna Tony",
      cuisineType: "Mediterranean",
      rating: 4.4,
      distance: "1.5 mi",
      priceRange: "$$$",
      description: "Authentic Greek and Mediterranean dishes in a cozy setting",
    },
  ],
  attractions: [
    {
      name: "Zuma Beach",
      category: "Beach",
      rating: 4.8,
      distance: "1.0 mi",
      description: "Pristine sandy beach perfect for swimming and surfing",
      featured: true,
    },
    {
      name: "Malibu Pier",
      category: "Landmark",
      rating: 4.5,
      distance: "0.3 mi",
      description: "Historic pier with fishing, dining, and ocean views",
    },
    {
      name: "Solstice Canyon Trail",
      category: "Hiking",
      rating: 4.6,
      distance: "3.2 mi",
      description: "Scenic trail through lush canyon to a waterfall",
    },
    {
      name: "Getty Villa",
      category: "Museum",
      rating: 4.7,
      distance: "8.1 mi",
      description: "World-class art museum with Roman-inspired architecture",
    },
  ],
  infoCards: [
    {
      id: "rules",
      category: "house_rules",
      title: "House Rules",
      content: {
        type: "list",
        items: [
          "No smoking indoors or on balcony",
          "Quiet hours 10pm - 8am",
          "Max 8 guests",
          "No parties or events",
        ],
      },
    },
    {
      id: "access",
      category: "access_codes",
      title: "WiFi & Access",
      content: {
        type: "key_value",
        items: [
          { key: "WiFi Network", value: "SunsetBeach-Guest" },
          { key: "WiFi Password", value: "welcome2malibu" },
          { key: "Door Code", value: "2847#" },
          { key: "Garage Code", value: "5519" },
        ],
      },
    },
    {
      id: "checkout",
      category: "custom",
      title: "Checkout Info",
      content: {
        type: "text",
        text: "Checkout is at 11:00 AM. Please start the dishwasher, take out trash to the bins on the side of the house, and leave keys on the kitchen counter.",
      },
    },
    {
      id: "emergency",
      category: "emergency",
      title: "Emergency Contacts",
      content: {
        type: "contact",
        contacts: [
          { label: "Host (Mike)", phone: "(310) 555-0192" },
          { label: "Property Manager", phone: "(310) 555-0234" },
          { label: "Emergency", phone: "911" },
        ],
      },
    },
  ],
};
