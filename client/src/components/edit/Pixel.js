import React from "react";

export default function Pixel(props) {

  function mouseHandler() {
    if (props.dragging === true) {
      props.onClick();
    }
  }
  return <div className="pixel" onClick={props.onClick} style={{ backgroundColor: props.color }} onMouseOver={mouseHandler}></div>;
}
