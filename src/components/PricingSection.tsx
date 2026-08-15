import ScrollReveal from "./ScrollReveal";
import { Check, Zap } from "lucide-react";

export const pricingPackages = [
  {
    name: "Static / Starter",
    subtitle: "Ideal for small businesses & personal brands",
    price: "Contact Me",
    period: "Custom Quote",
    accent: "#2563eb",
    features: [
      "5-Page Responsive Web Development",
      "Essential On-Page SEO Setup",
      "Social Media Links & Contact Form",
      "Mobile & Tablet Optimization",
      "7-Day Delivery Timeline",
      "1 Month Free Maintenance",
    ],
    popular: false,
  },
  {
    name: "Growth / Business",
    subtitle: "Most popular for scaling businesses & e-commerce",
    price: "Contact Me",
    period: "Custom Quote",
    accent: "#7c3aed",
    features: [
      "Full Custom Website or WooCommerce Store",
      "Meta Ads & Google Ads Setup",
      "Advanced SEO & Schema Markup",
      "GA4 & Conversion Tracking",
      "Logo & Graphic Design Kit",
      "14-Day Fast Delivery",
      "3 Months Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise / Sprint",
    subtitle: "Complete digital growth & tech execution",
    price: "Contact Me",
    period: "Custom Quote",
    accent: "#f59e0b",
    features: [
      "Custom MERN / Next.js Web Application",
      "Full-Spectrum Meta & Google Ads Campaigns",
      "Complete Brand Identity & UI/UX System",
      "AI Chatbot & Automation Workflows",
      "Dedicated Project Lead & Strategy Sprints",
      "Unlimited Revisions",
      "6 Months Dedicated Partner Support",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-[#0d121f] relative border-b border-white/10 text-white overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#06b6d4]/15 to-[#7c3aed]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inbio-subtitle">PRICING PLANS</span>
          <h2 className="inbio-title">Tailored Growth Packages</h2>
          <p className="mt-4 text-base text-slate-300">
            Custom-built solutions engineered to deliver maximum return on investment for your
            business.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`inbio-card p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.3)] bg-white/10 scale-102"
                  : ""
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold tracking-widest text-white uppercase bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-full shadow-lg border border-white/20">
                  MOST POPULAR PACKAGE
                </span>
              )}

              <div>
                <h3 className="text-2xl font-extrabold text-white mb-1">{pkg.name}</h3>
                <p className="text-xs text-slate-300 mb-6 font-medium">{pkg.subtitle}</p>

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-[#38BDF8]">
                    {pkg.price}
                  </span>
                  <span className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {pkg.period}
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-200"
                    >
                      <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`inbio-btn flex items-center justify-center gap-2 w-full py-4 text-xs font-extrabold uppercase tracking-widest ${
                  pkg.popular ? "inbio-btn-active" : ""
                }`}
              >
                <Zap className="h-4 w-4" /> CONTACT ME FOR QUOTE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
