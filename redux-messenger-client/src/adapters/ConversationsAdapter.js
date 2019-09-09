import ApiAdapter from './ApiAdapter'

class ConversationsAdapter extends ApiAdapter {

  createConversation = (title) => {
    this.addAuthHeaders()
    return this.post('/conversations', { title })
      .then(data => {
        debugger
        console.log(data)
        return data
      })
  }
}

export default new ConversationsAdapter()