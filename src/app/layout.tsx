import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur's world",
  description: "Creative portfolio by Arthur FRANÇOIS",
};

const mainFont = Work_Sans({ weight: "200" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
