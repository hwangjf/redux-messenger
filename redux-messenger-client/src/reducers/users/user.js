import {
  userConstants
} from '../../types'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      const { user } = action
      return user
    case userConstants.LOGOUT:
      return null
    default:
      return state
  }
}
