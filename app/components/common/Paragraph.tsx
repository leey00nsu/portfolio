import { twMerge } from "tailwind-merge";
import React from "react";

interface ParagraphProps {
  size: "sm" | "base";
  weight: "medium" | "light";
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ size, weight, children, className }: ParagraphProps) => {
  const textSize = {
    sm: "text-sm sm:text-base lg:text-lg",
    base: "text-base sm:text-lg lg:text-xl",
  };

  const textWeight = {
    light: "font-light",
    medium: "font-medium",
  };

  return (
    <p className={twMerge(textSize[size], textWeight[weight], className)}>
      {children}
    </p>
  );
};

export default Paragraph;
