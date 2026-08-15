import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
      { name: "author", content: "Ashim Shrestha" },
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
    links: [
      {
        rel: "canonical",
        href: "https://ashimshrestha.info.np/",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ashimshrestha.info.np/#person",
      "name": "Ashim Shrestha",
      "givenName": "Ashim",
      "familyName": "Shrestha",
      "jobTitle": "Full Stack Digital Marketer",
      "description":
        "Ashim Shrestha is a Full Stack Digital Marketer in Nepal specializing in SEO, Google Ads, Meta Ads, WordPress, web development, analytics, branding and digital growth.",
      "url": "https://ashimshrestha.info.np/",
      "image": "https://ashimshrestha.info.np/ashim-shrestha-full-stack-digital-marketer.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Damak",
        "addressRegion": "Jhapa",
        "addressCountry": "NP",
      },
      "sameAs": [
        "https://linkedin.com",
        "https://github.com",
        "https://facebook.com",
        "https://instagram.com",
      ],
      "knowsAbout": [
        "Full Stack Digital Marketing",
        "SEO",
        "Search Engine Optimization",
        "Digital Marketing",
        "Google Ads",
        "Meta Ads",
        "Facebook Ads",
        "WordPress",
        "Web Development",
        "Technical SEO",
        "Social Media Marketing",
        "Analytics",
        "Branding",
        "Digital Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ashimshrestha.info.np/#website",
      "url": "https://ashimshrestha.info.np/",
      "name": "Ashim Shrestha — Full Stack Digital Marketer",
      "description":
        "Official website of Ashim Shrestha, Full Stack Digital Marketer & SEO Expert in Nepal.",
      "publisher": {
        "@id": "https://ashimshrestha.info.np/#person",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://ashimshrestha.info.np/#webpage",
      "url": "https://ashimshrestha.info.np/",
      "name": "Ashim Shrestha | Full Stack Digital Marketer & SEO Expert",
      "isPartOf": {
        "@id": "https://ashimshrestha.info.np/#website",
      },
      "about": {
        "@id": "https://ashimshrestha.info.np/#person",
      },
      "mainEntity": {
        "@id": "https://ashimshrestha.info.np/#person",
      },
    },
  ],
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#06080e] text-white font-sans antialiased selection:bg-[#2563eb] selection:text-white"
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
