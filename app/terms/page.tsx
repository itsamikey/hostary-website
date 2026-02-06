import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Hostary guest TV experience platform. Read our service agreement covering subscriptions, devices, and acceptable use.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective Date: February 6, 2026 | Last Updated: February 6, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground">
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            Hostary platform, including our website at hostary.app, our web
            application at app.hostary.app, and the Hostary TV device software
            (collectively, the &quot;Service&quot;). By creating an account or
            using the Service, you agree to these Terms. If you do not agree,
            please do not use the Service.
          </p>
          <p className="mt-4 text-muted-foreground">
            In these Terms, &quot;Device&quot; refers to the physical Hostary
            streaming device. &quot;Property&quot; refers to a vacation rental
            managed through the Service. &quot;Guest&quot; refers to a visitor
            staying at a Property.
          </p>

          {/* 1. Description of Service */}
          <h2 className="text-2xl font-bold mt-12">
            1. Description of Service
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hostary provides a guest TV experience platform for vacation rental
            hosts. The Service includes:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              A web dashboard for managing properties, guest information, and TV
              content.
            </li>
            <li>
              A TV-based guest interface displayed on Hostary Devices, featuring
              personalized welcome screens, WiFi QR codes, property information,
              local recommendations, and streaming app management.
            </li>
            <li>
              Automatic reset of streaming app sessions between guest stays.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            The Service requires a Hostary Device connected to a TV at your
            Property and an active internet connection.
          </p>

          {/* 2. Account Registration and Security */}
          <h2 className="text-2xl font-bold mt-12">
            2. Account Registration and Security
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              You must provide accurate and complete information when creating an
              account.
            </li>
            <li>
              You must be at least 18 years old or the age of majority in your
              jurisdiction.
            </li>
            <li>
              You are responsible for maintaining the security of your account
              credentials and must notify Hostary immediately of any
              unauthorized access.
            </li>
            <li>Accounts are non-transferable.</li>
            <li>
              Hostary reserves the right to suspend or terminate accounts that
              violate these Terms.
            </li>
          </ul>

          {/* 3. Subscriptions and Billing */}
          <h2 className="text-2xl font-bold mt-12">
            3. Subscriptions and Billing
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              Subscription plans and pricing are described on our{" "}
              <Link href="/pricing" className="text-primary underline">
                Pricing page
              </Link>
              .
            </li>
            <li>
              Subscriptions automatically renew unless cancelled before the
              renewal date.
            </li>
            <li>
              Payments are processed through Stripe. By subscribing, you also
              agree to{" "}
              <a
                href="https://stripe.com/legal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Stripe&apos;s terms of service
              </a>
              .
            </li>
            <li>
              Price changes will be communicated at least 30 days in advance.
            </li>
            <li>
              Upon cancellation, your Service continues until the end of the
              current billing period. No refunds are provided for partial billing
              periods.
            </li>
            <li>
              Annual plans may include free Devices as described on the Pricing
              page. If an annual plan is cancelled before the end of its term,
              Hostary reserves the right to charge the retail price for any
              included Devices.
            </li>
          </ul>

          {/* 4. Acceptable Use */}
          <h2 className="text-2xl font-bold mt-12">4. Acceptable Use</h2>
          <p className="mt-4 text-muted-foreground">
            You agree to use the Service only for lawful purposes related to
            managing vacation rental properties. You must not:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>Upload malicious, offensive, or illegal content.</li>
            <li>
              Attempt to reverse-engineer, decompile, or tamper with the Service
              or Devices.
            </li>
            <li>
              Use the Service to collect personal information beyond what is
              necessary for the guest experience.
            </li>
            <li>
              Resell or redistribute the Service without written authorization.
            </li>
            <li>Interfere with or disrupt Service infrastructure.</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Property information you display through the Service (house rules,
            recommendations, etc.) must be accurate and lawful. You are
            responsible for all content you upload.
          </p>

          {/* 5. Guest Data and Privacy Obligations */}
          <h2 className="text-2xl font-bold mt-12">
            5. Guest Data and Privacy Obligations
          </h2>
          <p className="mt-4 text-muted-foreground">
            As a host, you act as the data controller for guest information you
            enter into the Service. You are responsible for ensuring you have the
            appropriate legal basis to collect guest names and share them with
            Hostary for display on TV devices (for example, through your rental
            agreement).
          </p>
          <p className="mt-4 text-muted-foreground">
            Hostary acts as a data processor for guest information, processing it
            solely to provide the Service. Guest streaming app sessions are
            automatically cleared upon checkout. You must not attempt to access
            or retain guest streaming credentials.
          </p>
          <p className="mt-4 text-muted-foreground">
            For full details on data handling, see our{" "}
            <Link href="/privacy" className="text-primary underline">
              Privacy Policy
            </Link>
            .
          </p>

          {/* 6. Intellectual Property */}
          <h2 className="text-2xl font-bold mt-12">
            6. Intellectual Property
          </h2>
          <p className="mt-4 text-muted-foreground">
            The Hostary name, logo, software, and Service design are the
            property of Hostary. You may not use Hostary trademarks without
            written permission.
          </p>
          <p className="mt-4 text-muted-foreground">
            You retain ownership of the content you upload (property
            descriptions, photos, recommendations). By uploading content, you
            grant Hostary a license to display it through the Service on TV
            devices and the web dashboard.
          </p>
          <p className="mt-4 text-muted-foreground">
            Feedback and suggestions you provide to Hostary may be used to
            improve the Service without obligation.
          </p>

          {/* 7. Hostary Devices */}
          <h2 className="text-2xl font-bold mt-12">7. Hostary Devices</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              Devices are sold by Hostary and shipped to the contiguous United
              States. International shipping is available by arrangement.
            </li>
            <li>
              Devices must be used exclusively with the Hostary Service.
              Tampering, jailbreaking, or modifying device software voids the
              warranty.
            </li>
            <li>
              Hostary may push firmware updates to Devices. These updates are
              mandatory for continued Service operation.
            </li>
            <li>
              If your subscription is cancelled or terminated, Devices will
              cease to function as Hostary guest dashboards but remain your
              physical property.
            </li>
            <li>
              Devices may be returned within 30 days of purchase for a full
              refund if undamaged.
            </li>
          </ul>

          {/* 8. Service Availability and Modifications */}
          <h2 className="text-2xl font-bold mt-12">
            8. Service Availability and Modifications
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hostary aims for high availability but does not guarantee
            uninterrupted service. Planned maintenance will be communicated in
            advance when possible. We may modify, update, or discontinue
            features with reasonable notice.
          </p>
          <p className="mt-4 text-muted-foreground">
            In the event of Service discontinuation, Hostary will provide at
            least 90 days notice and pro-rated refunds for prepaid
            subscriptions.
          </p>

          {/* 9. Limitation of Liability */}
          <h2 className="text-2xl font-bold mt-12">
            9. Limitation of Liability
          </h2>
          <p className="mt-4 text-muted-foreground">
            The Service is provided &quot;as is&quot; and &quot;as
            available.&quot; Hostary is not liable for:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>Lost revenue due to Service downtime.</li>
            <li>Guest complaints arising from content you display.</li>
            <li>Inaccurate property information entered by you.</li>
            <li>
              Third-party service outages (Firebase, Stripe, internet
              providers).
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            To the fullest extent permitted by applicable law, Hostary&apos;s
            maximum liability is limited to the fees you paid in the 12 months
            preceding the claim.
          </p>
          <p className="mt-4 text-muted-foreground">
            For EU/UK users: nothing in these Terms limits liability for death
            or personal injury caused by negligence, fraud, or any liability
            that cannot be excluded by law.
          </p>

          {/* 10. Indemnification */}
          <h2 className="text-2xl font-bold mt-12">10. Indemnification</h2>
          <p className="mt-4 text-muted-foreground">
            You agree to indemnify and hold Hostary harmless from any claims
            arising from your use of the Service, content you upload, violation
            of these Terms, or your relationship with guests. Hostary will
            notify you of any such claim and cooperate in the defense.
          </p>

          {/* 11. Termination */}
          <h2 className="text-2xl font-bold mt-12">11. Termination</h2>
          <p className="mt-4 text-muted-foreground">
            You may cancel your subscription at any time through your account
            dashboard or by contacting support.
          </p>
          <p className="mt-4 text-muted-foreground">
            Hostary may terminate or suspend your account for violation of these
            Terms, non-payment, prolonged inactivity (12+ months), or legal
            requirements.
          </p>
          <p className="mt-4 text-muted-foreground">
            Upon termination, your access to the Service ceases, your data is
            retained for 30 days (during which you can request an export), and
            Devices stop displaying the Hostary guest dashboard. The following
            sections survive termination: Limitation of Liability,
            Indemnification, Intellectual Property, and Governing Law.
          </p>

          {/* 12. Dispute Resolution */}
          <h2 className="text-2xl font-bold mt-12">12. Dispute Resolution</h2>
          <p className="mt-4 text-muted-foreground">
            If a dispute arises, we encourage you to contact us first at{" "}
            <a
              href="mailto:support@hostary.app"
              className="text-primary underline"
            >
              support@hostary.app
            </a>
            . We will attempt to resolve the matter through good faith
            negotiation within 30 days before any formal proceedings.
          </p>
          <p className="mt-4 text-muted-foreground">
            For US users, these Terms are governed by the laws of the State of
            California, with exclusive jurisdiction in Fresno County, California.
          </p>
          <p className="mt-4 text-muted-foreground">
            For EU/UK users, you retain the right to bring proceedings in your
            local courts as required by consumer protection law. Nothing in
            these Terms affects your statutory rights.
          </p>

          {/* 13. Changes to These Terms */}
          <h2 className="text-2xl font-bold mt-12">
            13. Changes to These Terms
          </h2>
          <p className="mt-4 text-muted-foreground">
            We may update these Terms from time to time. Material changes will
            be communicated at least 30 days before taking effect via email or a
            prominent notice on our website. Continued use of the Service after
            changes take effect constitutes your acceptance. If you disagree
            with changes, you must stop using the Service and cancel your
            subscription.
          </p>

          {/* 14. General Provisions */}
          <h2 className="text-2xl font-bold mt-12">14. General Provisions</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Severability:</strong> if any provision of these Terms is
              found unenforceable, the remaining provisions continue in full
              effect.
            </li>
            <li>
              <strong>Entire agreement:</strong> these Terms, together with the{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Hostary.
            </li>
            <li>
              <strong>Waiver:</strong> failure to enforce a provision does not
              constitute a waiver of that provision.
            </li>
            <li>
              <strong>Assignment:</strong> Hostary may assign these Terms in
              connection with a business transfer. You may not assign your
              rights without our consent.
            </li>
            <li>
              <strong>Force majeure:</strong> neither party is liable for
              failure to perform due to circumstances beyond reasonable control.
            </li>
          </ul>

          {/* 15. Contact Us */}
          <h2 className="text-2xl font-bold mt-12">15. Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              Email:{" "}
              <a
                href="mailto:support@hostary.app"
                className="text-primary underline"
              >
                support@hostary.app
              </a>
            </li>
            <li>Address: Hostary, Clovis, CA</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Have Questions?</h2>
          <p className="mt-4 text-primary-foreground/80">
            We&apos;d love to help clarify anything about our terms. Reach out
            to our team.
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
