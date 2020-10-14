import React, { useState } from "react";
import { isValidColor } from "utils";

type Props = {
  callback: (color: string) => void;
};

const TextboxColor: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(true);

  function handleChange(e: any) {
    setValue(e.target.value);
    if (isValidColor(e.target.value)) {
      setHasError(false);
      callback(e.target.value);
      return;
    }
    return setHasError(true);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        style={{ borderWidth: 1, borderColor: hasError ? "red" : "green" }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
export default TextboxColor;
