import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'

import Navbar from './home/Navbar'
import Home from './home/Home'
import Signup from './home/Signup'
import Profile from './profile/Profile'
import Messages from './messages/Messages'
import Conversation from './Conversation';

import { Adapter } from '../adapters'
import { connect } from 'react-redux'

import { autoLogin, getUsers } from '../actions/users';

import '../sass/main.scss'

class App extends Component {
  state = {
    login: true,
    showPassword: false,
    editProfile: false
  }

  componentDidMount() {
    if (Adapter.hasToken()) {
      this.props.autoLogin()
        .then(data => {
          this.props.getUsers()
          this.props.history.push('/conversations')
        })
      this.setState({login: false})
    } else {
      this.props.history.push('/')
    }
  }

  handleClickLogin = () => {
    this.setState({ login: true })
  }

  handleClickClose = (event) => {
    let form = document.querySelector(".login__modal")
    let close = document.querySelector(".close")

    if (event.target === form || event.target === close || event === "close") {
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
          loggedIn={this.props.loggedIn}
        />
        <Route
          exact path="/"
          render={props => <Home />}
        />
        {
          this.state.login && <Login
            handleClickClose={this.handleClickClose}
            showPassword={this.state.showPassword}
            handleClickPassword={this.handleClickPassword}
            history={this.props.history}
          />
        }
        <Route
          path="/signup"
          render={props => (
            <Signup
              login={this.state.login}
              showPassword={this.state.showPassword}
              handleClickPassword={this.handleClickPassword}
            />
          )}
        />
        <Route
          path="/profile"
          render={props => (
            <Profile
              editProfile={this.state.editProfile}
              handleClickEditProfile={this.handleClickEditProfile}
            />
          )}
        />
        <Route
          path="/messages"
          render={props => <Messages><Conversation /></Messages>}
        />
        <Route
          path="/conversations"
          render={props => <Conversation />}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({userReducer: {user, isLoggedIn}}) => {

  return {
    user: state.user,
    loggedIn: !!state.user
  }
}

export default withRouter(connect(mapStateToProps, { autoLogin, getUsers })(App))
