import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vebnora.prabhakarsamitipoguj.workers.dev";

const siteTitle = "We Build Websites That Make Your Business Stand Out.";

const siteDescription =
  "We help businesses grow online with modern, beautiful and high-performing websites designed to turn visitors into customers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Vebnora | Professional Website Design",

  description: siteDescription,

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Vebnora",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vebnora - We Build Websites That Make Your Business Stand Out.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
