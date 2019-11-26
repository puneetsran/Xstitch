import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

export default class Patterns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patterns: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/patterns")
      .then(response => this.setState({ patterns: response.data }));
  }

  render() {
    const { patterns } = this.state;

    return (
      <div>
        {patterns.map(pattern => (
          <li key={pattern.id}>
            <p>{pattern.title}</p>
            <p>{pattern.description}</p>
            <p>{pattern.colours}</p>
          </li>
        ))}
      </div>
    );
  }
}
