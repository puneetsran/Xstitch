import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHeart, IoIosShareAlt } from "react-icons/io";

export default function Pattern(props) {
  const [isFavourited, setIsFavourited] = useState(false);

  const currentUser = {
    name: "John",
    email: "John@email.com",
    password: "password"
  };

  useEffect(() => {
    axios.get(`/api/patterns/${pattern.id}`).then(res => {
      console.log("response from useEffect", res);
      const favourited = res.data.favourite;
      setIsFavourited(favourited);
    });
  }, []);

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/days"),
  //     axios.get("/api/appointments"),
  //     axios.get("/api/interviewers")
  //   ]).then(all => {
  //     dispatch({
  //       type: "SET_APPLICATION_DATA",
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data
  //     });
  //   });

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
          console.log("data here", response.config.data);
          if (response.config.data) {
            setIsFavourited(true);
            addedToFavourite();
          }
        });
    };
  }

  function addedToFavourite() {
    return alert("Added to favourites!");
    // console.log("does this work?");
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
  const pattern = props.pattern;
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
            <IoIosHeart
              className={`heart ${isFavourited ? "is-favourited" : ""}`}
              onClick={addToFavourites(pattern)}
            ></IoIosHeart>
            <IoIosShareAlt
              className="share"
              // onClick={sharePattern()}
            ></IoIosShareAlt>
          </div>
        </div>
      </div>
    </li>
  );
}
