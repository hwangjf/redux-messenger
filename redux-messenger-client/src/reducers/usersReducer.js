import {
  userConstants
} from '../types'

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      }
    case userConstants.LOGIN_REQUEST:
      return {
        ...state, 
        authenticatingUser: true
      }
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        authenticatingUser: false
      }
    case userConstants.LOGOUT:
      return {
        ...state,
        user: null,
        loggedIn: false
      }
    default:
      return state
  }
}

export default usersReducer