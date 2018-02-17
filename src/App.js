import React, { Component } from 'react';
import './App.css';
import Home from './front-end/pages/Home/Home'
// import Scrape from "../src/Providers/Scrape"

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <Scrape/> */}
      </div>
    );
  }
}

export default App;
