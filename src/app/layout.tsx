import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
// Import des styles Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { Manrope, Raleway } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Manrope-Fallback", "Arial", "sans-serif"],
  variable: "--font-manrope",
  preload: true,
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Raleway-Fallback", "Arial", "sans-serif"],
  variable: "--font-raleway",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agnes-gillot.fr'),
  title: "Agnès Gillot - Naturopathe à Héric (44810) | Consultations & Massages",
  description:
    "Agnès Gillot, naturopathe certifiée à Héric (44810). Consultations personnalisées, massages bien-être, réflexologie. Prenez rendez-vous au 07 83 26 18 11.",
  keywords:
    "naturopathe Héric, naturopathie Loire-Atlantique, massage bien-être Héric, réflexologie plantaire 44810, consultation naturopathie",
  authors: [{ name: "Agnès Gillot" }],
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
  icons: {
    icon: [
      {
        url: '/img/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
    apple: [
      {
        url: '/img/favicon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/img/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.agnes-gillot.fr",
    title: "Agnès Gillot - Naturopathe à Héric (44)",
    description:
      "Accompagnement personnalisé en naturopathie, massages bien-être thérapeutiques et réflexologie plantaire à Héric (44). Retrouvez équilibre et vitalité naturellement.",
    siteName: "Agnès Gillot - Naturopathe",
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 600,
        alt: "Agnès Gillot Naturopathe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnès Gillot - Naturopathe à Bellevigne",
    description:
      "Accompagnement personnalisé en naturopathie, massages bien-être thérapeutiques et réflexologie plantaire à Bellevigne (49). Retrouvez équilibre et vitalité naturellement.",
    images: ["/img/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/img/favicon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/logo.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/img/pattern.svg"
          as="image"
          type="image/svg+xml"
        />
        {/* Favicon optimization */}
        <link rel="icon" href="/img/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/favicon.svg" />
        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body 
        className={`${manrope.variable} ${raleway.variable} ${manrope.className} antialiased`}
        style={{ fontOpticalSizing: 'auto' }}
      >
        <StructuredData />
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
