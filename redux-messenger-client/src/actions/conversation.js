import {
  conversationConstants
} from '../types'
import { ConversationsAdapter } from '../adapters';

export const createConversation = (title) => dispatch => {
  ConversationsAdapter.createConversation(title)
    .then(data => {
      console.log(data)
      dispatch({
        type: conversationConstants.CREATE,
        payload: data
      })
    })
}
