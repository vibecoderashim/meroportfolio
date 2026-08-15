import { motion } from "framer-motion";
import TypewriterEffect from "@/components/TypewriterEffect";
import { LinkedinIcon, GithubIcon, FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import {
  Code,
  Layout,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  Search,
  Zap,
  CheckCircle2,
} from "lucide-react";

const socials = [
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { label: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
];

const skills = [
  { label: "React / MERN Stack", icon: Code },
  { label: "WordPress & WooCommerce", icon: Layout },
  { label: "Meta & Google PPC Ads", icon: TrendingUp },
  { label: "Brand Identity & UI/UX", icon: Sparkles },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      suppressHydrationWarning
      className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center bg-[#090d16] text-white transition-colors duration-300 border-b border-white/10"
    >
      {/* Background Visual Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#2563eb]/25 to-[#7c3aed]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#06b6d4]/20 via-[#f59e0b]/15 to-[#7c3aed]/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill & Experience Highlight */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Available for Freelance & Growth Sprints
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563eb]/30 via-[#7c3aed]/30 to-[#06b6d4]/30 border border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.4)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#38BDF8] animate-pulse" />
                <span className="text-xs font-black text-white uppercase tracking-wider">
                  7+ YEARS OF EXPERIENCE
                </span>
              </div>
            </motion.div>

            <span className="inbio-subtitle">FULL STACK DIGITAL MARKETING & GROWTH</span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ashim Shrestha —{" "}
              <span className="gradient-text-blue-purple-cyan inline-block">
                Full Stack Digital Marketer
              </span>
            </h1>

            <div className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white min-h-[52px] sm:h-12 flex items-center">
              <span className="text-slate-400 font-medium">Specializing in&nbsp;</span>
              <TypewriterEffect
                words={[
                  "Full Stack Digital Marketing.",
                  "SEO & Organic Growth.",
                  "Google Ads & Meta Ads.",
                  "WordPress & Web Development.",
                  "Analytics & Data Optimization.",
                  "Digital Branding & Strategy.",
                ]}
              />
            </div>

            <p className="mt-6 text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              I help businesses grow online through SEO, paid advertising, websites, analytics, branding, and full-stack digital marketing strategies.
            </p>

            {/* Professional Identity Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {[
                "Full Stack Digital Marketer",
                "SEO Specialist",
                "Google Ads",
                "Meta Ads",
                "WordPress Developer",
                "Web Developer",
                "Digital Strategist",
              ].map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 shadow-sm hover:border-[#38BDF8] transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Supporting Heading & Copy Banner */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-purple-950/40 border border-white/15 shadow-xl">
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                Digital Marketing, Technology & Growth — All Under One Roof
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                Ashim Shrestha is a Full Stack Digital Marketer specializing in SEO, Google Ads, Meta Ads, WordPress development, web development, analytics, social media marketing, branding, and digital strategy.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold text-[#38BDF8]">
                By combining marketing and technology, Ashim builds digital systems designed not only to attract visitors but also to turn them into customers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center">
              <a
                href="#contact"
                className="inbio-btn px-8 py-3.5 sm:py-4 text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>LET'S BUILD YOUR GROWTH SYSTEM</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 text-white font-extrabold text-xs uppercase tracking-widest border border-white/20 shadow-lg hover:border-[#2563eb] hover:bg-white/20 transition-all text-center w-full sm:w-auto"
              >
                EXPLORE CORE SERVICES
              </a>
            </div>

            {/* Bottom Grid: Social Channels + Core Tech Stack */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 pt-8 border-t border-white/10">
              {/* Find With Me */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-slate-400 block mb-4">
                  FIND WITH ME
                </span>
                <div className="flex gap-3">
                  {socials.map(({ label, icon: Icon, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.05 }}
                      aria-label={label}
                      className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/15 shadow-md transition-all hover:bg-[#2563eb] hover:border-[#2563eb]"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Best Skill On */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-slate-400 block mb-4">
                  CORE SPECIALIZATION
                </span>
                <div className="flex gap-3">
                  {skills.map(({ label, icon: Icon }) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -4, scale: 1.05 }}
                      title={label}
                      className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-[#38BDF8] border border-white/15 shadow-md transition-all hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed]"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Digital Marketing Interactive Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glowing Background Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#2563eb]/30 via-[#7c3aed]/30 to-[#06b6d4]/30 blur-2xl opacity-80 animate-pulse" />

              {/* Central Main Portrait Card */}
              <div className="relative p-5 sm:p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 shadow-inner group">
                  <img
                    src="/ashim-shrestha-digital-marketing-nepal.jpg"
                    alt="Ashim Shrestha — Full Stack Digital Marketer & SEO Expert in Nepal"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-center filter group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-lg">
                    <p className="text-[11px] font-extrabold text-[#38BDF8] uppercase tracking-wider">
                      Ashim Shrestha
                    </p>
                    <p className="text-xs font-bold text-white mt-0.5">
                      Technology Entrepreneur & Growth Architect
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Analytics Card 1: Meta Ads ROAS */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="animate-float-slow absolute -top-4 left-0 sm:-left-8 rounded-2xl bg-[#0f172a]/95 backdrop-blur-md p-3 sm:p-4 shadow-2xl border border-white/20 z-20 flex items-center gap-2.5 sm:gap-3 max-w-[85%] sm:max-w-none"
              >
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#10b981] to-[#06b6d4] text-white shadow-md shrink-0">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-white">
                      Meta Ads ROAS
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#10b981] bg-[#10b981]/20 px-1.5 py-0.5 rounded-md border border-[#10b981]/30">
                      4.8x
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-medium text-slate-300">
                    Proven Ad Spend Conversion
                  </p>
                  {/* Mini animated bar representation */}
                  <div className="flex items-end gap-1 mt-1 h-2.5 sm:h-3">
                    <div className="w-1.5 bg-[#10b981]/40 rounded-sm h-1.5 animate-pulse" />
                    <div
                      className="w-1.5 bg-[#10b981]/60 rounded-sm h-2.5 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-1.5 bg-[#10b981] rounded-sm h-3 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <div
                      className="w-1.5 bg-[#10b981]/80 rounded-sm h-2 animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Analytics Card 2: SEO Score 99/100 */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="animate-float-delayed absolute -bottom-4 right-0 sm:-right-8 rounded-2xl bg-[#0f172a]/95 backdrop-blur-md p-3 sm:p-4 shadow-2xl border border-white/20 z-20 flex items-center gap-2.5 sm:gap-3 max-w-[85%] sm:max-w-none"
              >
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white shadow-md shrink-0">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-white">
                      SEO Authority
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#38BDF8] bg-[#2563eb]/20 px-1.5 py-0.5 rounded-md border border-[#2563eb]/30">
                      99/100
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-medium text-slate-300">
                    Google #1 Regional Search
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 3: 50+ Projects Completed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/2 -right-5 transform -translate-y-1/2 rounded-2xl bg-[#0f172a]/95 backdrop-blur-md p-3 shadow-2xl border border-white/20 z-20 hidden sm:flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f59e0b] text-white font-bold text-xs shadow-sm">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">50+ Projects</p>
                  <p className="text-[10px] font-bold text-[#10b981] flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Delivered
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
