import React, { useState } from "react";
import TextboxColor from "./components/TextboxColor";
import SliderColor from "./components/SliderColor";
import ListColor from "./components/ListColor";
import { getColorToners } from "./utils";

function ColorToner() {
  const [colorList, setColorList] = useState<string[]>([]);

  return (
    <div>
      <TextboxColor callback={(color) => setColorList(getColorToners(color))} />
      <SliderColor />
      <ListColor />
    </div>
  );
}

export default ColorToner;
