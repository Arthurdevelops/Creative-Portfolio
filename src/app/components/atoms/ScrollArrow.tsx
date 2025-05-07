"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface ScrollArrowProps {
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function ScrollArrow({
  className = "",
  iconClassName = "w-8 h-8",
  onClick,
}: ScrollArrowProps) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDoubleDownIcon className={iconClassName} />
    </motion.div>
  );
}
