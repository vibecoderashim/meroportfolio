import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import figmaLogo from "@/assets/tools-raster/figma.png";
import chatgptLogo from "@/assets/tools-raster/chatgpt.png";
import photoshopLogo from "@/assets/tools-raster/photoshop.png";
import elementorLogo from "@/assets/tools-raster/elementor.png";
import analyticsLogo from "@/assets/tools-raster/google-analytics.png";
import mailchimpLogo from "@/assets/tools-raster/mailchimp.png";
import afterEffectsLogo from "@/assets/tools-raster/after-effects.png";
import canvaLogo from "@/assets/tools-raster/canva.jpg";
import illustratorLogo from "@/assets/tools-raster/illustrator.png";
import mernLogo from "@/assets/tools-raster/mern-stack.png";
import wordpressLogo from "@/assets/tools-raster/wordpress.png";
import metaLogo from "@/assets/tools-raster/meta.png";
import semrushLogo from "@/assets/tools-raster/semrush.png";

const technicalSkills = [
  { name: "WordPress / Elementor", level: 95 },
  { name: "HTML / CSS", level: 90 },
  { name: "Adobe Photoshop", level: 92 },
  { name: "Adobe Illustrator", level: 85 },
  { name: "Figma / Canva", level: 93 },
  { name: "React / Tailwind", level: 75 },
];

const marketingSkills = [
  { name: "Google Analytics / GA4", level: 90 },
  { name: "Meta Ads Manager", level: 92 },
  { name: "Google Ads (PPC)", level: 88 },
  { name: "SEMrush / Ahrefs", level: 85 },
  { name: "Email Marketing (Mailchimp)", level: 80 },
  { name: "Content Strategy", level: 90 },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-cyan">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>
    </div>
  );
}

const tools = [
  { name: "Figma", logo: figmaLogo },
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Photoshop", logo: photoshopLogo },
  { name: "Elementor", logo: elementorLogo },
  { name: "Google Analytics", logo: analyticsLogo },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "After Effects", logo: afterEffectsLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Illustrator", logo: illustratorLogo },
  { name: "MERN Stack", logo: mernLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Meta Ads", logo: metaLogo },
  { name: "Semrush", logo: semrushLogo },
] as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">My Expertise</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <h3 className="font-heading text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h3 className="font-heading text-xl font-semibold mb-6">Marketing Skills</h3>
            <div className="space-y-5">
              {marketingSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-14">
          <h3 className="font-heading text-xl font-semibold text-center mb-6">Tools & Technologies</h3>
          <div className="tools-marquee relative overflow-hidden py-3">
            <div className="tools-marquee__track flex w-max items-center">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
                  aria-hidden={set === 1}
                >
                  {tools.map((tool) => (
                    <motion.div
                      key={`${set}-${tool.name}`}
                      whileHover={{ y: -5, scale: 1.06, boxShadow: "var(--shadow-glow)" }}
                      transition={{ duration: 0.25 }}
                      className="glass-card group flex h-[74px] w-[132px] shrink-0 cursor-pointer items-center gap-2.5 px-3 py-2.5 sm:h-20 sm:w-36"
                      title={tool.name}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm sm:h-12 sm:w-12">
                        <img
                          src={tool.logo}
                          alt={set === 0 ? `${tool.name} logo` : ""}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs font-semibold leading-tight text-foreground sm:text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
