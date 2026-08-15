import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Briefcase, Award, Code, CheckCircle2, MapPin } from "lucide-react";

type TabType = "education" | "skills" | "experience" | "certifications";

const educationData = [
  {
    title: "Bachelor Degree In Information Technology",
    institute: "Purbanchal School of Science and Technology",
    period: "Bachelor Degree",
    result: "Biratnagar",
    description:
      "Comprehensive higher degree program focusing on Information Technology, software engineering, systems design, and computer science applications.",
  },
  {
    title: "Intermediate In Computer Science",
    institute: "Siddhartha Higher Secondary School",
    period: "Intermediate (+2)",
    result: "Damak, Jhapa District",
    description:
      "Higher secondary education with a strong specialization in computer science, software logic, mathematics, and computing fundamentals.",
  },
  {
    title: "Computer Sub-Engineering",
    institute: "Himalayan Higher Secondary School",
    period: "Sub-Engineering",
    result: "Damak, Jhapa District",
    description:
      "Technical sub-engineering curriculum covering practical computer hardware, networking, programming logic, and applied tech solutions.",
  },
];

const experienceData = [
  {
    title: "Founder & Lead Tech Specialist",
    institute: "Digital Agency & Tech Consulting",
    period: "2022 - Present",
    result: "Damak, Nepal / Remote",
    description:
      "Leading custom web development projects, high-ROAS Meta & Google Ads strategies, SEO ranking roadmaps, and full-stack software delivery for 50+ clients globally.",
  },
  {
    title: "Content Analyzer & Digital Strategist",
    institute: "Media & Digital Content Operations",
    period: "2021 - 2023",
    result: "Remote / Nepal",
    description:
      "Analyzing content performance metrics, audience engagement trends, and sentiment metrics to audit media campaigns, optimize copy, and maximize ROI across digital channels.",
  },
  {
    title: "Senior Digital Growth Marketer",
    institute: "E-Commerce & Brand Accelerator",
    period: "2020 - 2022",
    result: "Remote / Hybrid",
    description:
      "Managed $100K+ ad budgets across Meta Ads & Google Search Ads. Optimized conversion funnels, landing pages, and email automation flows resulting in 4.5x average ROAS.",
  },
  {
    title: "WordPress & Frontend Engineer",
    institute: "Web Design & Development Firm",
    period: "2018 - 2020",
    result: "Nepal",
    description:
      "Built 35+ custom WordPress themes, WooCommerce stores, custom ACF Pro structures, speed optimizations, and UI/UX responsive layouts.",
  },
];

const skillsData = [
  {
    name: "WordPress & WooCommerce",
    level: 96,
    category: "Web Development",
    color: "from-[#2563eb] to-[#06b6d4]",
  },
  {
    name: "React.js / Next.js / TypeScript",
    level: 92,
    category: "Web Development",
    color: "from-[#7c3aed] to-[#2563eb]",
  },
  {
    name: "Meta Ads (Facebook & Instagram)",
    level: 95,
    category: "Digital Marketing",
    color: "from-[#10b981] to-[#06b6d4]",
  },
  {
    name: "Google Search & Shopping Ads",
    level: 92,
    category: "Digital Marketing",
    color: "from-[#f59e0b] to-[#f97316]",
  },
  {
    name: "SEO & Google Analytics 4",
    level: 90,
    category: "Growth & Analytics",
    color: "from-[#2563eb] to-[#10b981]",
  },
  {
    name: "Graphic Design & UI/UX (Figma / Adobe)",
    level: 88,
    category: "Design",
    color: "from-[#7c3aed] to-[#f59e0b]",
  },
  {
    name: "Python & AI Automation / Workflows",
    level: 85,
    category: "Automation",
    color: "from-[#f97316] to-[#7c3aed]",
  },
  {
    name: "HTML5, CSS3, Tailwind CSS",
    level: 98,
    category: "Web Development",
    color: "from-[#06b6d4] to-[#2563eb]",
  },
];

