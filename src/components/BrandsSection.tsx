import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

import abcPower from "@/assets/brands/abc-power-solution.png";
import helloSunflower from "@/assets/brands/hello-sunflower-oil.jpg";
import hitexCarpet from "@/assets/brands/hitex-carpet.jpg";
import activa from "@/assets/brands/activa.jpg";
import ramro from "@/assets/brands/ramro.jpg";
import gpPackaging from "@/assets/brands/gp-packaging.jpg";
import shikhaRealEstate from "@/assets/brands/shikha-real-estate.png";
import hyundaiElectronics from "@/assets/brands/hyundai-electronics.png";
import appliedCollege from "@/assets/brands/applied-college.jpg";
import swadeshiSabun from "@/assets/brands/swadeshi-sabun.jpg";
import electronicsBazzar from "@/assets/brands/electronics-bazzar.png";
import purbanchalUniversity from "@/assets/brands/purbanchal-university.png";
import mrHvac from "@/assets/brands/mr-hvac-logo.png";
import acBazar from "@/assets/brands/ac-bazar.png";

const brands = [
  { name: "Air Conditioner Bazar", logo: acBazar },
  { name: "ABC Power Solution", logo: abcPower },
  { name: "Hello Sunflower Oil", logo: helloSunflower },
  { name: "Hitex Carpet", logo: hitexCarpet },
  { name: "Activa", logo: activa },
  { name: "Ramro", logo: ramro },
  { name: "GP Packaging", logo: gpPackaging },
  { name: "Shikha Real Estate", logo: shikhaRealEstate },
  { name: "Hyundai Electronics", logo: hyundaiElectronics },
  { name: "Applied College Biratnagar", logo: appliedCollege },
  { name: "Swadeshi Sabun", logo: swadeshiSabun },
  { name: "Electronics Bazzar", logo: electronicsBazzar },
  { name: "Purbanchal University", logo: purbanchalUniversity },
  { name: "Mr. HVAC Engineering", logo: mrHvac },
] as const;

const stats = [
  { end: 50, suffix: "+", label: "Brands Collaborated" },
  { end: 85, suffix: "+", label: "Projects Completed" },
  { end: 7, suffix: "+", label: "Years Experience" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
] as const;

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === "#clients" || window.location.hash === "#brands") {
      requestAnimationFrame(() => sectionRef.current?.scrollIntoView());
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="py-24 bg-[#0d121f] border-b border-white/10 text-white relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#2563eb]/20 to-[#7c3aed]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inbio-subtitle">POPULAR CLIENTS</span>
          <h2 className="inbio-title">Brands I've Worked With</h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Leading companies and institutions across Nepal and abroad trust my strategy, tech
            development, and marketing execution.
          </p>
        </ScrollReveal>

        {/* Marquee Section */}
        <ScrollReveal className="mt-14">
          <div className="brand-marquee relative overflow-hidden py-4" suppressHydrationWarning>
            <div className="brand-marquee__track flex w-max items-center" suppressHydrationWarning>
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="flex shrink-0 items-center gap-8 pr-8"
                  aria-hidden={set === 1}
                  suppressHydrationWarning
                >
                  {brands.map((brand) => (
                    <div
                      key={`${set}-${brand.name}`}
                      className="inbio-card py-5 px-4 flex flex-col items-center justify-center shrink-0 group transition-all duration-300 w-36 sm:w-40"
                      suppressHydrationWarning
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2.5 flex items-center justify-center border-2 border-white/30 group-hover:border-[#38BDF8] shadow-md group-hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-all duration-300 overflow-hidden shrink-0">
                        <img
                          src={brand.logo}
                          alt={set === 0 ? brand.name : ""}
                          loading="lazy"
                          decoding="async"
                          className="max-h-full max-w-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="mt-3 text-xs font-extrabold text-slate-200 group-hover:text-[#38BDF8] truncate max-w-full text-center transition-colors">
                        {brand.name}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const isYears = stat.label.includes("Years");
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div
                  className={`inbio-card p-8 text-center transition-all duration-300 relative ${
                    isYears
                      ? "border-2 border-[#38BDF8] shadow-[0_0_30px_rgba(56,189,248,0.35)] bg-gradient-to-b from-[#2563eb]/20 to-transparent scale-105 z-10"
                      : ""
                  }`}
                >
                  {isYears && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-full border border-white/20 shadow-md">
                      HIGHLIGHTED
                    </span>
                  )}
                  <div
                    className={`text-4xl sm:text-5xl font-extrabold font-heading ${isYears ? "text-[#38BDF8]" : "text-[#f59e0b]"}`}
                  >
                    <CountUp end={stat.end} suffix={stat.suffix} label={stat.label} />
                  </div>
                  <div
                    className={`mt-2 text-xs font-bold uppercase tracking-wider ${isYears ? "text-white font-extrabold" : "text-slate-300"}`}
                  >
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
