import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur's world",
  description: "Creative portfolio by Arthur FRANÇOIS",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
