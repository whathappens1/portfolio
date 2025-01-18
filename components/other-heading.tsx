"use client";
import React, { FC } from "react";

interface HeadingProps {
  title?: string;
  isCentered?: boolean;
  isColored?: boolean;
  textWidth?: boolean;
  isOneColor?: boolean;
  className?: string;
  description?: string;
}

const Heading: FC<HeadingProps> = ({
  title,
  isCentered,
  isColored,
  textWidth,
  isOneColor,
  className,
  description,
}) => {
  return (
    <div className={`${className} space-y-3`}>
      <p className={`text-base font-semibold text-primary ${isCentered && "text-center"}`} >
        {description}
      </p>
      <h1
        className={`!leading-tight !text-muted-foreground	
        ${isCentered && "text-center"} ${
          textWidth && `w-[80%]`
        } ${
          isColored && "!bg-gradient-to-tr !from-primary !to-accent"
        } ${
          isOneColor
            ? "text-[#eee]"
            : "bg-clip-text text-transparent bg-gradient-to-b dark:from-[#fff] dark:to-[#adadad] from-[#000] to-[#202020]"
        } font-extrabold 		 text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
