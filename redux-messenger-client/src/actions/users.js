import {
  SET_CURRENT_USER,
  AUTHENTICATING_USER,
  AUTHENTICATED_USER,
  FAILED_LOGIN
} from '../types'

export const loginUser = (userInfo) => {
  return dispatch => {
    dispatch({type: AUTHENTICATING_USER})

    apiAdapter.login(userInfo)
      .then()
  }
}