import React from "react";
import ViewPixel from "./ViewPixel"

// same as Row component, minus click functionality
// maps over row from patterns array and returns a bunch of pixels
export default function ViewRow(props) {
  const pixels = props.values.map((pixel, index) => {
    return <ViewPixel key={index} color={pixel} />;
  });
  return <div className="view-row">{pixels}</div>;
}