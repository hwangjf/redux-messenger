import UsersAdapter from '../adapters/UsersAdapter'
import {
  SET_CURRENT_USER,
  AUTHENTICATING_USER,
  AUTHENTICATED_USER,
  FAILED_LOGIN,
  LOGIN
} from '../types'

export const loginUser = (userInfo) => dispatch => {
  dispatch(authenticatingUser)
  
  UsersAdapter.login(userInfo)
    .then(data => {
      setCurrentUser(userInfo)
      // dispatch({type: AUTHENTICATED_USER})
      // dispatch()
    })

}

export const signup = (userInfo) => dispatch => {
  dispatch(authenticatingUser)

  UsersAdapter.signup(userInfo)
    .then(data => {
      debugger
      setCurrentUser(userInfo)
      // dispatch({type: AUTHENTICATED_USER})
      // dispatch()
    })
}



const setCurrentUser = (userInfo) => ({
  type: SET_CURRENT_USER,
  payload: userInfo
})

const authenticatingUser = {
  type: AUTHENTICATING_USER
}