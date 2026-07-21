import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Discovery & Research", desc: "Deep-dive into your business, competitors, and market to uncover opportunities.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { num: "02", title: "Strategy & Planning", desc: "Craft a data-driven roadmap aligned with your goals and budget.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { num: "03", title: "Design & Development", desc: "Build stunning creatives and high-performance websites that convert.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { num: "04", title: "Launch & Optimize", desc: "Go live, track KPIs, and continuously optimize for maximum ROI.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
];

export default function ProcessSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">My Process</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            How I <span className="gradient-text">Work</span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
                className="glass-card relative p-6 text-center h-full"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10">
                  <svg className="h-6 w-6 text-cyan" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <span className="mt-3 block font-heading text-3xl font-bold text-muted-foreground/20">{s.num}</span>
                <h3 className="mt-1 font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
