import type { Metadata } from "next";
import { Epilogue, Manrope, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { EVENT_DETAILS, CONTACT_INFO } from "@/lib/constants";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${EVENT_DETAILS.domain}`),
  title: {
    default: "Food Africa 2026 Exhibition Support in Egypt | Globalize",
    template: "%s | Globalize Food Africa 2026",
  },
  description:
    "Professional interpreters, exhibition staff, buyer outreach, business development and local business support for international exhibitors at Food Africa 2026 in Cairo.",
  keywords: [
    "Food Africa 2026 interpreter",
    "Food Africa Egypt interpreter",
    "Food Africa exhibition staff",
    "Food Africa 2026 exhibition support",
    "exhibition interpreter Egypt",
    "exhibition staffing Egypt",
    "business support Egypt",
    "market entry Egypt",
    "business development Egypt",
    "find distributors in Egypt",
    "find buyers in Egypt",
    "local business support Egypt",
  ],
  authors: [{ name: "Globalize Group", url: `https://${EVENT_DETAILS.domain}` }],
  creator: "Globalize Group",
  publisher: "Globalize Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${EVENT_DETAILS.domain}`,
    siteName: "Globalize Food Africa 2026",
    title: "Food Africa 2026 Exhibition Support in Egypt | Globalize",
    description:
      "Professional interpreters, exhibition staff, buyer outreach, business development and local business support for international exhibitors at Food Africa 2026 in Cairo.",
    images: [
      {
        url: "/images/globalize-logo.png",
        width: 800,
        height: 600,
        alt: "Globalize Group — Food Africa 2026 Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Africa 2026 Exhibition Support in Egypt | Globalize",
    description:
      "Professional interpreters, exhibition staff, buyer outreach, and business development for international exhibitors at Food Africa 2026 in Cairo.",
    images: ["/images/globalize-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `https://${EVENT_DETAILS.domain}/#organization`,
        name: "Globalize Group",
        url: `https://${EVENT_DETAILS.domain}`,
        logo: `https://${EVENT_DETAILS.domain}/images/globalize-logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT_INFO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "Event",
        "@id": `https://${EVENT_DETAILS.domain}/#event`,
        name: EVENT_DETAILS.name,
        startDate: "2026-12-07",
        endDate: "2026-12-10",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: EVENT_DETAILS.venue,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
        },
        description:
          "Food Africa is the continent's largest International Trade Exhibition Specialized in the Food and Agro industries.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#092B72] font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
