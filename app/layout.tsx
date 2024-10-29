import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Poppins, Lobster } from "next/font/google";
import { LoadingProvider } from "@/context/LoadingContext";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Add weights you need for Poppins
  variable: "--font-poppins",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"], // Lobster has only regular weight
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "PolPal - Your Voting Companion",
  description:
    "Easily locate your polling unit during elections and stay informed with news in politics, business, and sports. Download PolPal now!",
  openGraph: {
    title: "PolPal - Your Voting Companion",
    description:
      "Find your polling unit during elections and stay updated with the latest news in politics, business, and sports. Download the PolPal app now!",
    url: "https://yourdomain.com",
    siteName: "PolPal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/plat.png",
        width: 800,
        height: 300,
        alt: "PolPal App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@palpol",
    title: "PolPal - Your Voting Companion",
    description:
      "Locate your polling unit and stay updated with the latest news. Download PolPal today!",
    images: "/images/plat.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} ${poppins.variable} ${lobster.variable} antialiased`}
      >
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
