"use client";

import { motion } from "motion/react";

type AnimationType = "rotate" | "bounce" | "fade" | "slide";

export default function Circle({
  color,
  size,
  className,
  animationType = "rotate",
  duration,
}: {
  color: string;
  size: string;
  className?: string;
  animationType?: AnimationType;
  duration?: number;
}) {
  const getRandomDuration = () => {
    return Math.random() * 5; // Génère un nombre entre 0 et 5
  };

  const getAnimation = () => {
    switch (animationType) {
      case "rotate":
        return { rotate: 360 };
      case "bounce":
        return { y: [0, -20, 0] };
      case "fade":
        return { opacity: [0, 1] };
      case "slide":
        return { x: [0, 100, 0] };
      default:
        return { rotate: 360 };
    }
  };

  return (
    <motion.div
      animate={getAnimation()}
      transition={{
        duration: duration ?? getRandomDuration(),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`${color} ${size} rounded-full ${className}`}
    ></motion.div>
  );
}
