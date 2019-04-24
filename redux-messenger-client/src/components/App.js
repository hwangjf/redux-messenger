import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Login from './login/Login.js'
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

  handleClickLogin = () => {
    this.setState({ login : true })
  }

  handleClickClose = (event) => {
    let form = document.querySelector(".login__modal")
    let close = document.querySelector(".close")
    if (event.target === form || event.target === close) {
      this.setState ({ login : false })
    }
  }

  handleClickPassword = () => {
    this.setState({ password : !this.state.password })
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Navbar
          handleClickLogin={this.handleClickLogin}
        />
        <Route
          exact path="/"
          render={props =>
            <Home
              password={this.state.password}
            />
          }
        />
        {this.state.login
        ?
        <Login
          handleClickClose={this.handleClickClose}
          password={this.state.password}
          handleClickPassword={this.handleClickPassword}
        />
        :
        null
        }
        <Route
          path="/signup"
          render={props =>
            <Signup
              login={this.state.login}
              password={this.state.password}
              handleClickPassword={this.handleClickPassword}
            />
          }
        />
      </React.Fragment>
    );
  }
}

// function mapStateToProps() {
//
// }

export default connect(null)(App)
