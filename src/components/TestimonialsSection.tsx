import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Rajesh Kumar", company: "TechVenture Nepal", rating: 5, text: "Ashim transformed our entire digital presence. Our organic traffic increased by 200% in just 4 months. Highly recommend his strategic approach!" },
  { name: "Priya Sharma", company: "Bloom Boutique", rating: 5, text: "The branding work Ashim did for us was exceptional. Our brand now stands out in a crowded market. Professional, creative, and always delivers on time." },
  { name: "David Chen", company: "GlobalTrade Co.", rating: 5, text: "Working with Ashim on our PPC campaigns was a game-changer. Our ROAS improved by 150% and cost per acquisition dropped significantly." },
  { name: "Sita Thapa", company: "Himalayan Wellness", rating: 5, text: "Ashim built us a beautiful WordPress website that loads fast and converts visitors into customers. His attention to detail is unmatched." },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">Testimonials</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 text-center"
            >
              <div className="flex justify-center gap-1 text-cyan">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-lg text-foreground leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <div className="mt-6">
                <div className="font-heading font-semibold">{testimonials[current].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[current].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-cyan" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
