import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#home" className="group flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-heading text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
              A
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-heading text-sm font-bold">Ashim Shrestha</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Digital Architect</span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <a href="/resume/Ashim-Shrestha-Resume.pdf" download="Ashim-Shrestha-Resume.pdf">
                <Download className="h-3.5 w-3.5" /> Resume
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-nav overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex gap-2">
                <Button variant="heroOutline" size="sm" className="flex-1" asChild>
                  <a href="/resume/Ashim-Shrestha-Resume.pdf" download="Ashim-Shrestha-Resume.pdf" onClick={() => setMobileOpen(false)}>
                    <Download className="h-3.5 w-3.5" /> Resume
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild className="flex-1">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Hire Me</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
