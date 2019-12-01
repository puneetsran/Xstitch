import React, { useEffect, useState } from "react";
import PatternListItem from "./patternListItem";
import axios from "axios";
import "./styles.css";

export default function PatternList(props) {
  const [patterns, setPatterns] = useState([]);

  // const user = {
  //   name: "John",
  //   email: "John@email.com",
  //   password: "password"
  // }

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   axios.get("/api/favourites/").then(res => {
  //     const patterns_id = res.data.map(pattern => {
  //       return pattern.pattern_id;
  //     });
  //     console.log("patterns_id", patterns_id);
  //     patterns_id.map(fav => {
  //       return getPattern(fav);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    axios.get(`/api/patterns/1}`).then(res => {
      // const patterns_id = res.map(pattern => {
      //   console.log("patterns_idsss", pattern);
      //   // return patterns_id
      // });
      let patternArray = [];
      patternArray.push(res.data.pattern);
      // console.log(
      //   "inside get patterns for pattern list",
      //   res.data.patterns.splice(
      //     res.data.patterns.length - res.data.patterns.length / 2
      //   )
      // );
      setPatterns(
        res.data.patterns.splice(
          res.data.patterns.length - res.data.patterns.length / 2
        )
      );
    });
  }, []);

  let patternCards = patterns.map(item => {
    console.log("hi", item);
    return (
      <PatternListItem
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });

  return <div className="sidebar">{patternCards}</div>;
}
