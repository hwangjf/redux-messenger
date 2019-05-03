import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Login from './login/Login.js'
import Signup from './signup/Signup.js'
import Profile from './profile/Profile.js'
import '../sass/main.scss'
import { connect } from 'react-redux'
import Adapter from '../adapters/adapter.js';

class App extends Component {
  state = {
    login: false,
    showPassword: false,
    user: 1,
    editProfile: false
    // name: false,
    // birthday: false,
    // gender: false,
    // password: false
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
    this.setState({ showPassword : !this.state.showPassword })
  }

  handleClickEditProfile = () => {
    this.setState({ editProfile : !this.state.editProfile })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          handleClickLogin={this.handleClickLogin}
          user={this.state.user}
        />
        <Route
          exact path="/"
          render={props =>
            <Home
            />
          }
        />
        {this.state.login
        ?
        <Login
          handleClickClose={this.handleClickClose}
          showPassword={this.state.showPassword}
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
              showPassword={this.state.showPassword}
              handleClickPassword={this.handleClickPassword}
            />
          }
        />
        <Route
          path="/profile"
          render={props =>
            <Profile
              editProfile={this.state.editProfile}
              handleClickEditProfile={this.handleClickEditProfile}
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
