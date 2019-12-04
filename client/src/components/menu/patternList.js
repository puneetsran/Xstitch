import React, { useEffect, useState } from "react";
import PatternListItem from "./patternListItem";
import axios from "axios";
import "./styles.css";

export default function PatternList(props) {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    axios.get("/api/patterns")
      .then((res) => {
        setPatterns(res.data)
      })
  }, []);


  // removed filter function for now
  let patternCards = patterns.map((item => {
    return (
      <PatternListItem
        key={item.id}

        id={item.id}
        title={item.title}
        description={item.description}
        viewPage={props.setPage}
        renderSavedPattern={props.renderSavedPattern}

      />
    )
  }))

  return <div className="sidebar">{patternCards}</div>;
}
