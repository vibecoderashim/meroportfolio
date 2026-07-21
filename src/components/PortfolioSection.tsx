import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "WordPress", "UI/UX", "Branding", "Digital Marketing", "Ecommerce", "Business Website"];

type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Nordic Bloom — DTC Skincare",
    category: "Ecommerce",
    tech: ["WooCommerce", "Elementor Pro", "Klaviyo"],
    description: "Full ecommerce build + retention flows for a Scandinavian skincare brand entering the US market.",
    challenge: "Legacy Shopify build with 3.1% conversion and no retention system.",
    solution: "Migrated to a custom WooCommerce stack with modular PDPs and 14 lifecycle emails.",
    result: "+186% revenue in 90 days",
    gradient: "from-indigo-500/30 via-fuchsia-500/20 to-transparent",
  },
  {
    title: "Fjord Legal",
    category: "Business Website",
    tech: ["WordPress", "ACF", "GSAP"],
    description: "Editorial-grade site for a boutique corporate law firm in Oslo.",
    challenge: "Perceived as junior vs Big Four competitors.",
    solution: "Editorial typography system, custom case-study CMS, motion-driven case reels.",
    result: "3.4× qualified inbound",
    gradient: "from-primary/30 to-accent/10",
  },
  {
    title: "Kaza Coffee — Rebrand",
    category: "Branding",
    tech: ["Illustrator", "Figma", "InDesign"],
    description: "Full identity system for a specialty coffee roaster expanding to 12 cafés.",
    challenge: "Fragmented visual language across storefronts.",
    solution: "New wordmark, packaging system, and store-front playbook.",
    result: "+42% foot traffic",
    gradient: "from-amber-500/25 to-primary/10",
  },
  {
    title: "Lumen Fitness App",
    category: "UI/UX",
    tech: ["Figma", "Framer", "Lottie"],
    description: "End-to-end product design for a habit-based fitness startup.",
    challenge: "70% drop-off after day 3.",
    solution: "Reframed onboarding around micro-wins with 8 Lottie-driven moments.",
    result: "D7 retention 12% → 34%",
    gradient: "from-emerald-400/25 to-primary/15",
  },
  {
    title: "Everest Trails Meta Ads",
    category: "Digital Marketing",
    tech: ["Meta Ads", "GA4", "Looker"],
    description: "Full-funnel Meta campaign for a Himalayan trekking operator.",
    challenge: "$78 CPA on a $200 AOV — unprofitable.",
    solution: "Rebuilt creative library, ASC+ testing, offline conversions API.",
    result: "$21 CPA · 6.2× ROAS",
    gradient: "from-cyan-400/25 to-violet-500/20",
  },
  {
    title: "Sable & Oak Interiors",
    category: "WordPress",
    tech: ["WordPress", "Elementor", "Yoast"],
    description: "Luxury interior design studio site with project galleries and lead capture.",
    challenge: "No CMS, dependent on agency for every update.",
    solution: "Composable Elementor system with client-editable galleries.",
    result: "12× monthly leads",
    gradient: "from-rose-400/20 to-primary/15",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-bold leading-[1.05]">
              Case studies that ended in <span className="gradient-text">real numbers</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            A curated slice of 150+ engagements across ecommerce, SaaS, hospitality, legal, and lifestyle brands.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "border-primary/60 bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border-border bg-surface/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Featured project */}
        <AnimatePresence mode="popLayout">
          {featured && (
            <motion.article
              key={featured.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              className="bento-tile bento-tile-hover group mt-10 grid overflow-hidden lg:grid-cols-2"
            >
              {/* Visual */}
              <div className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br ${featured.gradient} lg:min-h-[440px]`}>
                <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.4 }} />
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="font-heading text-5xl sm:text-7xl font-bold text-foreground/15 tracking-tight">
                    {featured.category}
                  </span>
                </motion.div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Featured case study
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                  <span>{featured.category}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-muted-foreground">2025</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold leading-tight">{featured.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{featured.description}</p>

                <div className="grid gap-3 rounded-xl border border-border bg-background/30 p-4 sm:grid-cols-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Challenge</div>
                    <div className="mt-1 text-xs leading-relaxed">{featured.challenge}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Solution</div>
                    <div className="mt-1 text-xs leading-relaxed">{featured.solution}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {featured.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Result</div>
                    <div className="font-heading text-lg font-semibold gradient-text">{featured.result}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-4 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">
                      Case study <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition-transform hover:scale-105">
                      Visit <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        {/* Rest — uniform grid */}
        <motion.div layout className="mt-5 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover="hover"
                className="bento-tile bento-tile-hover group flex flex-col overflow-hidden"
              >
                {/* Visual */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.4 }} />
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-foreground/15">
                      {p.category}
                    </span>
                  </motion.div>
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                    <span>{p.category}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full border border-border bg-surface/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Result</div>
                      <div className="font-heading text-sm font-semibold gradient-text">{p.result}</div>
                    </div>
                    <button className="inline-flex h-7 shrink-0 items-center gap-1 rounded-full border border-border px-2.5 text-[10px] font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">
                      Case <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
