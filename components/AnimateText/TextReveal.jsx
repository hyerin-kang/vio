"use client";
import { motion } from "framer-motion";

const TextReveal = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
