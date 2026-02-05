import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/constants";
import { getOrganizationSchema, getSoftwareApplicationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.description}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Transform your vacation rental TV into a personalized guest hub. Welcome screens, WiFi QR codes, local recommendations, and streaming apps. 14-day free trial.",
  keywords: ["vacation rental TV app", "Airbnb guest experience", "vacation rental welcome screen", "guest communication app", "property management TV"],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.description}`,
    description: "Transform your vacation rental TV into a personalized guest hub. Welcome screens, WiFi QR codes, local recommendations, and streaming apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.description}`,
    description: "Transform your vacation rental TV into a personalized guest hub. Welcome screens, WiFi QR codes, local recommendations, and streaming apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSoftwareApplicationSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
