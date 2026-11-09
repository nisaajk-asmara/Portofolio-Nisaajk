import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | Full-Stack Developer & Researcher`,
  description:
    `Personal portfolio of ${profile.name}, a Full-Stack Developer and Information Systems researcher experienced in software engineering, data, and academic research.`,
  openGraph: {
    title: `${profile.name} | Full-Stack Developer & Researcher`,
    description:
      `Personal portfolio of ${profile.name}, a Full-Stack Developer and Information Systems researcher experienced in software engineering, data, and academic research.`,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
