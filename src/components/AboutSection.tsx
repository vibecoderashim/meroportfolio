import { motion } from "framer-motion";
import { Award, Target, Users, Zap, Heart, TrendingUp, MapPin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { end: 150, suffix: "+", label: "Projects" },
  { end: 50, suffix: "+", label: "Clients" },
  { end: 7, suffix: "+", label: "Years Experience" },
  { end: 98, suffix: "%", label: "Retention" },
];

const strengths = [
  { Icon: Zap, title: "Fast execution", desc: "Ship in weeks, not quarters." },
  { Icon: Target, title: "Results-obsessed", desc: "Every pixel is measured." },
  { Icon: Heart, title: "Partner mindset", desc: "Your growth is my scoreboard." },
  { Icon: TrendingUp, title: "Data-driven", desc: "GA4, Meta, Search Console." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">About</p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-bold leading-[1.05]">
            A rare stack of <span className="gradient-text">design, code & marketing</span> in one
            operator.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            I'm Ashim — a full-stack digital architect from Damak, Nepal. With{" "}
            <span className="font-extrabold text-[#38BDF8] underline decoration-[#38BDF8]/40 underline-offset-4">
              over 7+ years of experience
            </span>
            , I've helped founders and marketing teams ship websites, brands, and campaigns that
            actually move business metrics.
          </p>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="mt-14 grid gap-4 md:gap-5 lg:grid-cols-12 lg:auto-rows-[minmax(180px,auto)]">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-5 lg:row-span-2" direction="left">
            <div className="bento-tile bento-tile-hover relative h-full min-h-[420px] overflow-hidden">
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#2563eb]/90 to-[#7c3aed]/90 backdrop-blur-md border border-[#38BDF8] text-white font-black text-[11px] uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                ★ 7+ YEARS EXPERIENCE
              </div>
              <img
                src={profileImg}
                alt="Ashim Shrestha portrait"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for hire
                </div>
                <h3 className="mt-2 font-heading text-2xl font-bold">Ashim Shrestha</h3>
                <p className="text-sm text-muted-foreground">Digital Marketing Architect</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> Damak, Nepal
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-3 w-3" /> hello@ashim.dev
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission tile */}
          <ScrollReveal className="lg:col-span-7" delay={0.1}>
            <div className="bento-tile bento-tile-hover h-full p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                <Award className="h-3.5 w-3.5" /> My mission
              </div>
              <p className="mt-4 font-heading text-2xl sm:text-3xl font-semibold leading-snug">
                Turn digital complexity into{" "}
                <span className="gradient-text">predictable, measurable growth</span> — without the
                agency bloat.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                I combine design taste, engineering rigor, and marketing fluency so founders can
                hire one operator instead of assembling a five-vendor stack. Fewer meetings. Faster
                shipping. Real numbers.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats tile */}
          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <div className="bento-tile h-full p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <CountUp key={s.label} {...s} />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5 text-primary" />
                Trusted by founders across Nepal, India, UAE, Australia & the US.
              </div>
            </div>
          </ScrollReveal>

          {/* Strengths */}
          <ScrollReveal className="lg:col-span-12" delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" suppressHydrationWarning>
              {strengths.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  suppressHydrationWarning
                  className="bento-tile p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-heading text-lg font-semibold">{title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
