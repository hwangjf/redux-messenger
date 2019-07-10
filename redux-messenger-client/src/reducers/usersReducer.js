import {
  userConstants
} from '../types'

const initialState = {
  user: null,
  isLoggedIn: false,
  authenticatingUser: false, // loading  # => LOADING SPINNER
  failedLogin: false,
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
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
      return initialState
    default:
      return state
  }
}

export default userReducer

