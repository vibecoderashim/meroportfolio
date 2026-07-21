import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, WalletCards } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  { label: "WhatsApp", value: "+977 9815904119", href: "https://wa.me/9779815904119", icon: "M20.52 3.48A11.85 11.85 0 0012.08 0C5.5 0 .14 5.36.14 11.95c0 2.1.55 4.16 1.61 5.97L.04 24l6.22-1.63a11.9 11.9 0 005.81 1.48h.01c6.58 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.18-3.5-8.42zM12.08 21.83h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.69.97.98-3.6-.23-.37a9.86 9.86 0 01-1.52-5.29c0-5.45 4.43-9.88 9.89-9.88a9.8 9.8 0 017 2.9 9.82 9.82 0 012.89 7c-.01 5.44-4.45 9.86-9.91 9.86zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 01-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" },
  { label: "Email", value: "hello@ashimshrestha.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Location", value: "Damak, Jhapa, Nepal", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", customBudget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (form.budget === "Custom budget" && !form.customBudget.trim()) e.customBudget = "Please enter your budget";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const message = [
        `Hi Ashim, I'm ${form.name}.`,
        form.service ? `I'm interested in: ${form.service}.` : "",
        form.budget ? `Budget: ${form.budget === "Custom budget" ? form.customBudget : form.budget}.` : "",
        form.message,
        `Email: ${form.email}`,
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/9779815904119?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-medium text-cyan tracking-wider uppercase">Get In Touch</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <h3 className="font-heading text-xl font-semibold">Ready to elevate your brand?</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether you need a complete digital overhaul or a targeted campaign,
              I'm here to help you achieve measurable results. For the fastest response,
              message me directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/9779815904119?text=Hi%20Ashim%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_18px_38px_-12px_rgba(37,211,102,0.9)]"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d={contactInfo[0].icon} />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="mt-8 space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10">
                    <svg className="h-5 w-5 text-cyan" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#25D366] hover:underline">{c.value}</a>
                    ) : (
                      <div className="text-sm font-medium">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
              Available for Freelance
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-cyan"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-cyan"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Select
                  value={form.service}
                  onValueChange={(service) => setForm({ ...form, service })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-border bg-input px-4 text-sm shadow-none transition-colors hover:border-primary/60 focus:ring-2 focus:ring-primary/30">
                    <span className="flex min-w-0 items-center gap-2.5">
                      <BriefcaseBusiness className="size-4 shrink-0 text-primary" />
                      <SelectValue placeholder="Choose a service" />
                    </span>
                  </SelectTrigger>
                  <SelectContent position="popper" sideOffset={6} className="rounded-xl border-border bg-popover/95 p-1.5 shadow-2xl backdrop-blur-xl">
                    <SelectGroup>
                      <SelectLabel className="px-2 py-2 text-xs uppercase tracking-wider text-muted-foreground">Service needed</SelectLabel>
                      {[
                        "Social Media Marketing", "SEO", "PPC Advertising", "Graphic Design",
                        "WordPress Development", "Content Strategy",
                      ].map((service) => (
                        <SelectItem key={service} value={service} className="rounded-lg py-2.5 pl-3 pr-9 focus:bg-primary/15 focus:text-foreground">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select
                  value={form.budget}
                  onValueChange={(budget) => setForm({ ...form, budget })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-border bg-input px-4 text-sm shadow-none transition-colors hover:border-primary/60 focus:ring-2 focus:ring-primary/30">
                    <span className="flex min-w-0 items-center gap-2.5">
                      <WalletCards className="size-4 shrink-0 text-primary" />
                      <SelectValue placeholder="Select your budget" />
                    </span>
                  </SelectTrigger>
                  <SelectContent position="popper" sideOffset={6} className="rounded-xl border-border bg-popover/95 p-1.5 shadow-2xl backdrop-blur-xl">
                    <SelectGroup>
                      <SelectLabel className="px-2 py-2 text-xs uppercase tracking-wider text-muted-foreground">Project budget</SelectLabel>
                      {["$500 - $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000+", "Custom budget"].map((budget) => (
                        <SelectItem key={budget} value={budget} className="rounded-lg py-2.5 pl-3 pr-9 focus:bg-primary/15 focus:text-foreground">
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {form.budget === "Custom budget" ? (
                <div>
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder="Enter your budget or preferred range"
                    value={form.customBudget}
                    onChange={(e) => setForm({ ...form, customBudget: e.target.value })}
                    aria-invalid={Boolean(errors.customBudget)}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors hover:border-primary/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.customBudget ? <p className="mt-1 text-xs text-destructive">{errors.customBudget}</p> : null}
                </div>
              ) : null}
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-cyan resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button variant="hero" size="lg" className="w-full" type="submit">
                Send via WhatsApp
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
