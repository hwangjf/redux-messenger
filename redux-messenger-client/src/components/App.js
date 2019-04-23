import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import '../sass/main.scss'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    
  }

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

function mapStateToProps() {

}

export default connect()(App)
