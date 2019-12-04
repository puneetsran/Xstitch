import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHeart, IoIosShareAlt } from "react-icons/io";
import { GoRepoForked } from "react-icons/go";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default function Pattern(props) {
  const [isFavourited, setIsFavourited] = useState(undefined);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    axios.get(`/api/patterns/${pattern.id}`).then(res => {
      // console.log("response from useEffect", res);
      const favourited = res.data.favourite;
      // console.log("favourite from get:", favourited);
      if (favourited) {
        setIsFavourited(favourited.id);
      }
    });
  }, []);

  function viewPattern(pattern) {
    // console.log("pattern here", pattern);
    return () => {
      return axios
        .get(`/api/patterns/${pattern.id}`)
        .then(({ data: { pattern } }) => {
          // console.log("res!!!!!!", pattern);
        });
    };
  }

  // axios.get("api/checkpoints")
  // .then((res) => {
  //   console.log("this is res from get CP", res.data)
  //   const checkpointHistory = res.data.filter((item) => {
  //     // console.log("this is item", item.patterns_id)
  //     // console.log("this is current cp pattern_id", checkpoint.patterns_id)
  //     return item.pattern_id === checkpoint.pattern_id
  //   })
  //   console.log("this is cp history", checkpointHistory)
  //   setHistory([...checkpointHistory])
  // })

  function getColours(pattern) {
    // return () => {
    return axios.get(`/api/checkpoints/`).then(res => {
      console.log("res within get colours", res.data);
      setImageURL(res.data.image_url);
    });

    // .then(({ data: { checkpoint } }) => {
    // setImageURL(checkpoint.image_url);
    // console.log()
    // console.log("res from within get colours", checkpoint);
    // });
    // };
  }

  // function getImageUrl(pattern) {
  //   // return () => {
  //   return axios
  //     .get(`/api/checkpoints/${pattern.id}`)
  //     .then(({ data: { checkpoint } }) => {
  //       const image_URL = checkpoint.image_url;
  //       if (image_URL) {
  //         return image_URL;
  //       }
  //       // console.log("res from within get image url", checkpoint.image_url);
  //     });
  //   // };
  // }

  function addToFavourites(pattern) {
    // console.log("axios is posting:", pattern);
    return axios
      .post(`/api/favourites/`, {
        user_id: `1`,
        pattern_id: pattern.id
      })
      .then(response => {
        // console.log("ID of new favourite:", response.data.id);
        // console.log("data here", response.config.data);
        if (response.data.id) {
          setIsFavourited(response.data.id);
          addedToFavourite("Added to favourites!");
        }
      });
  }

  function removeFromFavourites(favouriteID) {
    // console.log("removing from favourites:", favouriteID);
    return axios.delete(`/api/favourites/${favouriteID}`).then(response => {
      setIsFavourited(undefined);
    });
  }

  function addedToFavourite(string) {
    // return alert(string);
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
  const [showImage, setShowImage] = useState("show");
  let imageDiv;
  if (showImage === "show") {
    // getColours(props.pattern);
    imageDiv = (
      <div>
        <img src={imageURL} alt=""></img>
      </div>
    );
  }

  function getViewpage() {
    props.viewPage("view");
    props.renderSavedPattern(props.pattern.id);
  }
  const pattern = props.pattern;

  return (
    // <div className="card-deck" key={pattern.id}>
    // <div className="card-wrapper" key={pattern.id}>
    <Card style={{ height: "375px", width: "250px", margin: "10px" }}>
      <Image
        style={{ height: "230px", width: "250px", overflow: "hidden" }}
        src={pattern.image_url}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{pattern.title}</Card.Header>
        <Card.Description>{pattern.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="card-controls">
          <Button basic color="blue" onClick={getViewpage}>
            View
          </Button>
          <IoIosHeart
            className={`heart ${
              isFavourited ? "is-favourited" : "is-not-favourited"
            }`}
            onClick={() => {
              // console.log("heart clicked - isFavourited:", isFavourited);
              if (isFavourited) {
                removeFromFavourites(isFavourited);
              } else {
                addToFavourites(pattern);
              }
            }}
          ></IoIosHeart>
        </div>
      </Card.Content>
    </Card>
    // </div>
  );
}

{
  /* <div className="card">
        <div className="card-body">
          <p
            className="view-pattern"
            onClick={() => {
              console.log("inside view pattern click");
              getColours(pattern);
            }}
          >
            {imageDiv}
          </p>
          <h5 className="card-title">{pattern.title}</h5>
          <p className="card-text">{pattern.description}</p>
          <div className="card-footer bg-transparent text-right">
            <GoRepoForked className="fork-pattern"></GoRepoForked>
            <IoIosHeart
              className={`heart ${
                isFavourited ? "is-favourited" : "is-not-favourited"
              }`}
              onClick={() => {
                // console.log("heart clicked - isFavourited:", isFavourited);
                if (isFavourited) {
                  removeFromFavourites(isFavourited);
                } else {
                  addToFavourites(pattern);
                }
              }}
            ></IoIosHeart>
            <IoIosShareAlt
              className="share"
              // onClick={sharePattern()}
            ></IoIosShareAlt>
          </div>
        </div>
      </div>
    </div> */
}
