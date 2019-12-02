import React from "react";
import HistoryCard from "./HistoryCard";

export default function History(props) {

  const cards = props.history.map(card => {
    return <HistoryCard img={card.img} dateCreated={card.dateCreated} />;
  });

  return <div className="history">{cards}</div>;
}
