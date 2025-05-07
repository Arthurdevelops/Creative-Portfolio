"use client";

import AnimatedText from "../atoms/AnimatedText";
import ScrollArrow from "../atoms/ScrollArrow";
import { motion } from "framer-motion";

export default function HeroSection() {
  function scrollToProjects() {
    const projectsSection = document.getElementById("projects");
    console.log(projectsSection);
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black-900 text-white snap-start">
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedText variant="h1" animationType="slide" delay={0.2}>
            Welcome to my <br /> Portfolio
          </AnimatedText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ScrollArrow
            className="mt-8 text-white/80 hover:text-white transition-colors"
            onClick={scrollToProjects}
            iconClassName="w-20 h-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
