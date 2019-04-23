import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Signup from './signup/Signup.js'
import '../sass/main.scss'
import { connect } from 'react-redux'
import Adapter from '../adapters/adapter.js';

class App extends Component {
  state = {
    login: false,
    password: false
  }

  componentDidMount() {
    if (Adapter.loggedIn()) {
      
    }
  }

  handleClickPassword = () => {
    this.setState({ password: !this.state.password})
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
                handleClickPassword={this.handleClickPassword}
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


