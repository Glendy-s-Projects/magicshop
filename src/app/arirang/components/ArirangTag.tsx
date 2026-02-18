import React from "react";

const ArirangTag = ({
  title,
  color,
  transform,
  textSize,
  textColor,
}: {
  title: string;
  color: string;
  transform: string;
  textSize: string;
  textColor: string;
}) => {
  return (
    <div
      className={`${color} ${transform}  absolute p-6 top-1/2 left-1/2 w-[700vw] md:w-[600vw] lg:w-[300vw] rounded-2xl `}
    >
      <h1
        className={`${textSize} ${textColor} uppercase text-center whitespace-nowrap font-semibold overflow-hidden text-4xl`}
      >
        {title}
      </h1>
    </div>
  );
};

export default ArirangTag;
