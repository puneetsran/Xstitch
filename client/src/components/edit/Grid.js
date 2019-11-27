import React from "react";
import Row from "./Row";
import "./Grid.css";

export default function Grid(props) {

  const rows = props.pattern.map((row, index) => {
    return <Row key={index} row={index} values={row} updateColor={props.updateColor}/>;
  });
  return <section className="grid">{rows}</section>;
}