const certificationsData = [
  {
    title: "Google Ads Search & Display Certified",
    institute: "Google Skillshop",
    period: "2023 - 2026",
    result: "Verified Badge",
    description:
      "Advanced certification in bid strategies, audience targeting, conversion tracking, and Search campaign architecture.",
  },
  {
    title: "Meta Certified Digital Marketing Associate",
    institute: "Meta Blueprint",
    period: "2022 - 2026",
    result: "Verified Badge",
    description:
      "Mastery in campaign creation, Pixel/CAPI tracking, A/B creative testing, and retargeting funnel design.",
  },
  {
    title: "Technical SEO & Schema Markup Specialist",
    institute: "Semrush Academy",
    period: "2023 - 2026",
    result: "Certified",
    description:
      "Deep expertise in site health audits, Core Web Vitals optimization, log analysis, and structured data.",
  },
];

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  const tabs: {
    id: TabType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Professional Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  return (
    <section
      id="resume"
      className="py-24 sm:py-32 bg-[#090d16] border-b border-white/10 text-white relative overflow-hidden"
    >
      {/* Background Visual Ambient Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#7c3aed]/20 to-[#2563eb]/20 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#2563eb]/30 via-[#7c3aed]/30 to-[#06b6d4]/30 border border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.4)] backdrop-blur-md mb-4">
            <Award className="h-4 w-4 text-[#38BDF8] animate-pulse" />
            <span className="text-xs font-black tracking-[0.25em] text-white uppercase">
              7+ YEARS OF PROVEN EXPERIENCE
            </span>
          </div>
          <h2 className="inbio-title">Track Record & Skills</h2>
          <p className="mt-4 text-base text-slate-300">
            A blend of computer science foundation, full-stack software development, and growth
            marketing execution.
          </p>
        </ScrollReveal>

        {/* Tab Buttons */}
        <ScrollReveal className="mt-12" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-4xl mx-auto">
            {tabs.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 rounded-xl sm:rounded-2xl flex-1 min-w-[130px] sm:flex-none ${
                    isActive
                      ? "inbio-btn-active shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "bg-white/10 text-slate-300 border border-white/15 shadow-md hover:border-[#38BDF8] hover:text-white hover:bg-white/15"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-[#38BDF8]"}`}
                  />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tab Contents */}
        <div className="mt-14 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {educationData.map((item, idx) => (
                  <div
                    key={idx}
                    className="inbio-card p-6 sm:p-8 relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] px-3 py-1 rounded-full bg-white/10 border border-white/20">
                          {item.period}
                        </span>
                        <span className="text-xs font-extrabold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-[#38BDF8] shrink-0" />
                          {item.result}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-white mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-bold text-slate-400 mb-4">{item.institute}</p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2"
              >
                {skillsData.map((skill, idx) => (
                  <div key={idx} className="inbio-card p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-extrabold text-white">{skill.name}</span>
                      <span className="text-xs font-black text-[#38BDF8]">{skill.level}%</span>
                    </div>
                    <div className="h-3.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: idx * 0.05 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm`}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2"
              >
                {experienceData.map((item, idx) => (
                  <div key={idx} className="inbio-card p-8 relative flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] px-3 py-1 rounded-full bg-white/10 border border-white/20">
                          {item.period}
                        </span>
                        <span className="text-xs font-extrabold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">
                          {item.result}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-2">{item.title}</h3>
                      <p className="text-sm font-bold text-slate-400 mb-4">{item.institute}</p>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2"
              >
                {certificationsData.map((item, idx) => (
                  <div key={idx} className="inbio-card p-8 relative flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] px-3 py-1 rounded-full bg-white/10 border border-white/20">
                          {item.period}
                        </span>
                        <span className="text-xs font-extrabold text-[#10b981] bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#10b981]" /> {item.result}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-2">{item.title}</h3>
                      <p className="text-sm font-bold text-slate-400 mb-4">{item.institute}</p>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
