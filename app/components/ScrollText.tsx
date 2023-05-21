"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollText = () => {
  return (
    <div className="h-[40px] lg:h-[60px] overflow-hidden">
      <motion.div
        initial={{ translateY: 0 }}
        animate={{
          translateY: [
            0,
            "calc(-33%)",
            "calc(-67%)",
            "calc(-67%)",
            "calc(-33%)",
            0,
          ],
        }}
        transition={{
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <h1 className="text-4xl lg:text-6xl font-semibold dot ">발전하는</h1>
        <h1 className="text-4xl lg:text-6xl font-semibold dot">구현하는</h1>
        <h1 className="text-4xl lg:text-6xl font-semibold dot">해결하는</h1>
      </motion.div>
    </div>
  );
};

export default ScrollText;
