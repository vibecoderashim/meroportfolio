import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#features" },
  { label: "TOOLS", href: "#tools" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "RECENT WORK", href: "#recent-projects" },
  { label: "RESUME", href: "#resume" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CLIENTS", href: "#clients" },
  { label: "PRICING", href: "#pricing" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    // Always enforce dark theme
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "features",
      "tools",
      "portfolio",
      "recent-projects",
      "resume",
      "testimonials",
      "clients",
      "pricing",
      "blog",
      "contact",
    ];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/95 backdrop-blur-md shadow-md border-b border-white/10"
          : "bg-transparent py-2"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#2563eb]/40 to-[#7c3aed]/40 p-0.5 border border-white/20 shadow-lg group-hover:border-[#38BDF8] transition-all">
              <img
                src="/ashim-shrestha-full-stack-digital-marketer.png"
                alt="Ashim Shrestha — Full Stack Digital Marketer & SEO Expert"
                className="h-12 w-12 rounded-full object-cover object-center border-2 border-[#2563eb] shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                ASHIM<span className="text-[#2563eb]">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#7c3aed] uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 text-xs font-semibold tracking-wider transition-colors ${
                    isActive
                      ? "text-[#2563eb] font-extrabold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#contact"
              className="inbio-btn flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase"
            >
              HIRE ME <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#2563eb] border border-white/20 shadow-sm"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Slide Down Mobile Navigation Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-50 bg-[#0d121f] border-b border-white/15 shadow-2xl xl:hidden overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5 px-5 py-5">
                {navLinks.map((l) => {
                  const isActive = active === l.href.slice(1);
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-3 text-xs font-bold tracking-wider transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? "bg-[#2563eb] text-white font-extrabold shadow-md shadow-[#2563eb]/30"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{l.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                    </a>
                  );
                })}

                <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="https://wa.me/9779815904119"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                  >
                    CHAT ON WHATSAPP (+977 9815904119)
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="inbio-btn flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold tracking-wider uppercase text-center"
                  >
                    HIRE ME NOW <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
