import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Signup from './signup/Signup.js'
import '../sass/main.scss'
import { connect } from 'react-redux'
import Adapter from '../adapters/adapter.js';

class App extends Component {

  componentDidMount() {
    if (Adapter.loggedIn()) {

    }
  }

  render() {
    console.log(this.props)
    return (
      <>
        <Navbar />
        <div>
          <Route exact path="/" component={ Home } />
          <Route path="/signup" component={ Signup } />
        </div>
      </>
    );
  }
}

// function mapStateToProps() {
//
// }

export default connect(null)(App)
