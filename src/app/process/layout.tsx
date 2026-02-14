import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Process | Maison J&E",
  description: "Our architectural approach to digital systems. From blueprint to deployment.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}