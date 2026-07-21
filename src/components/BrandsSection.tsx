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
import mrHvac from "@/assets/brands/mr-hvac.jpeg";

const brands = [
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
  { name: "Mr. HVAC and M.E.P Engineering", logo: mrHvac },
] as const;

const stats = [
  { end: 25, suffix: "+", label: "Brands Collaborated" },
  { end: 60, suffix: "+", label: "Projects Completed" },
  { end: 5, suffix: "+", label: "Years of Experience" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
] as const;

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === "#brands") {
      requestAnimationFrame(() => sectionRef.current?.scrollIntoView());
    }
  }, []);

  return (
    <section ref={sectionRef} id="brands" className="relative py-[100px]">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-80 -translate-y-1/2 bg-primary/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Brands That Trusted <span className="gradient-text">My Strategy</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I've had the privilege of helping businesses across multiple industries grow through digital
            marketing, branding, WordPress development, UI/UX design, and creative strategy. Every
            collaboration has been focused on delivering measurable results and long-term value.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-14">
          <div className="brand-marquee relative overflow-hidden py-3">
            <div className="brand-marquee__track flex w-max items-start">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="flex shrink-0 items-start gap-7 pr-7 sm:gap-10 sm:pr-10 lg:gap-12 lg:pr-12"
                  aria-hidden={set === 1}
                >
                  {brands.map((brand) => (
                    <div key={`${set}-${brand.name}`} className="group w-28 shrink-0 text-center sm:w-36">
                      <div className="flex h-28 w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-5 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.9)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_18px_45px_-18px_rgba(79,70,229,0.7)] sm:h-36 sm:w-36 sm:p-7">
                        <img
                          src={brand.logo}
                          alt={set === 0 ? `${brand.name} official logo` : ""}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="mt-4 truncate text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {brand.name}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-16 border-t border-border pt-10" delay={0.1}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:px-5">
                <CountUp {...stat} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
