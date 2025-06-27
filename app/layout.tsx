import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InteractiveGradientBackground from "./InteractiveGradientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesse Hernandez - Creative Technologist",
  description: "Portfolio of Jesse Hernandez, a creative technologist and full-stack product builder specializing in mobile apps, backend APIs, and brand identities.",
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
      >
        <InteractiveGradientBackground />
        {children}
      </body>
    </html>
  );
}
