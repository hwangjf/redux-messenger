import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import Message from '../messages/Message';

class Chatbox extends Component {
  render() {
    return (
      <div>
        Chatbox
        {
          this.props.messages && this.props.messages.map(message => {
            return <Message key={uuid()} {...message} />
          })
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  
  return {
    messages: state.conversations.current && state.conversations.all.find(convo => convo.id === state.conversations.current).messages
  }
}

export default connect(mapStateToProps)(Chatbox)