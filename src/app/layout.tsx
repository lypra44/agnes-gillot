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
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agnès Gillot - Naturopathe à Héric (44)",
  description:
    "Accompagnement personnalisé en naturopathie, massages bien-être thérapeutiques et réflexologie plantaire à Nantes (44). Retrouvez équilibre et vitalité naturellement.",
  keywords:
    "naturopathie, massage bien-être, réflexologie plantaire, Héric, médecine douce, bien-être, santé naturelle, thérapie holistique",
  authors: [{ name: "Agnès Gillot" }],
  robots: "noindex, nofollow",
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
        url: "/img/logo.svg",
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
    images: ["/img/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
