import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConversationList from './ConversationList';
import Chatbox from './Chatbox';

class ConversationContainer extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        ConversationContainer

        <br/>
        <ConversationList />
        <Chatbox />
      </div>
    )
  }
}

export default connect()(ConversationContainer)