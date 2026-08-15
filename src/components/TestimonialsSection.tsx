import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Surana",
    designation: "Principal",
    company: "Eastern College of Engineering",
    project: "Institutional Web Architecture & Academic Portal",
    date: "Direct Educational Partner",
    rating: 5,
    text: "Ashim delivered an outstanding, highly responsive web portal for Eastern College of Engineering. His technical competence and proactive design approach streamlined our student and faculty communications seamlessly.",
  },
  {
    id: 2,
    name: "Roshan Ghimire",
    designation: "Director",
    company: "Birat College",
    project: "Educational Web Portal & Digital Growth",
    date: "Direct Institutional Collaboration",
    rating: 5,
    text: "Ashim is an exceptionally talented developer and digital strategist. His dedication, technical precision, and innovative vision in building our digital platforms at Birat College exceeded all our expectations.",
  },
  {
    id: 3,
    name: "Priyanka Agrawal",
    designation: "Director",
    company: "Bigadco",
    project: "Corporate Branding & Web Ecosystem",
    date: "Strategic Enterprise Engagement",
    rating: 5,
    text: "Ashim's technical execution and digital growth strategy brought immense value to Bigadco. The web experience and marketing funnel he engineered significantly boosted our brand visibility and customer acquisition.",
  },
  {
    id: 4,
    name: "Pranav Shrestha",
    designation: "Director",
    company: "Mr.HVAC & MEP ENGINEERING PVT.LTD",
    project: "Engineering Corporate Portal & SEO Optimization",
    date: "Corporate Client Project",
    rating: 5,
    text: "Ashim engineered a sleek, professional digital presence for Mr.HVAC & MEP Engineering. His work elevated our online search visibility and established a strong digital footprint for our engineering services.",
  },
  {
    id: 5,
    name: "Amit Agrawal",
    designation: "Co-Founder",
    company: "Awai Nepal",
    project: "Brand Strategy & E-Commerce Infrastructure",
    date: "Startup Partner Venture",
    rating: 5,
    text: "Ashim is a master at turning ideas into high-performing digital products. His work on Awai Nepal's digital platform provided us with a seamless user experience and a powerful foundation for our business growth.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const item = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-transparent border-b border-white/10 text-white relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-gradient-to-r from-[#06b6d4]/10 via-[#2563eb]/15 to-[#7c3aed]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inbio-subtitle">WHAT CLIENTS SAY</span>
          <h2 className="inbio-title">Testimonial</h2>
        </ScrollReveal>

        <div className="mt-14 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl hover:border-[#38BDF8]/40 transition-all duration-300 relative flex flex-col justify-between">
                <div>
                  {/* Header: Quote Icon + Rating */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <Quote className="h-10 w-10 text-[#38BDF8]" />
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">{item.project}</h4>
                  <p className="text-xs font-medium text-slate-400 mb-6">{item.date}</p>

                  {/* Review Text */}
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic font-light mb-8">
                    "{item.text}"
                  </p>

                  {/* Author Details: Name, Position, Institute Name below review */}
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-xl font-extrabold text-white">{item.name}</h3>
                    <p className="text-sm font-bold text-[#38BDF8] mt-0.5">{item.designation}</p>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{item.company}</p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === current ? "w-8 bg-[#38BDF8]" : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white border border-white/15 shadow-sm hover:bg-[#2563eb] hover:border-[#2563eb] transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={next}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white border border-white/15 shadow-sm hover:bg-[#2563eb] hover:border-[#2563eb] transition-all"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
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
