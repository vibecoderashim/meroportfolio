import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type BlogPost = {
  id: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  inlineImage?: {
    src: string;
    caption: string;
    alt: string;
  };
};

const posts: BlogPost[] = [
  {
    id: "seo-2026",
    title: "5 SEO & AI Search Trends That Will Dominate 2026",
    tag: "SEO & GROWTH",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "As AI Overviews and Google Gemini reshape search engine result pages, traditional keyword stuffing is dead. Here is how to optimize for Answer Engine Optimization (AEO).",
    content: [
      "Search Engine Optimization is undergoing its biggest transformation in two decades. Traditional blue links are giving way to immediate AI summaries at the top of Google search results.",
      "1. Answer Engine Optimization (AEO): Structure your website schema and blog content in direct Question-and-Answer formats. Generative AI models cite authoritative, well-structured snippets.",
      "2. Entity-Based Keyword Architecture: Search engines no longer evaluate isolated keywords; they map topical authority entities across your entire domain.",
      "3. First-Party Experiential Proof: Google's E-E-A-T heavily favors real case studies, first-person metrics, and video evidence over regurgitated AI content.",
      "4. Core Web Vitals & Sub-Second Load Times: Sub-second load speed is no longer just a technical metric — it directly dictates crawl budget efficiency.",
    ],
  },
  {
    id: "brand-identity",
    title: "How to Build an Unforgettable Brand Identity from Scratch",
    tag: "GRAPHIC DESIGN",
    date: "Mar 25, 2026",
    readTime: "7 min read",
    image: "/brand-identity-design-system.jpg",
    inlineImage: {
      src: "/brand-identity-design-system.jpg",
      caption: "Visual Identity Blueprint: Logo Grid, Typographic Hierarchy & Digital Brand Asset System",
      alt: "Brand Identity Design System and Color Palette Guidelines by Ashim Shrestha",
    },
    excerpt:
      "A logo is not a brand. Learn how modern visual systems, color psychology, and typography build immediate trust before a customer ever reads your copy.",
    content: [
      "Most business owners confuse logo design with brand identity. A logo is simply a signature; a brand identity is the complete emotional atmosphere your business projects.",
      "Step 1: The Core Positioning Triangle. Define your brand archetype, target customer fear, and singular core promise before drawing a single vector line.",
      "Step 2: Mathematical Typographic Pairing. Combine a high-personality display font for headlines with a clean, ergonomic sans-serif for body copy.",
      "Step 3: Color Psychology in Digital UX. Primary accents should capture high visual frequency while neutral backgrounds reduce eye fatigue during long browsing sessions.",
      "Step 4: Consistent Packaging & Touchpoint Playbook. Ensure your social media reels, email banners, and physical packaging share an unmistakable visual rhythm.",
    ],
  },
  {
    id: "meta-vs-google",
    title: "Meta Ads vs Google Ads: High ROAS Scaling Framework",
    tag: "DIGITAL MARKETING",
    date: "Mar 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Should you spend your ad budget on Google Search intent or Meta interruptive video ads? Here is a strategic framework to decide based on your business model.",
    content: [
      "Choosing between Meta Ads (Facebook & Instagram) and Google Ads is one of the most critical ad spend decisions for growing businesses.",
      "Google Search Ads win on High Intent. When a prospect searches for 'WordPress developer in Nepal' or 'emergency legal services', they are ready to hire immediately.",
      "Meta Ads win on Demand Generation & Visual Impulse. If your product requires visual demonstration or emotional appeal (such as DTC skincare or coffee roasters), Meta Reels allow you to generate demand out of thin air.",
      "The Hybrid Funnel Strategy: Allocate 70% of budget to Meta Ads for top-of-funnel discovery, and 30% to Google Search & Retargeting to capture high-intent leads who saw your social ads.",
    ],
  },
];

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="py-24 sm:py-32 bg-[#080c14] border-b border-white/10 text-white relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#7c3aed]/20 to-[#06b6d4]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inbio-subtitle">VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
          <h2 className="inbio-title">My Blog</h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPost(post)}
              className="inbio-card p-6 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden rounded-2xl mb-6 bg-slate-900 aspect-video border border-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold tracking-widest text-[#38BDF8] uppercase">
                    {post.tag}
                  </span>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#38BDF8] group-hover:text-[#a855f7] group-hover:gap-2 transition-all">
                <span>READ POST</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0f172a]/95 backdrop-blur-2xl border border-white/20 text-white p-6 sm:p-8 rounded-3xl shadow-2xl">
          {selectedPost && (
            <div>
              <div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-slate-900 border border-white/15">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <DialogHeader>
                <div className="flex items-center gap-3 mb-2 text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
                  <span>{selectedPost.tag}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>
                <DialogTitle className="text-2xl font-bold text-white leading-snug">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-6">
                {selectedPost.content.map((paragraph, idx) => (
                  <div key={idx} className="space-y-4">
                    <p>{paragraph}</p>
                    {idx === 1 && selectedPost.inlineImage && (
                      <figure className="my-6 overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
                        <img
                          src={selectedPost.inlineImage.src}
                          alt={selectedPost.inlineImage.alt}
                          className="w-full h-auto object-cover max-h-[380px]"
                        />
                        <figcaption className="p-3 text-center text-xs font-semibold text-slate-300 bg-white/5 border-t border-white/10 italic">
                          {selectedPost.inlineImage.caption}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="inbio-btn px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
                >
                  Close Article
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
