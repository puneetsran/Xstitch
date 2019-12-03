import React, { useState } from "react";
import Row from "./Row";


export default function Grid(props) {
  
  const [dragging, setDragging] = useState("false");
  const rows = props.pattern.map((row, index) => {
    return (
      <Row
        key={index}
        row={index}
        values={row}
        updateColor={props.updateColor}
        dragging={dragging}
        size={props.size}
      />
    );
  });

  function mouseDown() {
    setDragging("true");
  }

  function mouseUp() {
    setDragging("false");
  }
  return (
    <section className="grid">
      <div id="capture" onMouseDown={mouseDown} onMouseUp={mouseUp}>{rows}</div>
    </section>
  );
}
