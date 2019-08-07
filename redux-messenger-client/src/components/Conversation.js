import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { UsersAdapter } from '../adapters';

class Conversation extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    
    fetch('http://localhost:4000/api/v1/conversations', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  getAllUsers = () => {
    UsersAdapter.getOtherUsers()
      .then(data => {
        console.log(data)
      })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Conversations</h1>

        <ActionCableConsumer 
          // frontend channel connects to the NAME OF THE CHANNEL CLASS
          // can add params through ex
          // {{channel: 'classname', params: paramsValue(example of user ) }}
          channel={{channel: 'ConversationChannel'}}
          onReceived={(arg)=>{
            console.log('msg received', arg)
          }}
        />

        <div id="otherUsers">
          {/* {this.props.} */}
        </div>

        <form onSubmit={this.handleSubmit} >
          <input 
            type="text" 
            value={this.state.text} 
            onChange={this.handleChange} 
            name="text" 
          />
        </form>

        <button onClick={this.getAllUsers} >New Conversation</button>
      </div>
    )
  }
}

export default connect(state=>state)(Conversation)