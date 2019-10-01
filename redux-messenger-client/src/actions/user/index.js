import { Adapter, UsersAdapter } from '../../adapters';

import {
  newFriend,
  loginSuccess,
  loginRequest,
  loginFailure,
  signupSuccess,
  signupRequest,
  signupFailure,
  logout
} from './userActions'

const addFriend = (friendId) => dispatch => {
  UsersAdapter.addFriend(friendId)
    .then(data => {

      dispatch(newFriend(data))
    })
}

const login = (userInfo) => dispatch => {
  dispatch(loginRequest)

  UsersAdapter.login(userInfo)
    .then(({ user, token }) => {
      Adapter.setToken(token)

      dispatch(loginSuccess(user))
    })
    .catch(err => {
      err.json()
        .then(console.log)

      dispatch(loginFailure(err))
    })
}

const autoLogin = () => dispatch => {
  dispatch(loginRequest)

  UsersAdapter.autoLogin()
    .then(({ user }) => {
      dispatch(loginSuccess(user))
    })
    .catch(err => {
      err.json()
        .then(console.log)

      dispatch(loginFailure(err))
    })
}

const signup = (userInfo) => dispatch => {
  dispatch(signupRequest)

  UsersAdapter.signup(userInfo)
    .then(data => {
      dispatch(signupSuccess(data.user))
    })
    .catch(err => {
      err.json()
        .then(console.log)

      dispatch(signupFailure(err))
    })
}

export {
  login,
  autoLogin,
  signup,
  logout,
  addFriend
}