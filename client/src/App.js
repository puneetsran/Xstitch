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
  let [page, setPage] = useState("home");
  const [user, setUser] = useState([]);
  const [storage, setStorage] = useState([]);
  const [pattern, setPattern] = useState(null);
  const [checkpoint, setCheckpoint] = useState({});



  function getCheckpointHistory() {

    axios.get(`api/checkpoints/${checkpoint.patterns_id}`)
      .then((res) => {
        console.log("this is res from get CP", res.data)

      })
      .catch((err) => {
        console.log("CPhitsory get failed because", err)
      })
  }

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
        setPattern(res.data.pattern)
        setCheckpoint(res.data.checkpoint)
      }).catch((error) => {
        return alert("Could not save pattern because: ", error)
      })
  }



  function createCheckpoint(saveData) {
    let currentPattern = pattern.id
    if (!currentPattern) {
      return alert("You must choose an existing pattern to edit")
    }
    if (user.id !== pattern.user_id) {
      return alert("You must fork a pattern before editing!")
    }
    let reqData = {
      pattern_id: pattern.id,
      colours: saveData.colours
    }
    axios.post("api/checkpoints", reqData)
      .then((res) => {
        setCheckpoint(res.data)
        console.log("this is current checkpoint in state", checkpoint)

      }).catch((error) => {
        return alert("Could not update because: ", error)
      })
  }


  // This decides what the save button does on it's click handler
  function saveHandler(data) {
    if (pattern && checkpoint) {
      createCheckpoint(data)
      getCheckpointHistory()

    } else {
      createPattern(data)

    }
  }


  //renders either homepage or grid based on click
  if (page === "home") {
    showPage = <Patterns patterns={patternCards} />
  } else if (page === "create") {
    showPage = <Edit
      saveHandler={saveHandler}
    // getCheckpointHistory={getCheckpointHistory}

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

  //clears pattern and resets state when create button is clicked
  //TODO does not yet reset grid bc grid state lives in sub component
  function clearAndSetCreate() {
    setPattern(null)
    setCheckpoint({})
    setPage("create")
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
        clearAndSetCreate={clearAndSetCreate}
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
