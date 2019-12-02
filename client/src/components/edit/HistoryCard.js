import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default function HistoryCard(props) {
  return (
    <div className="history-card">
      <Card>
        <Image src={props.img} size="small" />
        <Card.Content extra>
          <Icon name="clock outline" />
          {props.dateCreated}
        </Card.Content>
        <Button basic size="small" content="View" />
      </Card>
    </div>
  );
}
