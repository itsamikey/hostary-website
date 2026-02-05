import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { Heart, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Hostary - built by vacation rental hosts to transform the guest experience through simple, thoughtful technology.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Built for Hosts, By Hosts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We understand the vacation rental business because we&apos;ve lived it.
            Hostary was born from real frustrations and a desire to do better for our guests.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to help vacation rental hosts deliver exceptional guest
            experiences through simple, thoughtful technology. We believe every guest
            deserves to feel welcomed, informed, and at home from the moment they arrive.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Hostary started from a simple observation: guests were arriving at our
              vacation rentals and immediately struggling. They couldn&apos;t find the WiFi
              password. They didn&apos;t know the house rules. They had no idea where to eat
              or what to do in the area.
            </p>
            <p>
              We tried printed guides, but they got lost or ignored. We tried messaging
              apps, but guests didn&apos;t want another app cluttering their phones. The TV
              was always on, but it was just showing generic content that added nothing
              to their experience.
            </p>
            <p>
              That&apos;s when we realized: the TV could be so much more. It could greet
              guests by name, connect them to WiFi with a single scan, show them the best
              local restaurants, and give them everything they need to enjoy their stay.
            </p>
            <p>
              We built Hostary to solve our own problem, and now we&apos;re helping hosts
              around the world transform their guest experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Values</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Guest-First Design</h3>
                <p className="mt-2 text-muted-foreground">
                  Every feature we build starts with the question: will this make
                  the guest experience better?
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Simplicity Over Complexity</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe the best technology gets out of the way. Simple to set
                  up, simple to use, powerful results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Hospitality at Scale</h3>
                <p className="mt-2 text-muted-foreground">
                  Whether you have one property or one hundred, every guest should
                  feel the same personal touch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Have Questions?</h2>
          <p className="mt-4 text-primary-foreground/80">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
