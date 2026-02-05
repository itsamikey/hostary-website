import { SITE_CONFIG, PRICING_PLANS } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/hostary-logo-black.png`,
    description: SITE_CONFIG.description,
    sameAs: [],
  };
}

export function getSoftwareApplicationSchema() {
  const plans = PRICING_PLANS.filter((p) => p.monthlyPrice);
  const lowestPrice = Math.min(...plans.map((p) => p.monthlyPrice!));
  const highestPrice = Math.max(...plans.map((p) => p.monthlyPrice!));

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android TV",
    description:
      "Guest TV experience platform for vacation rentals. Personalized welcome screens, WiFi QR codes, local recommendations, and streaming apps.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: lowestPrice,
      highPrice: highestPrice,
      priceCurrency: "USD",
      offerCount: plans.length,
    },
  };
}

export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
