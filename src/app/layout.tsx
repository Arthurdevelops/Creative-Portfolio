import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

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
      <body className="font-sans bg-white dark:bg-black-900 text-gray-900 dark:text-white transition-colors duration-200">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
