"use client";

import { motion } from "motion/react";

type AnimationType = "rotate" | "bounce" | "fade" | "slide";

export default function Rectangle({
  color,
  width,
  height,
  className,
  animationType,
  duration,
}: {
  color: string;
  width: string;
  height: string;
  className?: string;
  animationType?: AnimationType;
  duration?: number;
}) {
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
        return;
    }
  };

  const getRandomDuration = () => {
    return Math.random() * 5;
  };

  return (
    <motion.div
      animate={getAnimation()}
      transition={{
        duration: duration ? duration : getRandomDuration(),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`${color} ${width} ${height} rounded-2xl ${className}`}
    ></motion.div>
  );
}
