import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import axios from 'axios'

export default function PatternListItem(props) {



  return (
    <Card style={{ width: '20rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body style={{ background: "#a6c2de", border: "solid", borderColor: "darkgrey" }}>
        <div>
          <h2>Title</h2>
          {props.title}
          <h3>Description</h3>
          {props.description}
        </div>
        <Button variant="primary"
          style={{
            padding: '7px',
            marginRight: "3px",
            background: "darkgrey"
          }}>
          View
          </Button>
        <Button variant="primary"
          style={{
            padding: '7px',
            marginRight: "3px",
            background: "darkgrey"
          }}>
          Delete
          </Button>

      </Card.Body>
    </Card>
  )
}