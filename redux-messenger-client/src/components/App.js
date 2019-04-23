import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Signup from './signup/Signup.js'
import '../sass/main.scss'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <Navbar />

        <Route exact path="/" component={ Home } />
        <Route path="/signup" component={ Signup } />

      </Router>
    );
  }
}

// function mapStateToProps() {
//
// }

export default connect(null)(App)
