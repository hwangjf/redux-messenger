import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './home/Navbar.js'
import Home from './home/Home.js'
import Login from './home/Login.js'
import Signup from './home/Signup.js'
import Profile from './profile/Profile.js'
import Messages from './messages/Messages.js'
import '../sass/main.scss'
import { connect } from 'react-redux'
import Adapter from '../adapters/Adapter.js';
import UsersAdapter from '../adapters/UsersAdapter'

const usersAdapter = new UsersAdapter()

class App extends Component {
  state = {
    login: false,
    showPassword: false,
    user: 1,
    editProfile: false
  }

  componentDidMount() {
    if (Adapter.isLoggedIn()) {
      usersAdapter.autoLogin()
        .then(data => {
          console.log(data)
        })
    }
  }

  handleClickLogin = () => {
    this.setState({ login: true })
  }

  handleClickClose = (event) => {
    let form = document.querySelector(".login__modal")
    let close = document.querySelector(".close")
    if (event.target === form || event.target === close) {
      this.setState ({ login: false })
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
        <Route
          path="/messages"
          render={props =>
            <Messages
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
