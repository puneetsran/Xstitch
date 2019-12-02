import React from "react";
import ViewRow from "./ViewRow";

// same as Grid component, minus click functionality and container for image capture
// maps over patterns array, returns a bunch of rows
export default function ViewGrid(props) {
  const rows = props.pattern.map((row, index) => {
    return <ViewRow key={index} row={index} values={row} />;
  });
  return <section className="view-grid">{rows}</section>;
}
