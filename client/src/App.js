import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/menu/menu";
import Menu from "./components/menu/menu";
import PatternList from "./components/menu/patternList";
import Patterns from "./components/patterns";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let [pattern, setPatternInfo] = useState(false);
  let content;
  let [patterns, setPatterns] = useState([]);
  let [message, setMessage] = useState("Click the button to load data!");

  //closes side menu when you click away
  function clickOffMenu() {
    if (pattern === true) {
      setPatternInfo(false);
    }
  }

  useEffect(() => {
    axios.get("/api/patterns").then(response => setPatterns(response.data));
  }, []);

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  //opens side menu
  if (pattern === false) {
    content = <div></div>;
  } else {
    content = <PatternList />;
  }
  console.log("PATTERNS >>>>", patterns);
  return (
    <div className="App" onClick={clickOffMenu}>
      <Menu setPattern={setPatternInfo} />
      <Patterns patterns={patterns} />
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {content}
    </div>
  );
}
