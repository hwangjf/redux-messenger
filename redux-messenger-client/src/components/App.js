import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import '../sass/main.scss'

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
            <Route exact path="/" render={props =>
              <Home />}/>
      </Router>
    );
  }
}

export default App;
