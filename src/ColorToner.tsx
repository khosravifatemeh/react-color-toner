import React, { useState, useEffect } from "react";
import TextboxColor from "./components/textbox/TextboxColor";
import SliderColor from "./components/slider/SliderColor";
import ListColor from "./components/list/ListColor";
import { getColorToners, getSliceList } from "./utils";
import "./ColorToner.scss";

const ColorToner: React.FC = () => {
  const [colorList, setColorList] = useState<string[]>([]);
  const [selectedColorList, setSelectedColorList] = useState<string[]>([]);
  const [range, setRange] = useState<number>(1);
  const [validColor, setValidColor] = useState("");

  useEffect(() => {
    if (!colorList.length) return;
    return setSelectedColorList(getSliceList(colorList, range));
  }, [range]);

  useEffect(() => {
    if (!validColor) return;
    return setColorList(getColorToners(validColor, "#000000", 40));
  }, [validColor]);

  useEffect(() => {
    if (!validColor || !colorList.length) return;
    return setSelectedColorList(getSliceList(colorList, range));
  }, [validColor]);

  return (
    <div className="container">
      <TextboxColor callback={(color) => setValidColor(color)} />
      <SliderColor value={range} callback={(range) => setRange(range)} />
      <ListColor items={selectedColorList} />
    </div>
  );
};

export default ColorToner;
