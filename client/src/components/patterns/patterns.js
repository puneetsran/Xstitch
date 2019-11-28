import React, { useEffect, Component, useReducer, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./styles.css";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHeart, IoIosShareAlt } from "react-icons/io";
// import reducer from "reducers/application";

// const PatternsContainer = styled.div``;

export default function Patterns(props) {
  // const [state, setState] = useState();
  // console.log("state here", state);

  function viewPattern(pattern) {
    // console.log("pattern here", pattern);
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
      <div className="card-columns" key={pattern.id}>
        <div className="card">
          <div class="card-body">
            <h5 class="card-title">{pattern.title}</h5>
            <p class="card-text">{pattern.description}</p>
            <p>{pattern.colours}Pattern here</p>
            <IoIosShareAlt
              class="share"
              onClick={viewPattern(pattern)}
            ></IoIosShareAlt>
            <IoIosHeart
              class="heart"
              onClick={viewPattern(pattern)}
            ></IoIosHeart>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="pattern-container">
      <div className="patterns">{patterns}</div>
    </div>
  );
}
