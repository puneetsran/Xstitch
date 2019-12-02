import React, { useState } from "react";
import ViewGrid from "./ViewGrid";
import "./View.css";
import { Button, Icon } from "semantic-ui-react";

//default array for rendering grid
const blankPattern = [];
for (let i = 0; i < 20; i++) {
  blankPattern.push([]);
  for (let j = 0; j < 20; j++) {
    blankPattern[i].push("#fff");
  }
}

// needs to be set up with html2canvas to generate the preview
function print() {
  return;
}

export default function View(props) {
  // will need to change this to load pattern passed in from props
  const [pattern, updatePattern] = useState(blankPattern);

  return (
    <section className="view">
      <ViewGrid pattern={pattern} />
      <div className="view-buttons">
        <Button.Group vertical>
          <Button icon labelPosition="left" onClick={props.addColumn}>
            <Icon name="heart" />
            Favourite
          </Button>
          <Button icon labelPosition="left" onClick={props.addColumn}>
            <Icon name="print" />
            Print
          </Button>
          <Button icon labelPosition="left" onClick={props.addColumn}>
            <Icon name="image" />
            Save
          </Button>
          <Button icon color="blue" labelPosition="left" onClick={print} floated="right">
            Edit
            <Icon name="edit" />
          </Button>
          <Button icon color="green" labelPosition="left" onClick={print} floated="right">
            Fork
            <Icon name="fork" />
          </Button>
        </Button.Group>
      </div>
    </section>
  );
}
