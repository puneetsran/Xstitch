import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function RowButtons(props) {
  return (
    <Button.Group vertical>
      <Button icon labelPosition="left" onClick={props.addRow}>
        <Icon name="plus" />
        Add Row
      </Button>
      <Button icon labelPosition="left" onClick={props.deleteRow}>
        Delete Row
        <Icon name="minus" />
      </Button>
    </Button.Group>
  );
}
