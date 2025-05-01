"use client";

import { motion } from "motion/react";

export default function Rectangle({
  color,
  width,
  height,
}: {
  color: string;
  width: string;
  height: string;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      className={`${color} ${width} ${height} rounded-2xl`}
    ></motion.div>
  );
}
