import React, { useState, useEffect } from "react";
import TextboxColor from "./components/textbox/TextboxColor";
import SliderColor from "./components/slider/SliderColor";
import ListColor from "./components/list/ListColor";
import { getColorToners, getSliceList } from "./utils";
import "./ColorToner.scss";

const ColorToner: React.FC = () => {
  const [colorList, setColorList] = useState<string[]>([]);
  const [range, setRange] = useState<number>(1);

  return (
    <div className="container">
      <TextboxColor callback={(color) => setColorList(getColorToners(color))} />
      <SliderColor value={range} callback={(range) => setRange(range)} />
      <ListColor items={getSliceList(colorList, range)} />
    </div>
  );
};

export default ColorToner;
