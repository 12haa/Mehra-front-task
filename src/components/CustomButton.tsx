import React from "react";

interface CustomButtonProps {
  title: string;
  linkUrl?: string;
  iconUrl?: string;
  style?: React.CSSProperties;
}

const CustomButton = ({
  title,
  linkUrl,
  iconUrl,
  style,
}: CustomButtonProps) => {
  return (
    <button className="custom__btn" style={style}>
      <a href={linkUrl}>
        <p>{title}</p>
      </a>
      {iconUrl && <img src={iconUrl} alt="arroEnd" />}
    </button>
  );
};
export default CustomButton;
