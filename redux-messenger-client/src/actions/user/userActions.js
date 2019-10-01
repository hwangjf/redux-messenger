import {
  userConstants
} from '../../types'

import { Adapter } from '../../adapters';

const newFriend = (newFriend) => ({ type: userConstants.ADD_FRIEND, payload: newFriend })

// LOGIN action creators
// login success
const loginSuccess = (userInfo) => ({
  type: userConstants.LOGIN_SUCCESS,
  payload: userInfo
})

// beginning login async action
const loginRequest = {
  type: userConstants.LOGIN_REQUEST
}

// login failure error
const loginFailure = err => ({
  type: userConstants.LOGIN_FAILURE,
  payload: err.message
})

// SIGNUP action creators
// signup success
const signupSuccess = (userInfo) => ({
  type: userConstants.SIGNUP_SUCCESS,
  payload: userInfo
})

// beginning signup async action
const signupRequest = {
  type: userConstants.SIGNUP_REQUEST
}

// signup failure error
const signupFailure = err => ({
  type: userConstants.SIGNUP_FAILURE,
  payload: err.message
})

const logout = () => {
  // removes token
  Adapter.logout()
  return {
    type: userConstants.LOGOUT
  }
}

export {
  newFriend,
  loginSuccess,
  loginRequest,
  loginFailure,
  signupSuccess,
  signupRequest,
  signupFailure,
  logout
}