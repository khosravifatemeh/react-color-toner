import React, { useState } from "react";
type Props = {
  callback: (range: number) => void;
};
const SliderColor: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState("");
  function handleChange(e: any) {
    setValue(e.target.value);
    return callback(e.target.value);
  }
  return (
    <input
      type="range"
      min="1"
      max="40"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
export default SliderColor;
