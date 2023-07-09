"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const highlightTexts = ["발전하는", "구현하는", "해결하는"];

const ScrollText = () => {
  const [texts, setTexts] = useState(highlightTexts);

  const textSlideHandler = () => {
    setTexts((prev) => {
      const copyTexts = [...prev];
      const firstText = copyTexts.shift()!;
      copyTexts.push(firstText);

      return copyTexts;
    });
  };

  return (
    <div className="h-[36px] sm:h-[40px] lg:h-[60px] overflow-hidden">
      <motion.div
        key={texts[0]}
        initial={{ translateY: 0 }}
        animate={{
          translateY: "-33.3%",
        }}
        onAnimationComplete={() => setTimeout(textSlideHandler, 500)}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        {texts.map((text) => (
          <h1
            key={text}
            className="text-2xl sm:text-4xl lg:text-6xl font-semibold dot "
          >
            {text}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollText;
