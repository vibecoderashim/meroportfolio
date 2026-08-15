import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Heart, ExternalLink, Check, Sparkles, Layers, ShieldCheck, HeartHandshake, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import helloSunflowerImg from "@/assets/brands/hello-sunflower-oil.jpg";
import purbanchalUniversityImg from "@/assets/brands/purbanchal-university.png";
import acBazarImg from "@/assets/brands/ac-bazar.png";
import mrHvacImg from "@/assets/brands/mr-hvac-logo.png";

type BrandOverview = {
  parentCompany: string;
  tagline: string;
  sloganFocus: string;
  category: string;
  targetAudience: string;
  positioning: string;
};

type ContentPillar = {
  title: string;
  tag: string;
  desc: string;
};

type StrategyAnalysisSection = {
  title: string;
  items: { label: string; text: string }[];
};

type Project = {
  id: string;
  title: string;
  category: string;
  badge: string;
  likes: number;
  image: string;
  isWhiteBg?: boolean;
  client: string;
  tech: string[];
  description: string;
  results: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  brandOverview?: BrandOverview;
  contentPillars?: ContentPillar[];
  strategyAnalysis?: StrategyAnalysisSection[];
};

const projects: Project[] = [
  {
    id: "hello-sunflower-oil",
    title: "Case Study: Hello Sunflower Oil (Nepal) — Content Strategy & Social Planning",
    category: "Content Strategy",
    badge: "CONTENT STRATEGY & PLANNING",
    likes: 980,
    image: helloSunflowerImg,
    client: "Pashupati Khadya Tel Udyog Pvt. Ltd.",
    tech: [
      "Content Strategy Planning",
      "Social Content Pillars",
      "FMCG Marketing",
      "Brand Positioning",
      "Influencer Outreach",
      "Consumer Education",
    ],
    description:
      "A strategic multi-layered content creation framework and market positioning plan for Hello Sunflower Oil in Nepal, building long-term consumer trust, top-of-mind brand recall, and market differentiation.",
    results: "4 Core Content Pillars scaling brand authority & cultural recall across Nepal",
    metrics: [
      { label: "Content Pillars", value: "4 Frameworks" },
      { label: "Market Segment", value: "FMCG Oil" },
      { label: "Core Promise", value: "Health & Pride" },
      { label: "Target Audience", value: "Nepali Families" },
    ],
    deliverables: [
      "Brand Overview & Market Positioning Architecture",
      "4-Tier Social Content Pillar Framework (Health, Culture, Influencer, Utility)",
      "Cultural & Seasonal Integration (Monsoon foods: Sel Roti, Kothe Momo, Aloo Chop)",
      "Food Blogger & Creator Collaborations (Suzu Bhatta, Maya Yogi)",
      "Health & Wellness Educational Positioning ('Skincare starts in the kitchen')",
      "Recipe Showcases & Myth-Busting Content Funnel",
    ],
    brandOverview: {
      parentCompany: "Pashupati Khadya Tel Udyog Pvt. Ltd.",
      tagline: '"Say Hello to good health!" / "Pure goodness, naturally."',
      sloganFocus: '"मेरो देश मेरो उत्पादन" ("My Country, My Product" — emphasizing national pride & local manufacturing)',
      category: "FMCG / Edible Oils (Refined Sunflower Oil)",
      targetAudience:
        "Urban and semi-urban Nepali households, primary family decision-makers (homemakers/parents), food enthusiasts, and health-conscious consumers.",
      positioning:
        "In a competitive edible oil market dominated by both domestic brands and imported products, Hello Sunflower Oil positions itself as a light, healthy, premium, yet culturally grounded home-cooking companion.",
    },
    contentPillars: [
      {
        title: "Health & Wellness Messaging",
        tag: "PILLAR 01",
        desc: "Focuses on Vitamin E, Omega-6 fatty acids, heart-smart benefits, and digestibility ('light on the stomach'). Extends benefits to skincare ('Skincare starts in the kitchen') and myth-busting edible fat misconceptions.",
      },
      {
        title: "Cultural & Seasonal Integration",
        tag: "PILLAR 02",
        desc: "Aligns closely with Nepali weather, festivals, and food culture. Highlights localized monsoon comfort foods (Sel Roti, Kothe Momo, Aloo Chop) and emotional appeals ('Mother's love in every meal').",
      },
      {
        title: "Influencer & Creator Integration",
        tag: "PILLAR 03",
        desc: "Cross-posts and reshares content from popular local food bloggers (Suzu Bhatta, Maya Yogi). Features authentic recipes (Mutton Curry, Chicken Gravy, Pani Puri) showcasing oil performance & taste.",
      },
      {
        title: "Educational & Utility Tips",
        tag: "PILLAR 04",
        desc: "Actionable kitchen utility advice, oil storage tips, smoke point guidance, and smart portion awareness for everyday healthy home cooking.",
      },
    ],
    strategyAnalysis: [
      {
        title: "A. Health & Wellness Positioning",
        items: [
          {
            label: "Key Messaging",
            text: "Focuses on Vitamin E, Omega-6 fatty acids, heart-smart benefits, and digestibility ('light on the stomach').",
          },
          {
            label: "Unique Angles",
            text: "Extends health benefits beyond basic nutrition to wellness themes—such as skincare benefits ('Skincare starts in the kitchen' via Omega-6) and heart health for long-term family care.",
          },
          {
            label: "Educational / Myth-Busting",
            text: "Addresses misconceptions about edible fats (e.g., debunking the myth that sunflower oil is 'just fat' by highlighting unsaturated fat composition).",
          },
        ],
      },
      {
        title: "B. Cultural & Seasonal Relevance",
        items: [
          {
            label: "Local Context",
            text: "Aligns closely with Nepali weather, festivals, and food culture. During the monsoon season, posts highlight localized comfort foods like Sel Roti, Kothe Momo, and Aloo Chop.",
          },
          {
            label: "Emotional Appeals",
            text: "Leverages themes of motherly affection, family gatherings, and home-cooked warmth ('Mother's love in every meal').",
          },
        ],
      },
      {
        title: "C. Influencer & Creator Integration",
        items: [
          {
            label: "Food Blogger Partnerships",
            text: "Cross-posts and reshares content from popular local food bloggers and content creators (e.g., Suzu Bhatta, Maya Yogi).",
          },
          {
            label: "Recipe Showcases",
            text: "Features everyday dishes (Mutton Curry, Chicken Gravy, Pani Puri) to demonstrate oil performance, clarity, and taste enhancement in authentic Nepali recipes.",
          },
        ],
      },
    ],
  },
  {
    id: "puset-purbanchal-university",
    title: "Case Study: PUSET / PUSAT Biratnagar — Content Creation, Strategy & Graphic Design",
    category: "Content Strategy",
    badge: "CONTENT STRATEGY & GRAPHICS DESIGN",
    likes: 950,
    image: purbanchalUniversityImg,
    client: "PUSAT / PUSET (Purbanchal University School of Engineering, Science & Technology)",
    tech: [
      "Content Strategy Planning",
      "Graphic Design Systems",
      "Digital Marketing Analysis",
      "Enrollment Campaign Design",
      "Notice Board Model",
      "Tech Bootcamp Promotion",
    ],
    description:
      "A comprehensive digital marketing framework, content strategy planning, and graphic design execution for PUSET / PUSAT Biratnagar, combining administrative notice dissemination, hands-on skill bootcamp campaigns, and student enrollment growth.",
    results: "4-Tier Digital Content Pillars & Elevated Institutional Brand Trust in Eastern Nepal",
    metrics: [
      { label: "Content Pillars", value: "4 Pillars" },
      { label: "Location", value: "Biratnagar" },
      { label: "Core Programs", value: "BIT, BCA, AI" },
      { label: "Target Audience", value: "+2 & Tech Students" },
    ],
    deliverables: [
      "Institutional Brand Overview & Digital Strategy Architecture",
      "4-Tier Content Pillar Framework (Notices, Bootcamps, Admissions, Routines)",
      "Graphic Design Assets for Hands-on Technical Bootcamps (Full Stack, Python AI, Cybersecurity)",
      "Notice Board Communication Model for High Daily Active Engagement",
      "Academic Enrollment & Course Diversity Promotion (B.Tech in Artificial Intelligence)",
      "Visual Collateral Design for Campus Workshops & Certification Ceremonies",
    ],
    brandOverview: {
      parentCompany: "Purbanchal University (PU) — Constituent School",
      tagline: '"Affordable, Government-Standard Technical Education"',
      sloganFocus: '"PUSAT / PUSET — Central Campus Biratnagar (Eastern Nepal)"',
      category: "Higher Education / Science, Engineering & Technology",
      targetAudience:
        "High school graduates (+2 Science/Management with Math), diploma holders, tech professionals, and parents seeking accredited university-level technical education in Eastern Nepal.",
      positioning:
        "As a constituent school of a major public university in Nepal, PUSAT/PUSET holds significant credibility for providing affordable, government-standard technical education, practical industry bootcamps, and cutting-edge tech degrees like B.Tech in AI.",
    },
    contentPillars: [
      {
        title: "Operational Notices & Announcements",
        tag: "PILLAR 01",
        desc: "High-frequency administrative communication using official scanned PDF notices, exam schedules, re-totaling results, and university directives to drive daily active checks.",
      },
      {
        title: "Hands-on Skill-Building Bootcamps",
        tag: "PILLAR 02",
        desc: "Specialized short-term technical bootcamps featuring 15-Day Full Stack Web Dev, 10-Day Python for AI (Data, Language & Vision), and Cybersecurity & Ethical Hacking workshops with lab session visuals.",
      },
      {
        title: "Admission & Enrollment Campaigns",
        tag: "PILLAR 03",
        desc: "High-converting graphic design banners and digital campaigns promoting undergraduate (BIT, BCA-IT, B.Tech in AI) and postgraduate (MCA, PGDCA-IT) admissions.",
      },
      {
        title: "Academic & Examination Routine Posts",
        tag: "PILLAR 04",
        desc: "Structured, clean graphic templates for routine exam announcements, result publishing, and university academic calendars for seamless student navigation.",
      },
    ],
    strategyAnalysis: [
      {
        title: "A. Notice Board Model (Administrative Communication)",
        items: [
          {
            label: "High Frequency",
            text: "A large volume of content consists of official scanned PDF notices, exam schedules, re-totaling results, and university directives.",
          },
          {
            label: "Utility Focus",
            text: "Functions primarily as a digital notice board for current students and faculty, ensuring high daily active checks by enrolled students.",
          },
        ],
      },
      {
        title: "B. Skill-Building & Industry Readiness Focus",
        items: [
          {
            label: "Hands-on Training Highlights",
            text: "The page actively showcases specialized short-term technical bootcamps: 15-Day Full Stack Web Development, 10-Day Python for AI (Data, Language & Vision), and Cybersecurity & Ethical Hacking Workshops.",
          },
          {
            label: "Practical Visuals & Graphics",
            text: "Shares photographs and custom graphics of students attending lab sessions, workshops, and receiving certificates, reinforcing a practical-learning environment.",
          },
        ],
      },
      {
        title: "C. Academic Diversity & New Tech Courses",
        items: [
          {
            label: "Cutting-Edge Curriculum",
            text: "Promotes modern skill tracks like B.Tech in Artificial Intelligence alongside traditional IT/Computer degrees (BIT, BCA-IT, MCA).",
          },
        ],
      },
    ],
  },
  {
    id: "air-conditioner-bazar",
    title: "Case Study: Air Conditioner Bazar (Nepal) — D2C E-Com & Digital Marketing Strategy",
    category: "Digital Marketing",
    badge: "DIGITAL MARKETING & D2C E-COM",
    likes: 960,
    image: acBazarImg,
    isWhiteBg: true,
    client: "Air Conditioner Bazar (AC Bazar Nepal)",
    tech: [
      "D2C E-Commerce Strategy",
      "Digital Marketing",
      "Content Strategy Planning",
      "Graphic Design & Collaterals",
      "WhatsApp CRM Lead Funnel",
      "Multi-Brand Aggregation",
    ],
    description:
      "A specialized niche aggregator and direct-to-consumer (D2C) hybrid e-commerce marketing strategy for Air Conditioner Bazar in Nepal, driving multi-brand sales across Daikin, Midea, TOSOT, Mitsubishi, and CHIGO.",
    results: "4 Core Hybrid E-Com Pillars & Instant WhatsApp Consultation Conversion Architecture",
    metrics: [
      { label: "HVAC Brands", value: "6 Authorized" },
      { label: "E-Com Model", value: "Niche D2C" },
      { label: "CRM Integration", value: "Instant WhatsApp" },
      { label: "B2B Ecosystem", value: "Mr. HVAC Partner" },
    ],
    deliverables: [
      "Category-Focused E-Commerce Marketplace & Funnel Architecture",
      "Multi-Brand Aggregation Framework (Daikin, Midea, TOSOT, Mitsubishi, MBO, CHIGO)",
      "Instant WhatsApp CRM Lead Routing & Consultation Trigger Integration",
      "Transparent Pricing, MRP Discounting & Warranty Assurance Strategy",
      "End-to-End MEP & Interior Design Ecosystem Packaging with Mr. HVAC & DE'BAHA",
      "Graphic Design Assets for Residential Split & Commercial Cassette AC Campaigns",
    ],
    brandOverview: {
      parentCompany: "Air Conditioner Bazar (AC Bazar Nepal)",
      tagline: '"www.airconditionerbazar.com — Nepal\'s Niche HVAC Marketplace"',
      sloganFocus: '"Authorized Distributor for Global HVAC Brands (Daikin, Midea, TOSOT, Mitsubishi, CHIGO)"',
      category: "Category-Focused E-Commerce / Residential & Commercial HVAC",
      targetAudience:
        "Homeowners, corporate office managers, architects, hospitality venues, and B2B contractors seeking verified HVAC units with technical installation support in Nepal.",
      positioning:
        "Air Conditioner Bazar operates on a specialized Niche Aggregator & Direct-to-Consumer (D2C) model designed specifically to solve common pain points in the Nepali HVAC market (e.g., price opacity, unauthorized gray market imports, and post-sale installation hassles).",
    },
    contentPillars: [
      {
        title: "Multi-Brand Aggregation",
        tag: "PILLAR 01",
        desc: "Curated catalog of top global HVAC brands (Daikin, Midea, TOSOT, Mitsubishi, MBO, CHIGO) with technical filtering by tonnage (1.0 to 4.0 Ton), inverter technology, and energy ratings.",
      },
      {
        title: "Instant CRM Integration",
        tag: "PILLAR 02",
        desc: "Direct 1-click WhatsApp order and inquiry triggers embedded across all digital channels and product pages to convert high-ticket purchases through personal consultation.",
      },
      {
        title: "Transparent Pricing & Warranty",
        tag: "PILLAR 03",
        desc: "Upfront display of MRP versus discounted retail pricing (e.g., 12% off Daikin, 16% off Midea, 20% off TOSOT) building consumer price confidence without requiring showroom visits.",
      },
      {
        title: "End-to-End MEP & Design Integration",
        tag: "PILLAR 04",
        desc: "B2B ecosystem bundle with Mr. HVAC & MEP Engineering Pvt. Ltd. and DE'BAHA Interiors for technical site surveys, professional sizing, ducting, and long-term maintenance.",
      },
    ],
    strategyAnalysis: [
      {
        title: "1. Category Specificity over Mass E-Commerce",
        items: [
          {
            label: "Strategic Advantage",
            text: "Unlike general marketplaces (e.g., Daraz) where HVAC products are buried under general consumer electronics, AC Bazar provides deep technical filtering (tonnage, inverter type, energy ratings, commercial ducting vs. wall mount).",
          },
        ],
      },
      {
        title: "2. Instant WhatsApp CRM Conversions",
        items: [
          {
            label: "High-Ticket Conversion",
            text: "Recognizing that high-ticket purchases in Nepal require personal trust and real-time consultation, the platform embeds direct WhatsApp Order/Inquiry buttons on every product page.",
          },
        ],
      },
      {
        title: "3. Transparent Price & Discount Structuring",
        items: [
          {
            label: "Buyer Confidence",
            text: "Transparently displays MRP versus discounted retail price (e.g., 12% off on Daikin, 16% off on Midea, 20% off on TOSOT), giving consumers price confidence without requiring showroom visits.",
          },
        ],
      },
      {
        title: "4. Full-Lifecycle B2B/B2C Ecosystem Services",
        items: [
          {
            label: "Overcoming Buyer Hesitation",
            text: "Beyond product delivery, they mitigate buyer hesitation by bundling technical site surveys, professional HVAC sizing, installation, and long-term maintenance under partner engineering firms (Mr. HVAC & MEP Engineering Pvt. Ltd. and DE'BAHA Interiors & Renovators).",
          },
        ],
      },
    ],
  },
  {
    id: "mr-hvac-mep-engineering",
    title: "Case Study: Mr. HVAC & MEP Engineering — Web Transformation & SEO Growth Roadmap",
    category: "Development",
    badge: "WEB DEV, UX & SEO STRATEGY",
    likes: 990,
    image: mrHvacImg,
    isWhiteBg: true,
    client: "Mr. HVAC & MEP Engineering Pvt. Ltd.",
    tech: [
      "Headless Web Development",
      "UX/UI Transformation",
      "Technical Web Audit",
      "SEO Growth Roadmap",
      "DOM & Speed Optimization",
      "B2B Enterprise Lead Funnel",
    ],
    description:
      "A complete digital transformation, technical web performance audit, clean component re-architecture, and 4-pillar SEO growth roadmap for Mr. HVAC & MEP Engineering Pvt. Ltd. in Kathmandu, Nepal.",
    results: "4-Pillar Web Blueprint & B2B Organic Lead Engine for Enterprise MEP Projects",
    metrics: [
      { label: "B2B Clients", value: "Daraz, eSewa" },
      { label: "Core Services", value: "MEPF & HVAC" },
      { label: "Domain", value: "mrhvac.com.np" },
      { label: "Load Target", value: "<1.5 Seconds" },
    ],
    deliverables: [
      "Executive Summary & Brand Positioning Architecture for Enterprise B2B Validation",
      "4-Tier Web Development Blueprint (Component Cleanup, Dynamic Maps, Speed, CRM Automation)",
      "Technical Web Audit & DOM Redundancy Fixes (CLS, Asset Minification, Script Cleanup)",
      "Appointment & Time-Picker UI Integration for Enterprise Consultation Calls",
      "4-Pillar SEO Growth Roadmap (Commercial Keywords, Technical Schema, Google Maps, Backlinks)",
      "Filterable Commercial Project Showcase (Commercial Offices, Hospitality, Industrial MEP)",
    ],
    brandOverview: {
      parentCompany: "Mr. HVAC & MEP Engineering Pvt. Ltd.",
      tagline: '"Buddhanagar, Bibhuti Marga, Kathmandu — www.mrhvac.com.np"',
      sloganFocus: '"Full-Spectrum Mechanical, Electrical, Plumbing, Firefighting (MEPF) & HVAC Engineering"',
      category: "Commercial & Industrial MEP / HVAC Engineering Services",
      targetAudience:
        "Architects, general contractors, corporate interior firms, hotel developers, and enterprise clients (e.g., Daraz HQ Nepal, eSewa Call Center, F1Soft, Dalai La Hotel).",
      positioning:
        "While Mr. HVAC possesses elite B2B engineering credentials in Nepal, its web platform functions as an essential client validation hub that requires performance optimization to capture enterprise-level leads.",
    },
    contentPillars: [
      {
        title: "Component Architecture Cleanup",
        tag: "PILLAR 01",
        desc: "Re-architect frontend using modern light frameworks (Next.js / Headless), eliminate duplicate DOM markup, fix hardcoded 0+ stats with dynamic database queries.",
      },
      {
        title: "Interactive Portfolio & Dynamic Maps",
        tag: "PILLAR 02",
        desc: "Filterable project showcase (Commercial Offices, Hospitality, Industrial MEP) with interactive installation maps and downloadable PDF engineering specs.",
      },
      {
        title: "Performance Optimization & Caching",
        tag: "PILLAR 03",
        desc: "Convert media to WebP/AVIF, minify CSS/JS scripts, and implement Redis/LiteSpeed server-side caching to achieve sub-1.5 second mobile load times.",
      },
      {
        title: "Lead Funnel Conversion Automation",
        tag: "PILLAR 04",
        desc: "Streamlined appointment/time-picker UI with direct calendar sync, automated CRM lead routing, and WhatsApp instant consultation for RFP tenders.",
      },
    ],
    strategyAnalysis: [
      {
        title: "Technical Web Audit & DOM Redundancy Findings",
        items: [
          {
            label: "DOM Redundancy & Duplicate Markup",
            text: "Issue: Site rendered duplicate navigation blocks, repeating testimonial carousels, and placeholder counter modules (0+ Projects). Impact: Increased page weight, bloated DOM tree depth, and Cumulative Layout Shift (CLS).",
          },
          {
            label: "Assets & Script Management",
            text: "Issue: Uncompressed media assets and unminified CSS/JS scripts slowed down mobile rendering on Nepali mobile networks. Impact: Reduced Google PageSpeed Insights scores.",
          },
          {
            label: "Appointment / Time-Picker UI",
            text: "Issue: Implemented custom modal time-picker without clear calendar syncing or automated CRM delivery. Impact: Created friction in user conversion for commercial inquiries.",
          },
        ],
      },
      {
        title: "Development Optimization Recommendations",
        items: [
          {
            label: "Clean Component Architecture",
            text: "Re-architect the frontend using modern light frameworks. Replace hardcoded 0+ stat counters with dynamic database queries.",
          },
          {
            label: "Dynamic Case Study Showcase",
            text: "Replace static project cards with filterable project pages (Commercial Offices / Hospitality / Industrial MEP) and downloadable engineering specs for architects.",
          },
          {
            label: "Mobile-First Speed Optimization",
            text: "Convert project photos to WebP/AVIF lazy-loaded formats and configure Redis/LiteSpeed caching to hit sub-1.5s load times.",
          },
        ],
      },
      {
        title: "Case Study 2: SEO Growth Four-Pillar Roadmap",
        items: [
          {
            label: "Organic Search Landscape",
            text: "High-value commercial clients (architects, hotel developers, general contractors) search online for specialized MEP services before issuing Tenders/RFPs.",
          },
          {
            label: "SEO Growth Roadmap",
            text: "1. High-Intent Commercial Keywords | 2. Technical & Schema Markup | 3. Local SEO & Google Maps Dominance | 4. Authority & B2B Backlinks.",
          },
        ],
      },
    ],
  },
];

