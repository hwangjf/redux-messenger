import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './home/Navbar'
import Home from './home/Home'
import Signup from './home/Signup'
import Profile from './profile/Profile'
import Messages from './messages/Messages'

import { Adapter } from '../adapters'
import { autoLogin } from '../actions/user';

import '../sass/main.scss'

class App extends Component {
  state = {
    login: true,
    showPassword: false,
    user: null,
    editProfile: false
  }

  componentDidMount() {
    if (Adapter.isLoggedIn()) {
      this.props.autoLogin()
      this.props.history.push('messages')
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
          handleClickPassword={this.handleClickPassword}
          showPassword={this.state.showPassword}
          user={this.props.user}
        />
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            path="/signup"
            render={props =>
              <Signup
                showPassword={this.state.showPassword}
                handleClickPassword={this.handleClickPassword}
              />
            }
          />
          <Route
            path="/profile"
            render={props => (
              <Profile
                editProfile={this.state.editProfile}
                handleClickEditProfile={this.handleClickEditProfile}
              />
            )
            }
          />
          <Route
            path="/messages"
            render={props => <Messages /> }
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({userReducer: {user, isLoggedIn}}) => {
  // state.userReducer.user 
  // state.user
  // state.isLoading
  return {
    user,
    isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps, { autoLogin })(App))
