import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  Check,
  ExternalLink,
  Zap,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type ToolItem = {
  id: string;
  name: string;
  category: "web" | "marketing" | "seo" | "design" | "ai";
  categoryLabel: string;
  level: number;
  experience: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  logoSvg: React.ReactNode;
};

// SVG Vector Logos for high fidelity in both Light & B&W Dark Mode
const toolLogos = {
  react: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.5"
        stroke="#00d8ff"
        strokeWidth="1.5"
        transform="rotate(0 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.5"
        stroke="#00d8ff"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.5"
        stroke="#00d8ff"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="2" fill="#00d8ff" />
    </svg>
  ),
  nextjs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.8 17.5l-6.8-9.3v9.3H9.5V6.5h2l6.8 9.3V6.5h1.5v11h-2z" />
    </svg>
  ),
  wordpress: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#21759b" strokeWidth="2" />
      <path d="M2.5 12a9.5 9.5 0 0014.2 8.3L8.5 7.2A9.5 9.5 0 002.5 12z" fill="#21759b" />
      <path
        d="M16 11.5c0-1.1-.4-1.9-.7-2.5-.5-.8-.9-1.5-.9-2.3 0-.9.7-1.7 1.6-1.7h.1A9.5 9.5 0 0012 2.5a9.4 9.4 0 00-6.1 2.2l6.4 17.2 3.7-10.4z"
        fill="#21759b"
      />
    </svg>
  ),
  elementor: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#92003B">
      <path d="M9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z" />
    </svg>
  ),
  html5: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L3.903 4.41l.708 8.017h9.803l-.337 3.565-2.718.73-2.721-.73-.18-1.966H5.851l.345 4.303 5.772 1.603 5.772-1.603.784-8.579H8.531z" />
    </svg>
  ),
  meta: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.8 5c-2 0-3.8 1.1-5 2.8C10.6 6.1 8.8 5 6.8 5 3.6 5 1 7.6 1 10.8c0 4.1 4.5 8.2 10.2 12.2a1.3 1.3 0 001.6 0C18.5 19 23 14.9 23 10.8 23 7.6 20.4 5 16.8 5z"
        stroke="#0668e1"
        strokeWidth="2"
      />
    </svg>
  ),
  googleAds: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 22h20L12 2z" fill="#4285F4" />
      <circle cx="12" cy="15" r="3" fill="#FBBC04" />
      <path d="M16.5 17.5L20 22h-8" stroke="#34A853" strokeWidth="2" />
    </svg>
  ),
  mailchimp: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFE01B">
      <path d="M11.267 0C6.791-.015-1.82 10.246 1.397 12.964l.79.669a3.88 3.88 0 0 0-.22 1.792c.084.84.518 1.644 1.22 2.266.666.59 1.542.964 2.392.964 1.406 3.24 4.62 5.228 8.386 5.34 4.04.12 7.433-1.776 8.854-5.182.093-.24.488-1.316.488-2.267 0-.956-.54-1.352-.885-1.352-.01-.037-.078-.286-.172-.586-.093-.3-.19-.51-.19-.51.375-.563.382-1.065.332-1.35-.053-.353-.2-.653-.496-.964-.296-.311-.902-.63-1.753-.868l-.446-.124c-.002-.019-.024-1.053-.043-1.497-.014-.32-.042-.822-.197-1.315-.186-.668-.508-1.253-.911-1.627 1.112-1.152 1.806-2.422 1.804-3.511-.003-2.095-2.576-2.729-5.746-1.416l-.672.285A678.22 678.22 0 0 0 12.7.504C12.304.159 11.817.002 11.267 0z" />
    </svg>
  ),
  analytics: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E37400">
      <path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z" />
    </svg>
  ),
  semrush: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF642D">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2v2z" />
    </svg>
  ),
  figma: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
    </svg>
  ),
  photoshop: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#31A8FF">
      <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zm2.509 3.53c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" />
    </svg>
  ),
  illustrator: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF9A00">
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" />
    </svg>
  ),
  canva: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00C4CC">
      <path d="M6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z" />
    </svg>
  ),
  chatgpt: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#10a37f">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  gemini: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"
        fill="url(#gemini_grad)"
      />
      <defs>
        <linearGradient id="gemini_grad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#1a73e8" />
          <stop offset="50%" stopColor="#a142f4" />
          <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
      </defs>
    </svg>
  ),
  tailwind: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .2 1.6.9 2.4 1.7 1.2 1.3 2.6 2.8 6.4 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1-.2-1.6-.9-2.4-1.7C17.2 7.5 15.8 6 12 6zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .2 1.6.9 2.4 1.7 1.2 1.3 2.6 2.8 6.4 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1-.2-1.6-.9-2.4-1.7C11.2 13.5 9.8 12 6 12z" />
    </svg>
  ),
  zapier: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF4F00">
      <path d="M13 2L3 14h7v8l10-12h-7V2z" />
    </svg>
  ),
};

