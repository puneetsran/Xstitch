import React from "react";
import Row from "./Row";
import "./Grid.css";

//if number of rows is increased, add row to the bottom
//  do this by adding an array of transparent values the same length as the other arrays
//if number of columns is increased, add a transparent value to the end of each array in the grid

export default function Grid(props) {

  const rows = props.pattern.map((row, index) => {
    return <Row key={index} row={index} values={row} updateColor={props.updateColor}/>;
  });
  return <section className="grid">{rows}</section>;
}
