import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`max-w-[2520px] mx-auto xl:px-10 md:px-10 sm:px-2 px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;