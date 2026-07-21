import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Download, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import TypewriterEffect from "./TypewriterEffect";
import CountUp from "./CountUp";
import profileImg from "@/assets/profile.jpg";

const specialties = [
  "WordPress Developer",
  "UI/UX Designer",
  "Digital Marketer",
  "Graphic Designer",
  "SEO Specialist",
];

const socials = [
  { label: "LinkedIn", path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z", href: "#" },
  { label: "GitHub", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", href: "#" },
  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", href: "#" },
  { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", href: "#" },
];

const stats = [
  { end: 5, suffix: "+", label: "Years" },
  { end: 150, suffix: "+", label: "Projects" },
  { end: 50, suffix: "+", label: "Clients" },
  { end: 20, suffix: "+", label: "Brands" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(sy, [-1, 1], [8, -8]);
  const rotateY = useTransform(sx, [-1, 1], [-8, 8]);
  const orbX = useTransform(sx, [-1, 1], [-30, 30]);
  const orbY = useTransform(sy, [-1, 1], [-30, 30]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
      my.set(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-16"
    >
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-muted-foreground">Available for new projects · Q3 2026</span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 md:gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {/* Headline tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 lg:row-span-2 bento-tile bento-tile-hover noise p-8 sm:p-10 lg:p-12"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Full-Stack Digital Architect
            </div>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
              Design that converts.<br />
              <span className="gradient-text">Code that scales.</span><br />
              <span className="text-muted-foreground/80">Marketing that delivers.</span>
            </h1>
            <div className="mt-6 font-heading text-lg sm:text-xl text-muted-foreground">
              I'm Ashim Shrestha —{" "}
              <span className="text-foreground"><TypewriterEffect /></span>
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              5+ years turning digital complexity into predictable, measurable growth for
              ambitious brands — from pixel-perfect WordPress builds to conversion-obsessed ad campaigns.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Hire Me <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="/resume/Ashim-Shrestha-Resume.pdf" download="Ashim-Shrestha-Resume.pdf">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
            </div>

            {/* Specialty badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {specialties.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Portrait tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="lg:col-span-4 bento-tile bento-tile-hover relative min-h-[280px] lg:min-h-0 overflow-hidden"
          >
            <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.35 }} />
            <img
              src={profileImg}
              alt="Ashim Shrestha, digital marketing architect"
              className="absolute inset-0 h-full w-full object-cover object-top mix-blend-luminosity opacity-95"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-xs uppercase tracking-widest text-primary">Based in</div>
              <div className="mt-1 font-heading text-lg font-semibold">Damak, Nepal</div>
              <div className="text-xs text-muted-foreground">Working worldwide · UTC+5:45</div>
            </div>
          </motion.div>

          {/* Stats tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 bento-tile p-6"
          >
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">By the numbers</div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUp {...s} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Socials + scroll */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {socials.map(({ label, path, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ y: -2 }}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d={path} /></svg>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground md:flex"
          >
            <MousePointer2 className="h-3.5 w-3.5" />
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
