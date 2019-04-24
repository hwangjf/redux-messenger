import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Conversation extends Component {
  render() {
    return (
      <div>
        <ActionCableConsumer 
          // frontend channel connects to the NAME OF THE CHANNEL CLASS
          // can add params through ex
          // {{channel: 'classname', params: paramsValue(example of user ) }}
          channel={{channel: 'conversation'}}
          onReceived={(arg)=>{
            console.log('msg received', arg)
          }}
        />
      </div>
    )
  }
}
