import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

export default function HistoryCard(props) {
  return (
    <div className="history-card">
      <Card>
        <div className="history-image">
          <Image src={props.img} size="small" />
        </div>
        <Button basic content="View" />
      </Card>
    </div>
  );
}
