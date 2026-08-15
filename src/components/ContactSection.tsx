import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  LinkedinIcon,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  MessageCircle,
  Clock,
  Zap,
} from "lucide-react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "form">("whatsapp");
  const [selectedTopic, setSelectedTopic] = useState<string>("Web App Development");

  const [copiedPhone, setCopiedPhone] = useState(false);

  const [chatMessage, setChatMessage] = useState(
    "Hi Ashim, I would like to discuss a project with you!",
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Web App Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const topics = [
    {
      id: "webapp",
      label: "🚀 Web & App Dev",
      subject: "Web App Development",
      msg: "Hi Ashim, I'm interested in building a high-performance custom web application.",
    },
    {
      id: "ads",
      label: "📈 Ads & Growth",
      subject: "Ads Strategy & Growth",
      msg: "Hi Ashim, I need help setting up high-ROI Meta & Google advertising campaigns.",
    },
    {
      id: "consulting",
      label: "💼 Tech Consulting",
      subject: "Technology Consulting",
      msg: "Hi Ashim, I would like to book a tech & digital strategy consultation.",
    },
    {
      id: "hire",
      label: "🤝 Hire Freelance",
      subject: "Freelance Project Hire",
      msg: "Hi Ashim, we have a freelance role/project and would love to collaborate.",
    },
  ];

  const handleSelectTopic = (topic: (typeof topics)[0]) => {
    setSelectedTopic(topic.subject);
    setForm((prev) => ({ ...prev, subject: topic.subject, message: topic.msg }));
    setChatMessage(topic.msg);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+9779815904119");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleDirectWhatsAppLaunch = (customMsg?: string) => {
    const textToSend =
      customMsg || chatMessage || "Hi Ashim, I want to connect with you regarding a project.";
    window.open(`https://wa.me/9779815904119?text=${encodeURIComponent(textToSend)}`, "_blank");
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const waText = [
      `*New Portfolio Inquiry:*`,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone || "N/A"}`,
      `✉️ *Email:* ${form.email}`,
      `📌 *Subject:* ${form.subject || "General Inquiry"}`,
      `💬 *Message:* ${form.message}`,
    ].join("\n");

    window.open(`https://wa.me/9779815904119?text=${encodeURIComponent(waText)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-32 bg-[#090d16] border-b border-white/10 text-white relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#25D366]/15 via-[#06b6d4]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-[#2563eb]/20 to-[#7c3aed]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inbio-subtitle">WORK WITH ASHIM SHRESTHA</span>
          <h2 className="inbio-title">Let's Build Your Digital Growth System</h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            Work with Ashim Shrestha to build a stronger online presence, attract the right audience and turn digital traffic into measurable business growth.
          </p>
        </ScrollReveal>

        {/* WhatsApp Direct Highlight Banner */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#25D366]/15 via-[#0d1f14] to-slate-900 border border-[#25D366]/40 shadow-[0_0_35px_rgba(37,211,102,0.15)] flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-300 hover:border-[#25D366]">
          <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full md:w-auto">
            <div className="relative shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-slate-950 shadow-lg shadow-[#25D366]/30">
                <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Direct WhatsApp Hotline
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONLINE NOW
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Average response time:{" "}
                <span className="text-emerald-300 font-semibold">Under 5 minutes</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
            <button
              onClick={handleCopyPhone}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all min-h-[44px]"
            >
              <Copy className="w-3.5 h-3.5" />
              {copiedPhone ? "Copied +977 9815904119!" : "+977 9815904119"}
            </button>
            <button
              onClick={() => handleDirectWhatsAppLaunch()}
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 transition-all active:scale-95 min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Interactive Topic Chips */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-full sm:w-auto text-center sm:text-left mb-1 sm:mb-0 flex items-center justify-center sm:justify-start gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#38BDF8]" /> Select Topic:
          </span>
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSelectTopic(t)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 border flex-1 sm:flex-none text-center min-w-[120px] sm:min-w-0 ${
                selectedTopic === t.subject
                  ? "bg-[#38BDF8]/20 border-[#38BDF8] text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.3)] scale-105"
                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Ashim's Profile & Quick Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inbio-card p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-900 border border-white/10 relative">
                  <img
                    src="/ashim-shrestha-digital-marketing-nepal.jpg"
                    alt="Ashim Shrestha — Full Stack Digital Marketer Contact Portrait"
                    className="h-full w-full object-cover object-center filter contrast-[105%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Hire
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-white">Ashim Shrestha</h3>
                <p className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mt-1">
                  Full Stack Digital Marketer & SEO Expert
                </p>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed font-medium">
                  Specializing in SEO, Google Ads, Meta Ads, WordPress development, web development, analytics, branding, and digital growth.
                </p>

                {/* Direct Connect Buttons */}
                <div className="mt-6 space-y-3 pt-6 border-t border-white/10">
                  <a
                    href="https://wa.me/9779815904119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/30 transition-all group/wa"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-slate-950">
                        <WhatsAppIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase text-emerald-400">
                          WHATSAPP DIRECT
                        </p>
                        <p className="text-sm font-bold text-white">+977 9815904119</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 group-hover/wa:translate-x-1 transition-transform">
                      Chat ➔
                    </span>
                  </a>

                  <a
                    href="tel:+9779815904119"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/50 hover:bg-white/10 transition-all group/phone"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38BDF8] flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase text-slate-400">
                          PHONE CALL
                        </p>
                        <p className="text-sm font-bold text-white">+977 9815904119</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover/phone:text-[#38BDF8]">
                      Call ➔
                    </span>
                  </a>

                  <a
                    href="mailto:hello@ashimshrestha.com"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/50 hover:bg-white/10 transition-all group/mail"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38BDF8] flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase text-slate-400">
                          EMAIL ADDRESS
                        </p>
                        <p className="text-sm font-bold text-white">hello@ashimshrestha.com</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover/mail:text-[#38BDF8]">
                      Mail ➔
                    </span>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase text-slate-400">
                        LOCATION
                      </p>
                      <p className="text-sm font-bold text-white">Damak, Jhapa, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3">
                  CONNECT ON SOCIALS
                </span>
                <div className="flex gap-3">
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
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 shadow-sm hover:bg-[#2563eb] hover:border-[#2563eb] transition-all"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Direct Launcher & Contact Form */}
          <div className="lg:col-span-7">
            <div className="inbio-card p-5 sm:p-8">
              {/* Interactive Tab Switcher */}
              <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/10 mb-6 sm:mb-8">
                <button
                  onClick={() => setActiveTab("whatsapp")}
                  className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-center ${
                    activeTab === "whatsapp"
                      ? "bg-[#25D366] text-slate-950 shadow-md shadow-[#25D366]/20 font-extrabold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>WhatsApp Chat</span>
                </button>
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-center ${
                    activeTab === "form"
                      ? "bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/30 font-extrabold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Project Form</span>
                </button>
              </div>

              {activeTab === "whatsapp" ? (
                /* Interactive WhatsApp Messenger Simulator */
                <div className="space-y-4 sm:space-y-6">
                  {/* Mock WhatsApp Chat Window */}
                  <div className="rounded-2xl bg-slate-950/90 border border-emerald-500/30 overflow-hidden shadow-2xl">
                    {/* Chat Header */}
                    <div className="p-3.5 sm:p-4 bg-emerald-950/60 border-b border-emerald-500/20 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="relative shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                            alt="Ashim Avatar"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-emerald-400"
                          />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 truncate">
                            <span>Ashim Shrestha</span>
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          </p>
                          <p className="text-[10px] sm:text-[11px] text-emerald-400 truncate">
                            Online • Typically replies instantly
                          </p>
                        </div>
                      </div>
                      <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-bold border border-emerald-500/30 shrink-0 whitespace-nowrap">
                        Direct Line
                      </span>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4 min-h-[180px] sm:min-h-[220px] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                      {/* Incoming Message */}
                      <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%]">
                        <div className="p-3 sm:p-3.5 rounded-2xl rounded-tl-none bg-slate-900 border border-white/10 text-xs text-slate-200 leading-relaxed shadow-md">
                          <p className="font-semibold text-[#38BDF8] mb-1">Ashim Shrestha</p>
                          Hey there! 👋 Excited to hear about your project or idea. What can I build
                          or optimize for you today?
                          <span className="block text-[9px] text-slate-500 text-right mt-1">
                            Just now
                          </span>
                        </div>
                      </div>

                      {/* Outgoing Message Preview */}
                      <div className="flex items-end justify-end gap-2">
                        <div className="p-3 sm:p-3.5 rounded-2xl rounded-tr-none bg-emerald-950 border border-emerald-500/40 text-xs text-emerald-100 leading-relaxed max-w-[92%] sm:max-w-[85%] shadow-md">
                          <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1">
                            Your Message Preview:
                          </p>
                          <p className="break-words">{chatMessage}</p>
                          <span className="block text-[9px] text-emerald-400/70 text-right mt-1">
                            Ready to send
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Quick Preset Chips */}
                    <div className="p-2.5 sm:p-3 bg-slate-900/80 border-t border-white/10 flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-2">
                      <span className="text-[10px] font-bold uppercase text-slate-400 w-full mb-0.5 sm:mb-1">
                        Quick Message Presets:
                      </span>
                      {[
                        "👋 Hi Ashim, I want to build a Web App",
                        "📈 I need Meta & Google Ads strategy",
                        "💼 Available for a quick call?",
                        "🤝 Let me hire you for my project",
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => setChatMessage(preset)}
                          className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-500/40 border border-white/10 text-[10px] sm:text-[11px] text-slate-300 hover:text-emerald-300 transition-all text-left w-full sm:w-auto leading-tight"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>

                    {/* Chat Input & Action */}
                    <div className="p-2.5 sm:p-4 bg-slate-950 border-t border-white/10 flex items-center gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 bg-white/5 border border-white/15 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#25D366] min-w-0"
                      />
                      <button
                        onClick={() => handleDirectWhatsAppLaunch()}
                        className="px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 text-xs font-extrabold uppercase flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 shadow-lg shadow-[#25D366]/20 transition-all active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Send</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-center text-[11px] sm:text-xs text-slate-400">
                    💡 Clicking <strong className="text-emerald-400">Send</strong> opens WhatsApp
                    directly with your pre-formatted message.
                  </p>
                </div>
              ) : (
                /* Full Contact Form */
                <div>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-slate-950 mx-auto mb-4 shadow-lg shadow-[#25D366]/30">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Redirected!</h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                        Thank you for reaching out. We have opened WhatsApp with your details
                        formatted for instant chat.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            phone: "",
                            email: "",
                            subject: "Web App Development",
                            message: "",
                          });
                        }}
                        className="inbio-btn px-6 py-3 text-xs font-bold uppercase tracking-wider"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitForm} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Your Name */}
                        <div>
                          <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                            YOUR NAME *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="e.g. John Doe"
                            className="w-full h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-xs font-medium text-white placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                            PHONE / WHATSAPP
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+977 9815904119"
                            className="w-full h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-xs font-medium text-white placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-xs font-medium text-white placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                          SUBJECT / TOPIC
                        </label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="e.g. Web Development / Ads Strategy"
                          className="w-full h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-xs font-medium text-white placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                          PROJECT DETAILS *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell me about your goals, timelines, or requirements..."
                          className="w-full p-4 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <WhatsAppIcon className="w-5 h-5" /> Submit & Connect on WhatsApp
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
