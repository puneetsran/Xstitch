import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/menu/menu'
import Menu from './components/menu/menu';
import PatternList from './components/menu/patternList'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  let [pattern, setPatternInfo] = useState(false);
  let content;


  //closes side menu when you click away
  function clickOffMenu() {
    if (pattern === true) {
      setPatternInfo(false)
    }
  }

  //opens side menu 
  if (pattern === false) {
    content = <div></div>
  } else {
    content = <PatternList
    />
  }
  return (
    <div className="App" onClick={clickOffMenu}>
      <Menu
        setPattern={setPatternInfo}
      />
      {content}
    </div>
  );
}