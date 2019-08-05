import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Conversation extends Component {
  render() {
    return (
      <div>
        <ActionCableConsumer 
          // frontend channel connects to the NAME OF THE CHANNEL CLASS
          // can add params through ex
          // {{channel: 'classname', params: paramsValue(example of user ) }}
          channel={{channel: 'ConversationChannel'}}
          onReceived={(arg)=>{
            console.log('msg received', arg)
          }}
        />
      </div>
    )
  }
}

export default connect(state=> state )(Conversation)