import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Signup from './signup/Signup.js'
import '../sass/main.scss'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    login: false,
    password: false
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        {/* Navbar Component */}
        <Navbar />
        <div>
          {/* Home Component */}
          <Route 
            exact path="/"
            render={props =>
              <Home
                password = {this.state.password}
                />
              }
              />
          {/* Signup Component */}
          <Route 
            path="/signup"
            render={props =>
              <Signup
                password = {this.state.password}
              />
            }
          />
        </div>
      </>
    );
  }
}

// function mapStateToProps() {
//
// }

export default connect(null)(App)


