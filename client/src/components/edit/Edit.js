import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Grid from "./Grid";
import RowButtons from "./RowButtons";
import ColumnButtons from "./ColumnButtons";
import History from "./History";
import "./Edit.css";
import { Button } from "semantic-ui-react";
import html2canvas from "html2canvas";
// import { borderTopRightRadius } from "html2canvas/dist/types/css/property-descriptors/border-radius";

// const [form, setForm] = useState({ title: "", dscription: "" });

//default array for rendering grid

//fake history array for testing cards
// const fakeHistory = [
//   {
//     img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
//     dateCreated: "couple days ago"
//   },
//   {
//     img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
//     dateCreated: "second card"
//   },
//   {
//     img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
//     dateCreated: "couple days ago"
//   },
//   {
//     img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
//     dateCreated: "couple days ago"
//   }
// ];

export default function Edit(props) {
  const blankPattern = [];
  for (let i = 0; i < 25; i++) {
    blankPattern.push([]);
    for (let j = 0; j < 25; j++) {
      blankPattern[i].push("#fff");
    }
  }
  const [color, setColor] = useState("#000000");
  const [pattern, updatePattern] = useState(blankPattern);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
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
    historyTab = <History history={props.checkpointHistory} />;
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
  // function save() {
  //   let saveData = {
  //     description: "derp",
  //     title: "is very derp",
  //     colours: pattern
  //   };
  //   props.saveHandler(saveData);
  //   // props.getCheckpointHistory()
  // }
  function save(title, description) {
    let saveData = {
      title: title,
      description: description,
      colours: pattern
    };
    props.saveHandler(saveData);
    // props.getCheckpointHistory()
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
    // console.log("title here", event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
    // console.log("description here", event.target.value);
  }

  //edits and creates anoher checkpoint "version" in the database when
  return (
    <section className="edit">
      <div className="grid-history">
        <Grid pattern={pattern} updateColor={updateColor} />
        {historyTab}
      </div>
      <div className="controls">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
          </div>
          <input
            // o={title}
            type="text"
            className="form-control"
            aria-label="Title"
            aria-describedby="basic-addon1"
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Description
            </span>
          </div>
          <input
            // value={form.description}
            type="text"
            className="form-control"
            aria-label="Description"
            aria-describedby="basic-addon1"
            onChange={handleDescriptionChange}
          ></input>
        </div>
        <ColorPicker color={color} onChangeComplete={handleChangeComplete} />
        <RowButtons addRow={addRow} deleteRow={deleteRow} />
        <ColumnButtons addColumn={addColumn} deleteColumn={deleteColumn} />
        <Button content="Version history" onClick={toggleHistory} />
        <Button content="Create image" onClick={createImage} />

        <Button
          onClick={() => {
            console.log("props within save", props);
            save(title, description);
          }}
        >
          Save
        </Button>
      </div>
    </section>
  );
}
