import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunaxcode - Code at the Speed of Light | Professional Websites & Mobile Apps",
  description: "Get professional websites and mobile apps delivered fast. From 48-hour landing pages to full mobile applications - we help Filipino SMEs establish and grow their digital presence.",
  keywords: "web development Philippines, landing page, 48 hour delivery, AI chat widget, SME websites, mobile app development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
