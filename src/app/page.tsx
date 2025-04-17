"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <main>
      <section className="vh-100 bg-background text-foreground">
        <div></div>
        <h1>Welcome to my world</h1>
        <motion.div />
      </section>
    </main>
  );
}
