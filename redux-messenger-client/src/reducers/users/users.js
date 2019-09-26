import {
  userConstants
} from '../../types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USERS:
      const users = action.payload
      return users
    case userConstants.LOGOUT:
      return initialState
    default:
      return state
  }
}
