import { ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon, FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="py-16 bg-[#060911] border-t border-white/10 text-white relative overflow-hidden"
      suppressHydrationWarning
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <a href="#home" className="inline-flex items-center gap-3 mb-6 group">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#38BDF8]/30 to-[#2563eb]/30 p-0.5 border border-white/20 shadow-lg group-hover:border-[#38BDF8] transition-all">
            <img
              src="/ashim-shrestha-full-stack-digital-marketer.png"
              alt="Ashim Shrestha — Full Stack Digital Marketer & SEO Expert in Nepal"
              className="h-15 w-15 rounded-full object-cover object-center border-2 border-[#38BDF8]"
            />
          </div>
          <span className="font-heading text-2xl font-extrabold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
            ASHIM<span className="text-[#38BDF8]">.</span>
          </span>
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
            { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
            { label: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
            { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
          ].map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 shadow-sm hover:bg-[#2563eb] hover:border-[#2563eb] transition-all"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          © {new Date().getFullYear()} ASHIM SHRESTHA. ALL RIGHTS RESERVED.
        </p>

        {/* Floating Scroll-to-Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0f172a]/95 text-[#38BDF8] border border-white/20 shadow-2xl backdrop-blur-md hover:bg-[#2563eb] hover:text-white transition-all active:scale-90"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
}
