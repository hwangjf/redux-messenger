import {
  userConstants
} from '../../types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      // const {otherUsers} = action
      return action.otherUsers
    case userConstants.LOGOUT:
      return initialState
    default:
      return state
  }
}
