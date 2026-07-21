import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const posts = [
  { title: "5 SEO Trends That Will Dominate 2026", tag: "SEO", date: "Apr 10, 2026", read: "5 min" },
  { title: "How to Build a Brand Identity from Scratch", tag: "Branding", date: "Mar 25, 2026", read: "7 min" },
  { title: "Meta Ads vs Google Ads: Which Is Right for You?", tag: "PPC", date: "Mar 12, 2026", read: "6 min" },
];

export default function BlogSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">Blog</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Latest <span className="gradient-text">Insights</span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
                className="glass-card group overflow-hidden h-full flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan/10 to-violet/10" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-cyan/10 px-2.5 py-0.5 font-medium text-cyan">{p.tag}</span>
                    <span>{p.date}</span>
                    <span>{p.read} read</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold leading-snug flex-1">{p.title}</h3>
                  <div className="mt-4 text-sm font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                    Read More →
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
