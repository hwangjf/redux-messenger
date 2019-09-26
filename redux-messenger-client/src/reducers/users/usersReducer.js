import {
  userConstants
} from '../../types'

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  otherUsers: []
}

// const user = (state=null, action) => {
//   switch(action.type) {
//     case userConstants.LOGIN_SUCCESS:
//       return action.user
//     case userConstants.LOGOUT:
//       return null
//     default:
//       return state
//   }
// }

const usersReducer = (state = initialState, action) => {
  console.log(action)
  debugger
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        otherUsers: action.otherUsers,
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
        error: action.errors,
        authenticatingUser: false
      }
    case userConstants.LOGOUT:
      return initialState
    default:
      return state
  }
}

export default usersReducer