import {
  userConstants
} from '../../types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      const { users } = action
      return users
    case userConstants.LOGOUT:
      return initialState
    default:
      return state
  }
}
