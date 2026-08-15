import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Building2,
  Sparkles,
  Video,
  Check,
  Play,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import mrHvacLogo from "../assets/brands/mr-hvac-logo.png";

type RecentProject = {
  id: number;
  title: string;
  company: string;
  role: string;
  category: string;
  brief: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  youtubeId: string; // YouTube Video ID
  youtubeStart?: number;
  youtubeUrl?: string;
  coverImage?: string;
  isStorefrontCover?: boolean;
  isHvacCover?: boolean;
  isAwaiCover?: boolean;
};

const defaultProjects: RecentProject[] = [
  {
    id: 1,
    title: "HVAC Services Promotional Video Shoot & Commercial B2B Portal",
    company: "Mr.HVAC & MEP ENGINEERING PVT.LTD",
    role: "Director: Pranav Shrestha",
    category: "HVAC Video Shoot & MEP Engineering Systems",
    brief:
      "Produced a comprehensive promotional video shoot and video showcase highlighting complete Heating, Ventilation, and Air Conditioning (HVAC) services for Mr.HVAC & MEP ENGINEERING PVT. LTD. Showcasing commercial VRF/VRV central air conditioning, industrial ventilation ductwork, chiller plants, cleanroom systems, and MEP (Mechanical, Electrical, Plumbing) engineering solutions across Nepal.",
    highlights: [
      "Promotional video shoot & cinematic showcase highlighting commercial HVAC & MEP services",
      "Specialized in VRF/VRV central AC systems, industrial ventilation ductwork & chiller plants",
      "#1 Google search ranking for regional HVAC & MEP engineering terms in Nepal",
      "+180% growth in corporate B2B project inquiries with interactive HVAC cost portal",
    ],
    techStack: [
      "HVAC Engineering",
      "Video Production",
      "VRF/VRV Systems",
      "Motion Graphics",
      "MEP Design",
      "Technical SEO",
    ],
    metrics: [
      { label: "Google Rank", value: "#1 Spot" },
      { label: "B2B Leads", value: "+180%" },
      { label: "Portfolio Views", value: "25K+" },
    ],
    youtubeId: "hxLtFB-NBC0",
    youtubeStart: 2,
    youtubeUrl: "https://youtu.be/hxLtFB-NBC0?t=2",
    isHvacCover: true,
    coverImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Brand Promotional Video & Cinematic Marketing Showcase",
    company: "Amit Impex",
    role: "Director: Amit Agrawal",
    category: "Video Production & Motion Brand Marketing",
    brief:
      "Produced a professional promotional video for Amit Impex in Damak, showcasing the company's products, services, and brand identity through cinematic visuals, motion graphics, smooth transitions, and engaging text animations optimized for social media marketing.",
    highlights: [
      "Cinematic video production showcasing Amit Impex storefront & electronics showroom",
      "Engaging text animations highlighting core consumer electronics & appliances",
      "Optimized for social media campaigns and digital brand outreach in Damak",
      "Boosted local brand awareness & customer engagement across Eastern Nepal",
    ],
    techStack: [
      "Video Production",
      "After Effects",
      "Premiere Pro",
      "Motion Graphics",
      "Digital Marketing",
    ],
    metrics: [
      { label: "Brand Reach", value: "50K+" },
      { label: "Engagement", value: "+300%" },
      { label: "Video Quality", value: "4K HD" },
    ],
    youtubeId: "_Ho-5AEvvOc",
    youtubeStart: 3,
    youtubeUrl: "https://youtu.be/_Ho-5AEvvOc?t=3",
    isStorefrontCover: true,
    coverImage:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Electronics Promotion Video & E-Commerce Brand Showcase",
    company: "Awai Nepal",
    role: "Co-Founder: Amit Agrawal",
    category: "Electronics Video Promotion & E-Commerce",
    brief:
      "Produced a dynamic promotional video campaign highlighting high-demand electronics items, smart appliances, and gadgets for Awai Nepal, integrated with targeted performance marketing and digital store infrastructure.",
    highlights: [
      "Promotional video campaign showcasing core consumer electronics & smart items",
      "5.2x Return on Ad Spend across social media video performance campaigns",
      "+310% online sales growth driven by targeted video marketing across Nepal",
      "Custom frictionless mobile shopping experience & automated lead CRM",
    ],
    techStack: [
      "Video Production",
      "Electronics Marketing",
      "Meta Video Ads",
      "WooCommerce",
      "Conversion API",
    ],
    metrics: [
      { label: "Ad ROAS", value: "5.2x" },
      { label: "Sales Boost", value: "+310%" },
      { label: "Video Views", value: "85K+" },
    ],
    youtubeId: "2v6B8ueTTww",
    youtubeStart: 1,
    youtubeUrl: "https://www.youtube.com/shorts/2v6B8ueTTww?t=1",
    isAwaiCover: true,
  },
];

