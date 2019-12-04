import React from "react";
import HistoryCard from "./HistoryCard";

export default function History(props) {
  // let viewPage = props.setViewPage
  const cards = props.history.map((card, index) => {
    console.log("this is card in history", card)
    return <HistoryCard key={index} img={card.image_url} />;
  });

  return <div className="history">{cards}</div>;
}
