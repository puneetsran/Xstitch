// import React, { useEffect, Component, useReducer, useState } from "react";
import React, { useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import "./styles.css";
// import Button from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHeart, IoIosShareAlt } from "react-icons/io";
// import Pixel from "../edit/Pixel";
// import reducer from "reducers/application";

// const PatternsContainer = styled.div``;

export default function Patterns(props) {
  // const [state, setState] = useState();
  // console.log("state here", state);

  const currentUser = {
    name: "John",
    email: "John@email.com",
    password: "password"
  };

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

  // does not work
  function addToFavourites(pattern) {
    return () => {
      return axios
        .post(`/api/favourites/`, {
          user_id: `1`,
          pattern_id: pattern.id
        })
        .then(response => {
          console.log("response here", response);
        });
    };
  }
  function sharePattern() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const patterns = props.patterns.map(pattern => {
    return (
      <li className="card-deck" key={pattern.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{pattern.title}</h5>
            <p className="card-text">{pattern.description}</p>
            <p className="view-pattern" onClick={viewPattern(pattern)}>
              {pattern.colours[0]}Pattern here
            </p>
            <div className="card-footer bg-transparent text-right">
              <IoIosShareAlt
                className="share"
                onClick={sharePattern()}
              ></IoIosShareAlt>
              <IoIosHeart
                className="heart"
                onClick={addToFavourites(pattern)}
              ></IoIosHeart>
            </div>
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
