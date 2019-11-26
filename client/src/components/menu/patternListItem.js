import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function PatternListItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Some Pattern</Card.Title>
        <Card.Text>
          This is a description about a pattern.
      </Card.Text>
        <Button variant="primary">View</Button>
        <Button variant="primary">Delete</Button>

      </Card.Body>
    </Card>
  )

}