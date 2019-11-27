import React, { useEffect, Component, useReducer, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./styles.css";
import Button from "react-bootstrap/Button";
// import reducer from "reducers/application";

const PatternsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Patterns(props) {
  // const [state, setState] = useState();
  // console.log("state here", state);

  function viewPattern(pattern) {
    console.log("pattern here", pattern);
    return () => {
      return axios
        .get(`/api/patterns/${pattern.id}`)
        .then(({ data: { pattern } }) => {
          console.log("res!!!!!!", pattern);
        });
    };
  }

  const patterns = props.patterns.map(pattern => {
    return (
      <li className="pattern" key={pattern.id}>
        <p>{pattern.title}</p>
        <p>{pattern.description}</p>
        <p>{pattern.colours}</p>
        <Button onClick={viewPattern(pattern)}>View</Button>
      </li>
    );
  });
  return (
    <div className="patterns">
      <PatternsContainer>{patterns}</PatternsContainer>
    </div>
  );
}
