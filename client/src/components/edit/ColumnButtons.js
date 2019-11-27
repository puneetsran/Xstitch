import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function ColumnButtons(props) {
  return (
    <Button.Group vertical>
      <Button icon labelPosition="left" onClick={props.addColumn}>
        <Icon name="plus" />
        Add Column
      </Button>
      <Button icon labelPosition="left" onClick={props.deleteColumn}>
        Delete Column
        <Icon name="minus" />
      </Button>
    </Button.Group>
  );
}
