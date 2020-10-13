import React from "react";
import TextboxColor from "./components/TextboxColor";
import SliderColor from "./components/SliderColor";
import ListColor from "./components/ListColor";

function ColorToner() {
  return (
    <div>
      <TextboxColor />
      <SliderColor />
      <ListColor />
    </div>
  );
}

export default ColorToner;
