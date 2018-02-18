import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';
import Home from './front-end/pages/Home/Home'
import Routes from './Routes'
// import Scrape from "../src/Providers/Scrape"

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Routes/>
        {/* <Scrape/> */}
      </div>
    );
  }
}

export default App;
