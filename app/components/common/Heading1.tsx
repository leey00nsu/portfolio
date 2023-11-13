import { twMerge } from "tailwind-merge";
import React from "react";

interface Heading1Props {
  className?: string;
  children: React.ReactNode;
}

const Heading1 = ({ children, className }: Heading1Props) => {
  return (
    <h1
      className={twMerge(
        "text-3xl sm:text-4xl lg:text-6xl font-semibold",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading1;