const allTools: ToolItem[] = [
  {
    id: "react-next",
    name: "React.js & Next.js",
    category: "web",
    categoryLabel: "WEB DEVELOPMENT",
    level: 95,
    experience: "6+ Years",
    tagline: "Ultra-Fast Full-Stack React Architecture",
    description:
      "Engineering high-speed interactive web applications, SSR platforms, and custom UI components optimized for sub-second page rendering.",
    features: [
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Tailwind CSS & Framer Motion UI Animations",
      "API Route Proxying & Secure Token Storage",
      "Core Web Vitals Performance Score 95+",
    ],
    gradient: "from-[#00d8ff] via-[#2563eb] to-[#7c3aed]",
    logoSvg: toolLogos.react,
  },
  {
    id: "wordpress-woo",
    name: "WordPress & WooCommerce",
    category: "web",
    categoryLabel: "E-COMMERCE & CMS",
    level: 98,
    experience: "7+ Years",
    tagline: "Custom WooCommerce Stores & High-Converting Websites",
    description:
      "Building scalable e-commerce systems, custom PHP themes, elementor pro blocks, custom post types, and speed optimizations for high-volume stores.",
    features: [
      "Custom WooCommerce Payment & Shipping Gateways",
      "Direct WhatsApp Instant Inquiry & Order Routing",
      "Redis Caching & Database Optimization",
      "Custom Plugin Development & ACF Pro Integration",
    ],
    gradient: "from-[#21759b] via-[#96588a] to-[#2563eb]",
    logoSvg: toolLogos.wordpress,
  },
  {
    id: "elementor-pro",
    name: "Elementor Pro & Theme Builder",
    category: "web",
    categoryLabel: "CMS BUILDER",
    level: 96,
    experience: "6+ Years",
    tagline: "Pixel-Perfect Custom Elementor Layouts & Dynamic Content",
    description:
      "Crafting bespoke Elementor Pro templates, custom widgets, dynamic loop grids, and lightweight responsive blocks without bloat.",
    features: [
      "Custom Elementor Loop Grids & Dynamic Tags",
      "Header, Footer & Popup Builder Systems",
      "CSS Flexbox & Grid Container Optimization",
      "Zero-JS Lightweight Performance Tuning",
    ],
    gradient: "from-[#92003B] via-[#d946ef] to-[#6366f1]",
    logoSvg: toolLogos.elementor,
  },
  {
    id: "html5-css3",
    name: "HTML5 & Modern CSS3",
    category: "web",
    categoryLabel: "CORE WEB UI",
    level: 98,
    experience: "7+ Years",
    tagline: "Semantic HTML5 Markup & Advanced CSS Animations",
    description:
      "Writing clean, accessible semantic HTML structure paired with CSS Grid, Flexbox, custom variables, and keyframe animations.",
    features: [
      "Semantic SEO-Ready HTML Structures",
      "CSS Grid & Multi-Break Responsive Layouts",
      "Custom CSS Keyframe Animations & FX",
      "Cross-Browser Compatibility Standards",
    ],
    gradient: "from-[#E34F26] via-[#1572B6] to-[#0284c7]",
    logoSvg: toolLogos.html5,
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS & Modern UI",
    category: "web",
    categoryLabel: "FRONTEND DESIGN",
    level: 98,
    experience: "5+ Years",
    tagline: "Sleek Black & White Themes with Radiant Gradients",
    description:
      "Mastering atomic utility classes, custom responsive themes, glassmorphism, glowing borders, dark mode obsidian schemes, and micro-interactions.",
    features: [
      "High-Contrast B&W Theme Systems",
      "Custom Gradient Text & Glowing Borders",
      "Responsive Touch Target Optimization",
      "Zero-Runtime CSS Footprint",
    ],
    gradient: "from-[#38BDF8] via-[#2563eb] to-[#06b6d4]",
    logoSvg: toolLogos.tailwind,
  },
  {
    id: "meta-ads",
    name: "Meta Ads Manager & CAPI",
    category: "marketing",
    categoryLabel: "PERFORMANCE ADS",
    level: 96,
    experience: "5+ Years",
    tagline: "Full-Funnel Facebook & Instagram Ads Scaling",
    description:
      "Managing $100K+ ad budgets with Server-Side Conversion API (CAPI), lookalike audiences, retargeting funnels, and video reel ad creative strategy.",
    features: [
      "Server-Side Conversion API (CAPI) & Pixel Setup",
      "A/B Creative Hook & Video Reel Testing",
      "High-Intent Retargeting & LAL Audiences",
      "Weekly ROAS Reporting & Account Scaling",
    ],
    gradient: "from-[#0668e1] via-[#00c6ff] to-[#10b981]",
    logoSvg: toolLogos.meta,
  },
  {
    id: "google-ads",
    name: "Google Search Ads & PPC",
    category: "marketing",
    categoryLabel: "SEARCH ADS",
    level: 94,
    experience: "5+ Years",
    tagline: "High-Intent Google Search & Performance Max",
    description:
      "Architecting Google Search & Performance Max campaigns with Quality Score optimization, bid strategies, and negative keyword filtering.",
    features: [
      "High-Intent Keyword Bidding & Quality Score Optimization",
      "Performance Max & Shopping Feed Optimization",
      "Negative Keyword Mining & Budget Guardrails",
      "Conversion Value Tracking & Maximize ROAS Strategy",
    ],
    gradient: "from-[#4285F4] via-[#FBBC04] to-[#34A853]",
    logoSvg: toolLogos.googleAds,
  },
  {
    id: "mailchimp-email",
    name: "Mailchimp & Email Marketing",
    category: "marketing",
    categoryLabel: "EMAIL AUTOMATION",
    level: 90,
    experience: "4+ Years",
    tagline: "Automated Lead Sequences & Newsletter Campaigns",
    description:
      "Designing responsive email templates, customer segmentation, welcome drip sequences, and abandoned cart recovery funnels.",
    features: [
      "Automated Welcome Drip & Nurture Sequences",
      "E-Commerce Abandoned Cart Recovery Flows",
      "Audience Segmentation & Tagging Rules",
      "A/B Subject Line & Open Rate Optimization",
    ],
    gradient: "from-[#FFE01B] via-[#f59e0b] to-[#ec4899]",
    logoSvg: toolLogos.mailchimp,
  },
  {
    id: "semrush-seo",
    name: "Semrush & Search SEO",
    category: "seo",
    categoryLabel: "SEO & AUDITING",
    level: 92,
    experience: "5+ Years",
    tagline: "Technical SEO Audits & Rank #1 Growth Strategies",
    description:
      "Ranking businesses at the top of Google organic search results with competitor gap analysis, technical schema markup, and local GMB optimizations.",
    features: [
      "In-Depth Keyword Research & Search Intent Mapping",
      "Technical Core Web Vitals Audit & Schema Integration",
      "Local Google Business Profile Ranking & Citations",
      "Organic Backlink Audits & Competitor Gap Analysis",
    ],
    gradient: "from-[#FF642D] via-[#f59e0b] to-[#10b981]",
    logoSvg: toolLogos.semrush,
  },
  {
    id: "ga4-gtm",
    name: "Google Analytics 4 & GTM",
    category: "seo",
    categoryLabel: "DATA ANALYTICS",
    level: 94,
    experience: "5+ Years",
    tagline: "Conversion Event Tracking & Funnel Attribution",
    description:
      "Deploying custom GTM event tags, GA4 ecommerce funnels, cross-domain user tracking, and custom Looker Studio performance dashboards.",
    features: [
      "GA4 E-Commerce Event & Purchase Tracking",
      "Google Tag Manager Custom DataLayers",
      "Cross-Domain & Form Submission Attribution",
      "Real-Time Looker Studio Executive Reports",
    ],
    gradient: "from-[#E37400] via-[#f59e0b] to-[#3b82f6]",
    logoSvg: toolLogos.analytics,
  },
  {
    id: "figma-design",
    name: "Figma & UI/UX Systems",
    category: "design",
    categoryLabel: "DESIGN & BRANDING",
    level: 92,
    experience: "6+ Years",
    tagline: "Interactive Prototypes & Brand Style Guides",
    description:
      "Designing conversion-focused UI/UX layouts, wireframes, component design systems, logos, social media templates, and marketing materials.",
    features: [
      "Interactive High-Fidelity UI Prototypes",
      "Brand Style Guides & Logo Vector Systems",
      "Social Media Ad Creative & Packaging Mockups",
      "Responsive Layout Grid Systems & Typography Pairs",
    ],
    gradient: "from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]",
    logoSvg: toolLogos.figma,
  },
  {
    id: "adobe-photoshop",
    name: "Adobe Photoshop",
    category: "design",
    categoryLabel: "GRAPHIC EDITING",
    level: 90,
    experience: "6+ Years",
    tagline: "High-Resolution Image Retouching & Ad Banners",
    description:
      "Editing product photography, high-converting promotional banners, social media graphics, and digital manipulation with color grading.",
    features: [
      "E-Commerce Product Retouching & Shadows",
      "High-CTR Social Media Ad Banners",
      "Background Removal & Multi-Layer Compositing",
      "Color Grading & Typography Layouts",
    ],
    gradient: "from-[#31A8FF] via-[#2563eb] to-[#1d4ed8]",
    logoSvg: toolLogos.photoshop,
  },
  {
    id: "adobe-illustrator",
    name: "Adobe Illustrator",
    category: "design",
    categoryLabel: "VECTOR ARTWORK",
    level: 88,
    experience: "5+ Years",
    tagline: "Vector Logos, Icons & Brand Identity Graphics",
    description:
      "Crafting scalable vector logos, custom icons, print branding collateral, billboards, and high-precision SVG artwork for websites.",
    features: [
      "Vector Logo Design & Scalable Icons",
      "Print Packaging, Flyers & Billboards",
      "Custom Brand Style Guides & Typography",
      "Exporting Clean SVG Code for Developers",
    ],
    gradient: "from-[#FF9A00] via-[#f59e0b] to-[#ea580c]",
    logoSvg: toolLogos.illustrator,
  },
  {
    id: "canva-pro",
    name: "Canva Pro Graphics Suite",
    category: "design",
    categoryLabel: "CREATIVE PRODUCTION",
    level: 95,
    experience: "5+ Years",
    tagline: "Rapid Social Media Banners, Reels & Pitch Decks",
    description:
      "Producing daily high-volume marketing banners, Instagram reels, video ad templates, brand decks, and client presentation slides.",
    features: [
      "Rapid Social Media Creative Production",
      "Short-Form Reel & Story Video Editing",
      "Brand Kit Maintenance & Template Libraries",
      "Client Presentation Decks & PDF Guides",
    ],
    gradient: "from-[#00C4CC] via-[#06b6d4] to-[#3b82f6]",
    logoSvg: toolLogos.canva,
  },
  {
    id: "chatgpt-openai",
    name: "ChatGPT & OpenAI API",
    category: "ai",
    categoryLabel: "AI PROMPTING",
    level: 94,
    experience: "3+ Years",
    tagline: "AI Copywriting, Smart Assistants & Workflow Integration",
    description:
      "Leveraging advanced GPT-4o prompt engineering for high-converting ad copy, SEO articles, custom GPT assistants, and automated customer support.",
    features: [
      "High-Converting Ad & Landing Page Copywriting",
      "Custom GPT Assistant Creation & Knowledge Bases",
      "OpenAI API Integration for Smart App Features",
      "Automated Content Generation & Formatting",
    ],
    gradient: "from-[#10a37f] via-[#059669] to-[#0284c7]",
    logoSvg: toolLogos.chatgpt,
  },
  {
    id: "ai-gemini",
    name: "Gemini AI & Python Automation",
    category: "ai",
    categoryLabel: "AI AGENTS",
    level: 90,
    experience: "3+ Years",
    tagline: "AI Agents & Autonomous Workflow Pipelines",
    description:
      "Integrating custom Gemini AI agents, automated customer messaging chatbots, and Python data scraping pipelines to streamline business ops.",
    features: [
      "Custom Gemini Agent Fine-Tuning & Prompting",
      "WhatsApp & Email Automated Lead Nurturing",
      "Data Scraping & Automated Webhook Workflows",
      "Smart Lead Qualification & CRM Sync",
    ],
    gradient: "from-[#1a73e8] via-[#a142f4] to-[#f97316]",
    logoSvg: toolLogos.gemini,
  },
  {
    id: "zapier-make",
    name: "Zapier & Workflow Automation",
    category: "ai",
    categoryLabel: "WORKFLOW CONNECTOR",
    level: 92,
    experience: "4+ Years",
    tagline: "Cross-App Data Sync & Real-Time Triggers",
    description:
      "Connecting CRMs, advertising lead forms, email platforms, and Google Sheets into seamless automated revenue pipelines.",
    features: [
      "Meta Instant Form to CRM Instant Sync",
      "Automated WhatsApp & Email Notifications",
      "Google Sheets & Database Auto-Population",
      "Multi-Step Conditional Logic Paths",
    ],
    gradient: "from-[#FF4F00] via-[#f59e0b] to-[#7c3aed]",
    logoSvg: toolLogos.zapier,
  },
];

