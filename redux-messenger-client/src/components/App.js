import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'

import Navbar from './home/Navbar'
import Signup from './home/Signup'
import Profile from './profile/Profile'
import Messages from './messages/Messages'
import Conversation from './Conversation';
import Login from './home/Login';

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
    // console.log('LOCATION', localStorage.getItem('location'))
    // TODO: save location in local storage if there is one push to that location else to conversations

    if (Adapter.hasToken()) {
      this.props.autoLogin()
        .then(data => {
          this.props.getUsers()
          // this.props.history.push(`/profile/${this.props.user.username}`)
          this.props.history.push(`/conversations`)
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
      <>
        <Navbar
          handleClickLogin={this.handleClickLogin}
          loggedIn={this.props.loggedIn}
        />
        <Route
          exact path="/"
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
          path="/profile/:username"
          render={routerProps => {
            const userId = this.props.users.length > 0 ? this.props.users.find(user => user.username === routerProps.match.params.username).id : null
            return (
              <Profile
                editProfile={this.state.editProfile}
                handleClickEditProfile={this.handleClickEditProfile}
                userId={userId}
                user={this.props.user}
                // friend={this.props.user && this.props.user.friends.map(u => u.id).includes(user.id)}
                {...routerProps}
              />
            )}}
        />
        <Route
          path="/messages"
          render={props => <Messages><Conversation /></Messages>}
        />
        <Route
          path="/conversations"
          component={Conversation}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: !!state.user,
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps, { autoLogin, getUsers })(App))
