import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/menu/menu";
import Menu from "./components/menu/menu";
import PatternList from "./components/menu/patternList";
import Patterns from "./components/patterns";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./components/edit/Edit";
import View from "./components/view/View";

export default function App() {
  let content;
  let showPage;
  let [pattern, setPatternInfo] = useState(false);
  let [patterns, setPatterns] = useState([]);
  // let [message, setMessage] = useState("Click the button to load data!");
  let [page, setPage] = useState("home");
  const [user, setUser] = useState([]);
  const [storage, setStorage] = useState([]);

  console.log("this is user", user);
  if (page === "home") {
    showPage = <Patterns patterns={patterns} />;
  } else if (page === "create") {
    showPage = <Edit />;
  } else if (page === "view") {
    showPage = <View />;
  } else {
    showPage = <div></div>;
  }

  //opens side menu
  if (pattern === false) {
    content = <div></div>;
  } else {
    content = <PatternList />;
  }

  //closes side menu when you click away
  function clickOffMenu() {
    if (pattern === true) {
      setPatternInfo(false);
    }
  }

  useEffect(() => {
    axios.get("/api/patterns").then(response => setPatterns(response.data));
  }, []);

  console.log("PATTERNS >>>>", patterns);
  return (
    <div className="App" onClick={clickOffMenu}>
      <Menu
        setPattern={setPatternInfo}
        setPage={setPage}
        setUser={setUser}
        setStorage={setStorage}
      />
      <div className="main">
        {content}
        {showPage}
      </div>
    </div>
  );
}
