import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedTextCharacter({ text, isInView, className }) {
  const letters = Array.from(text);
  const container = useAnimation();

  useEffect(() => {
    if (isInView) {
      container.start("visible");
    } else {
      container.start("hidden");
    }
  }, [isInView]);

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    hidden: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{ overflow: "hidden", display: "inline-flex", width: "100%" }}
        variants={{
          hidden: { opacity: 0 },
          visible: (i = 1) => ({
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: (letters.length - i) * 0.03,
            },
          }),
        }}
        initial="hidden"
        animate={container}
        exit="hidden"
      >
        <h1 className={className}>
          {letters.map((letter, idx) => (
            <motion.span key={idx} variants={child} className="-inter">
              {" "}
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </AnimatePresence>
  );
}
