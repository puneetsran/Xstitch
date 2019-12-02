import React from "react";

//same as Pixel component, minus click functionality
export default function ViewPixel(props) {
  return <div className="view-pixel" style={{ backgroundColor: props.color }}></div>;
}
