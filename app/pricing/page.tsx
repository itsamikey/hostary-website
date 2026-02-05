"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, PRICING_PLANS, FAQ_ITEMS } from "@/lib/constants";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            All features included. Choose based on your property count.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={cn("text-sm", !annual && "font-semibold")}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                annual ? "bg-primary" : "bg-muted"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  annual ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm", annual && "font-semibold")}>
              Annual
            </span>
            <Badge variant="success" className="ml-2">
              Save 17%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative flex flex-col",
                  plan.popular && "border-primary shadow-lg"
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl font-bold">
                          ${annual ? Math.round(plan.annualPrice! / 12) : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                        {annual && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            Billed ${plan.annualPrice}/year
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="text-4xl font-bold">Custom</span>
                    )}
                  </div>

                  <div className="mb-4 text-sm">
                    <p className="font-medium">
                      {typeof plan.properties === "number"
                        ? `${plan.properties} ${plan.properties === 1 ? "property" : "properties"}`
                        : `${plan.properties} properties`}
                    </p>
                    <p className="text-muted-foreground">
                      {typeof plan.devices === "number"
                        ? `Up to ${plan.devices} devices`
                        : `${plan.devices} devices`}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.annualBonus && annual && (
                    <p className="mt-4 text-sm font-medium text-green-600">
                      {plan.annualBonus}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={
                        plan.monthlyPrice
                          ? `${SITE_CONFIG.appUrl}/signup?plan=${plan.name.toLowerCase()}`
                          : "/contact"
                      }
                    >
                      {plan.monthlyPrice ? "Get Started" : "Contact Sales"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Purchase */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Hostary Devices</h2>
            <p className="mt-4 text-muted-foreground">
              Pre-configured streaming devices that plug into any TV. Annual plans include free devices, or purchase separately.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold">$59</span>
              <span className="text-muted-foreground"> per device</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Free shipping to the contiguous US
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href={`${SITE_CONFIG.appUrl}/billing`}>
                Purchase Devices
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform",
                      openFaq === index && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">
            Ready to transform your guest experience?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Free device with annual plans. Cancel anytime.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href={`${SITE_CONFIG.appUrl}/signup`}>Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
