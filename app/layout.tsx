import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify the font weights you need
  variable: "--font-inter", // Add Inter to your CSS variables
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
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
