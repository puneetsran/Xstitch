import React, { useState } from "react";
import ViewGrid from "./ViewGrid";
import "./View.css";
import { Button, Icon } from "semantic-ui-react";
import axios from "axios";

//default array for rendering grid
// will need to change to be props.pattern



export default function View(props) {
  const blankPattern = [];

  let colours = props.setClickedView.colours


  console.log("state inside view", props.setClickedView)
  console.log("this is colours", colours)



  let gridView = <ViewGrid pattern={blankPattern} />

  if (colours) {
    gridView = <ViewGrid pattern={colours} />
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
          <Button icon color="blue" labelPosition="left" floated="right">
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
