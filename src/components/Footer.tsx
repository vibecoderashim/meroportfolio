import { motion } from "framer-motion";

const quickLinks = ["Home", "About", "Services", "Portfolio", "Skills", "Contact"];
const serviceLinks = ["Social Media Marketing", "SEO", "PPC Advertising", "Graphic Design", "WordPress Development"];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-heading text-xl font-bold gradient-text">Ashim Shrestha</span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Full-Stack Digital Marketing Architect helping businesses achieve predictable, measurable growth.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <span className="text-sm text-muted-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground">Damak, Jhapa, Nepal</p>
            <p className="mt-1 text-sm text-muted-foreground">+977 9815904119</p>
            <p className="mt-1 text-sm text-cyan">hello@ashimshrestha.com</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ashim Shrestha. All rights reserved.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan transition-colors hover:bg-cyan/20"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
