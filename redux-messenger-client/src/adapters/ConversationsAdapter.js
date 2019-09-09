import ApiAdapter from './ApiAdapter'

class ConversationsAdapter extends ApiAdapter {

  createConversation = (title) => {
    this.addAuthHeaders()
    return this.post('/conversations', { title })
      .then(data => {
        console.log(data)
        return data
      })
  }

  getConversations = () => {
    this.addAuthHeaders()
    return this.get('/conversations')
      .then(data => {
        console.log(data)
        return data
      })
  }
}

export default new ConversationsAdapter()