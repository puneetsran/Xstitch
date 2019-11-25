import React from "react";
import Row from "./Row";

//array for testing component
const picture = [
  ["#303f46", "#ffffff", "#607d8b"],
  ["#303f46", "#607d8b", "#303f46"],
  ["#303f46", "#ffffff", "#607d8b"]
];

export default function Grid(props) {
  const rows = picture.map(row => {
    return <Row values={row} />;
  });
  return <section className="grid">{rows}</section>;
}
