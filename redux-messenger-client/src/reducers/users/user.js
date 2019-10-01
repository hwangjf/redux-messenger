import {
  userConstants
} from '../../types'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.ADD_FRIEND:
      debugger
      return {...state, friends: [...state.friends, action.payload]}
    case userConstants.LOGIN_SUCCESS:
      const { user } = action
      return user
    case userConstants.LOGOUT:
      return null
    default:
      return state
  }
}
