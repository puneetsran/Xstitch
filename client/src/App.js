import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/menu/menu";
import Menu from "./components/menu/menu";
import PatternList from "./components/menu/patternList";
import Patterns from "./components/patterns";
import FavouritesList from "./components/menu/FavouritesList";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./components/edit/Edit";

export default function App() {
  let content;
  let showPage;
  let [sideMenuState, setSideMenuState] = useState(false);

  // let [sideMenuState, setSideMenuState] = useState(null);   // can be null or 'fav' or 'mypatt';

  let [patterns, setPatterns] = useState([]);
  // let [message, setMessage] = useState("Click the button to load data!");
  let [page, setPage] = useState("home");
  const [user, setUser] = useState([]);
  const [storage, setStorage] = useState([]);

  // console.log("this is user", user);
  if (page === "home") {
    showPage = <Patterns patterns={patterns} />;
  } else if (page === "create") {
    showPage = <Edit />;
  } else {
    showPage = <div></div>;
  }

  //opens side menu
  if (sideMenuState === false) {
    content = <div></div>;
  } else {
    content = [<FavouritesList allPatterns={patterns} />];
  }

  // if (sideMenuState === false) {
  //   content = <div></div>;
  // } else if (sideMenuState === "action/3.1") {
  //   // content = [<PatternList />, <FavouritesList />];
  //   content = [<PatternList patterns={patterns} />];
  // } else if (sideMenuState === "#action/3.2") {
  //   content = [<FavouritesList allPatterns={patterns} />];
  // }

  //closes side menu when you click away
  function clickOffMenu() {
    if (sideMenuState === true) {
      setSideMenuState(false);
    }
  }

  useEffect(() => {
    axios.get("/api/patterns").then(response => setPatterns(response.data));
  }, []);

  // const fetchData = () => {
  //   axios
  //     .get("/api/data") // You can simply make your requests to "/api/whatever you want"
  //     .then(response => {
  //       // handle success
  //       console.log(response.data); // The entire response from the Rails API

  //       console.log(response.data.message); // Just the message
  //       setMessage(response.data.message);
  //     });
  // };

  // console.log("PATTERNS >>>>", patterns);
  return (
    <div className="App" onClick={clickOffMenu}>
      <Menu
        setPattern={setSideMenuState}
        setPage={setPage}
        setUser={setUser}
        setStorage={setStorage}
      />
      {showPage}
      {/* <Patterns patterns={patterns} /> */}
      {/* <h1>{message}</h1> */}
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      {content}
      {/* <Edit /> */}
    </div>
  );
}
