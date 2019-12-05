import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHeart } from "react-icons/io";
import { Card, Image, Button } from "semantic-ui-react";

export default function Pattern(props) {
  const [isFavourited, setIsFavourited] = useState(undefined);

  useEffect(() => {
    axios.get(`/api/patterns/${pattern.id}`).then(res => {
      const favourited = res.data.favourite;
      if (favourited) {
        setIsFavourited(favourited.id);
      }
    });
  }, []);

  function addToFavourites(pattern) {
    return axios
      .post(`/api/favourites/`, {
        user_id: `1`,
        pattern_id: pattern.id
      })
      .then(response => {
        if (response.data.id) {
          setIsFavourited(response.data.id);
          addedToFavourite("Added to favourites!");
        }
      });
  }

  function removeFromFavourites(favouriteID) {
    return axios.delete(`/api/favourites/${favouriteID}`).then(response => {
      setIsFavourited(undefined);
      addedToFavourite("Removed from favourites!");
    });
  }

  function addedToFavourite(string) {
    // return alert(string);
  }

  function getViewpage() {
    props.viewPage("view");
    props.renderSavedPattern(props.pattern.id);
  }
  const pattern = props.pattern;

  return (
    <Card style={{ height: "375px", width: "250px", margin: "10px" }}>
      <Image
        style={{ height: "230px", width: "250px", overflow: "hidden" }}
        src={pattern.image_url}
        alt="pattern image"
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
  );
}
