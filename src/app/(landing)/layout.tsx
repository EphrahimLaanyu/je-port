import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your preferred font
import "../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JE Maison Agency",
  description: "Revolutionizing businesses through tech advancements in Kenya",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-white.png",
        href: "/logo-white.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
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
