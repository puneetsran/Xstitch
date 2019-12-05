import React, { useEffect, useState } from "react";
import PatternListItem from "./patternListItem";
import "./styles.css";

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

export default function PatternList(props) {
  const [patternData, setPatternData] = useState([]);

  useEffect(() => {
    setPatternData(getPatternImages(props.patterns, props.checkpoints));
  }, [props.patterns, props.checkpoints]);

  let patternCards = patternData.map(item => {
    return (
      <PatternListItem
        key={item.id}
        id={item.id}
        title={item.title}
        image_url={item.image_url}
        description={item.description}
        viewPage={props.setPage}
        renderSavedPattern={props.renderSavedPattern}
      />
    );
  });

  return <div className="sidebar">{patternCards}</div>;
}
