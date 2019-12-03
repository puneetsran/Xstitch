import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function getColours(pattern) {
  // return () => {
  return axios
    .get(`/api/checkpoints/${pattern.id}`)
    .then(({ data: { checkpoint } }) => {
      console.log("res from within get colours", checkpoint);
    });
  // };
}

export default function PatternListItem(props) {
  return (
    <Card style={{ width: "20rem", postition: "absolute" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body
        style={{
          background: "#a6c2de",
          border: "solid",
          borderColor: "darkgrey"
        }}
      >
        <div>
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
        </div>
        <Button
          // className="view-pattern"
          // onClick={console.log("click")}
          variant="primary"
          style={{
            padding: "7px",
            marginRight: "3px",
            background: "darkgrey"
          }}
        >
          View
        </Button>
        <Button
          variant="primary"
          style={{
            padding: "7px",
            marginRight: "3px",
            background: "darkgrey"
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
