import { twMerge } from "tailwind-merge";
import React from "react";

interface Heading2Props {
  className?: string;
  children: React.ReactNode;
}

const Heading2 = ({ children, className }: Heading2Props) => {
  return (
    <h2
      className={twMerge(
        "text-2xl sm:text-3xl lg:text-4xl font-semibold",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading2;
