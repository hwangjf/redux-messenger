import UsersAdapter from '../adapters/UsersAdapter'
import {
  userConstants
} from '../types'
import { Adapter } from '../adapters';

export const login = (userInfo) => dispatch => {
  dispatch(loginRequest)
  
  UsersAdapter.login(userInfo)
    .then(({ user, token }) => {
      Adapter.setToken(token)
      
      dispatch(loginSuccess(user))
    })
    .catch(err => {
      err.json()
        .then(arg => {console.log(arg);})

      dispatch(loginFailure(err))
    })
}

export const autoLogin = () => dispatch => {
  dispatch(loginRequest) 

  UsersAdapter.autoLogin()
    .then(({ user }) => {
      console.log(user)
      dispatch(loginSuccess(user))
    })
    .catch(err => {
      dispatch(loginFailure(err))
    })
}

export const signup = (userInfo) => dispatch => {
  dispatch(signupRequest)

  UsersAdapter.signup(userInfo)
    .then(data => {
      dispatch(signupSuccess(data.user))
    })
    .catch(err => {
      dispatch(signupFailure(err))
    })
}

export const logout = () => {
  // removes token
  Adapter.logout()
}

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