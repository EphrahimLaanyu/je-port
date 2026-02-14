import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Maison J&E",
  description: "Initialize protocol. Commission work or make a general inquiry.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}