import React, { useState } from "react";
import ViewGrid from "./ViewGrid";
import "./View.css";
import { Button, Icon } from "semantic-ui-react";
import axios from "axios";

export default function View(props) {
  const blankPattern = [];

  let colours = props.setClickedView.colours

  let gridView = <ViewGrid pattern={blankPattern} />

  if (colours) {
    gridView = <ViewGrid pattern={colours} />
  }

  function goToEditpage() {
    props.setPage("edit")
    props.getCheckpointHistory()
    props.getPattern()
  }

  return (
    <section className="view">
      {gridView}
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
          <Button icon color="blue" labelPosition="left" floated="right" onClick={goToEditpage}>
            Edit
            <Icon name="edit" />
          </Button>
          <Button icon color="green" labelPosition="left" floated="right">
            Fork
            <Icon name="fork" />
          </Button>
        </Button.Group>
      </div>
    </section>
  );
}
