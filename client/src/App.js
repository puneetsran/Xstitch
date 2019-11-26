import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/menu/menu'
import Menu from './components/menu/menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import Edit from "./components/edit/Edit"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>
        <Edit />
      </div>
    );
  }
}

export default App;
