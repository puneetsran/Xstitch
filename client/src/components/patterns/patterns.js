import React, { useState, useEffect } from "react";
import "./patterns.css";
import Pattern from "./pattern";
import beeImage from "./bee.jpg";

function getPatternImages(patterns, checkpoints) {
  return patterns.map(pattern => {
    let matchingCheckpoints = checkpoints.filter(checkpoint => {
      return checkpoint.pattern_id === pattern.id;
    });
    let mostRecentCheckpoint =
      matchingCheckpoints[matchingCheckpoints.length - 1];
    if (mostRecentCheckpoint) {
      pattern.image_url = mostRecentCheckpoint.image_url;
      return pattern;
    } else {
      pattern.image_url = null;
      return pattern;
    }
  });
}

export default function Patterns(props) {
  const [patternData, setPatternData] = useState([]);

  useEffect(() => {
    setPatternData(getPatternImages(props.patterns, props.checkpoints));
  }, [props.patterns, props.checkpoints]);

  const patterns = patternData.map(pattern => {
    return (
      <Pattern
        key={pattern.id}
        pattern={pattern}
        viewPage={props.setPage}
        renderSavedPattern={props.renderSavedPattern}
      />
    );
  });
  return (
    <div className="pattern-main-container">
      <div className="hero-text">Welcome to Xstitch</div>
      <img src={beeImage} alt="cross stitch of a bee" className="bee-image" />
      <div className="pattern-container">{patterns}</div>
    </div>
  );
}