// Custom Amit Impex Storefront Cover Graphic Component
function AmitImpexStorefrontCover({ onPlay }: { onPlay: () => void }) {
  return (
    <div
      className="relative w-full h-full min-h-[260px] bg-slate-900 flex flex-col justify-between overflow-hidden group cursor-pointer"
      onClick={onPlay}
    >
      {/* Background Graphic representing store entrance */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950/80 to-slate-900/90 z-0" />

      {/* Storefront Signboard Graphic Mockup matching user uploaded image */}
      <div className="relative z-10 p-4 sm:p-6 text-center bg-slate-950/85 border-b border-amber-500/30 backdrop-blur-md shadow-lg">
        <div className="inline-block border-2 border-amber-500/50 rounded-xl px-5 py-2 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
              amit
            </span>
            <span className="text-xl sm:text-2xl font-black text-red-500 tracking-wider uppercase">
              IMPEX
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-300 uppercase mt-0.5 border-t border-slate-700/60 pt-0.5">
            A COMPLETE ELECTRONICS SHOP
          </p>
        </div>
        <p className="text-sm font-bold text-amber-200 mt-2 tracking-wide font-sans">
          अमित इम्पेक्स — Damak, Nepal
        </p>
      </div>

      {/* Middle Interactive Play Overlay */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center p-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 group-hover:scale-110 mb-3 border-2 border-white/20">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-white" />
        </div>
        <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
          Watch Official Promotional Video
        </span>
        <span className="text-[11px] text-amber-300 font-semibold mt-1">
          Produced for Amit Impex (Damak)
        </span>
      </div>

      {/* Bottom Footer Info inside Cover */}
      <div className="relative z-10 p-3 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
        <span className="font-semibold text-amber-400 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> Direct Video Showcase
        </span>
        <span className="text-[#38BDF8] font-bold">Click to Play Demo ▶</span>
      </div>
    </div>
  );
}

// Custom Mr.HVAC & MEP Cover Graphic Component
function MrHvacCover({ onPlay }: { onPlay: () => void }) {
  return (
    <div
      className="relative w-full h-full min-h-[280px] bg-slate-950 flex flex-col justify-between overflow-hidden group cursor-pointer"
      onClick={onPlay}
    >
      {/* Background Industrial HVAC Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
          alt="Industrial HVAC Systems & Ventilation Ducting"
          className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/80" />
      </div>

      {/* Top Header with Mr.HVAC Logo & Branding */}
      <div className="relative z-10 p-3.5 sm:p-4 bg-slate-950/90 border-b border-cyan-500/30 backdrop-blur-md flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center border border-slate-700">
            <img
              src={mrHvacLogo}
              alt="Mr.HVAC & MEP Engineering"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight">
              Mr.HVAC & MEP ENGINEERING PVT.LTD
            </h4>
            <p className="text-[10px] sm:text-[11px] font-bold text-[#38BDF8] mt-0.5">
              Director: Pranav Shrestha • Commercial HVAC & MEP Solutions
            </p>
          </div>
        </div>
        <span className="text-[10px] font-extrabold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2.5 py-1 rounded-full hidden sm:inline-block shrink-0">
          Video Showcase
        </span>
      </div>

      {/* Middle Interactive Play & HVAC Services Badges */}
      <div className="relative z-10 my-auto py-5 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_35px_rgba(220,38,38,0.7)] transition-all duration-300 group-hover:scale-110 mb-3 border-2 border-white/20">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-white" />
        </div>

        <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider bg-black/85 px-4 py-1.5 rounded-full border border-cyan-400/40 backdrop-blur-md shadow-lg mb-2">
          Watch HVAC Promotional Video Shoot (0:02)
        </span>

        {/* HVAC Services Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-md">
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            ❄️ VRF/VRV Central AC
          </span>
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            🌀 Industrial Ducting
          </span>
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            🏭 Chiller Plants
          </span>
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            ⚡ MEP Engineering
          </span>
        </div>
      </div>

      {/* Bottom Footer Info Bar */}
      <div className="relative z-10 p-3 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
        <span className="font-semibold text-emerald-400 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> Official Video Shoot
        </span>
        <span className="text-[#38BDF8] font-bold">Click to Play Demo ▶</span>
      </div>
    </div>
  );
}

// Custom Awai Nepal Brand Logo Cover Graphic Component
function AwaiNepalCover({ onPlay }: { onPlay: () => void }) {
  return (
    <div
      className="relative w-full h-full min-h-[280px] bg-slate-950 flex flex-col justify-between overflow-hidden group cursor-pointer"
      onClick={onPlay}
    >
      {/* Dark Ambient Background with Subtle Gradient Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      {/* Top Header & Brand Logo Signboard */}
      <div className="relative z-10 p-4 sm:p-5 text-center bg-slate-950/90 border-b border-cyan-500/30 backdrop-blur-md shadow-xl">
        <div className="inline-block border-2 border-cyan-400/50 rounded-2xl px-6 py-2.5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.3)]">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl sm:text-3xl font-black text-[#38BDF8] tracking-wider uppercase font-heading">
              AWAI
            </span>
            <span className="text-2xl sm:text-3xl font-black text-red-500 tracking-wider uppercase font-heading">
              NEPAL
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-300 uppercase mt-0.5 border-t border-slate-700/60 pt-1">
            ELECTRONICS & SMART APPLIANCES
          </p>
        </div>
        <p className="text-xs font-bold text-cyan-200 mt-2 tracking-wide">
          Co-Founder: Amit Agrawal • Electronics Video Campaign
        </p>
      </div>

      {/* Middle Interactive Play Overlay & Features */}
      <div className="relative z-10 my-auto py-5 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_35px_rgba(220,38,38,0.7)] transition-all duration-300 group-hover:scale-110 mb-3 border-2 border-white/20">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-white" />
        </div>

        <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider bg-black/85 px-4 py-1.5 rounded-full border border-cyan-400/40 backdrop-blur-md shadow-lg mb-2">
          Watch Electronics Promotion Video
        </span>

        {/* Electronics Categories Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-md">
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            📱 Consumer Electronics
          </span>
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            ⚡ Smart Home Appliances
          </span>
          <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            🛍️ E-Commerce Platform
          </span>
        </div>
      </div>

      {/* Bottom Footer Info Bar */}
      <div className="relative z-10 p-3 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
        <span className="font-semibold text-emerald-400 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> Awai Nepal Brand Showcase
        </span>
        <span className="text-[#38BDF8] font-bold">Click to Play Video ▶</span>
      </div>
    </div>
  );
}

export default function RecentProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const projectsList = defaultProjects;

  const currentProject = projectsList[currentIndex];

  const handleNext = () => {
    setIsPlayingVideo(false);
    setCurrentIndex((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setIsPlayingVideo(false);
    setCurrentIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);
  };

  const getEmbedSrc = (project: RecentProject) => {
    const startParam = project.youtubeStart ? `&start=${project.youtubeStart}` : "";
    return `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1${startParam}`;
  };

  const directYoutubeLink =
    currentProject.youtubeUrl || `https://youtu.be/${currentProject.youtubeId}`;

  return (
    <section
      id="recent-projects"
      className="py-24 sm:py-32 bg-[#090a0f] border-b border-white/10 text-white relative overflow-hidden"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#2563eb]/20 to-[#a855f7]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#10b981]/15 to-[#38BDF8]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <span className="inbio-subtitle flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            RECENT SHOWCASE
          </span>
          <h2 className="inbio-title">Recent Project Highlights</h2>
          <p className="mt-4 text-base text-slate-300">
            A walkthrough of recent client engineering projects, corporate partnerships, and video
            demos showcasing measurable business impact.
          </p>
        </ScrollReveal>

        {/* Slide Selection Tabs */}
        <ScrollReveal className="mt-10" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {projectsList.map((proj, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    setIsPlayingVideo(false);
                    setCurrentIndex(idx);
                  }}
                  className={`px-3.5 sm:px-4 py-2.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 rounded-xl flex items-center gap-2 ${
                    isActive
                      ? "inbio-btn-active shadow-[0_0_20px_rgba(56,189,248,0.4)] text-white"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:border-[#38BDF8] hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white/10 text-[10px] flex items-center justify-center font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="truncate max-w-[120px] sm:max-w-none">{proj.company}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main Slide Carousel Box */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-slate-950/80 border border-white/15 p-6 sm:p-10 shadow-2xl relative"
            >
              {/* Left Column (7 cols): Work Brief & Company Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  {/* Category & Company Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {currentProject.company}
                    </span>
                    <span className="text-xs font-extrabold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {currentProject.role}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                    {currentProject.title}
                  </h3>

                  {/* Category Label */}
                  <p className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-5">
                    Category: {currentProject.category}
                  </p>

                  {/* Work Brief Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                    {currentProject.brief}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-white mb-2">
                      KEY DELIVERABLES & IMPACT:
                    </p>
                    {currentProject.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-bold bg-white/10 border border-white/15 px-3 py-1 rounded-full text-slate-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Row + Navigation Controls */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 flex-1">
                    {currentProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <p className="text-base sm:text-lg font-black text-[#f59e0b]">{m.value}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase truncate">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Slider Prev / Next Controls */}
                  <div className="flex items-center justify-center gap-3 shrink-0">
                    <button
                      onClick={handlePrev}
                      className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#2563eb] text-white border border-white/15 hover:border-[#2563eb] transition-all duration-300 shadow-md active:scale-95"
                      aria-label="Previous project slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-extrabold text-slate-400">
                      0{currentIndex + 1} / 0{projectsList.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#2563eb] text-white border border-white/15 hover:border-[#2563eb] transition-all duration-300 shadow-md active:scale-95"
                      aria-label="Next project slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Embedded YouTube Video Project Scenes with Cover Preview */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl h-full min-h-[300px] sm:min-h-[360px] flex flex-col justify-between group">
                  {/* Top Bar inside Video Frame */}
                  <div className="p-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between gap-2 z-10">
                    <div className="flex items-center gap-2 truncate">
                      <Video className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-xs font-bold text-white truncate">
                        {currentProject.company} — Video Scene Demo
                      </span>
                    </div>
                    {isPlayingVideo && (
                      <button
                        onClick={() => setIsPlayingVideo(false)}
                        className="text-[10px] font-bold text-slate-400 hover:text-white bg-white/10 px-2 py-0.5 rounded"
                      >
                        Show Cover
                      </button>
                    )}
                  </div>

                  {/* Video Player / Cover Container */}
                  <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[250px]">
                    {isPlayingVideo ? (
                      <iframe
                        src={getEmbedSrc(currentProject)}
                        title={`${currentProject.title} Video Showcase`}
                        className="w-full h-full absolute inset-0 border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : currentProject.isStorefrontCover ? (
                      <AmitImpexStorefrontCover onPlay={() => setIsPlayingVideo(true)} />
                    ) : currentProject.isHvacCover ? (
                      <MrHvacCover onPlay={() => setIsPlayingVideo(true)} />
                    ) : currentProject.isAwaiCover ? (
                      <AwaiNepalCover onPlay={() => setIsPlayingVideo(true)} />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => setIsPlayingVideo(true)}
                      >
                        <img
                          src={currentProject.coverImage}
                          alt={currentProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 mb-2 border-2 border-white/20">
                            <Play className="w-8 h-8 fill-current ml-1" />
                          </div>
                          <p className="text-xs font-extrabold text-white uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-white/10">
                            Watch Video Scene Demo
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Footer Info inside Video Box */}
                  <div className="p-3 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 gap-2">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-400 truncate">
                      <Check className="w-3.5 h-3.5 shrink-0" /> Verified Project Scene
                    </span>
                    <a
                      href={directYoutubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38BDF8] hover:underline font-bold flex items-center gap-1 shrink-0 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10"
                    >
                      <Video className="w-3.5 h-3.5 text-red-500" />
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
