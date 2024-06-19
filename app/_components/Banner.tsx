import React, { FC } from "react";

interface IBanner {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  textSize: string;
}

const Banner: FC<IBanner> = ({ children, bgColor, textColor, textSize }) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${textSize} m-4 w-full p-12 font-black text-center`}
    >
      {children}
    </div>
  );
};

export default Banner;
