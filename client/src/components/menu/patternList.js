import React, { useEffect, useState } from "react";
import PatternListItem from "./patternListItem";
import axios from "axios";
import "./styles.css";

export default function PatternList(props) {
  // const [patterns, setPatterns] = useState([]);

  // useEffect(() => {
  //   axios.get(`/api/users/1}`).then(res => {
  //     // let patternArray = [];
  //     // patternArray.push(res.data.pattern);
  //     console.log("res here", res.data);
  //     setPatterns(res.data);
  //   });
  // }, []);

  // removed filter function for now
  let patternCards = props.pattern.map((item => {
    return (
      <PatternListItem
        key={item.id}
        title={item.title}
        description={item.description}
      />
    )
  }))

  return <div className="sidebar">{patternCards}</div>;
}
