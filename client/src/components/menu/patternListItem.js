import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

export default function PatternListItem(props) {

  function getViewpage() {
    props.viewPage("view")
    props.renderSavedPattern(props.id)

  }
  return (
    <Card style={{ height: "375px", width: "250px", margin: "10px" }}>
    <Image
      style={{ height: "230px", width: "250px", overflow: "hidden" }}
      src={props.image_url}
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="card-controls">
        <Button basic color="blue" onClick={getViewpage}>
          View
        </Button>
      </div>
    </Card.Content>
  </Card>
  );
}