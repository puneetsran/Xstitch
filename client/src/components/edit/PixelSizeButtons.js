import React from "react";
import { Button } from "semantic-ui-react";

export default function PixelSizeButtons(props) {
  return (
    <Button.Group>
      <Button onClick={() => props.setSize("small")}>Small</Button>
      <Button onClick={() => props.setSize("medium")}>Medium</Button>
      <Button onClick={() => props.setSize("large")}>Large</Button>
    </Button.Group>
  );
}
