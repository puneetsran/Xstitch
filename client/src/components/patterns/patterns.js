import React, { useEffect, Component, useReducer, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./styles.css";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHeart, IoIosShareAlt } from "react-icons/io";
import Pixel from "../edit/Pixel";
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

  function addToFavourites(pattern) {
    return () => {
      return axios
        .get(`/api/patterns/${pattern.id}`)
        .then(({ data: { pattern } }) => {
          console.log("add this to favourite", pattern);
        });
    };
  }

  // function parseString(string) {
  // }

  // const pixelTest = "rgb(0, 0, 0)";
  const patterns = props.patterns.map(pattern => {
    return (
      <li className="card-deck" key={pattern.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{pattern.title}</h5>
            <p className="card-text">{pattern.description}</p>
            {/* <Pixel color={pixelTest} /> */}
            {/* <Pixel color={parseString(pattern.colours)} /> */}
            <p className="view-pattern" onClick={viewPattern(pattern)}>
              {pattern.colours[0]}Pattern here
            </p>
            <div className="card-footer bg-transparent text-right">
              <IoIosShareAlt className="share"></IoIosShareAlt>
              <IoIosHeart
                className="heart"
                onClick={addToFavourites(pattern)}
              ></IoIosHeart>
            </div>
            {/* <div className="text-right"> */}

            {/* </div> */}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="pattern-container">
      <div className="patterns">{patterns}</div>
    </div>
  );
}
