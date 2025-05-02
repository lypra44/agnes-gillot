import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Agnès Gillot - Naturopathe à Bellevigne",
  description: "Naturopathie, massage bien-être et réflexologie plantaire à Bellevigne (49)",
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
