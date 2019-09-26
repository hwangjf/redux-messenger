import {
  conversationConstants
} from '../types'
import { ConversationsAdapter } from '../adapters';

export const createConversation = (title) => dispatch => {
  ConversationsAdapter.createConversation(title)
    .then(data => {
      console.log(data)
      dispatch(setCurrentConvo(data.id))
    })
}

export const getConversations = () => dispatch => {
  ConversationsAdapter.getConversations()
    .then(data => {
      dispatch({
        type: conversationConstants.ALL,
        payload: data
      })
    })
}

export const setCurrentConvo = (convoId) => {
  return ({
    type: conversationConstants.SET_CURRENT,
    payload: convoId
  })
}

// export const getConversation = (convoId) => {

// }
