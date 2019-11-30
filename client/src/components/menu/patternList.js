import React, { useEffect, useState } from "react";
import PatternListItem from "./patternListItem";
import axios from "axios";

export default function PatternList(props) {
  const [pattern, setPattern] = useState([]);

  // const user = {
  //   name: "John",
  //   email: "John@email.com",
  //   password: "password"
  // }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get("/api/favourites/").then(res => {
      console.log("favourites here", res.data);
      setPattern(res.data);
    });
  }, []);

  let patternCards = pattern.map(item => {
    return (
      <PatternListItem
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });

  return <div>{patternCards}</div>;
}
