import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Maison J&E",
  description: "A dual-force collective. Merging the precision of high-level code with the psychology of modern branding.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}