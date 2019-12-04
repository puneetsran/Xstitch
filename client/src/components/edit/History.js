import React from "react";
import HistoryCard from "./HistoryCard";

export default function History(props) {
  const cards = props.history.map((card, index) => {
    return <HistoryCard key={index} img={card.image_url} />;
  });

  return <div className="history">{cards}</div>;
}
