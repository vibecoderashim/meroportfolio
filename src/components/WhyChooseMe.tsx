import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { title: "Results-Driven Approach", desc: "Every strategy is backed by data and focused on measurable outcomes.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Creative + Analytical Mind", desc: "The perfect blend of artistic creativity and strategic thinking.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { title: "On-Time Delivery", desc: "Deadlines are sacred. Your projects are delivered on schedule, every time.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Transparent Communication", desc: "Clear updates, honest feedback, and open collaboration throughout.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
];

export default function WhyChooseMe() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">Why Choose Me</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Built Different. <span className="gradient-text">Proven Results.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
                className="glass-card p-6 text-center h-full"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10">
                  <svg className="h-6 w-6 text-cyan" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
