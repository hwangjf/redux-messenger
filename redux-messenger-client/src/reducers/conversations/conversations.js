import { conversationConstants } from '../../types'

const initialState = {
  current: null,
  all: []
}

export default (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    case conversationConstants.ALL:
      debugger
      return {...state, all: action.payload}
    case conversationConstants.SET_CURRENT:
      return {...state, current: action.payload}
    default:
      return state
  }
}