const categories = ["All", "Content Strategy", "Digital Marketing", "Development"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [likeCounts, setLikeCounts] = useState<{ [id: string]: { count: number; liked: boolean } }>(
    () => {
      const initial: { [id: string]: { count: number; liked: boolean } } = {};
      projects.forEach((p) => {
        initial[p.id] = { count: p.likes, liked: false };
      });
      return initial;
    },
  );

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikeCounts((prev) => {
      const current = prev[id];
      if (!current) return prev;
      return {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked,
        },
      };
    });
  };

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#0d111c] border-b border-white/10 text-white relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#2563eb]/20 to-[#06b6d4]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inbio-subtitle">VISIT MY PORTFOLIO</span>
          <h2 className="inbio-title">Featured Case Studies</h2>
          <p className="mt-4 text-base text-slate-300">
            Explore trackable growth metrics, web architecture, and brand transformations.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal className="mt-12" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-5 py-2.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 rounded-xl flex-1 sm:flex-none text-center min-w-[95px] sm:min-w-0 ${
                    isActive
                      ? "inbio-btn-active shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "bg-white/10 text-slate-300 border border-white/15 shadow-md hover:border-[#38BDF8] hover:text-white hover:bg-white/15"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const likeState = likeCounts[project.id] || { count: project.likes, liked: false };
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="inbio-card p-6 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className={`relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] border flex items-center justify-center p-4 ${project.isWhiteBg ? "bg-white border-white/20 shadow-md" : "bg-slate-900 border-white/10"}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`h-full w-full ${project.isWhiteBg ? "object-contain p-2 group-hover:scale-105" : "object-cover group-hover:scale-110"} transition-transform duration-700`}
                      />
                      {!project.isWhiteBg && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>

                    {/* Metadata row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black tracking-widest text-[#38BDF8] uppercase">
                        {project.badge}
                      </span>
                      <button
                        onClick={(e) => toggleLike(e, project.id)}
                        className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full transition-all border border-white/15 shadow-sm ${
                          likeState.liked
                            ? "bg-[#2563eb] text-white border-[#2563eb]"
                            : "bg-white/10 text-slate-300 hover:text-white"
                        }`}
                      >
                        <Heart
                          className={`h-3.5 w-3.5 ${likeState.liked ? "fill-current text-white" : ""}`}
                        />
                        <span>{likeState.count}</span>
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-white group-hover:text-[#38BDF8] transition-colors leading-snug mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-[#38BDF8] group-hover:text-[#a855f7] group-hover:gap-2 transition-all">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[88vh] overflow-y-auto bg-[#0f172a]/95 backdrop-blur-2xl border border-white/20 text-white p-6 sm:p-8 rounded-3xl shadow-2xl">
          {selectedProject && (
            <div>
              <div className={`overflow-hidden rounded-2xl mb-6 aspect-video border flex items-center justify-center relative group p-4 ${selectedProject.isWhiteBg ? "bg-white border-white/20 shadow-lg" : "bg-slate-900 border-white/15"}`}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`h-full w-full ${selectedProject.isWhiteBg ? "object-contain p-4 max-h-[85%]" : "object-cover"}`}
                />
                {!selectedProject.isWhiteBg && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                )}
              </div>

              <DialogHeader>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full border border-[#38BDF8]/20">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    Client: <strong className="text-white">{selectedProject.client}</strong>
                  </span>
                </div>
                <DialogTitle className="text-2xl font-extrabold text-white leading-snug">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-300 pt-2 leading-relaxed font-normal">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Tech Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-bold bg-white/10 border border-white/15 px-3 py-1 rounded-full text-slate-200 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Rich Extended Case Study Section for Hello Sunflower Oil / Detailed Projects */}
              {selectedProject.brandOverview && (
                <div className="mt-8 space-y-6 pt-6 border-t border-white/15">
                  {/* 1. Brand Overview & Market Positioning */}
                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/10 shadow-lg">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#38BDF8] flex items-center gap-2 mb-4">
                      <Sparkles className="h-4 w-4 text-[#f59e0b]" /> 1. Brand Overview & Market Positioning
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-slate-400 font-bold block mb-1">Parent Company</span>
                        <span className="text-white font-extrabold">{selectedProject.brandOverview.parentCompany}</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-slate-400 font-bold block mb-1">Category</span>
                        <span className="text-white font-extrabold">{selectedProject.brandOverview.category}</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-slate-400 font-bold block mb-1">Tagline / Core Promise</span>
                        <span className="text-amber-300 font-extrabold">{selectedProject.brandOverview.tagline}</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-slate-400 font-bold block mb-1">Primary Slogan Focus</span>
                        <span className="text-emerald-400 font-extrabold">{selectedProject.brandOverview.sloganFocus}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs mb-4">
                      <span className="text-slate-400 font-bold block mb-1">Target Audience</span>
                      <p className="text-slate-200 leading-relaxed">{selectedProject.brandOverview.targetAudience}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 rounded-xl border border-blue-500/30 text-xs">
                      <span className="text-[#38BDF8] font-extrabold uppercase tracking-wider block mb-1">Market Positioning</span>
                      <p className="text-slate-200 italic leading-relaxed">{selectedProject.brandOverview.positioning}</p>
                    </div>
                  </div>

                  {/* 2. Facebook Marketing Strategy Analysis & Content Pillars Flow */}
                  {selectedProject.contentPillars && (
                    <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/10 shadow-lg">
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#38BDF8] flex items-center gap-2 mb-2">
                        <Layers className="h-4 w-4 text-[#38BDF8]" /> 2. Facebook Marketing Strategy Analysis
                      </h4>
                      <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                        An analysis of their page content reveals a multi-layered content framework designed to build trust, drive top-of-mind recall, and educate consumers.
                      </p>

                      {/* Content Pillars Diagram Header */}
                      <div className="text-center p-3 mb-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl border border-blue-500/30">
                        <span className="text-xs font-black uppercase tracking-widest text-amber-300">
                          {selectedProject.client.toUpperCase()} — DIGITAL CONTENT PILLARS
                        </span>
                      </div>

                      {/* 4 Pillars Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {selectedProject.contentPillars.map((pillar, idx) => (
                          <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#38BDF8]/50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8]">
                                {pillar.tag}
                              </span>
                            </div>
                            <h5 className="text-xs font-black text-white mb-1.5">{pillar.title}</h5>
                            <p className="text-[11px] text-slate-300 leading-relaxed font-normal">{pillar.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3. Deep-Dive Strategy Analysis Breakdown */}
                  {selectedProject.strategyAnalysis && (
                    <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/10 shadow-lg space-y-4">
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#38BDF8] flex items-center gap-2 mb-1">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" /> Strategic Content Planning Breakdown
                      </h4>
                      {selectedProject.strategyAnalysis.map((sec, sIdx) => (
                        <div key={sIdx} className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                          <h5 className="text-xs font-black text-amber-300 uppercase tracking-wide">{sec.title}</h5>
                          <div className="space-y-2 pt-1">
                            {sec.items.map((item, iIdx) => (
                              <div key={iIdx} className="text-xs">
                                <span className="font-extrabold text-white">{item.label}: </span>
                                <span className="text-slate-300">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Key Results Grid */}
              <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs font-extrabold text-[#38BDF8] uppercase tracking-wider mb-2">
                  PROVEN RESULTS & IMPACT
                </p>
                <p className="text-sm font-extrabold text-white mb-4">{selectedProject.results}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-xl font-black text-[#f59e0b]">{m.value}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
                  CORE DELIVERABLES & STRATEGY OUTPUTS
                </h4>
                <ul className="space-y-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 font-medium"
                    >
                      <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs font-extrabold text-slate-400 hover:text-white rounded-xl hover:bg-white/10"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inbio-btn px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2"
                >
                  START SIMILAR STRATEGY <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
