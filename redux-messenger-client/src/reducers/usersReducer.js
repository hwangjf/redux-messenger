import {
  SET_CURRENT_USER,
  AUTHENTICATING_USER,
  AUTHENTICATED_USER,
  FAILED_LOGIN
} from '../types'

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

const usersReducer = (state = initialState, action) => {

  switch (action.payload) {
    case SET_CURRENT_USER:
      debugger
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      }
    case AUTHENTICATING_USER:
      return {
        ...state, 
        authenticatingUser: true
      }
    case AUTHENTICATED_USER:
      return {
        ...state,
        authenticatingUser: false
      }
    case FAILED_LOGIN: 
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }
    default:
      return state
  }
}

export default usersReducer