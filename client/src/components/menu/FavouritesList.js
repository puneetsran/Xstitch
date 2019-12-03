import React, { useEffect, useState } from "react";
import FavouriteListItem from "./FavouriteListItem";
import axios from "axios";
import "./styles.css";

export default function FavouriteList(props) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get("/api/favourites/").then(res => {
      const pattern_ids = res.data.map(pattern => {
        return pattern.pattern_id;
      });
      setFavourites(pattern_ids);
    });
  }, []);

  let patternCards = props.allPatterns
    .filter(
      pattern =>
        pattern.id === favourites[0] ||
        pattern.id === favourites[1] ||
        pattern.id === favourites[2]
    )
    .map(pattern => {
      return (
        <FavouriteListItem
          key={pattern.id}
          title={pattern.title}
          description={pattern.description}
        />
      );
    });

  return <div className="sidebar">{patternCards}</div>;
}
