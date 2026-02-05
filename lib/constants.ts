export const SITE_CONFIG = {
  name: "Hostary",
  description: "Guest TV Experience for Vacation Rentals",
  url: "https://hostary.app",
  appUrl: "https://app.hostary.app",
};

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for single property owners",
    monthlyPrice: 14,
    annualPrice: 140,
    properties: 1,
    devices: 3,
    features: [
      "1 property",
      "Up to 3 devices",
      "All TV dashboard features",
      "Personalized welcome screens",
      "WiFi QR codes",
      "Local recommendations",
      "Email support",
    ],
    annualBonus: "1 free device with annual plan",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing property managers",
    monthlyPrice: 35,
    annualPrice: 350,
    properties: 3,
    devices: 10,
    features: [
      "Up to 3 properties",
      "Up to 10 devices",
      "All TV dashboard features",
      "Custom branding options",
      "Analytics dashboard",
      "Priority support",
    ],
    annualBonus: "2 free devices with annual plan",
    popular: true,
  },
  {
    name: "Operator",
    description: "For established property businesses",
    monthlyPrice: 65,
    annualPrice: 650,
    properties: 5,
    devices: 20,
    features: [
      "Up to 5 properties",
      "Up to 20 devices",
      "All TV dashboard features",
      "Advanced analytics",
      "API access",
      "Priority support",
    ],
    annualBonus: "3 free devices with annual plan",
    popular: false,
  },
  {
    name: "Scale",
    description: "For enterprise property managers",
    monthlyPrice: null,
    annualPrice: null,
    properties: "10+",
    devices: "Unlimited",
    features: [
      "10+ properties",
      "Unlimited devices",
      "White-label options",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Volume discounts",
    ],
    annualBonus: "Custom device pricing",
    popular: false,
  },
];

export const FEATURES = [
  {
    id: "welcome",
    title: "Personalized Welcome Screens",
    description: "Greet every guest by name with custom welcome messages that appear on arrival.",
    icon: "Hand",
    details: [
      "Guest name pulled from reservations",
      "Custom welcome messages per property",
      "Time-based greetings (Good morning/evening)",
      "Shows once per reservation, then transitions to home",
    ],
  },
  {
    id: "wifi",
    title: "WiFi QR Code",
    description: "Guests scan to connect instantly. No typing passwords, works with any smartphone.",
    icon: "Wifi",
    details: [
      "Auto-generated QR codes",
      "Instant connection on scan",
      "Works with iOS and Android",
      "No password typing needed",
    ],
  },
  {
    id: "info",
    title: "Property Information",
    description: "House rules, emergency contacts, access codes, and more - all in one place.",
    icon: "FileText",
    details: [
      "House rules and checkout instructions",
      "Emergency contacts",
      "Access codes and WiFi details",
      "Appliance guides and local tips",
      "Custom categories",
    ],
  },
  {
    id: "recommendations",
    title: "Local Recommendations",
    description: "Curated dining and activity recommendations to help guests explore the area.",
    icon: "MapPin",
    details: [
      "Nearby restaurants with ratings",
      "Things to do and attractions",
      "Host-recommended highlights",
      "QR codes to Google Maps",
      "Distance-based categorization",
    ],
  },
  {
    id: "streaming",
    title: "Streaming Apps",
    description: "One-click access to Netflix, YouTube, and all popular streaming services.",
    icon: "Tv",
    details: [
      "Pre-configured popular apps",
      "Netflix, YouTube, Prime Video, and more",
      "Custom app support",
      "Easy navigation for guests",
    ],
  },
  {
    id: "weather",
    title: "Weather Forecast",
    description: "Live weather display with 3-day forecast based on property location.",
    icon: "CloudSun",
    details: [
      "Current conditions",
      "3-day forecast",
      "Location-aware (uses property address)",
      "Beautiful visual display",
    ],
  },
  {
    id: "management",
    title: "Multi-Property Management",
    description: "Manage all your properties from a single, intuitive dashboard.",
    icon: "LayoutDashboard",
    details: [
      "Centralized property management",
      "Device status monitoring",
      "Reservation tracking",
      "Activity feed",
      "Real-time analytics",
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: "What's included in the free trial?",
    answer: "The 14-day free trial includes full access to all features in your selected plan. No credit card required to start.",
  },
  {
    question: "Can I use my own Android TV?",
    answer: "Yes! Hostary works with any Android TV device running Android 9 or later. We also sell pre-configured devices if you prefer a plug-and-play solution.",
  },
  {
    question: "How do I pair a device?",
    answer: "Download our TV app, enter the 6-digit pairing code shown on your TV into the admin dashboard, and the device will be linked to your property instantly.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your service will continue until the end of your billing period.",
  },
  {
    question: "What happens when I reach my device limit?",
    answer: "You can purchase additional devices for $59 each, or upgrade to a higher plan with more included devices.",
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes! Contact our sales team for custom pricing if you manage 10+ properties. We offer volume discounts and white-label options.",
  },
];
