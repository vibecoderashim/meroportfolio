import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Social Media Marketing",
    desc: "Full-spectrum content planning and community building across platforms to grow your brand presence.",
    icon: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0",
  },
  {
    title: "Search Engine Optimization",
    desc: "Data-driven SEO strategies that boost organic rankings, traffic, and conversions.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Google & Meta Ads (PPC)",
    desc: "High-ROI paid advertising campaigns on Google and Meta platforms that deliver measurable results.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Graphic Design & Branding",
    desc: "Compelling visual identities, logos, and marketing materials that make your brand unforgettable.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "WordPress Development",
    desc: "Custom, high-performance WordPress websites built for speed, SEO, and conversion optimization.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Content & Email Strategy",
    desc: "Strategic content planning and email marketing campaigns that nurture leads and drive engagement.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">What I Offer</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
            End-to-end digital solutions tailored to transform your business goals into measurable growth.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "var(--shadow-glow)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card group p-6 h-full"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-sm font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More →
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
