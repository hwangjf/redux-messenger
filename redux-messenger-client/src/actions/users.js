import UsersAdapter from '../adapters/UsersAdapter'
import {
  SET_CURRENT_USER,
  AUTHENTICATING_USER,
  AUTHENTICATED_USER,
  FAILED_LOGIN,
  LOGIN
} from '../types'

export const loginUser = (userInfo) => {
  return dispatch => {
    dispatch(authenticatingUser)

    UsersAdapter.login(userInfo)
      .then()
  }
}

const login = (userInfo) => ({
  type: LOGIN,
  payload: userInfo
})

const authenticatingUser = {
  type: AUTHENTICATING_USER
}