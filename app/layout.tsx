import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trinity Worship Center | Welcome Home",
  description:
    "Join us this Sunday at Trinity Worship Center, Mogappair, Chennai. Experience uplifting worship, vibrant community, and inspiring messages. 8:00 AM (Tamil) & 10:30 AM (English).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teachers.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${teachers.className} min-h-full flex flex-col bg-[#faf9f8] text-[#1a1918] selection:bg-[#f36801] selection:text-white font-sans`}>
        <Navbar />
        <main className="flex-grow flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


