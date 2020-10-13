import React, { useState, useEffect } from "react";
import TextboxColor from "./components/TextboxColor";
import SliderColor from "./components/SliderColor";
import ListColor from "./components/ListColor";
import { getColorToners, getSliceList } from "./utils";

function ColorToner() {
  const [colorList, setColorList] = useState<string[]>([]);
  const [selectedColorList, setSelectedColorList] = useState<string[]>([]);

  return (
    <div>
      <TextboxColor callback={(color) => setColorList(getColorToners(color))} />
      <SliderColor
        callback={(range) =>
          setSelectedColorList(getSliceList(colorList, range))
        }
      />
      <ListColor items={selectedColorList} />
    </div>
  );
}

export default ColorToner;
