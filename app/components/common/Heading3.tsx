import { twMerge } from "tailwind-merge";
import React from "react";

interface Heading3Props {
  className?: string;
  children: React.ReactNode;
}

const Heading3 = ({ children, className }: Heading3Props) => {
  return (
    <h3
      className={twMerge(
        "text-xl sm:text-2xl lg:text-3xl font-medium",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Heading3;
