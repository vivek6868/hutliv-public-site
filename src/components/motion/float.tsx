"use client";

import type { PropsWithChildren } from "react";

import { motion, useReducedMotion } from "framer-motion";

type FloatProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Float({ children, className, delay = 0 }: FloatProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [-4, 6, -4] }}
      transition={{
        duration: 7,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
