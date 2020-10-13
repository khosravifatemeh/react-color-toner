import React, { useState } from "react";
import { isValidColor } from "./../utils";
type Props = {
  callback: (color: string) => void;
};
const TextboxColor: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  function handleChange(e: any) {
    setValue(e.target.value);
    if (isValidColor(value)) {
      setHasError(false);
      callback(value);
      return;
    }
    return setHasError(true);
  }
  return <input type="text" value={value} onChange={(e) => handleChange(e)} />;
};
export default TextboxColor;
