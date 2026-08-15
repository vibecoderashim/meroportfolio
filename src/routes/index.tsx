import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ToolsSection from "@/components/ToolsSection";
import PortfolioSection from "@/components/PortfolioSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandsSection from "@/components/BrandsSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorGlow from "@/components/CursorGlow";
import { ClientOnly } from "@/components/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashim Shrestha | Full Stack Digital Marketer & SEO Expert" },
      {
        name: "description",
        content:
          "Ashim Shrestha is a Full Stack Digital Marketer in Nepal specializing in SEO, Google Ads, Meta Ads, WordPress, web development, analytics, branding and digital growth.",
      },
      {
        name: "keywords",
        content:
          "Full Stack Digital Marketer, Ashim Shrestha, Digital Marketer in Nepal, SEO Expert Nepal, Digital Marketing Expert Nepal, WordPress Developer Nepal, Google Ads Expert Nepal, Meta Ads Expert Nepal",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ashimshrestha.info.np/" },
      { property: "og:site_name", content: "Ashim Shrestha — Full Stack Digital Marketer" },
      { property: "og:title", content: "Ashim Shrestha | Full Stack Digital Marketer" },
      {
        property: "og:description",
        content:
          "Ashim Shrestha is a Full Stack Digital Marketer specializing in SEO, Google Ads, Meta Ads, WordPress, web development, analytics, branding and digital growth.",
      },
      {
        property: "og:image",
        content: "https://ashimshrestha.info.np/og-ashim-shrestha-full-stack-digital-marketer.jpg",
      },
      {
        property: "og:image:secure_url",
        content: "https://ashimshrestha.info.np/og-ashim-shrestha-full-stack-digital-marketer.jpg",
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Ashim Shrestha — Full Stack Digital Marketer Homepage Preview",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ashim Shrestha | Full Stack Digital Marketer" },
      {
        name: "twitter:description",
        content:
          "Ashim Shrestha is a Full Stack Digital Marketer specializing in SEO, Google Ads, Meta Ads, WordPress, web development, analytics, branding and digital growth.",
      },
      {
        name: "twitter:image",
        content: "https://ashimshrestha.info.np/og-ashim-shrestha-full-stack-digital-marketer.jpg",
      },
      {
        name: "twitter:image:alt",
        content: "Ashim Shrestha — Full Stack Digital Marketer Homepage Preview",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="min-h-screen bg-[#090a0f] text-white relative overflow-hidden"
      suppressHydrationWarning
    >
      <ClientOnly>
        <CursorGlow />
        <AnimatedBackground />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ToolsSection />
        <PortfolioSection />
        <RecentProjectsSection />
        <BrandsSection />
        <ResumeSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </ClientOnly>
    </div>
  );
}
