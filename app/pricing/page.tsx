import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Pricing | Vebnora",
  description:
    "Website packages and maintenance plans from Vebnora. Clear prices and delivery times for small businesses and startups.",
};

const packages = [
  {
    name: "Starter",
    price: "₹9,999",
    delivery: "4–6 days",
    description: "For individuals and small businesses.",
    features: [
      "1 to 3 pages",
      "Mobile responsive",
      "Contact section",
      "WhatsApp chat button",
      "Basic SEO",
    ],
  },
  {
    name: "Professional",
    price: "₹21,999",
    delivery: "7–10 days",
    description: "For growing businesses.",
    features: [
      "Up to 5 pages",
      "Modern custom design",
      "Contact integration",
      "Google Maps",
      "Basic SEO",
      "Deployment support",
    ],
    popular: true,
  },
  {
    name: "Business Plus",
    price: "₹34,999",
    delivery: "12–15 days",
    description: "For businesses needing more.",
    features: [
      "Up to 7 pages",
      "Custom design",
      "Custom features with Next.js / React",
      "Advanced sections (booking, login, admin)",
      "Basic SEO",
      "Deployment support",
    ],
  },
];

const maintenance = [
  {
    name: "Basic",
    price: "₹1,999",
    unit: "/month",
    description:
      "3 small text or image changes per month, backup and website checks.",
  },
  {
    name: "Standard",
    price: "₹3,499",
    unit: "/month",
    description: "8 changes per month, priority support and a monthly report.",
  },
  {
    name: "Yearly",
    price: "₹19,999",
    unit: "/year",
    description:
      "Basic plan for a full year. Save ₹3,989 compared to paying monthly.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b18] text-white">
      <SiteHeader />

      {/* Website Packages */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Simple Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Website <span className="text-violet-400">Packages.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Clear prices and delivery times, so you know what to expect before
            we start.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-violet-400 bg-violet-500/10"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-violet-500 px-3 py-1 text-xs font-bold">
                  POPULAR
                </span>
              )}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-3 text-sm text-gray-400">{plan.description}</p>
              <p className="mt-8 text-4xl font-black">{plan.price}</p>
              <p className="mt-1 text-sm text-gray-500">Starting price</p>
              <p className="mt-4 inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1 text-sm font-semibold text-violet-200">
                ⏱ Delivery: {plan.delivery}
              </p>
              <div className="my-8 h-px bg-white/10" />
              <ul className="space-y-4 text-sm text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-10 block rounded-full bg-white px-5 py-3 text-center font-bold text-gray-900 transition hover:bg-violet-200"
              >
                Get Started ↗
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-gray-500">
          Indicative starting prices only. Domain, hosting, premium services and
          additional requirements may cost extra. Final pricing depends on
          project scope. Delivery time starts after we receive your content and
          advance payment.
        </p>
      </section>

      {/* Maintenance Plans */}
      <section
        id="maintenance"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 pb-24 pt-8"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Ongoing Support
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Maintenance <span className="text-violet-400">Plans.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Keep your website updated, secure and running smoothly after launch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {maintenance.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black">
                {plan.price}
                <span className="text-base font-medium text-gray-400">
                  {plan.unit}
                </span>
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-bold shadow-lg shadow-violet-900/30 transition hover:scale-105"
          >
            Ask a Question ↗
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
