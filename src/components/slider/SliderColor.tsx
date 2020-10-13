import React from "react";
import "./SliderColor.scss";

type Props = {
  callback: (range: number) => void;
  value: number;
};

const SliderColor: React.FC<Props> = ({ callback, value }) => {
  return (
    <div className="slider-container">
      <span>Shades</span>
      <input
        type="range"
        min="1"
        max="40"
        value={value}
        onChange={(e) => callback(parseInt(e.target.value))}
      />
    </div>
  );
};
export default SliderColor;
