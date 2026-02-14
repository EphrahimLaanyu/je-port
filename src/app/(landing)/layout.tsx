import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your preferred font
import "../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JE Port | Premium Restaurant SaaS",
  description: "Revolutionizing Kenyan Restaurants through tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EAE8E4] antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}