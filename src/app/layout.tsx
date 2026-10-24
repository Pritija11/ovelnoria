import type { Metadata } from "next";
import { Hanken_Grotesk, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import "./globals.css";

// One grotesk face used everywhere (body and display), matching the
// reference site's single-typeface system rather than a serif/sans pair.
const sansUI = Hanken_Grotesk({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ovelnoria — Senior Software Studio for Fast-Moving Teams",
    template: "%s · Ovelnoria",
  },
  description:
    "Ovelnoria is a software development startup in Lalitpur, Nepal, designing and building custom web and mobile products for other startups and growing teams.",
  keywords: [
    "Ovelnoria",
    "software development agency",
    "custom software studio",
    "MVP development",
    "web app development",
    "mobile app development",
    "product engineering agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ovelnoria — Senior Software Studio for Fast-Moving Teams",
    description:
      "A remote-first software development startup designing and building custom web and mobile products for other startups and growing teams.",
    siteName: SITE_NAME,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovelnoria — Senior Software Studio for Fast-Moving Teams",
    description:
      "A remote-first software development startup designing and building custom web and mobile products for other startups and growing teams.",
  },
};

// NOTE: address/phone below are placeholder/dummy values (per request),
// not a real registered office — swap for the real thing before launch.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  // Points at the dynamically generated icon route (src/app/icon.tsx) —
  // there is no static icon.png file, so a literal "/icon.png" 404s.
  logo: `${SITE_URL}/icon`,
  description:
    "Ovelnoria is a software development startup in Lalitpur, Nepal, designing and building custom web and mobile products for other startups and growing teams.",
  email: "hello@ovelnoria.ltd",
  telephone: "+977-1-4785236",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jhamsikhel-2",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sansUI.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
