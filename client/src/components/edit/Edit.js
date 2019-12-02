import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Grid from "./Grid";
import RowButtons from "./RowButtons";
import ColumnButtons from "./ColumnButtons";
import History from "./History";
import "./Edit.css";
import { Button } from "semantic-ui-react";
import html2canvas from "html2canvas";

//default array for rendering grid
const blankPattern = [];
for (let i = 0; i < 25; i++) {
  blankPattern.push([]);
  for (let j = 0; j < 25; j++) {
    blankPattern[i].push("#fff");
  }
}

//fake history array for testing cards
const fakeHistory = [
  {
    img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    dateCreated: "couple days ago"
  },
  {
    img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    dateCreated: "second card"
  },
  {
    img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    dateCreated: "couple days ago"
  },
  {
    img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    dateCreated: "couple days ago"
  }
];

export default function Edit(props) {
  const [color, setColor] = useState("#000000");
  const [pattern, updatePattern] = useState(blankPattern);
  // const [image, setImage] = useState(null)

  // used to show/hide the history tab
  const [history, viewHistory] = useState("hide");
  let historyTab;

  function updateColor(input) {
    const newPattern = pattern.map((row, rowIndex) => {
      if (rowIndex === input[0]) {
        return row.map((pixel, pixelIndex) => {
          if (pixelIndex === input[1]) {
            return (row[pixelIndex] = color);
          } else {
            return pixel;
          }
        });
      } else {
        return row;
      }
    });
    updatePattern(newPattern);
  }

  function handleChangeComplete(input) {
    setColor(input.hex);
  }

  function addRow() {
    const newRow = [];
    for (let i = 0; i < pattern[0].length; i++) {
      newRow.push("#ffffff");
    }
    updatePattern(prev => [...prev, newRow]);
  }

  function deleteRow() {
    updatePattern(pattern.slice(0, pattern.length - 1));
  }

  function addColumn() {
    updatePattern(prev => {
      let newPattern = [];
      prev.forEach(row => {
        row.push("#ffffff");
        newPattern.push(row);
      });
      return newPattern;
    });
  }

  function deleteColumn() {
    updatePattern(prev => {
      let newPattern = [];
      prev.forEach(row => {
        row.pop();
        newPattern.push(row);
      });
      return newPattern;
    });
  }

  function toggleHistory() {
    if (history === "hide") {
      viewHistory("show");
    } else {
      viewHistory("hide");
    }
  }

  if (history === "hide") {
    historyTab = <div></div>;
  } else {
    historyTab = <History history={fakeHistory} />;
  }

  function createImage() {
    const input = document.getElementById("capture");
    html2canvas(input, {
      backgroundColor: "grey"
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      console.log(imgData);
    });
  }

  //creates new pattern or checkpoint in the database when save is clicked
  function save() {
    let saveData = {
      description: "derp",
      title: "is very derp",
      colours: pattern
    }
    props.saveHandler(saveData)
    // props.getCheckpointHistory()
  }

  //edits and creates anoher checkpoint "version" in the database when
  return (
    <section className="edit">
      <div className="grid-history">
        <Grid pattern={pattern} updateColor={updateColor} />
        {historyTab}
      </div>
      <div className="controls">
        <ColorPicker color={color} onChangeComplete={handleChangeComplete} />
        <RowButtons addRow={addRow} deleteRow={deleteRow} />
        <ColumnButtons addColumn={addColumn} deleteColumn={deleteColumn} />
        <Button content="Version history" onClick={toggleHistory} />
        <Button content="Create image" onClick={createImage} />
        <Button onClick={(() => { save() })}>Save</Button>
      </div>
    </section>
  );
}
