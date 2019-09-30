import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConversationList from './ConversationList';
import Chatbox from './Chatbox';
import Contacts from '../contacts/Contacts';

class ConversationContainer extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        ConversationContainer

        <br/>
        <Contacts />
        <ConversationList />
        <Chatbox />
      </div>
    )
  }
}

export default connect()(ConversationContainer)