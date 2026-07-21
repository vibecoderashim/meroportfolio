import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashim Shrestha — Full-Stack Digital Marketing Architect" },
      { name: "description", content: "I help businesses grow through Creative Design & Powerful Digital Strategies. 5+ years of experience in digital marketing, graphic design, and web development." },
      { property: "og:title", content: "Ashim Shrestha — Digital Marketing Architect" },
      { property: "og:description", content: "Turning digital complexity into predictable, measurable growth." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <ProcessSection />
      <TestimonialsSection />
      <WhyChooseMe />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
