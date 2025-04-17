import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur's world",
  description: "Creative portfolio by Arthur FRANÇOIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"nothingforthemoment"}>{children}</body>
    </html>
  );
}
