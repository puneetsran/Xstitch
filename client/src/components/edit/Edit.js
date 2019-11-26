import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Grid from "./Grid";

//array for testing grid component
//will eventually come from database
const picture = [
  ["#303f46", "#ffffff", "#607d8b"],
  ["#303f46", "#607d8b", "#303f46"],
  ["#303f46", "#ffffff", "#607d8b"]
];

export default function Edit(props) {
  const [color, setColor] = useState("#000000");
  const [pattern, updatePattern] = useState(picture);

  function updateColor(input) {
    const newPattern = pattern.map((row, rowIndex) => {
      if (rowIndex === input[0]) {
        return row.map((pixel, pixelIndex) => {
          if (pixelIndex === input[1]) {
            return (row[pixelIndex] = color);
          } else {
            return pixel;
          }
        });
      } else {
        return row;
      }
    });
    updatePattern(newPattern)
  }

  function handleChangeComplete(input) {
    setColor(input.hex);
  }

  return (
    <section>
      <Grid pattern={pattern} updateColor={updateColor} />
      <ColorPicker onChangeComplete={handleChangeComplete} />
    </section>
  );
}
