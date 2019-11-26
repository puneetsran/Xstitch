import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/menu/menu'
import Menu from './components/menu/menu';
import PatternList from './components/menu/patternList'
import 'bootstrap/dist/css/bootstrap.min.css';


// class App extends Component {
export default function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!',
  //   }
  // }

  const [pattern, setPatternInfo] = useState("Welcome");

  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data) // The entire response from the Rails API

  //       console.log(response.data.message) // Just the message
  //       this.setState({
  //         message: response.data.message
  //       });
  //     })
  // };
  // let render = () => {
  let content;
  if (pattern === "Welcome") {
    content = <div></div>
  } else {
    content = <PatternList />
  }
  return (
    <div className="App">
      <Menu
        setPattern={setPatternInfo}
      />
      {content}
      {/* <h1>{this.state.message}</h1>
      <button onClick={this.fetchData} >
        boop
        </button> */}
    </div>
  );
  // }
}

// export default App;
