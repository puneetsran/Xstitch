import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Pattern from "./pattern";

export default function Patterns(props) {
  const patterns = props.patterns.map(pattern => {
    return <Pattern key={pattern.id} pattern={pattern} />;
  });
  return (
    <div className="pattern-container">
      <div className="patterns">{patterns}</div>
    </div>
  );
}
