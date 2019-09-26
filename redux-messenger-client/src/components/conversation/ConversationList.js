import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { setCurrentConvo } from '../../actions/conversation'

class ConversationList extends Component {
  render() {
    return (
      <div>
        ConversationList
        <br/>
        {this.props.conversations.all.map((conversation)=> (
          <div key={uuid()} onClick={()=>this.props.setCurrentConvo(conversation.id)}>
            {conversation.title}
          </div>
          )
        )}
      </div>
    )
  }
}

export default connect(state => state, { setCurrentConvo })(ConversationList)