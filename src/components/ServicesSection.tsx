import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  Briefcase,
  Code2,
  TrendingUp,
  Palette,
  Search,
  Cpu,
  ArrowUpRight,
  Check,
  Zap,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Layout,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  accent: string;
  popular?: boolean;
};

const featureServices: Service[] = [
  {
    id: "seo",
    title: "SEO",
    subtitle: "Search Engine Optimization & Visibility",
    badge: "SEARCH VISIBILITY",
    desc: "Technical SEO, on-page SEO, local SEO, keyword research, content strategy and search visibility.",
    icon: Search,
    accent: "from-[#2563eb] to-[#06b6d4]",
    popular: true,
    deliverables: [
      "Technical SEO & Core Web Vitals Optimization",
      "On-Page SEO & Schema Markup",
      "Local SEO & Google Business Profile Ranking",
      "In-Depth Keyword Research & Intent Mapping",
      "Search Visibility & Content Strategy",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    subtitle: "High-Intent Traffic & Qualified Leads",
    badge: "HIGH ROI ADS",
    desc: "Search and performance advertising campaigns designed to generate qualified traffic and leads.",
    icon: TrendingUp,
    accent: "from-[#10b981] to-[#06b6d4]",
    deliverables: [
      "Google Search Ads & Shopping Campaigns",
      "Performance Max (PMax) Campaign Setup",
      "Keyword Bidding & Negative Keyword Mining",
      "Conversion Tracking & GA4 Integration",
      "Weekly ROAS Reporting & Scaling",
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    subtitle: "Facebook & Instagram Ad Campaigns",
    badge: "TARGETED CONVERSIONS",
    desc: "Facebook and Instagram advertising focused on audience targeting, lead generation and conversions.",
    icon: Zap,
    accent: "from-[#7c3aed] to-[#2563eb]",
    deliverables: [
      "Targeted Audience Mining & Custom Audiences",
      "High-Converting Video Reel & Carousel Ad Creatives",
      "Full-Funnel Lead Generation & Retargeting",
      "Server-Side Conversion API (CAPI) Integration",
      "A/B Creative Testing & Scale Management",
    ],
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    subtitle: "Fast, Responsive & SEO-Friendly WP Sites",
    badge: "POPULAR CMS",
    desc: "Fast, responsive and SEO-friendly WordPress websites designed for businesses and personal brands.",
    icon: Layout,
    accent: "from-[#2563eb] to-[#7c3aed]",
    deliverables: [
      "Bespoke WordPress & WooCommerce Development",
      "Lightweight Theme Customization & Elementor Pro",
      "SEO-Friendly URL Architecture & Clean Schema",
      "Speed Optimization (Sub-1.5s Load Time)",
      "Security Hardening & Automated Backup Systems",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Modern Custom Tech Solutions",
    badge: "CUSTOM TECH",
    desc: "Modern web solutions combining functionality, performance, user experience and digital marketing requirements.",
    icon: Code2,
    accent: "from-[#10b981] to-[#7c3aed]",
    deliverables: [
      "Custom React, Next.js & Full-Stack Development",
      "Mobile-First Responsive Layouts & UX Architecture",
      "High-Converting Landing Pages & Funnels",
      "API Integration & Dynamic Database Systems",
      "Clean Code & Lifetime Scalability",
    ],
  },
  {
    id: "analytics-opt",
    title: "Analytics & Optimization",
    subtitle: "Data-Driven Marketing & Conversion Tracking",
    badge: "DATA & ANALYTICS",
    desc: "Using data and analytics to understand traffic, user behavior, conversions and marketing performance.",
    icon: Cpu,
    accent: "from-[#f97316] to-[#f59e0b]",
    deliverables: [
      "Google Analytics 4 (GA4) & Tag Manager Setup",
      "Conversion Funnel Tracking & User Behavior Heatmaps",
      "ROAS & Cost Per Acquisition (CPA) Dashboard",
      "Conversion Rate Optimization (CRO)",
      "Data-Backed Growth Recommendations",
    ],
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    subtitle: "Digital Branding & Visual Experiences",
    badge: "BRAND IDENTITY",
    desc: "Digital branding, graphics and visual experiences that create a consistent professional identity.",
    icon: Palette,
    accent: "from-[#7c3aed] to-[#f59e0b]",
    deliverables: [
      "Primary Logo Design & Brand Guidelines",
      "Color Palettes, Typography & Visual Systems",
      "Social Media Graphics & Ad Creatives",
      "Marketing Collaterals & Packaging Design",
      "Consistent Professional Brand Identity",
    ],
  },
];

const pricingPackages = [
  {
    name: "Static / Starter",
    subtitle: "Ideal for small businesses & personal brands",
    price: "$199",
    period: "One-Time",
    accent: "#2563eb",
    features: [
      "5-Page Responsive Web Development",
      "Essential On-Page SEO Setup",
      "Social Media Links & Contact Form",
      "Mobile & Tablet Optimization",
      "7-Day Delivery Timeline",
      "1 Month Free Maintenance",
    ],
    popular: false,
  },
  {
    name: "Growth / Business",
    subtitle: "Most popular for scaling businesses & e-commerce",
    price: "$499",
    period: "One-Time",
    accent: "#7c3aed",
    features: [
      "Full Custom Website or WooCommerce Store",
      "Meta Ads & Google Ads Setup",
      "Advanced SEO & Schema Markup",
      "GA4 & Conversion Tracking",
      "Logo & Graphic Design Kit",
      "14-Day Fast Delivery",
      "3 Months Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise / Sprint",
    subtitle: "Complete digital growth & tech execution",
    price: "$899",
    period: "Project Sprints",
    accent: "#f59e0b",
    features: [
      "Custom MERN / Next.js Web Application",
      "Full-Spectrum Meta & Google Ads Campaigns",
      "Complete Brand Identity & UI/UX System",
      "AI Chatbot & Automation Workflows",
      "Dedicated Project Lead & Strategy Sprints",
      "Unlimited Revisions",
      "6 Months Dedicated Partner Support",
    ],
    popular: false,
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Update visible count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalServices = featureServices.length;
  const maxIndex = Math.max(0, totalServices - visibleCount);

  // Auto sliding timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      {/* WHAT I DO / SERVICES & EXPERTISE (AUTO SLIDE SYSTEM LIKE PRICING PLANS) */}
      <section
        id="features"
        className="py-16 sm:py-32 bg-[#080c14] relative border-b border-white/10 text-white overflow-hidden"
      >
        {/* Background Visual Ambient Glows */}
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#2563eb]/20 to-[#7c3aed]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-[#38BDF8]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <ScrollReveal className="max-w-2xl">
              <span className="inbio-subtitle">WHAT I DO</span>
              <h2 className="inbio-title">Services & Expertise</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                End-to-end digital solutions engineered with high-converting layouts, custom code,
                and strategic ad performance.
              </p>
            </ScrollReveal>

            {/* Slider Controls Header */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-start gap-2.5 sm:gap-4 shrink-0 bg-white/5 p-2 sm:p-2.5 rounded-2xl border border-white/10 backdrop-blur-md w-full sm:w-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 text-[11px] font-extrabold uppercase tracking-widest text-[#38BDF8]">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      isPaused ? "bg-amber-400" : "bg-[#10b981]"
                    } opacity-75`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      isPaused ? "bg-amber-400" : "bg-[#10b981]"
                    }`}
                  />
                </span>
                <span>{isPaused ? "PAUSED" : "AUTO SLIDING"}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                  title={isPaused ? "Play Auto Slide" : "Pause Auto Slide"}
                >
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </button>

                <div className="h-4 w-px bg-white/20 hidden sm:block" />

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-[#2563eb] text-white transition-all hover:scale-105 active:scale-95 min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Previous service"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-[#2563eb] text-white transition-all hover:scale-105 active:scale-95 min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Next service"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Auto Sliding Track Container with Touch Swipe */}
          <div
            className="relative overflow-hidden py-4 -mx-2 px-2 touch-pan-y"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${visibleCount}))`,
              }}
            >
              {featureServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex"
                  >
                    <div
                      className={`inbio-card p-5 sm:p-8 flex flex-col justify-between w-full relative transition-all duration-300 group hover:border-[#38BDF8] hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] ${
                        service.popular
                          ? "border border-[#38BDF8]/60 bg-white/10 shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                          : ""
                      }`}
                    >
                      {/* Badge Top Header */}
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        <div
                          className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white bg-white/10 border border-white/20 rounded-full">
                          {service.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 group-hover:text-[#38BDF8] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-300 font-medium mb-5 sm:mb-6 min-h-[32px] line-clamp-2">
                          {service.subtitle}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="pt-4 sm:pt-5 border-t border-white/10 mb-6 sm:mb-8">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8] block mb-3">
                            INCLUDED DELIVERABLES & FEATURES
                          </span>
                          <ul className="space-y-2.5 sm:space-y-3">
                            {service.deliverables.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs font-medium text-slate-200"
                              >
                                <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedService(service)}
                        className={`inbio-btn flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 text-xs font-extrabold uppercase tracking-widest group-hover:bg-[#38BDF8] group-hover:text-black transition-all ${
                          service.popular ? "inbio-btn-active" : ""
                        }`}
                      >
                        <Zap className="h-4 w-4" /> EXPLORE DELIVERABLES
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          {/* Full Stack Digital Marketing Approach Framework */}
          <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-white/15 shadow-2xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-4 py-1.5 rounded-full border border-[#38BDF8]/20">
                INTEGRATED GROWTH FRAMEWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
                Full Stack Digital Marketing Approach
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Instead of treating every marketing channel separately, Ashim connects the entire digital ecosystem into one growth strategy.
              </p>
            </div>

            {/* Strategy Flow Pipeline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 text-center">
              {[
                { step: "01", name: "Strategy" },
                { step: "02", name: "Branding" },
                { step: "03", name: "Website" },
                { step: "04", name: "SEO" },
                { step: "05", name: "Advertising" },
                { step: "06", name: "Analytics" },
                { step: "07", name: "Conversion" },
                { step: "08", name: "Growth" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8] hover:bg-white/10 transition-all flex flex-col items-center justify-center group"
                >
                  <span className="text-[10px] font-black text-[#38BDF8] uppercase tracking-wider mb-1">
                    STEP {item.step}
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal for Feature Services */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="w-[92vw] max-w-lg bg-[#0f172a]/95 backdrop-blur-2xl border border-white/20 text-white p-5 sm:p-8 rounded-3xl shadow-2xl max-h-[85vh] overflow-y-auto">
          {selectedService && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${selectedService.accent} text-white shadow-sm shrink-0`}
                  >
                    <selectedService.icon className="h-5 w-5" />
                  </div>
                  <span>{selectedService.title}</span>
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-slate-300 pt-2">
                  {selectedService.desc}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3">
                  KEY DELIVERABLES & OUTCOMES
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-200"
                    >
                      <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 text-xs font-bold text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors text-center order-2 sm:order-1"
                >
                  Close
                </button>
                <a
                  href="https://wa.me/9779815904119?text=Hi%20Ashim,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inbio-btn px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 order-1 sm:order-2"
                >
                  <Zap className="h-4 w-4" /> START PROJECT NOW
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
