"use client";

import { motion } from "framer-motion";

type TextVariant = "h1" | "h2" | "h3" | "body" | "small";
type AnimationType = "fade" | "slide" | "bounce" | "scale";

interface AnimatedTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  animationType?: AnimationType;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  children,
  variant = "body",
  animationType,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "h1":
        return "text-12xl font-bold";
      case "h2":
        return "text-9xl font-bold";
      case "h3":
        return "text-6xl font-semibold";
      case "body":
        return "text-2xl font-normal";
      case "small":
        return "sm";
      default:
        return "text-base";
    }
  };

  const getAnimation = () => {
    switch (animationType) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay },
        };
      case "slide":
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          transition: { duration: 0.5, delay },
        };
      case "bounce":
        return {
          initial: { y: -20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay,
          },
        };
      case "scale":
        return {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.5, delay },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay },
        };
    }
  };

  return (
    <motion.div
      {...getAnimation()}
      className={`${getVariantClasses()} ${className}`}
    >
      {children}
    </motion.div>
  );
}
