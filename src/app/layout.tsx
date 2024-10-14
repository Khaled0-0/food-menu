import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font imports
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

export const metadata: Metadata = {
  title: "Food Menu Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
