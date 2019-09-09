import {
  conversationConstants
} from '../types'
import { ConversationsAdapter } from '../adapters';

export const createConversation = (title) => dispatch => {
  ConversationsAdapter.createConversation(title)
    .then(data => {
      console.log(data)
      dispatch(setCurrent(data.id))
    })
}

export const getConversations = () => dispatch => {
  ConversationsAdapter.getConversations()
    .then(data => {
      dispatch({
        type: conversationConstants.ALL,
        payload: data
      })
      console.log(data)
    })
}

const setCurrent = (convoId) => {
  return ({
    type: conversationConstants.SET_CURRENT,
    payload: convoId
  })
}