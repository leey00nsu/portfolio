import { twMerge } from "tailwind-merge";
import React from "react";

interface Heading4Props {
  className?: string;
  children: React.ReactNode;
}

const Heading4 = ({ children, className }: Heading4Props) => {
  return (
    <h4
      className={twMerge(
        "text-base sm:text-lg lg:text-xl font-medium",
        className
      )}
    >
      {children}
    </h4>
  );
};

export default Heading4;
