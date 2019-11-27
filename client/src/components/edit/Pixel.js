import React from "react";
import "./Pixel.css";

export default function Pixel(props) {
  return <div className="pixel" onClick={props.onClick} style={{ backgroundColor: props.color }}></div>;
}
