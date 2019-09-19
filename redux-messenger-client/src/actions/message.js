import {
  messageConstants
} from '../types'
import { 
  MessagesAdapter
} from '../adapters';

export const createMessage = (text, conversation_id) => dispatch => {
  MessagesAdapter.createMessage({
    text,
    conversation_id
  })
    .then(data => {
      console.log(data)
      // dispatch(createMessage(data.id))
    })
}