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
    <div className={`${color} ${transform} absolute p-2 top-1/2 left-1/2`}>
      <h1
        className={`${textSize} ${textColor} uppercase text-center whitespace-nowrap font-bold`}
      >
        {title}
      </h1>
    </div>
  );
};

export default ArirangTag;
