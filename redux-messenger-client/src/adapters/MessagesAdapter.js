import ApiAdapter from './ApiAdapter'

class MessagesAdapter extends ApiAdapter {

  createMessage = (message) => {
    this.addAuthHeaders()
    return this.post('/messages', message)
      .then(data => {
        console.log(data)
        return data
      })
  }

}
export default new MessagesAdapter()