import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Habit Tracker - Build Better Habits, Transform Your Life",
    template: "%s | Habit Tracker",
  },
  description:
    "Build the life you want, one habit at a time. Track your daily habits, set goals, and transform your life with our powerful Android app. Free to download with premium features available.",
  keywords: [
    "habit tracker",
    "habit building",
    "productivity",
    "self improvement",
    "goal tracking",
    "daily habits",
    "android app",
    "habit formation",
  ],
  authors: [{ name: "AKM Elias" }],
  creator: "AKM Elias",
  publisher: "AKM Elias",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    siteName: "Habit Tracker",
    title: "Habit Tracker - Build Better Habits, Transform Your Life",
    description:
      "Build the life you want, one habit at a time. Track your daily habits, set goals, and transform your life with our powerful Android app.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Habit Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habit Tracker - Build Better Habits, Transform Your Life",
    description:
      "Build the life you want, one habit at a time. Track your daily habits, set goals, and transform your life.",
    images: ["/images/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