const categoryTabs = [
  { id: "all", label: "ALL TOOLS" },
  { id: "web", label: "WEB DEV" },
  { id: "marketing", label: "PERFORMANCE ADS" },
  { id: "seo", label: "SEO & ANALYTICS" },
  { id: "design", label: "DESIGN & UI/UX" },
  { id: "ai", label: "AI & AUTOMATION" },
];

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTools =
    activeCategory === "all" ? allTools : allTools.filter((t) => t.category === activeCategory);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto Slider Control
  useEffect(() => {
    if (isPlaying && filteredTools.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredTools.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, filteredTools.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTools.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTools.length) % filteredTools.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPlaying(false);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="tools"
      className="py-24 sm:py-32 bg-[#090d16] text-white relative overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Visual Effects - Glowing Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#2563eb]/25 to-[#7c3aed]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#06b6d4]/20 via-[#f59e0b]/15 to-[#7c3aed]/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-black tracking-widest text-white uppercase mb-4 shadow-lg">
            <Sparkles className="h-3.5 w-3.5 text-[#38BDF8]" /> MY DIGITAL TOOLKIT & STACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Tools & <span className="gradient-text-blue-purple-cyan">Technologies</span> I Use
          </h2>
          <p className="mt-4 text-base text-slate-300 font-medium">
            Battle-tested software, frameworks, and ad platforms I leverage daily to engineer
            sub-second websites and 4x+ ROAS campaigns.
          </p>
        </ScrollReveal>

        {/* Category Pills */}
        <ScrollReveal className="mt-10" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categoryTabs.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 flex-1 sm:flex-none text-center min-w-[95px] sm:min-w-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-lg shadow-[#2563eb]/30 border border-white/20 scale-105"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Interactive Feature Slider Showcase */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <span className="text-white font-black">{currentIndex + 1}</span> /{" "}
              {filteredTools.length} Tools Featured
            </div>

            <div className="flex items-center gap-3">
              {/* Pause / Play */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-all shadow-md"
                title={isPlaying ? "Pause Slider" : "Play Slider"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>

              {/* Prev */}
              <button
                onClick={handlePrev}
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-[#2563eb] transition-all shadow-md"
                title="Previous Tool"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-[#2563eb] transition-all shadow-md"
                title="Next Tool"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Featured Active Tool Highlight Card */}
          <div
            className="relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              {filteredTools[currentIndex] && (
                <motion.div
                  key={filteredTools[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-2xl border border-white/15 p-5 sm:p-10 shadow-2xl relative overflow-hidden"
                >
                  {/* Glowing background accent gradient */}
                  <div
                    className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${filteredTools[currentIndex].gradient} opacity-20 blur-3xl pointer-events-none`}
                  />

                  <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
                    {/* Left Icon & Rating */}
                    <div className="md:col-span-4 flex flex-col items-center text-center md:border-r border-white/10 md:pr-8">
                      <div
                        className={`flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-white/10 border border-white/20 shadow-xl mb-3 sm:mb-4 p-3.5 sm:p-4 relative group`}
                      >
                        {filteredTools[currentIndex].logoSvg}
                      </div>

                      <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-[#38BDF8] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-2">
                        {filteredTools[currentIndex].categoryLabel}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                        {filteredTools[currentIndex].name}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 sm:mt-2">
                        <span className="text-xs font-bold text-slate-300">Proficiency:</span>
                        <span className="text-sm font-black text-[#f59e0b]">
                          {filteredTools[currentIndex].level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full max-w-[200px] sm:max-w-none bg-white/10 h-2.5 rounded-full overflow-hidden mt-2 p-0.5 border border-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${filteredTools[currentIndex].gradient}`}
                          style={{ width: `${filteredTools[currentIndex].level}%` }}
                        />
                      </div>
                    </div>

                    {/* Right Details & Features */}
                    <div className="md:col-span-8 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                          {filteredTools[currentIndex].tagline}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 sm:mb-6">
                          {filteredTools[currentIndex].description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                          {filteredTools[currentIndex].features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-slate-200 font-medium bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/10"
                            >
                              <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-white/10">
                        <span className="text-xs font-bold text-slate-400 text-center sm:text-left">
                          Experience:{" "}
                          <strong className="text-white">
                            {filteredTools[currentIndex].experience}
                          </strong>
                        </span>

                        <button
                          onClick={() => setSelectedTool(filteredTools[currentIndex])}
                          className="inbio-btn px-5 py-3 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                          VIEW IMPLEMENTATION DETAILS <Zap className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {filteredTools.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#2563eb]" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Marquee Ticker Slider of All Brand Logos below */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              FULL ARCHITECTURAL STACK AT A GLANCE
            </span>
          </div>

          <div className="brand-marquee relative overflow-hidden py-4 border-y border-white/10 bg-white/5 rounded-2xl backdrop-blur-md">
            <div className="brand-marquee__track flex w-max items-center">
              {[0, 1].map((set) => (
                <div key={set} className="flex shrink-0 items-center gap-6 pr-6">
                  {allTools.map((tool) => (
                    <div
                      key={`${set}-${tool.id}`}
                      onClick={() => setSelectedTool(tool)}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 px-5 py-3 rounded-2xl cursor-pointer transition-all hover:scale-105 shadow-md group"
                    >
                      <div className="h-8 w-8 shrink-0 flex items-center justify-center filter group-hover:scale-110 transition-transform">
                        {tool.logoSvg}
                      </div>
                      <span className="text-xs font-extrabold text-white whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tool Detail Dialog */}
      <Dialog open={!!selectedTool} onOpenChange={() => setSelectedTool(null)}>
        <DialogContent className="w-[92vw] max-w-lg bg-[#0f172a] border border-white/20 text-white p-5 sm:p-8 rounded-3xl shadow-2xl max-h-[85vh] overflow-y-auto">
          {selectedTool && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 border border-white/20 p-2.5 sm:p-3 flex items-center justify-center shrink-0">
                    {selectedTool.logoSvg}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#38BDF8] uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                      {selectedTool.categoryLabel}
                    </span>
                    <DialogTitle className="text-xl sm:text-2xl font-black text-white mt-1">
                      {selectedTool.name}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedTool.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-5 space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">{selectedTool.description}</p>

                <div className="bg-white/5 p-3.5 sm:p-4 rounded-2xl border border-white/10">
                  <h5 className="text-[10px] sm:text-xs font-extrabold text-[#38BDF8] uppercase tracking-wider mb-2">
                    KEY CAPABILITIES & EXECUTIONS
                  </h5>
                  <ul className="space-y-2">
                    {selectedTool.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-xs font-extrabold text-slate-400 text-center sm:text-left">
                  Proficiency Level:{" "}
                  <strong className="text-[#f59e0b]">{selectedTool.level}%</strong>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/20 rounded-xl text-center"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedTool(null)}
                    className="inbio-btn flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    DISCUSS PROJECT <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
