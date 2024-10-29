import type { Metadata } from "next";
import { Inter, Lobster, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


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
  title: "PalPol - Your Voting Companion",
  description:
    "Easily locate your polling unit during elections and stay informed with news in politics, business, and sports. Download PalPol now!",
  openGraph: {
    title: "PalPol - Your Voting Companion",
    description:
      "Find your polling unit during elections and stay updated with the latest news in politics, business, and sports. Download the PalPol app now!",
    url: "https://yourdomain.com",
    siteName: "PalPol",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/plat.png",
        width: 800,
        height: 300,
        alt: "PalPol App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@palpol",
    title: "PalPol - Your Voting Companion",
    description:
      "Locate your polling unit and stay updated with the latest news. Download PalPol today!",
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
       {children}
      </body>
    </html>
  );
}
