import {
  conversationConstants,
  messageConstants
} from '../../types'

const initialState = {
  current: null,
  all: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case conversationConstants.ALL:
      return {...state, all: action.payload}
    case conversationConstants.SET_CURRENT:
      return {...state, current: action.payload}
    case messageConstants.RECEIVED:
      return {
        ...state,
        all: state.all.map(convo => convo.id === action.payload.conversation_id ? (
          { 
            ...convo, 
            messages: [...convo.messages, action.payload], 
            users: convo.users.map(u => u.id).includes(action.payload.user.id) ? convo.users : [...convo.users, action.payload.user]
          }
         ) : convo)
      }
    default:
      return state
  }
}