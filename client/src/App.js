import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/menu/menu";
import Menu from "./components/menu/menu";
import PatternList from "./components/menu/patternList";
import Patterns from "./components/patterns";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./components/edit/Edit";

export default function App() {
  let content;
  let showPage;
  let [showMenu, setShowMenu] = useState(false);

  let [patternCards, setPatternCards] = useState([]);
  // let [message, setMessage] = useState("Click the button to load data!");
  let [page, setPage] = useState("home")
  const [user, setUser] = useState([])
  const [storage, setStorage] = useState([])

  // console.log("this is user", user)
  //puts initial pattern and checkpoint in the database
  function createPattern(patternData) {
    let currentUser = user.id
    if (!currentUser) {
      return alert("You must log in")
    }
    let reqData = {
      user_id: currentUser,
      description: patternData.description,
      title: patternData.title,
      colours: patternData.colours
    }
    axios.post("api/patterns", reqData)
      .then((res) => {
        debugger;
        // res.data.pattern
        // res.data.checkpoint
        console.log("put to patterns res", res)
      })
  }

  //renders either homepage or grid based on click
  if (page === "home") {
    showPage = <Patterns patterns={patternCards} />
  } else if (page === "create") {
    showPage = <Edit
      createPattern={createPattern}
    />
  }
  else {
    showPage = <div></div>
  }


  //opens side menu
  if (showMenu === false) {
    content = <div></div>;
  } else {
    content = <PatternList />;
  }

  //closes side menu when you click away
  function clickOffMenu() {
    if (showMenu === true) {
      setShowMenu(false);
    }
  }


  useEffect(() => {
    axios.get("/api/patterns").then(response => setPatternCards(response.data));
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
        setShowMenu={setShowMenu}
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
