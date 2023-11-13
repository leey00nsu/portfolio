import { twMerge } from "tailwind-merge";
import React from "react";

interface AProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const A = ({ href, children, className }: AProps) => {
  return (
    <a
      target="_blank"
      href={href}
      className={twMerge("external-link", className)}
    >
      {children}
    </a>
  );
};

export default A;
