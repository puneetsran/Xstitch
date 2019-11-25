import React from "react";
import Pixel from "./Pixel"

export default function Row(props) {
  const pixels = props.values.map(pixel => {
    return <Pixel color={pixel} />;
  });
  return <div className="row">{pixels}</div>;
}